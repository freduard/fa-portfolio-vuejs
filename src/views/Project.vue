<template>
    <div class="p-4 lg:p-12 flex flex-col gap-10 text-[#E7685D]">
        <div class="flex justify-between items-center text-2xl  ">
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(false) }}" class="hidden lg:flex items-center justify-center gap-2 hover:text-red-300 duration-150"><ArrowNarrowLeftIcon class="w-5"/> {{ getProjectTitle(false) }}</router-link>
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(false) }}" class="lg:hidden flex items-center justify-center gap-2 hover:text-red-300 duration-150"><ArrowNarrowLeftIcon class="h-10"/></router-link>
            <router-link to="/" class=" hover:text-red-300 duration-150"><img src="../assets/logos/fa_logo.svg" alt="" class="h-10"></router-link>
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(true) }}" class="hidden lg:flex items-center justify-center gap-2 hover:text-red-300 duration-150">{{ getProjectTitle(true) }} <ArrowNarrowRightIcon class="w-5" /></router-link>
            <router-link :to="{ path: '/Project.vue', query: { projectIndex: projectNavigator(true) }}" class="lg:hidden flex items-center justify-center gap-2 hover:text-red-300 duration-150"><ArrowNarrowRightIcon class="h-10" /></router-link>
        </div>
        <div class="max-h-96 flex justify-center items-center overflow-hidden">
            <img :src="project.image" class="w-full" alt="">
        </div>
        <div class="w-fit">
            <p class="text-4xl lg:text-6xl">{{project.title}}</p>
            <div class="flex justify-between items-center text-2xl">
                <div>
                    <p>{{project.date}}</p>
                </div>
                <!-- <div class="flex gap-5">
                    <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-red-300 duration-150 underline">github</a>
                    <p class="text-neutral-500 cursor-default select-none" v-else>github</p>
                    <p>•</p>
                    <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-red-300 duration-150 underline">figma</a>
                    <p class="text-neutral-500 cursor-default select-none" v-else>figma</p>
                    <p>•</p>
                    <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-red-300 duration-150 underline">online</a>
                    <p class="text-neutral-500 cursor-default select-none" v-else>online</p>
                </div> -->
            </div>
        </div>
        <p v-for="index in attrLength" :key="index" class="text-2xl">{{ project[`p${index}`] }}</p>
        <div class="flex gap-5 text-2xl">
            <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-red-300 duration-150 underline">github</a>
            <p class="text-neutral-500 cursor-default select-none" v-else>github</p>
            <p>•</p>
            <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-red-300 duration-150 underline">figma</a>
            <p class="text-neutral-500 cursor-default select-none" v-else>figma</p>
            <p>•</p>
            <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-red-300 duration-150 underline">online</a>
            <p class="text-neutral-500 cursor-default select-none" v-else>online</p>
        </div>
    </div>
</template>

<script setup>
import { projects } from '../projects.js'
import { ArrowNarrowRightIcon } from '@heroicons/vue/solid'
import { ArrowNarrowLeftIcon } from '@heroicons/vue/solid'

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
            return projects[parseInt(props.projectIndex) + 1].title;
        } else{
            return projects[0].title;
        }
    } 
    else{
        if(props.projectIndex != 0){
            return projects[parseInt(props.projectIndex) - 1].title;
        } else{
            return projects[projects.length - 1].title;
        }
    }

}
</script>