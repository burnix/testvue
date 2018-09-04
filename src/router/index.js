import Vue from 'vue'
import Router from 'vue-router'
import CreateEvent from '@/components/CreateEvent'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/create_event',
      name: 'CreateEvent',
      component: CreateEvent
    }
  ]
})
