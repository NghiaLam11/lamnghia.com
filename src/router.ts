
import { createRouter, createWebHashHistory } from 'vue-router';

import About from './view/About.vue'
import Home from './view/Home.vue'
import Blogs from './view/Blogs.vue'
import Resume from './view/Resume.vue'
import TimeLine from './view/TimeLine.vue'
import BlogDetails from './view/BlogDetails.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blogs', component: Blogs },
    { path: '/resume', component: Resume },
    { path: '/time-line', component: TimeLine },
    { path: '/blog/:id', component: BlogDetails},
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  })

  export default router;