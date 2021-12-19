import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Windows from '../components/Windows.vue'
import Office from '../components/Office.vue'
import Contact from '../components/Contact.vue'
import Error from '../components/Error.vue'

const routes = [
  {
    path: '/', component: Home,
    name: Home
  },
  {
    path: '/windows',
    component: Windows,
    name: Windows
  },
  {
    path: '/office',
    component: Office,
    name: Office
  },
  {
    path: '/contact',
    component: Contact,
    name: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error,
    name: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  document.title = to.name.name
  next()

})

export default router