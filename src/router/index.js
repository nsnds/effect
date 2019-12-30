import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/starrySky' },
  {
    path: '/starrySky',
    name: 'StarrySky',
    component: () => import(/* webpackChunkName: "starrySky" */ '../views/starrySky.vue'),
    meta: { title: '星空' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
