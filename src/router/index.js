import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  // 1. Nested Routes (Services with sub-pages)
  { 
    path: '/services', 
    component: () => import('../views/Services/ServicesParent.vue'),
    children: [
      { path: 'web', component: () => import('../views/Services/WebDesign.vue') },
      { path: 'app', component: () => import('../views/Services/AppDev.vue') }
    ]
  },
  // 2. Dynamic Route (User Profile by ID)
  { path: '/profile/:id', component: () => import('../views/Profile.vue'), props: true },
  
  // 3. Custom 404 Page (Must be last)
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
