import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import QuraanView from '@/views/QuraanView.vue'
import ProfileCh from '@/views/ProfileCh.vue'
import ProfileView from '@/views/ProfileView.vue'
import PersonProfile from '@/views/PersonProfile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post',
    name: 'PostView',
    component: PostView
  },
  {
    path: '/Person-Profile/:id',
    name: 'Person-Profile',
    component: PersonProfile
  },
  {
    path: '/quraan',
    name: 'QuraanView',
    component: QuraanView
  },
  {
    path: '/Profile',
    name: 'profch',
    component: ProfileCh
  },
  {
    path: '/Profile-setting',
    name: 'profileview',
    component: ProfileView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
