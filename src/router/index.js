import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Services from '@/components/services/Services'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})
