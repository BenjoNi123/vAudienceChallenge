import Vue from 'vue'
import VueRouter,  { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../pages/home/index.vue'),
  },
  {
    path: '/signin',
    name: 'Signin',
    component: ()=> import('../pages/signin/index.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: ()=> import('../pages/signup/index.vue'),
  },
  {
    path: '/watchvideo/:id',
    name: 'WatchVideo',
    component: ()=> import('../pages/watchvideo/index.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
