<template>
    <div class="flex justify-between mb-6 items-center">
        <p class="text-6xl">Projektid</p>
        <button v-on:click="sortBy" id="sortButton" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150">{{sortByLatest ? 'Hilisemad' : 'Varasemad'}}</button>
    </div>
    <div class="grid grid-cols-2 2xl:grid-cols-3 gap-6">
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" v-for="(project, index) in projects" :key="index" class="hover:scale-[1.025] duration-300 ease-in-out h-fit"><div class="bg-zinc-700 rounded drop-shadow-md hover:bg-slate-600 duration-300 ease-in-out">
            <img :src="project.image" class="rounded-t w-full max-h-44" style="object-fit: cover;">
            <div class="flex flex-col gap-2 p-2">
                <h1 class="text-2xl font-['CourierBold']">{{project.title}}</h1>
                <p>{{ getShortDesc(index) }}</p>
                <div class="flex justify-between">
                    <p class="text-neutral-300">{{project.date}}</p>
                    <p class="text-blue-300">{{project.lang}}</p>
                </div>
            </div>
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

<script>
import { projects } from '../projects.js'

export default {
    data() {
        return {
            sortByLatest: true,
        }
    },
    methods: {
        getShortDesc (pIndex) {
            return projects[pIndex].p1.substring(0, 100) + '...';
        },

        sortBy() {
            projects.reverse();
            this.$forceUpdate();
            this.sortByLatest = this.sortByLatest ? false : true;
        }
    },
    setup() {
        return { projects };
    }
}


</script>