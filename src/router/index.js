import { createRouter, createWebHistory } from "vue-router";
import Index from '../views/Index.vue'
import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'


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
    {
        path: '/Contact.vue',
        name: 'Contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router