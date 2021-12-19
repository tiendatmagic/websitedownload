import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Windows from '../components/Windows.vue'
import Office from '../components/Office.vue'
import Error from '../components/Error.vue'

const routes = [
  {
    path: '/', component: Home,
  },
  {
    path: '/windows', component: Windows,
  },
  {
    path: '/office',
    component: Office
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router