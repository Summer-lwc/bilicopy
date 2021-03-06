import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Forum from '../views/Forum.vue'
import Login from '../views/Login.vue'
import Rank from '../views/Rank.vue'
import Search from '../views/Search.vue'
import Video from '../views/Video.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
    beforeEnter: (to, from, next) => {
      var token = localStorage.getItem('token');
      if(to.path == '/forum' && !token){
          alert('请登录！');
          next({
            path:'/login'
          });
      }else{
          next();
      }
  }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(to.path == '/login'){
          localStorage.removeItem('token');
      }
      next()
    },
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    // meta:{
    //   keepAlive:true
    // }
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
