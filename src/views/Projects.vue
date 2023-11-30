<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Scrollbar, EffectCoverflow, Navigation } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { projects } from '../projects.js'

const modules = [
    Pagination,
    Autoplay,
    Scrollbar,
    EffectCoverflow,
    Navigation
]

let mobile;

if(window.innerWidth <= 768) {
    mobile = true;
}

</script>

<template>
    <div class="flex flex-col justify-center h-full w-full font-['quicksand'] text-white overflow-hidden">
        <div class="hidden md:block absolute w-full h-1/2 scale-[2] mt-[600px] bg-gradient-to-t from-stone-800 to-neutral-900" style="border-radius: 50%;"></div>
        <div class="px-2 sm:px-12 md:px-24 lg:px-36 2xl:px-48">
            <h1 class="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold  text-white font-['mrdafoe']">
                Projects
            </h1>
        </div>
        <div class="flex items-center">
            <swiper v-if="!mobile"
                class="w-full px-2 sm:px-4 py-4 sm:py-8"
                :modules="modules"
                :effect="'coverflow'"
                :navigation="true"
                :loop="true"
                :autoplay="{
                    disableOnInteraction: true,
                    delay: 3500
                }"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }"
                :breakpoints="{
                    '768': {
                        slidesPerView: 3
                    },
                    '1536': {
                        slidesPerView: 5,
                        coverflowEffect: {stretch: -200}
                    }
                }"
                >
                <swiper-slide v-for="(project, index) in projects" :key="index" class="font-['mrdafoe'] rounded border-2 border-neutral-700 bg-neutral-900 drop-shadow-lg">
                    <router-link :to="{ path: '/Project', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" class="hover:brightness-125 duration-150">
                        <img :src="project.image" class=" h-72 rounded-t brightness-75 w-full" style="object-fit: cover;">
                        <div class="p-4">
                            <h1 class="text-white text-3xl font-bold line-clamp-1 mb-2">{{project.title}}</h1>
                            <p class="line-clamp-3">{{ project['p1'] }}</p>
                        </div>
                        <div class="flex justify-between p-4 font-['quicksand'] font-medium">
                            <p class="text-neutral-300">{{project.date}}</p>
                            <p class="text-[#E3292C]">{{project.lang}}</p>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
            <swiper v-if="mobile"
                class="w-full px-2 sm:px-12 py-4 sm:py-8"
                :modules="modules"
                :cssMode="true"
                :scrollbar="{
                    draggable: true
                }"
                :autoplay="{
                    disableOnInteraction: true,
                    delay: 3500
                }"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: -100,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }"
                :spaceBetween="25"
                >
                <swiper-slide v-for="(project, index) in projects" :key="index" class="font-['mrdafoe'] rounded border-2 border-neutral-800 bg-neutral-900 drop-shadow-cust">
                    <router-link :to="{ path: '/Project', query: { projectIndex: projects.findIndex(item => item.id === project.id) }}" class="hover:brightness-125 duration-150">
                        <img :src="project.image" class=" h-72 rounded-t brightness-75 w-full" style="object-fit: cover;">
                        <div class="p-4">
                            <h1 class="text-white text-xl font-bold line-clamp-1 mb-2">{{project.title}}</h1>
                            <p class="line-clamp-3 text-sm">{{ project['p1'] }}</p>
                        </div>
                        <div class="flex justify-between p-4 font-['quicksand'] text-sm font-medium">
                            <p class="text-neutral-300">{{project.date}}</p>
                            <p class="text-[#E3292C]">{{project.lang}}</p>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
            <!-- <swiper v-if="mobile"
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
            </swiper> -->
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