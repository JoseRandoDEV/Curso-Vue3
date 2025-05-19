import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuth } from '@/store/useAuth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuth()
  if (!store.is_auth && to.meta.requiresAuth) {
    next('login')
  } else {
    next()
  }
})

export default router
