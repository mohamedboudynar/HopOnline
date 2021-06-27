import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import ListContacts2 from '../views/ListContacts2.vue'
import Tabs from '../views/tabs/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ListContacts',
    name: 'ListContacts2',
    component: ListContacts2
  },
  {
    path: '/contact',
    name:'contact',
    component: ()=> import('../views/Contact.vue'),

  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: 'contact/:id',
        component: () => import('../views/Contact.vue'),
      },
      {
        path: 'notes',
        component: () => import('../views/tabs/Notes.vue')
      },
      {
        path: 'taches',
        component: () => import('../views/tabs/Taches.vue')
      },
      {
        path: 'affaires',
        component: () => import('../views/tabs/Affaires.vue')
      },
      {
        path: 'autres',
        component: () => import('../views/tabs/Autres.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
