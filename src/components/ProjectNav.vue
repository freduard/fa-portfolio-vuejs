<script setup>
import { projects } from '../projects.js'
import { ArrowRightIcon } from '@heroicons/vue/outline'
import { ArrowLeftIcon } from '@heroicons/vue/outline'
import { onMounted } from 'vue';

const project = projects[props.projectIndex]
const attrLength = Object.keys(project).length - 7

const props = defineProps({
    projectIndex: String
})

onMounted(() => {
    const navigationBar = document.getElementById('navigationBar')
    const navigationContents = document.getElementById('navigationContents')
    const nav = document.getElementById('nav')

    navigationBar.addEventListener('click', () => {
        if(navigationContents.style.maxHeight != '330px') {
            navigationBar.classList.replace('rounded', 'rounded-t')
            navigationBar.classList.replace('drop-shadow-none', 'drop-shadow-md')
            navigationContents.classList.add('drop-shadow-md')
            navigationContents.style.maxHeight = '330px'
        } else {
            navigationBar.classList.replace('rounded-t', 'rounded')
            navigationBar.classList.replace('drop-shadow-md', 'drop-shadow-none')
            navigationContents.classList.remove('drop-shadow-md')
            navigationContents.style.maxHeight = '0px'
        }
        
    })

    window.addEventListener('scroll', () => {
        if(scrollY >= 75) {
            nav.classList.add('drop-shadow-md')
        } else {
            nav.classList.remove('drop-shadow-md')
        }
    })
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
</script>

<template>
    <nav class="sticky top-0 px-4 sm:px-12 md:px-24 lg:px-48 bg-zinc-600 py-2 text-white duration-150" id="nav">
        <div class="flex gap-2 rounded-b items-center w-full">
            <router-link :to="{ path: '/Project', query: { projectIndex: projectNavigator(false) }}" class="flex hover:bg-slate-600 p-2 rounded items-center gap-2 drop-shadow-md duration-150"><ArrowLeftIcon class="w-5 mb-[1px]"/></router-link>
            <router-link :to="{ path: '/Project', query: { projectIndex: projectNavigator(true) }}" class="flex hover:bg-slate-600 p-2 rounded items-center justify-end gap-2 drop-shadow-md duration-150"><ArrowRightIcon class="w-5 mb-[1px]"/></router-link>
            <div class="w-full" id="navWrapper">
                <div class="w-full flex flex-col rounded drop-shadow-none duration-150 bg-zinc-800 hover:bg-slate-600 hover:drop-shadow-md" id="navigationBar">
                    <p class="p-1.5 text-sm sm:text-base">Projektid / {{ project.title }}</p>
                    <div class="text-sm sm:text-base flex flex-col top-8 sm:top-9 w-full absolute duration-500 ease-in-out max-h-0 overflow-hidden rounded-b bg-zinc-800" id="navigationContents">
                        <router-link class="py-1.5 hover:bg-slate-600 duration-150 px-1.5" :to="{ path: '/Project', query: { projectIndex: index }}" v-for="(project, index) in projects">{{ project.title }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>