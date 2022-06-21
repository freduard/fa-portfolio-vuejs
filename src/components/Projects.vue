<template>
    <div class="p-12 flex flex-col gap-20 text-[#E7685D]">
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" class="z-10 hover:scale-[1.02] ease-in-out duration-300 hover-trigger" v-for="(project, index) in projects" :key="index"><div class="h-44 overflow-hidden flex items-center justify-center">
            <div class="absolute z-[1] p-3 px-64 flex flex-col items-center justify-center gap-2 project-card-txt-shdw h-44"> 
                <p class="text-5xl">{{project.title}}</p>
                <p class="text-lg">{{project.date}}</p>
            </div>
            <img :src="project.image" class="w-full ease-in-out duration-300 hover-target">
        </div></router-link>
    </div>
</template>

<style>
.hover-target {
    filter: saturate(0);
}

.hover-trigger:hover .hover-target {
    filter: saturate(1);
}
</style>

<script setup>
import { projects } from '../projects.js'
</script>