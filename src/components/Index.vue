<template>
  <div id="index">
    <div class="notice">
      <ul>
        <li :class="{'sc': scType==1}" @click="changeType(1)"><span>全部</span></li>
        <li :class="{'sc': scType==2}" @click="changeType(2)"><span>重要</span></li>
        <li :class="{'sc': scType==3}" @click="changeType(3)"><span>大四</span></li>
        <li :class="{'sc': scType==4}" @click="unfoldmenu()"><span>&or;</span></li>
      </ul>
      <transition name="fade">
        <ul class="subul" v-if="showsub">
          <li :class="{'sc': scType==5}" @click="changeType(5)"><span>考试</span></li>
          <li :class="{'sc': scType==6}" @click="changeType(6)"><span>考研</span></li>
          <li :class="{'sc': scType==7}" @click="changeType(7)"><span>工作</span></li>
          <li :class="{'sc': scType==8}" @click="changeType(8)"><span>其他</span></li>
        </ul>
      </transition>
    </div>
    <PostInfo v-bind:posttype="scType"></PostInfo>
  </div>
</template>
<script>
import PostInfo from './PostInfo'
export default {
  data () {
    return {
      showSidebar: false,
      username: null,
      msg: '系统通知',
      scType: 1,
      showsub: false
    }
  },
  components: {
    PostInfo
  },
  methods: {
    changeType (type) {
      this.scType = type
    },
    unfoldmenu () {
      this.showsub = !this.showsub
    }
  }
}
</script>
<style>
#index{
  background-color: #ebe5e5e8;
  min-height: 93%;
  overflow: auto;
}
#index .notice{
  background-color: #f1f7f5;
  margin-bottom: 10px;
}
#index .notice .sc{
  background-color: #46aaec;
}
#index .notice .sc>span{
  color: white;
}
#index .notice ul{
  overflow-x: auto;
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-around;
}
#index .notice ul li{
  margin: 0.3rem 0.5rem;
  padding: 0.3rem 0.5rem;
  list-style: none;
  font-size: 1.3rem;
  line-height: 1.3rem;
  border-radius: 8px;
  flex: auto;
}
#index .notice ul li span{
  color: black;
  word-break: keep-all;
}
.fade-enter-active, .fade-leave-active{
  transition: all 0.4s ease;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
</style>
