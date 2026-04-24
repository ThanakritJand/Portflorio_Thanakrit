import { createApp } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import './style.css'


import App from './App.vue'
import home from './views/home.vue'
import about from './views/about.vue'
import project from './views/project.vue'
import contact from './views/contact.vue'

const routes: Array<RouteRecordRaw> = [
    {path: "/" , component: home} ,
    {path: "/about" , component: about} ,
    {path: "/project" , component: project} ,
    {path: "/contact" , component: contact} 
]

const router = createRouter({
    history: createWebHistory() ,
    routes ,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
