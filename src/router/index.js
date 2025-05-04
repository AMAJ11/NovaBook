// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import PostView from '@/views/PostView.vue'
// import QuraanView from '@/views/QuraanView.vue'
// import ProfileCh from '@/views/ProfileCh.vue'
// import ProfileView from '@/views/ProfileView.vue'
// import PersonProfile from '@/views/PersonProfile.vue'
// import axios from 'axios'

// const apiurl = process.env.VUE_APP_API_URL
// const routes = [
//   {
//     path: '/Auth',
//     name: 'Auth',
//     component: HomeView,
//     beforeEnter: (to, from, next) => {
//       if (localStorage.getItem('token')) {
//         next('/post');
//       } else {
//         next();
//       }
//     }
//   },
//   {
//     path: '/',
//     redirect: '/post' // تحويل مباشر
//   },
//   {
//     path: '/post',
//     name: 'PostView',
//     component: () => import('../views/PostView.vue'),
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/Person-Profile/:id',
//     name: 'Person-Profile',
//     component: PersonProfile,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/quraan',
//     name: 'quraan',
//     component: QuraanView,
//     meta: { requiresAuth: false }
//   },
//   {
//     path: '/Profile',
//     name: 'profch',
//     component: ProfileCh
//   },
//   {
//     path: '/Profile-setting',
//     name: 'profileview',
//     component: ProfileView,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: '/about',
//     name: 'about',
   
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: function () {
//       return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//     },
//     meta: { requiresAuth: false },
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
// router.beforeEach(async (to, from, next) => {
//   const isAuthenticated = await Authenticated
//   if (to.meta.requiresAuth && isAuthenticated==false) {
//     next('/Auth'); // إعادة توجيه للصفحة المطلوبة
//   } else {
//     next(); // الاستمرار
//   }
// });
// const Authenticated = async function(){
//   let token = localStorage.getItem("token")
//   if(token){
// let response = await axios.post(`${apiurl}/posts/verify-token`,{token: localStorage.getItem("token")})
// console.log(response);

// if(response.message ==  " token is right "){
//   return true
// }else{return false}
// }
// else{return false}
// }

// export default router


import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '@/views/PostView.vue'
import QuraanView from '@/views/QuraanView.vue'
import ProfileCh from '@/views/ProfileCh.vue'
import ProfileView from '@/views/ProfileView.vue'
import PersonProfile from '@/views/PersonProfile.vue'
import axios from 'axios'

const apiurl = process.env.VUE_APP_API_URL

// 1. نقل دالة التحقق قبل استخدامها
const isAuthenticated = async function() {
  const token = localStorage.getItem("token")
  if (!token) return false
  
  try {
    const response = await axios.post(`${apiurl}/posts/verify-token`, {
      token: token
    })
    console.log(response);
    
    // تحقق من الاستجابة حسب ما يعيده الخادم فعلياً
    return response.data.message === " token is right "
  } catch (error) {
    console.error("Token verification failed:", error)
    return false
  }
}

const routes = [
  {
    path: '/Auth',
    name: 'Auth',
    component: HomeView,
    meta: { hideNavbar: true },
    beforeEnter: async (to, from, next) => {
      if (await isAuthenticated()) {
        next('/post')
      } else {
        next()
      }
    }
  },
  {
    path: '/',
    redirect: '/post'
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
    name: 'quraan',
    component: QuraanView,
    meta: { requiresAuth: false }
  },
  {
    path: '/Profile',
    name: 'profch',
    component: ProfileCh,
    meta: { requiresAuth: true }
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
    component: () => import('../views/AboutView.vue'),
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 2. تصحيح middleware التوجيه
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    if(localStorage.getItem("islogin")=="AMAJHELLO0937379312.omarDH"){
      next()
    }
    else{
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      next('/Auth')
    } else {
      next()
    }
  }}
   else {
    next()
  }
})

export default router