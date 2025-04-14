import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import NoteCreateView from '@/views/NoteCreateView.vue'
import NoteListView from '@/views/NoteListView.vue'
import RegisterView from '@/views/RegisterView.vue'

import useAuth from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: NoteListView,
    meta:{
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta:{
      requireAuth: false
    }
  },
  {
    path: '/create',
    name: 'create',
    component: NoteCreateView,
    meta:{
      requireAuth: true
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  const auth = useAuth()
  const isAuth = auth.token

  if ((to.meta.requireAuth) && (isAuth == null)){
    next('login')
  }else{
    next()
  }
})

export default router
