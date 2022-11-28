<script setup>
import { projects } from '../projects.js'
import { ArrowRightIcon } from '@heroicons/vue/outline'
import { ArrowLeftIcon } from '@heroicons/vue/outline'
import { ArrowUpIcon } from '@heroicons/vue/outline'

const project = projects[props.projectIndex]
const attrLength = Object.keys(project).length - 7

const props = defineProps({
    projectIndex: String
})

function projectNavigator(direction){
    if(direction){
        if(props.projectIndex != (projects.length - 1)){
            return projects.findIndex(item => item.id === project.id) + 1;
        } else{
            return 0;
        }
    }
    else{
        if(props.projectIndex != 0){
            return projects.findIndex(item => item.id === project.id) - 1;
        } else{
            return (projects.length - 1);
        }
    }

}

function getProjectTitle(direction){
    if(direction){
        if(props.projectIndex != (projects.length - 1)){
            return projects[parseInt(props.projectIndex) + 1].title.substring(0, 16) + "...";
        } else{
            return projects[0].title.substring(0, 16) + "...";
        }
    } 
    else{
        if(props.projectIndex != 0){
            return projects[parseInt(props.projectIndex) - 1].title.substring(0, 16) + "...";
        } else{
            return projects[projects.length - 1].title.substring(0, 16) + "...";
        }
    }

}
</script>

<template>
    <div class="flex justify-between items-center">
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(false) }}" class="hidden lg:flex bg-zinc-700 hover:bg-slate-600 p-2 rounded items-center justify-center gap-2 duration-150"><ArrowLeftIcon class="w-5 mb-[1px]"/> {{ getProjectTitle(false) }}</router-link>
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(false) }}" class="lg:hidden flex items-center justify-center gap-2 duration-150 bg-zinc-700 hover:bg-slate-600 p-3 rounded"><ArrowLeftIcon class="w-4"/></router-link>
        <router-link to="/Projects.vue" class="bg-zinc-700 hover:bg-slate-600 p-3 rounded"><ArrowUpIcon class="w-4" /></router-link>
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(true) }}" class="hidden lg:flex bg-zinc-700 hover:bg-slate-600 p-2 rounded items-center justify-center gap-2 duration-150">{{ getProjectTitle(true) }} <ArrowRightIcon class="w-5 mb-[1px]" /></router-link>
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(true) }}" class="lg:hidden flex items-center justify-center gap-2 duration-150 bg-zinc-700 hover:bg-slate-600 p-3 rounded"><ArrowRightIcon class="w-4" /></router-link>
    </div>
</template>