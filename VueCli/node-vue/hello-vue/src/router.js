import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Add from './views/add.vue'
import Blog from './views/blog.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/list.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/user.vue')
        }

      ]

    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }

  ]
})
