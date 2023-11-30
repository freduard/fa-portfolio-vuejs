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
    <img src="../assets/images/desktopbg.png" alt="bmw" id="bgImage" class="fixed h-screen w-screen saturate-0 opacity-50 hidden md:block" style="object-fit: cover;">
    <img src="../assets/images/mobilebg.png" alt="bmw" id="bgImage" class="fixed h-screen w-screen saturate-0  md:hidden" style="object-fit: cover;">
    <div class="h-full gap-4 px-2 flex items-center bg-stone-900">
        <div v-on:click="slideNext" class="swiper-button-next md:px-10 lg:px-14 2xl:px-20 hidden sm:block"></div>    
        <div v-on:click="slidePrev" class="swiper-button-prev md:px-10 lg:px-14 2xl:px-20 hidden sm:block"></div>
        <swiper
            class="proje h-full"
            :modules="modules"
            :speed="400"
            :loop="true"
            :initial-slide="Number(projectIndex)"
        >
            <swiper-slide class="px-2 sm:px-12 md:px-24 lg:px-44 xl:64 2xl:px-96 flex flex-col h-full sm:justify-center pt-16 sm:pt-0 font-['quicksand'] text-white" v-for="(project, index) in projects" :key="index">
                <h1 class="text-xl sm:text-4xl lg:text-5xl font-bold font-['mrdafoe'] w-full mb-4 flex justify-between">
                    {{ titleToUpper(project.title) }}
                    <router-link to="/" class="h-full font-['quicksand'] hover:bg-white text-sm lg:text-base hover:text-black hover:drop-shadow-md duration-150 flex items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </router-link>
                </h1>
                
                <div class="flex flex-col gap-2 text-justify">
                    <div class="flex text-sm lg:text-base font-bold font-['quicksand'] justify-between">
                        <div class="flex gap-3">
                            <a :href="project.github" v-if="project.github" target="_blank" class="hover:text-[#E3292C] duration-150">GITHUB</a>
                            <p class="text-neutral-500 cursor-default select-none" v-else>GITHUB</p>
                            <a :href="project.figma" v-if="project.figma" target="_blank" class="hover:text-[#E3292C] duration-150">FIGMA</a>
                            <p class="text-neutral-500 cursor-default select-none" v-else>FIGMA</p>
                            <a :href="project.online" v-if="project.online" target="_blank" class="hover:text-[#E3292C] duration-150">ONLINE</a>
                            <p class="text-neutral-500 cursor-default select-none" v-else>ONLINE</p>
                        </div>
                        <div class="flex gap-4">
                            <p>{{ project.date }}</p>
                            <p class="text-[#E3292C] hidden sm:block">{{project.lang}}</p>
                        </div>
                    </div>                    
                    <div class="max-h-[65vh] lg:max-h-max overflow-auto flex flex-col gap-2">
                        <div class="flex flex-col justify-center gap-2">
                            <p v-for="p in attrLength" :key="p" class="text-sm sm:text-base 2xl:text-xl">{{ project[`${p}`] }}</p>  
                        </div>
                    </div>
                    <div class="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-2">
                        <img :src="project.image" class="rounded w-full" style="object-fit: cover;" alt="">
                        <img :src="project.image" class="rounded w-full" style="object-fit: cover;" alt="">
                        <img :src="project.image" class="rounded w-full" style="object-fit: cover;" alt="">
                        <img :src="project.image" class="rounded w-full" style="object-fit: cover;" alt="">
                    </div>
                    <!-- <div v-on:click="dropDown('imageDropdown' + project.id)" class="bg-neutral-700 rounded hover:bg-neutral-600 text-white duration-300 2xl:hidden" :id="`imageDropdown` + project.id">
                        <div class="flex justify-between" id="imgTextDiv">
                            <h1 class="p-2 font-semibold text-sm sm:text-base duration-300">IMAGES</h1>
                            <ChevronDownIcon class="w-5 mr-1 duration-300" />
                        </div>
                        <img :src="project.image" class="rounded-b duration-300 max-h-[0px] w-full h-full" style="object-fit: cover;" alt="">
                    </div> -->
                    
                    <!-- <img :src="project.image" class="rounded w-full h-[35vh] hidden 2xl:block" style="object-fit: cover;" alt=""> -->
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
