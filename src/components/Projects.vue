<script setup>
import { projects } from '../projects.js'

let cardExpanded = false

function expandCard(id) {
    let card = document.getElementById(id)
    let cardPara = card.children[1]
    
    if(!cardExpanded) {
        card.classList.replace('max-h-40', 'max-h-screen')
        card.classList.add('cardExpanded')
        cardPara.classList.remove('line-clamp-2')
        cardExpanded = true;
    } else {
        if(card.classList.contains('cardExpanded')) {
            card.classList.replace('max-h-screen', 'max-h-40')
            card.classList.remove('cardExpanded')
            cardPara.classList.add('line-clamp-2')
            cardExpanded = false;
        } else {
            let expandedCard = document.querySelector('.cardExpanded')
            expandedCard.classList.replace('h-auto', 'h-36')
            expandedCard.classList.remove('cardExpanded')
            card.classList.replace('h-36', 'h-auto')
            card.classList.add('cardExpanded')
            cardExpanded = true;
        }
    }
}
</script>

<template>
    <div class="w-full min-h-screen overflow-x-hidden font-['mrdafoe'] bg-neutral-900 pb-12 bg-dots">
        <div class="w-full p-2 projectsHeader flex justify-between items-center px-2 gap-2 bg-neutral-900">
            <div class="w-full border-b border-neutral-500"></div>
            <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold">PROJECTS</h1>
            <div class="w-full border-b border-neutral-500"></div>
        </div>
        <div class="flex flex-col p-6 sm:px-20 lg:p-32 lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-12 font-mono text-sm">
            <div v-for="(project, index) in projects" :key="index" :id="'p' + index" @click="expandCard('p' + index)" class="w-full flex flex-col justify-between p-4 sm:p-6 rounded-lg bg-neutral-900 border-neutral-700 border">
                <div class="lg:hidden flex flex-col gap-2">
                    <h1 class="z-10 text-lg font-semibold sm:text-2xl">{{ project.title }}</h1>
                    <div class="flex gap-4 text-base sm:text-lg">
                        <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-[#E3292C] duration-150">GITHUB</a>
                        <p class="text-neutral-500 cursor-default select-none" v-else>GITHUB</p>
                        <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-[#E3292C] duration-150">FIGMA</a>
                        <p class="text-neutral-500 cursor-default select-none" v-else>FIGMA</p>
                        <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-[#E3292C] duration-150">ONLINE</a>
                        <p class="text-neutral-500 cursor-default select-none" v-else>ONLINE</p>
                    </div>
                    <p class="font-['quicksand'] font-semibold text-neutral-200">{{ project.p1 }}</p>
                    <div class="flex justify-between">
                        <p class="font-semibold text-slate-400">{{ project.date }}</p>
                        <p class="font-semibold text-slate-400">{{ project.lang }}</p>
                    </div>
                </div>
                <div class="hidden lg:flex flex-col justify-between h-full gap-2">
                    <div class="flex flex-col gap-2">
                        <h1 class="z-10 text-lg font-semibold lg:text-2xl">{{ project.title }}</h1>
                        <div class="flex gap-4 text-lg">
                            <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-[#E3292C] duration-150">GITHUB</a>
                            <p class="text-neutral-500 cursor-default select-none" v-else>GITHUB</p>
                            <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-[#E3292C] duration-150">FIGMA</a>
                            <p class="text-neutral-500 cursor-default select-none" v-else>FIGMA</p>
                            <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-[#E3292C] duration-150">ONLINE</a>
                            <p class="text-neutral-500 cursor-default select-none" v-else>ONLINE</p>
                        </div>
                        <p class="font-['quicksand'] font-semibold text-neutral-200 ">{{ project.p1 }}</p>
                    </div>
                    <div class="flex justify-between text-base">
                        <p class="text-slate-400">{{ project.date }}</p>
                        <p class="text-slate-400">{{ project.lang }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

