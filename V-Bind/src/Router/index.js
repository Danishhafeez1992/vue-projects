import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import Resources from '@/views/Resources.vue'
import TemplateSyntax from '../components/TemplateSyntax.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/resources', component: Resources },
   { path: '/templatesyntax', component: TemplateSyntax },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})