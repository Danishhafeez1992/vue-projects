import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'

import ParentComponent from '@/components/ParentComponent.vue'
import ChildComponent from '@/components/ChildComponent.vue'
import BlogPost from '@/components/BlogPost.vue'
const routes = [
  { path: '/', component: ParentComponent },
  { path: '/childcomponent', component: ChildComponent },
  { path: '/', component: ParentComponent },
  { path: '/blogpost', component: ChildComponent },
  { path: '/blogpost', component: BlogPost },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
