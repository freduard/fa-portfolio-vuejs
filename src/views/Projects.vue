<script setup>
import Header from '../components/Header.vue';
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
    <Header position="fixed" :bg-on-scroll="true"/>
    <div class="bg-zinc-700 min-h-screen px-4 sm:px-12 md:px-24 lg:px-48 py-24 text-white">
        <div class="flex justify-between mb-4">
            <h1 class="text-3xl font-bold">Projektid</h1>
            <button v-on:click="sortBy" id="sortButton" class="bg-zinc-600 p-2 rounded hover:bg-slate-600 duration-150">Hilisemad</button>
        </div>
        <router-link :to="{ path: '/Project', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" v-for="(project, index) in projects" :key="index" class="duration-150 bg-zinc-600 hover:bg-slate-600 rounded drop-shadow-md hover:bg-slate-60 md:h-32 md:grid flex flex-col md:grid-cols-3 mb-6">
            <img :src="project.image" class="rounded-t max-h-[300px] md:max-h-fit md:rounded-l md:h-full w-full row-span-1 md:col-span-1" style="object-fit: cover;">
            <div class="flex flex-col justify-between h-fit md:h-full p-2 row-span-1 md:col-span-2">
                <div>
                    <h1 class="text-xl lg:text-2xl font-['CourierBold']">{{project.title}}</h1>
                    <p class="md:max-h-[48px] w-full overflow-hidden">{{ getShortDesc(index) }}{{ getShortDesc(index) }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-neutral-300">{{project.date}}</p>
                    <p class="text-blue-300">{{project.lang}}</p>
                </div>
            </div>
        </router-link>
    </div>
    <!-- <div class="flex justify-between mb-6 items-center">
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
    </div> -->
</template>

<style>
.hover-target {
    filter: saturate(0);
}

.hover-trigger:hover .hover-target {
    filter: saturate(1);
}
</style>