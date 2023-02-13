<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { projects } from '../projects.js'
import { ChevronDownIcon } from '@heroicons/vue/outline';

const project = projects[props.projectIndex]
const attrLength = Object.keys(project).slice(8)

const modules = [
    Navigation
]

function titleToUpper(title) {
    return title.toUpperCase()
}

function slideNext() {
  const swiper = document.querySelector('.swiper.proje').swiper;
  swiper.slideNext()
}

function slidePrev() {
  const swiper = document.querySelector('.swiper.proje').swiper;
  swiper.slidePrev()
}

function dropDown(id) {
    const imageDropdown = document.getElementById(id)
    const caret = imageDropdown.querySelector('div svg')
    if(imageDropdown.children[1].classList.contains('max-h-[200px]')){
        imageDropdown.children[1].classList.replace('max-h-[200px]', 'max-h-[0px]')
        imageDropdown.classList.replace('text-rose-500', 'text-white')
        caret.style.transform = 'rotate(0deg)';
    } else {
        imageDropdown.children[1].classList.replace('max-h-[0px]', 'max-h-[200px]')
        imageDropdown.classList.replace('text-white', 'text-rose-500')
        caret.style.transform = 'rotate(180deg)';
    }
}

const props = defineProps({
    projectIndex: String
})
</script>

<template>

    <div class="h-full gap-4 px-2 flex items-center">
        <div v-on:click="slideNext" class="swiper-button-next md:px-10 lg:px-14 2xl:px-20 hidden sm:block"></div>    
        <div v-on:click="slidePrev" class="swiper-button-prev md:px-10 lg:px-14 2xl:px-20 hidden sm:block"></div>
        <swiper
            class="proje h-full"
            :modules="modules"
            :speed="400"
        >
            <swiper-slide class="px-2 sm:px-12 md:px-24 lg:px-36 2xl:px-48 flex flex-col h-full sm:justify-center pt-16 sm:pt-0 font-['quicksand'] text-white" v-for="(project, index) in projects" :key="index">
                <h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold font-['mrdafoe'] w-full mb-4 flex justify-between">
                    {{ titleToUpper(project.title) }}
                    <router-link to="/" class="h-full font-['quicksand'] hover:bg-white text-sm lg:text-base hover:text-black hover:drop-shadow-md duration-150 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </router-link>
                </h1>
                <div class="flex text-sm lg:text-base font-bold font-['quicksand'] justify-between">
                    <div class="flex gap-1 sm:gap-3">
                        <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-rose-500 duration-150">GITHUB</a>
                        <p class="text-neutral-500 cursor-default select-none" v-else>GITHUB</p>
                        <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-rose-500 duration-150">FIGMA</a>
                        <p class="text-neutral-500 cursor-default select-none" v-else>FIGMA</p>
                        <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-rose-500 duration-150">ONLINE</a>
                        <p class="text-neutral-500 cursor-default select-none" v-else>ONLINE</p>
                    </div>
                    <div class="flex gap-1">
                        <h1 class="text-rose-500">KUUPÄEV</h1>
                        <p>{{ project.date }}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-justify">
                    <p v-for="p in attrLength" :key="p" class="text-sm sm:text-base">{{ project[`${p}`] }}</p>
                    <div v-on:click="dropDown('imageDropdown' + project.id)" class="bg-neutral-700 rounded hover:bg-neutral-600 text-white hidden sm:block" :id="`imageDropdown` + project.id">
                        <div class="flex justify-between" id="imgTextDiv">
                            <h1 class="p-1 font-semibold duration-300">Images</h1>
                            <ChevronDownIcon class="w-5 mr-1 duration-300" />
                        </div>
                        <img :src="project.image" class="rounded-b duration-300 max-h-[0px] w-full h-full" style="object-fit: cover;" alt="">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    <!-- <div class="pt-24 pb-12 gap-4 md:pb-0 md:pt-12 px-2 md:p-24 sm:px-12 md:px-24 lg:px-36 2xl:px-48 flex flex-col h-full justify-center text-white">
        
    </div> -->
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
