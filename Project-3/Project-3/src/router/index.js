// import { createRouter, createWebHistory } from 'vue-router'
// // Define Route Component by Importing
// import HomePage from '../views/HomePage.vue'
// import AboutUs from '../views/AboutUs.vue'
// import ContactUs from '../views/ContactUs.vue'

// // Define Routes, Each route should map to a component
// const routes =[
//     {
//         path:'/',
//         name:'home',
//         component:HomePage,
//     },
//     {
//         path:'/about',
//         name:'about',
//         component:AboutUs,
//     },
//     {
//         path:'/contact',
//         name:'contact',
//         component:ContactUs,
//     },
// ]

// // Create the router instance and pass the `routes` option

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes:routes
//   })

//   export default router



import { createRouter, createWebHistory } from 'vue-router'
// Define Route Component by Importing
import Home from '../views/HomePage.vue'
import About from '../views/AboutUs.vue'
import Contact from '../views/ContactUs.vue'


// Define Routes, Each route should map to a component
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

]

// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
