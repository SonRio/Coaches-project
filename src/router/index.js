import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  }, {
    path: '/coaches',
    name: 'Coaches',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue'),
    components: {
      default: Home,
    },
    children : [
      {
        path : '/coaches/:id',
        name : 'Detail',
        component: () => import( /* webpackChunkName: "about" */ '../views/Detail.vue'),
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import( /* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/coaches/:id/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  // {
  //   path: '/detail/:id',
  //   name: 'Detail',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/Detail.vue')
  // },
  {
    path: '/:NotFound(.*)*',
    component: () => import( /* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router