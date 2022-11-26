<script setup>
import { projects } from '../projects.js'
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance();

let sortByLatest = true;

function getShortDesc (pIndex) {
    return projects[pIndex].p1.substring(0, 100) + '...';
}

function sortBy() {
    projects.reverse();
    instance.proxy.$forceUpdate();
    sortByLatest = sortByLatest ? false : true;
    document.getElementById('sortButton').innerText = sortByLatest ? 'Hilisemad' : 'Varasemad';
}
</script>

<template>
    <div class="flex justify-between mb-6 items-center">
        <p class="text-2xl lg:text-6xl">Projektid</p>
        <button v-on:click="sortBy" id="sortButton" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150">Hilisemad</button>
    </div>
    <div>
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" v-for="(project, index) in projects" :key="index" class="duration-300 ease-in-out bg-zinc-700 rounded drop-shadow-md hover:bg-slate-600 flex flex-col lg:flex-row lg:h-36 mb-6">
            <img :src="project.image" class="rounded-l h-32 lg:w-2/5 lg:h-auto" style="object-fit: cover;">
            <div class="flex flex-col justify-between h-full p-2">
                <div>
                    <h1 class="text-2xl font-['CourierBold']">{{project.title}}</h1>
                    <p>{{ getShortDesc(index) }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-neutral-300">{{project.date}}</p>
                    <p class="text-blue-300">{{project.lang}}</p>
                </div>
            </div>
        </router-link>
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