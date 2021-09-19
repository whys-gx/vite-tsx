import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path:'/',component:()=> import('../components/HelloWorld.vue')}
]


const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router
