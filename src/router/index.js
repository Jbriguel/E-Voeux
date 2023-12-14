import { createRouter, createWebHistory } from 'vue-router';
import AppVue from '@/App.vue';
import accueilViewVue from '@/views/accueilView.vue';
import personnalVoeuxVue from '@/views/personnalVoeux.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: accueilViewVue
    },
    {
      path: '/personnalVoeux',
      name: 'personnalVoeux',
      component: personnalVoeuxVue
    } ,
     { path: '/:pathMatch(.*)*', beforeEnter: (to, from, next) => { next('/404') } },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
     
    // {
    //   path: '/modifierUser',
    //   name: 'editerUser',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/EditerUserView.vue')
    // } 
  ]
})

export default router
