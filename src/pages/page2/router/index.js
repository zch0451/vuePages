import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/page2/component/home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'page2',
      component: Home
    }
  ]
})
