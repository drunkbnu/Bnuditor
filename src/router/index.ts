import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: () => import('../views/CanvasView.vue')
    },
    {
      path: '/games',
      name: 'Games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/games/new',
      name: 'New Game',
      component: () => import('../views/NewGameView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router