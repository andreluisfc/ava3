// Composables
import { createRouter, createWebHistory } from 'vue-router'
import {useAppStore} from '@/store/app'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          requiresAuth: false,
        }
      },
      {
        path: '/crud',
        name: 'Crud',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Crud.vue'),
        meta: {
          requiresAuth: true,
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  const store = useAppStore();
  if(to.meta.requiresAuth && !store.getUser.email) {
    store.snackbarMessage = 'É necessário fazer login para acessar esta página';
    store.showSnackbar = true;
    next({name: 'Home'})
  }
  next()
})

export default router
