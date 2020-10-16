import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Signin from '@/pages/signin/Signin.vue'
import Signup from '@/pages/signup/Signup.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})

export default router
