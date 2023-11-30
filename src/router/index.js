import { createRouter, createWebHistory } from "vue-router";
import Projects from '../views/Projects.vue';
import Project from '../views/Project.vue'

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