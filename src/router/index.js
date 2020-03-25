import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../components/About.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/a',
    compontent:about
  },
  {
    path:'/H',
    component:HelloWorld
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
