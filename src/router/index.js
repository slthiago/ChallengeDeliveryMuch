import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game-details/generation-i',
    name: 'generation-i',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-ii',
    name: 'generation-ii',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-iii',
    name: 'generation-iii',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-iv',
    name: 'generation-iv',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-v',
    name: 'generation-v',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-vi',
    name: 'generation-vi',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-vii',
    name: 'generation-vii',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
  {
    path: '/game-details/generation-viii',
    name: 'generation-viii',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
