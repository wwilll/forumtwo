<template>
  <div id="postinfo">
    <div>{{result}}</div>
    <div class="infolist" v-for="(item,index) in filterInfo" v-bind:key="index">
      <div class="p-head cf">
        <div class="p-h-icon fl">
          <img v-bind:src="item.avatar" alt="#">
        </div>
        <div class="p-h-user fl">
          <div class="p-h-id">{{item.account}}</div>
          <div class="p-h-time">{{ item.time && item.time[1] }}</div>
        </div>
        <div class="p-h-delbtn fr" v-if="checkdel(item.userrole)" @click="deletepost(item.timepoint)">删除</div>
      </div>
      <div class="p-body">
        <div class="p-b-title">{{item.title}}</div>
        <div class="p-b-subtitle">{{item.subtitle}}</div>
        <div class="p-b-content"><pre>{{item.content}}</pre></div>
      </div>
      <div class="p-foot">
        <ul class="cf">
          <li><a href="javascript:void(0)" @click="gopinglun(item)">评论{{item.comment}}</a></li>
          <li><a href="javascript:void(0)" @click="zan(item.timepoint,item.zan)">赞{{item.zan}}</a></li>
          <li><a href="javascript:void(0)" @click="unfold(item)">展开评论</a></li>
        </ul>
        <textarea v-if="item.focus.pl" class="p-f-content" rows=5 cols=27 placeholder="你的看法" v-model="content" onpropertychange="this.style.posHeight=this.scrollHeight"></textarea>
        <div class="cf" v-if="item.focus.pl">
          <button class="submit fr" @click="gosubmit(item.timepoint,item.comment)">提交</button>
        </div>
      </div>
      <div class="p-review" v-if="item.focus.zk">
        <div class="p-r-list cf" v-for="(r,index) in item.review" v-bind:key="index">
          <div class="p-r-user">{{r.id+' :'}}</div>
          <p class="p-r-c">{{r.rew}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: null,
      testInfo: [],
      allowdelete: false,
      currentrole: null,
      currentid: null,
      content: '',
      isPinglun: false,
      scrollReview: true
    }
  },
  props: ['posttype'],
  mounted: function () {
    var url = this.$myhost + 'allpostings'
    this.$ajax.get(url).then((response) => {
      if (response.data.status === 0) {
        this.result = '暂无消息数据'
      } else {
        response.data.forEach(function (item, index, arr) {
          arr[index].focus = {zk: false, pl: false}
        })
        this.testInfo = response.data
      }
    }).catch((error) => {
      this.result = '找不到服务器或服务器未启动'
      console.log(error)
    })
    var userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    if (userinfo != null) {
      this.currentrole = userinfo[0].role
      this.currentid = userinfo[0].id
      if (this.currentrole === 'root' || this.currentrole === 'manager') {
        this.allowdelete = true
      } else {
        this.allowdelete = false
      }
    } else {
      this.currentrole = null
    }
  },
  computed: {
    filterInfo () {
      return this.testInfo.filter(item => {
        if (this.posttype === 1) return item
        if (this.posttype === 2) return item.postprop.impost === true
        if (this.posttype === 3) return item.postprop.graduation === true
      })
    }
  },
  methods: {
    checkdel (role) {
      if (this.currentrole === 'root') {
        return true
      } else if (this.currentrole === 'manager' && role === 'general') {
        return true
      } else {
        return false
      }
    },
    gopinglun (item) {
      if (this.currentid) {
        item.focus.pl = !item.focus.pl
      } else {
        alert('请登录')
      }
    },
    gosubmit (timepoint, comment) {
      if (this.content.trim().length === 0) {
        alert('输入为空或全为空格')
        return
      }
      var url = this.$myhost + 'addreview'
      this.$ajax.post(url, {timepoint: timepoint, userid: this.currentid, reviewcontent: this.content, comment: comment}).then((response) => {
        if (response.data.status === 1) {
          alert('评论成功')
          location.reload()
        } else {
          this.postres = '评论失败'
        }
      }).catch((error) => {
        alert('找不到服务器或服务器未启动')
        console.log(error)
      })
    },
    unfold (item) {
      item.focus.zk = !item.focus.zk
    },
    zan (tpoint, zan) {
      if (!this.currentid) {
        alert('请登录')
        return
      }
      var url = this.$myhost + 'addzan'
      this.$ajax.post(url, {timepoint: tpoint, zan: zan}).then((response) => {
        if (response.data.status === 1) {
          alert('点赞成功')
          location.reload()
        } else {
          this.postres = '点赞失败'
        }
      }).catch((error) => {
        alert('找不到服务器或服务器未启动')
        console.log(error)
      })
    },
    deletepost (timepoint) {
      var c = confirm('确定删除此帖吗？')
      if (!c) { return }
      var url = this.$myhost + 'deletepost'
      this.$ajax.post(url, {timepoint: timepoint}).then((response) => {
        if (response.data.status === 1) {
          this.postres = ':删除成功'
          location.reload()
          this.postList = null
        } else {
          this.postres = '删除失败'
        }
      }).catch((error) => {
        this.postres = '找不到服务器或服务器未启动'
        console.log(error)
      })
    }
  }
}
</script>
<style>
#postinfo{
  text-align: left;
  /* background-color: pink; */
}
#postinfo .infolist{
  margin-bottom: 10px;
  background-color: #fff;
}
#postinfo .p-head{
  height: 50px;
  border-top: 1px solid #f9eeb1;
  /* background-color: pink; */
}
#postinfo .p-h-icon{
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}
#postinfo .p-h-icon img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#postinfo .p-h-user{
  width: auto;
  height: 50px;
}
#postinfo .p-h-delbtn{
  margin-right: 5px;
  padding: 6px 10px;
  font-size: 1.2rem;
  line-height: 1.2rem;
  border-radius: 8px;
  margin-top: 9px;
  background-color: red;
  color: white;
}
#postinfo .p-h-id{
  padding-top: 5px;
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(85, 117, 206);
}
#postinfo .p-h-time{
  padding: 7px 0 3px 0;
  line-height: 15px;
  font-size: 15px;
  color: rgb(206, 192, 192);
  vertical-align: middle;
}
#postinfo .p-body{
  margin-top: 0.5rem;
}
#postinfo .p-b-title{
  line-height: 2rem;
  font-size: 2rem;
  font-weight: bold;
}
#postinfo .p-b-subtitle{
  line-height: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
}
#postinfo .p-b-content pre{
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  white-space : normal;
  font-size: 1.4rem;
  line-height: 1.4rem;
  min-height: 3rem;
}
#postinfo .p-foot{
  margin-top: 5px;
  padding: 5px 0;
  /* background-color: pink; */
}
#postinfo .p-foot .p-f-content{
  border: none;
  border-top: 1px solid rgb(204, 195, 195);
  border-bottom: 1px solid rgb(204, 195, 195);
  outline: none;
  resize: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  width:100%;
  overflow:auto;
  word-break:break-all;
  background-color: rgb(223, 243, 240);
}
#postinfo .p-foot ul{
  display: flex;
}
#postinfo .p-foot ul li{
  text-align: center;
  list-style: none;
  flex: auto;
  justify-content: center;
}
#postinfo .p-foot .submit{
  font-size: 1.2rem;
  padding: 3px 10px;
  border-radius: 8px;
  background-color: rgb(57, 235, 57);
  color: black;
}
#postinfo .p-review{
  max-height: 20rem;
  overflow: auto;
}
#postinfo .p-review .p-r-list{
  margin: 0 0 0 2rem;
  padding: 5px 0;
  border-top: 1px solid rgb(219, 213, 213);
}
#postinfo .p-review .p-r-user{
  color: rgb(89, 137, 226);
  font-size: 1.2rem;
  word-wrap:break-word;
  word-break:break-all;
}
#postinfo .p-review .p-r-c{
  text-align: left;
  font-size: 1rem;
  word-wrap:break-word;
  word-break:break-all;
}
</style>
