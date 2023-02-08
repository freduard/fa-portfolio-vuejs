<script setup>
import { projects } from '../projects.js'

const project = projects[props.projectIndex]
const attrLength = Object.keys(project).length - 7

function titleToUpper(title) {
    return title.toUpperCase()
}

const props = defineProps({
    projectIndex: String
})
</script>

<template>
    <div class="pt-24 pb-12 gap-6 md:pb-0 md:pt-12 px-2 md:p-24 sm:px-12 md:px-24 lg:px-36 2xl:px-56 flex flex-col h-full justify-center text-white">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-['mrdafoe'] w-fit">
            {{ titleToUpper(project.title) }}
        </h1>
        <div class="flex flex-col gap-2">
            <div class="flex text-sm lg:text-base font-bold font-['quicksand'] justify-between">
                <div class="flex gap-3">
                    <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-rose-500 duration-150">GITHUB</a>
                    <p class="text-neutral-500 cursor-default select-none" v-else>GITHUB</p>
                    <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-slate-400 duration-150 underline">FIGMA</a>
                    <p class="text-neutral-500 cursor-default select-none" v-else>FIGMA</p>
                    <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-slate-400 duration-150 underline">ONLINE</a>
                    <p class="text-neutral-500 cursor-default select-none" v-else>ONLINE</p>
                </div>
                <div class="flex gap-1">
                    <h1 class="text-rose-500">KUUPÄEV</h1>
                    <p>{{ project.date }}</p>
                </div>
            </div>
            <p v-for="index in attrLength" :key="index" class="md:text-xl">{{ project[`p${index}`] }}</p>
        </div>
        <img :src="project.image" class="w-full rounded h-[15vw] hidden sm:block" style="object-fit: cover;" alt="">
    </div>
    <!-- <div class="flex flex-col gap-6 bg-zinc-700">
        
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
    </div> -->
</template>
