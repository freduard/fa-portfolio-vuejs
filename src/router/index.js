import { createRouter, createWebHistory } from "vue-router";
import Index from '../views/Index.vue'
import Project from '../views/Project.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/Project.vue',
        name: 'Project',
        component: Project,
        props(route){
            return { projectIndex: route.query.projectIndex }
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router