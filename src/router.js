import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About'
    },
    component: About
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
