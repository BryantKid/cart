import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hello from '../views/Hello'

Vue.use(VueRouter)
function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },    
  { path: '/test', component: Hello }, // No props, no nothing
  { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
  { path: '/static', component: Hello, props: { name: 'world' }}, // static values
  { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
  { path: '/attrs', component: Hello, props: { name: 'attrs' }}
]

const router = new VueRouter({
  routes
})

export default router
