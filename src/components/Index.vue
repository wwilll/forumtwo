<template>
  <div id="index">
    <div class="notice">
      <ul>
        <li :class="{'sc': scType==1}" @click="changeType(1)"><span>全部</span></li>
        <li :class="{'sc': scType==2}" @click="changeType(2)"><span>重要通知</span></li>
        <li :class="{'sc': scType==3}" @click="changeType(3)"><span>学生区</span></li>
      </ul>
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
      scType: 1
    }
  },
  components: {
    PostInfo
  },
  methods: {
    changeType (type) {
      this.scType = type
    }
  }
}
</script>
<style>
#index{
  background-color: #ebe5e5e8;
  padding-bottom: 4rem;
}
#index .notice{
  background-color: #ceddd9;
  margin-bottom: 10px;
}
#index .notice .sc{
  background-color: #f4e25a;
}
#index .notice ul{
  display: flex;
}
#index .notice ul li{
  padding: 0.5rem;
  list-style: none;
  font-size: 2rem;
  line-height: 2rem;
  flex: auto;
}
</style>
