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
    path: '/test',
    component: () => import('../components/test.vue')
  },
  {
    path: '/test2',
    component: () => import('../components/test2.vue')
  },
  {
    path: '/piechart',
    component: () => import('../components/pieChart.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
