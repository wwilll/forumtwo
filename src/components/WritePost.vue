
<template>
  <div id="writepost">
    <div class="title">发话题</div>
    <div class="infolist">
      <div class="i-body">
        <div class="i-b-title"><input class="ibi ib-title" type="text" placeholder="标题，可不填" v-model="title"></div>
        <div class="i-b-subtitle"><input class="ibi ib-subtitle" type="text" placeholder="副标题，也可不填" v-model="subtitle"></div>
        <div class="i-b-content"><textarea class="ib-content" rows=8 cols=27 placeholder="正文" v-model="content" onpropertychange="this.style.posHeight=this.scrollHeight"></textarea></div>
        <div class="i-b-prop cf">
          <div><input type="checkbox" id="jack" value="普通" v-model="postprop.normalpost"><label for="jack">普通</label></div>
          <div><input type="checkbox" id="john" value="重要" v-model="postprop.impost"><label for="john">重要</label></div>
          <div><input type="checkbox" id="mike" value="毕业" v-model="postprop.graduation"><label for="mike">毕业</label></div>
        </div>
      </div>
    </div>
    <div class="foot">
      <p class="f-info">{{result}}</p>
      <button class="postbtn" @click="ft">发布</button>
    </div>
  </div>
</template>
<script>
import nowtime from '../js/getnowtime.js'
export default {
  data () {
    return {
      userId: null,
      userrole: null,
      timepoint: null,
      time: null,
      title: '',
      subtitle: '',
      content: null,
      postprop: {
        normalpost: true,
        impost: false,
        graduation: false
      },
      avatar: '',
      result: ''
    }
  },
  mounted: function () {
    var userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    setTimeout(() => {
      if (userinfo) {
        this.userId = userinfo[0].id
        this.avatar = userinfo[0].avatar
        this.userrole = userinfo[0].role
      } else {
        this.userId = null
        let c = confirm('当前无用户，去登录？')
        if (c) {
          this.$router.push({path: '/info'})
        } else {}
      }
    }, 100)
  },
  methods: {
    ft () {
      if (!this.userId) {
        alert('游客无法发布信息')
        return
      } else {
        this.time = nowtime.nowDateTime(null)
        this.timepoint = this.time[0]
      }
      if (this.content == null || this.content.length < 10) {
        alert('正文为空或少于10字符，无法发布')
        return
      }
      var url = this.$myhost + 'posting'
      this.$ajax.post(url, {
        account: this.userId,
        userrole: this.userrole,
        time: this.time,
        timepoint: this.timepoint,
        title: this.title,
        subtitle: this.subtitle,
        content: this.content,
        postprop: {
          normalpost: this.postprop.normalpost,
          impost: this.postprop.impost,
          graduation: this.postprop.graduation
        },
        avatar: this.avatar,
        comment: 0,
        zan: 0,
        review: []
      }).then((response) => {
        if (response.data.status === 1) {
          this.result = '发布成功'
          // alert(response.data.r)
          this.$router.push({path: '/'})
        }
      }).catch((error) => {
        this.result = '发布失败，请求不到服务器'
        console.log(error)
      })
    }
  }
}
</script>
<style>
#writepost{
  text-align: left;
  position: relative;
  top:0;
  left: 0;
  height: 93%;
  background: -webkit-linear-gradient(#cdf7f5, #baddf2); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#cdf7f5, #baddf2); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#cdf7f5, #baddf2); /* Firefox 3.6 - 15 */
  background: linear-gradient(#cdf7f5, #baddf2); /* 标准的语法（必须放在最后） */
}
#writepost .title{
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
#writepost .infolist{
  padding: 10px 3px 30px 3px;
  /* background-color: pink; */
}
#writepost .i-body{
  width: 100%;
  /* background-color: yellow; */
  /* text-align: center; */
}
#writepost .i-body .ibi{
  width: 100%;
  margin-bottom: 1rem;
  min-height: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: 0.2rem 0;
  border: none;
  border-top: 1px solid gray;
  outline: none;
}
#writepost .i-body .ib-content{
  border: none;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  outline: none;
  resize: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  width:100%;
  overflow:auto;
  word-break:break-all;
}
#writepost .i-body .i-b-prop{
  font-size: 1.5rem;
  display: flex;
}
#writepost .i-body .i-b-prop div{
  text-align: center;
  float: left;
  flex: auto;
}
#writepost .i-body .i-b-prop input{
  width: 1.2rem;
  height: 1.2rem;
}
#writepost .i-body .i-b-avt{
  height: 2rem;
  display: flex;
}
#writepost .i-body .i-b-avt div{
  text-align: center;
  flex: auto;
  float: left;
}
#writepost .i-body .i-b-avt img{
  height: 100%;
  height: 2rem;
}
#writepost .foot{
  position: absolute;
  bottom: 1rem;
  width: 100%;
  text-align: center;
}
#writepost .foot .f-info{
  padding: 5px 0;
  font-size: 2rem;
  line-height: 2rem;
  color: red;
}
#writepost .foot .postbtn{
  width: 80%;
  font-size: 2rem;
  line-height: 2rem;
  padding: 5px;
  background-color: skyblue;
  border: 1px solid gray;
  border-radius: 1rem;
}
</style>
