<template>
  <div id="app">
    <div class="a-content">
      <router-view/>
    </div>
    <Footbar/>
  </div>
</template>

<script>
import Footbar from './components/Footbar'
export default {
  name: 'App',
  components: {
    Footbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
a{
  text-decoration: none;
}
.cf::after{
  display: table;
  content: '';
  clear: both;
}
#app {
  width: 100%;
  top: 0;
  left: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
#app .a-content{
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 51px;
}
</style>
