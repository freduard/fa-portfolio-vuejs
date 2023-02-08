import { createRouter, createWebHistory } from "vue-router";
import Index from '../views/Index.vue';
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue'
import Documents from "../views/Documents.vue";
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/Project',
        name: 'Project',
        component: Project,
        props(route){
            return { projectIndex: route.query.projectIndex }
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router