<template>
    <div class="flex flex-col gap-6">
        <ProjectNavVue :projectIndex="props.projectIndex" />
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
import ProjectNavVue from '../components/ProjectNav.vue'

const project = projects[props.projectIndex]
const attrLength = Object.keys(project).length - 7

const props = defineProps({
    projectIndex: String
})
</script>