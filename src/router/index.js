import { createRouter, createWebHistory } from "vue-router";
import Index from '../views/Index.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue'
import Documents from "../views/Documents.vue";
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/Projects.vue',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/Documents.vue',
        name: 'Documents',
        component: Documents
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
        component: Contact,
        props(route){
            return { state: route.query.state }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router