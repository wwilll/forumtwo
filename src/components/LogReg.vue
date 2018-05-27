<template>
  <div id="logreg">
    <div class="login">
      <div class="input">
        <div class="info uname">
          <label for="username">用户名</label><input type="text" v-model="account" v-on:blur="losefocus(account)">
        </div>
        <div class="info upwd">
          <label for="upwd">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password" v-model="password">
        </div>
        <div class="info cpwd" v-if="!loginbtn">
          <label for="cpwd">重&nbsp;&nbsp;&nbsp;&nbsp;输</label><input type="password" v-model="cpassword">
        </div>
        <div v-if="!loginbtn" class="avt cf">
          <div><input type="radio" id="one" value="/static/images/1.jpg" v-model="avatar"><img src="/static/images/1.jpg" alt="#"></div>
          <div><input type="radio" id="two" value="/static/images/2.jpg" v-model="avatar"><img src="/static/images/2.jpg" alt="#"></div>
          <div><input type="radio" id="three" value="/static/images/3.jpg" v-model="avatar"><img src="/static/images/3.jpg" alt="#"></div>
        </div>
      </div>
      <div class="prompt">
        <span>{{result}}</span>
        <span>{{role}}</span>
      </div>
      <div class="btn">
        <button @click="reg" :class="{'sc': !loginbtn}">注册</button>&nbsp;&nbsp;&nbsp;&nbsp;<button @click="login" :class="{'sc': loginbtn}">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
// import userinfo from '../js/userinfo.js'
export default {
  data () {
    return {
      account: '',
      password: '',
      cpassword: '',
      avatar: '/static/images/1.jpg',
      result: null,
      role: null,
      hasUser: false,
      useritems: [],
      loginbtn: true
    }
  },
  watch: {// 此监听器莫名其妙失效
    useritems: {
      handler (useritems) {
        // console.log(val,oldVal)
        alert('change locals' + useritems)
        // window.localStorage.setItem('userinfo', '{"hasUser":true,"id":001}')
        // window.localStorage.setItem('userinfo', [])
        // window.localStorage.setItem('userinfo', JSON.stringify(useritems))
      },
      deep: true
    }
  },
  mounted: function () {
    // window.localStorage.setItem('userinfo', '{"hasUser",false}')
  },
  methods: {
    losefocus (account) {
      if (!account) { return }
      var url = this.$myhost + 'checkid'
      let params = { account: this.account }
      this.$ajax.get(url, {params}).then((response) => {
        if (response.data.status === 1) {
          if (this.loginbtn) {
            this.result = '此用户存在'
            this.role = '类型:' + response.data.role
          } else {
            this.result = '此用户已存在,不可注册'
            this.role = ''
          }
        } else if (response.data.status === 0) {
          if (this.loginbtn) {
            this.result = '此用户不存在'
          } else {
            this.result = '此用户不存在,可注册'
          }
        } else {}
      }).catch((error) => {
        this.result = '找不到服务器或服务器未启动'
        console.log(error)
      })
    },
    login () {
      if (!this.loginbtn) {
        this.loginbtn = true
        this.account = ''
        this.password = ''
        this.cpassword = ''
        this.result = ''
        return
      }
      if (this.result === '此用户不存在') { return }
      var ua = this.account && !/^\s+$/.test(this.account)
      var up = this.password && !/^\s+$/.test(this.password)
      if (ua && up) {
        var url = this.$myhost + 'login'
        let params = {
          account: this.account,
          password: this.password
        }
        this.$ajax.get(url, {params}).then((response) => {
          if (response.data.status === 1) {
            this.result = '登录成功'
            var user = {
              id: response.data.account,
              des: response.data.dec,
              role: response.data.role,
              avatar: response.data.avatar
            }
            this.useritems.push(user)
            window.localStorage.setItem('userinfo', JSON.stringify(this.useritems))
            this.$emit('isUser', response.data.account)
          } else if (response.data.status === 0) {
            this.result = '用户名密码不匹配'
          } else {}
        }).catch((error) => {
          this.result = '找不到服务器或服务器未启动'
          console.log(error)
        })
      } else {
        this.result = '用户名或密码不能为空'
      }
    },
    reg () {
      if (this.loginbtn) {
        this.loginbtn = false
        this.account = ''
        this.password = ''
        this.cpassword = ''
        this.result = ''
        return
      }
      if (this.result === '此用户已存在,不可注册') { return }
      var ua = this.account && !/^\s+$/.test(this.account)
      var up = this.password && !/^\s+$/.test(this.password)
      var uc = this.cpassword && !/^\s+$/.test(this.cpassword)
      var cf = this.password === this.cpassword
      if (!cf) {
        this.result = '两次输入密码不一致'
        return
      }
      if (ua && up && uc && cf) {
        var url = this.$myhost + 'register'
        this.$ajax.post(url, {
          account: this.account,
          password: this.password,
          role: null,
          avatar: this.avatar
        }).then((response) => {
          if (response.data.status === 1) {
            this.result = '注册成功:'
            var user = {
              id: response.data.account,
              des: response.data.dec,
              role: response.data.role,
              avatar: response.data.avatar
            }
            this.useritems.push(user)
            window.localStorage.setItem('userinfo', JSON.stringify(this.useritems))
            this.$emit('isUser', response.data.account)
          } else if (response.data.status === 0) {
            this.result = '注册失败:该用户已存在'
            this.account = ''
            this.password = ''
            this.cpassword = ''
          } else {}
        }).catch((error) => {
          this.result = '找不到服务器或服务器未启动'
          console.log(error)
        })
      } else {
        this.result = '请将信息填写完整'
      }
    }
  }
}
</script>

<style>
#logreg{
  position: absolute;
  background-color: rgba(150,255,255,.2);
  top: 0;
  height: 95%;
  width: 100%;
}
#logreg .login{
  height: 100%;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
#logreg .login .prompt{
  min-height: 10%;
  padding-bottom: 2rem;
}
#logreg .login .prompt span{
  display: block;
  color: red;
  font-size: 1.5rem;
  padding: 5px;
}
#logreg .login .input{
  padding: 4rem 0 2rem 0;
  min-height: 40%;
}
#logreg .input .avt{
  height: 2rem;
  display: flex;
}
#logreg .input .avt div{
  text-align: center;
  flex: auto;
  float: left;
}
#logreg .input .avt input{
  display: inline-block;
  margin: 0;
  height: 1.5rem;
  width: 1.5rem;
}
#logreg .input .avt img{
  height: 100%;
  height: 2rem;
}
#logreg .login .info{
  margin: 10px auto;
  padding: 5px;
}
#logreg .login label{
  width: 15%;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
#logreg .login input{
  font-size: 1.5rem;
  line-height: 1.5rem;
  width: 60%;
  margin-left: 20px;
}
#logreg .login .btn{
  width: 80%;
  margin: 0 auto;
  display: flex;
}
#logreg .login .btn>button{
  flex: auto;
  font-size: 2rem;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
}#logreg .login .btn>button.sc{
  background-color: skyblue;
}
</style>
