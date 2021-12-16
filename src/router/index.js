import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
        path: '/:pays',
        component: () => import(/* webpackChunkName: "Show" */ '../components/Show.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
