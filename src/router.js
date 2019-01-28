/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tabbar from '@/common/tabbar/tabbar'
import ShowCase from '@/components/ShowCase'
import Log from '@/components/Log'
import Register from '@/components/Register'
import ChangePwd from '@/components/ChangePwd'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/showcase',
      name: 'ShowCase',
      component: ShowCase
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/changepwd',
      name: 'ChangePwd',
      component: ChangePwd
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
