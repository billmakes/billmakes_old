import { createWebHistory, createRouter } from 'vue-router'
import Home from '/@/views/Home.vue'
import About from '/@/views/About.vue'
import Blog from '/@/views/blog/Blog.vue'
import Post from '/@/views/blog/Post.vue'
import Contact from '/@/views/Contact.vue'
import CV from '/@/views/CV.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  //  {
  //    path: '/blog',
  //    name: 'blog',
  //    component: Blog,
  //  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: Post,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/cv',
    name: 'cv',
    component: CV,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
