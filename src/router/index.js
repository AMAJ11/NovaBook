import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import QuraanView from '@/views/QuraanView.vue'
import ProfileCh from '@/views/ProfileCh.vue'
import ProfileView from '@/views/ProfileView.vue'
import PersonProfile from '@/views/PersonProfile.vue'

const routes = [
  {
    path: '/Auth',
    name: 'Auth',
    component: HomeView
  },
  {
    path: '/',
    redirect: '/post' // تحويل مباشر
  },
  {
    path: '/post',
    name: 'PostView',
    component: PostView,
    meta: { requiresAuth: true }
  },
  {
    path: '/Person-Profile/:id',
    name: 'Person-Profile',
    component: PersonProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/quraan',
    name: 'QuraanView',
    component: QuraanView,
    meta: { requiresAuth: false }
  },
  {
    path: '/Profile',
    name: 'profch',
    component: ProfileCh
  },
  {
    path: '/Profile-setting',
    name: 'profileview',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    meta: { requiresAuth: false },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // مثال
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/Auth'); // إعادة توجيه للصفحة المطلوبة
  } else {
    next(); // الاستمرار
  }
});
export default router
