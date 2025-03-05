import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from "@/views/CreateView.vue";
import UserDetailsView from "@/views/UserDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (Create.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CreateView
    },
    {
      path: '/create/:id',
      name: 'update',
      // route level code-splitting
      // this generates a separate chunk (Create.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CreateView
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: UserDetailsView
    }
  ],
})

export default router
