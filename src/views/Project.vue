<template>
    <div class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(false) }}" class="hidden lg:flex bg-zinc-700 hover:bg-slate-600 p-2 rounded items-center justify-center gap-2 duration-150"><ArrowLeftIcon class="w-5 mb-[1px]"/> {{ getProjectTitle(false) }}</router-link>
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(false) }}" class="lg:hidden flex items-center justify-center gap-2 duration-150 bg-zinc-700 hover:bg-slate-600 p-3 rounded"><ArrowLeftIcon class="w-4"/></router-link>
            <router-link to="/Projects.vue" class="bg-zinc-700 hover:bg-slate-600 p-3 rounded"><ArrowUpIcon class="w-4" /></router-link>
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(true) }}" class="hidden lg:flex bg-zinc-700 hover:bg-slate-600 p-2 rounded items-center justify-center gap-2 duration-150">{{ getProjectTitle(true) }} <ArrowRightIcon class="w-5 mb-[1px]" /></router-link>
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(true) }}" class="lg:hidden flex items-center justify-center gap-2 duration-150 bg-zinc-700 hover:bg-slate-600 p-3 rounded"><ArrowRightIcon class="w-4" /></router-link>
        </div>
        <div class="max-h-96 flex justify-center items-center overflow-hidden">
            <img :src="project.image" class="w-full rounded lg:h-80" style="object-fit: cover;" alt="">
        </div>
        <div class="w-fit">
            <p class="text-3xl lg:text-4xl font-bold">{{project.title}}</p>
            <div class="flex justify-between items-center text-xl">
                <div>
                    <p>{{project.date}}</p>
                </div>
            </div>
        </div>
        <p v-for="index in attrLength" :key="index" class="text-xl">{{ project[`p${index}`] }}</p>
        <div class="flex gap-2 lg:gap-5 text-xl lg:text-2xl">
            <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-slate-400 duration-150 underline">github</a>
            <p class="text-neutral-500 cursor-default select-none" v-else>github</p>
            <p>•</p>
            <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-slate-400 duration-150 underline">figma</a>
            <p class="text-neutral-500 cursor-default select-none" v-else>figma</p>
            <p>•</p>
            <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-slate-400 duration-150 underline">online</a>
            <p class="text-neutral-500 cursor-default select-none" v-else>online</p>
        </div>
    </div>
</template>

<script setup>
import { projects } from '../projects.js'
import { ArrowRightIcon } from '@heroicons/vue/outline'
import { ArrowLeftIcon } from '@heroicons/vue/outline'
import { ArrowUpIcon } from '@heroicons/vue/outline'

const project = projects[props.projectIndex]
const attrLength = Object.keys(project).length - 7
const nextProjectTitle = "";

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