<template>
    <div class="flex justify-between mb-6 items-center">
        <p class="text-2xl lg:text-6xl">Projektid</p>
        <button v-on:click="sortBy" id="sortButton" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150">{{sortByLatest ? 'Hilisemad' : 'Varasemad'}}</button>
    </div>
    <div>
        <router-link :to="{ path: '/Project.vue', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" v-for="(project, index) in projects" :key="index" class="hover:scale-[1.025] duration-300 ease-in-out bg-zinc-700 rounded drop-shadow-md hover:bg-slate-600 flex flex-col lg:flex-row lg:h-36 mb-6">
            <img :src="project.image" class="rounded-l h-32 lg:w-2/5 lg:h-auto" style="object-fit: cover;">
            <div class="flex flex-col justify-between h-full p-2">
                <h1 class="text-2xl font-['CourierBold']">{{project.title}}</h1>
                <p>{{ getShortDesc(index) }}</p>
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