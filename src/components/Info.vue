<template>
  <div id="info">
    <div class="loginfo cf">
      <div class="u-info">
        <span class="u-id">{{userid}}</span>
        <span class="u-role">{{userrole}}</span>
      </div>
      <button class="fr" @click="logout" v-if="inOut">{{inOutDes}}</button>
    </div>
    <div class="manager" v-if="isManage">
      <button class="umbtn" @click="userManage">用户管理{{result}}</button>
      <div class="usermg" v-if="um">
        <div class="user" v-for="(item,index) in userList" v-bind:key="index">
          <span>{{item.id}}</span>
          <select v-model="item.role">
            <option disabled value="">请选择</option>
            <option>root</option>
            <option>manager</option>
            <option>general</option>
          </select>
          <button @click="saverole(item.id,item.role)">保存</button>
          <button class="delbtn" @click="deleteuser(item.id)">delete</button>
        </div>
      </div>
    </div>
    <div class="postmanager" v-if="inOut">
      <button class="umbtn" @click="postManage">个人帖子{{postres}}</button>
      <div class="postmg" v-if="pm">
        <div class="post" v-for="(item,index) in postList" v-bind:key="index">
          <span>{{item.title}}</span><button class="delbtn" @click="deletepost(item.timepoint)">删除</button>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <LogReg v-if="!inOut" v-on:isUser="changeUser"></LogReg>
  </div>
</template>
<script>
import LogReg from './LogReg'
export default {
  data () {
    return {
      userid: null,
      userrole: null,
      inOut: true,
      inOutDes: null,
      userList: null,
      postList: null,
      um: false,
      pm: false,
      result: null,
      postres: null,
      isManage: false
    }
  },
  watch: {
  },
  mounted: function () {
    var userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
    if (userinfo != null) {
      this.userid = userinfo[0].id
      this.userrole = userinfo[0].role
      this.inOut = true
      if (this.userrole === 'root' || this.userrole === 'manager') {
        this.isManage = true
      } else {
        this.isManage = false
      }
      this.inOutDes = '退出'
      this.userList = null
    } else {
      this.userid = null
      this.userrole = null
      this.inOut = false
      this.inOutDes = '已登录'
    }
  },
  components: {
    LogReg
  },
  methods: {
    logout () {
      let cf = confirm('确认退出吗？')
      if (cf) {
        window.localStorage.removeItem('userinfo')
        this.userid = null
        this.userrole = null
        this.inOut = false
        this.isManage = false
        this.userList = null
        this.result = null
        this.postres = null
      } else {
        // alert('取消退出')
      }
    },
    changeUser: function (ua) {
      var userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
      if (userinfo != null) {
        this.userid = userinfo[0].id
        this.userrole = userinfo[0].role
        if (this.userrole === 'root' || this.userrole === 'manager') {
          this.isManage = true
        } else {
          this.isManage = false
        }
        this.inOut = true
        this.inOutDes = '退出'
      } else {
        this.userid = null
        this.userrole = null
        this.inOut = false
        this.inOutDes = '已登录'
      }
    },
    userManage () {
      this.um = !this.um
      if (this.um) {
        if (this.userrole === 'root' || this.userrole === 'manager') {
          var url = this.$myhost + 'checkuser'
          this.$ajax.get(url).then((response) => {
            if (response.data.status === 1) {
              this.result = '：系统用户如下'
              this.userList = response.data.result
            } else if (response.data.status === 0) {
              this.result = '无用户'
            } else {}
          }).catch((error) => {
            this.result = '找不到服务器或服务器未启动'
            console.log(error)
          })
        }
      } else {
        this.result = null
      }
    },
    deleteuser (id) {
      if (id === 'root') {
        alert('超级管理员不允许删除')
      } else if (this.userid === id) {
        alert('不能删除自己')
      } else {
        var c = confirm('确定删除此用户吗？')
        if (!c) { return }
        var url = this.$myhost + 'deleteuser'
        this.$ajax.post(url, {id: id}).then((response) => {
          if (response.data.status === 1) {
            this.result = ':删除成功'
            url = this.$myhost + 'checkuser'
            this.$ajax.get(url).then((response) => {
              if (response.data.status === 1) {
                this.result = '：系统用户如下'
                this.userList = response.data.result
              } else if (response.data.status === 0) {
                this.result = '无用户'
              } else {}
            }).catch((error) => {
              this.result = '找不到服务器或服务器未启动'
              console.log(error)
            })
          } else if (response.data.status === 0) {
            this.result = '无用户'
          } else {}
        }).catch((error) => {
          this.result = '找不到服务器或服务器未启动'
          console.log(error)
        })
      }
    },
    saverole (id, role) {
      if (id === 'root' || role === 'root') {
        alert('不允许修改或添加超级管理员权限')
      } else {
        var url = this.$myhost + 'changerole'
        this.$ajax.post(url, {id: id, role: role}).then((response) => {
          if (response.data.status === 1) {
            this.result = '修改成功'
          } else if (response.data.status === 0) {
            this.result = '无用户'
          } else {}
        }).catch((error) => {
          this.result = '找不到服务器或服务器未启动'
          console.log(error)
        })
      }
    },
    postManage () {
      this.pm = !this.pm
      if (!this.pm) {
        this.postres = null
      }
      if (this.pm) {
        var url = this.$myhost + 'getposts'
        let params = { account: this.userid }
        this.$ajax.get(url, {params}).then((response) => {
          if (response.data.status === 1) {
            this.postres = '：个人帖子如下'
            this.postList = response.data.result
          } else if (response.data.status === 0) {
            this.postres = '：无帖子'
          } else {}
        }).catch((error) => {
          this.postres = '找不到服务器或服务器未启动'
          console.log(error)
        })
      }
    },
    deletepost (timepoint) {
      var c = confirm('确定删除此帖吗？')
      if (!c) { return }
      var url = this.$myhost + 'deletepost'
      this.$ajax.post(url, {timepoint: timepoint}).then((response) => {
        if (response.data.status === 1) {
          this.postres = ':删除成功'
          this.postList = null
          url = this.$myhost + 'getposts'
          let params = { account: this.userid }
          this.$ajax.get(url, {params}).then((response) => {
            if (response.data.status === 1) {
              this.postres = '：个人帖子如下'
              this.postList = response.data.result
            } else if (response.data.status === 0) {
              this.postres = '：无帖子'
            } else {}
          }).catch((error) => {
            this.postres = '找不到服务器或服务器未启动'
            console.log(error)
          })
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
#info{
  position: relative;
  height: 92%;
  background: -webkit-linear-gradient(#4fafea, #baddf2); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#4fafea, #baddf2); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#4fafea, #baddf2); /* Firefox 3.6 - 15 */
  background: linear-gradient(#4fafea, #baddf2); /* 标准的语法（必须放在最后） */
  overflow: scroll;
}
#info button.delbtn{
  color: white;
  padding: 2px 9px;
  background-color: red;
  border-radius: 10px;
  font-size: 1.5rem;
}
#info .loginfo{
  padding: 30px 15px;
  text-align: left;
}
#info .loginfo .u-info{
  min-width: 60%;
  float: left;
}
#info .loginfo span.u-id{
  height: 30px;
  display: block;
  font-size: 2rem;
  font-weight: bold;
}
#info .loginfo span.u-role{
  height: 20px;
  display: block;
  font-size: 1rem;
}
#info .loginfo button{
  height: 50px;
  display: inline-block;
  font-size: 2rem;
  border-radius: 8px;
  border: 1px solid red;
  color: white;
  background-color: red;
  padding: 3px 20px;
}
#info .umbtn{
  width: 96%;
  font-size: 1.5rem;
  border-radius: 10px;
}
#info .usermg .user{
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 8px;
  font-size: 1.5rem;
}
#info .usermg .user>span{
  flex: 1;
}
#info .usermg .user>select{
  flex: 1;
}
#info .usermg .user>button{
  flex: 1;
}
#info .post{
  width: 94%;
  margin: 0 auto;
  padding: 2.6rem 10px 0 10px;
  border-bottom: 1px solid gray;
  font-size: 1.5rem;
  position: relative;
}
#info .post>span{
  position: absolute;
  top: 10px;
  left: 2rem;
}
#info .post>button{
  position: absolute;
  top: 10px;
  font-size: 1.2rem;
  border-radius: 8px;
  right: 2rem;
}
#info .post>p{
  text-align: left;
  font-size: 1rem;
}
</style>
