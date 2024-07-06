import { createRouter, createWebHistory } from "vue-router"
import Home from '@/Home.vue'
import Guid from '@/Cook.vue' 

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'Home', component: Home},
        {path: '/Cook', name: 'Cook', component: Guid}
    ]
})

export default router