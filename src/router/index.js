import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import WritePost from '@/components/WritePost'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/writepost',
      name: 'WritePost',
      component: WritePost
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
