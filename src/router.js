
import { createRouter, createWebHashHistory } from 'vue-router';


import About from './view/About.vue'
import Home from './view/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  })

  export default router;