<script setup>
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { projects } from '../projects.js'

const modules = [
    Pagination,
    Autoplay,
    Scrollbar
]

let mobile;

if(window.innerWidth <= 768) {
    mobile = true;
}

</script>

<template>
    <img src="../assets/images/desktopbg.png" alt="bmw" id="bgImage" class="fixed h-screen w-screen -z-50 saturate-0 opacity-50 hidden md:block" style="object-fit: cover;">
    <img src="../assets/images/mobilebg.png" alt="bmw" id="bgImage" class="fixed h-screen w-screen -z-50 saturate-0  md:hidden" style="object-fit: cover;">
    <div class="flex flex-col justify-center h-full w-full font-['quicksand'] text-white">
        <div class="px-2 sm:px-12 md:px-24 lg:px-36 2xl:px-48">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold font-['mrdafoe'] w-fit">
                PROJEKTID
                <div class="flex gap-6 font-['quicksand'] font-semibold text-sm lg:text-lg">
                    <div class="flex gap-1 ">
                        <h1 class="text-rose-500">KOKKU</h1>
                        <p>{{ projects.length }}</p>
                    </div>
                    <div class="flex gap-1">
                        <h1 class="text-rose-500">KLIENTE</h1>
                        <p>2</p>
                    </div>
                </div>
            </h1>
        </div>
        <div class="flex items-center">
            <swiper v-if="mobile"
                class="w-full px-2 sm:px-4 py-4 sm:py-8"
                :css-mode="true"
                :modules="modules"
                :scrollbar="{
                    draggable: true
                }"
                :autoplay="{
                    disableOnInteraction: true,
                    delay: 2500
                }"
                :space-between="25"
                :breakpoints="{
                    '450': {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    '720': {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    '1024': {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    '1280': {
                        slidesPerView: 5,
                    }
                }"
                >
                <swiper-slide v-for="(project, index) in projects" :key="index" class="gap-2 bg-neutral-700 rounded proj-card">
                    <router-link :to="{ path: '/Project', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}">
                        <img :src="project.image" class="rounded-t h-64 sm:h-48 w-full grayscale duration-150" style="object-fit: cover;">
                        <div class="p-2">
                            <h1 class="text-rose-500 font-semibold truncate">{{project.title}}</h1>
                            <p class="line-clamp-3">{{ project.p1 }}</p>
                            <div class="flex justify-between text-neutral-300">
                                <p class="truncate">{{project.date}}</p>
                                <p class="text-indigo-200 truncate">{{project.lang}}</p>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
            <swiper v-if="!mobile"
                class="w-full px-2 sm:px-4 py-4 sm:py-8"
                :modules="modules"
                :scrollbar="{
                    draggable: true
                }"
                :autoplay="{
                    disableOnInteraction: true,
                    delay: 2500
                }"
                :space-between="25"
                :breakpoints="{
                    '450': {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    '720': {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    '1024': {
                        slidesPerView: 4,
                        spaceBetween: 25
                    },
                    '1280': {
                        slidesPerView: 5,
                    }
                }"
                >
                <swiper-slide v-for="(project, index) in projects" :key="index" class="gap-2 bg-neutral-700 rounded proj-card">
                    <router-link :to="{ path: '/Project', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}">
                        <img :src="project.image" class="rounded-t h-64 sm:h-48 w-full grayscale duration-150" style="object-fit: cover;">
                        <div class="p-2">
                            <h1 class="text-rose-500 font-semibold truncate">{{project.title}}</h1>
                            <p class="line-clamp-3">{{ project.p1 }}</p>
                            <div class="flex justify-between text-neutral-300">
                                <p class="truncate">{{project.date}}</p>
                                <p class="text-indigo-200 truncate">{{project.lang}}</p>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
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