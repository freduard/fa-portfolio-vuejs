<script setup>
import { projects } from '../projects.js'
import { getCurrentInstance } from 'vue'
import { Pagination, A11y, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [
    Pagination,
    Mousewheel,
    A11y
]

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

function onSwiper(){
    console.log("Swiper Init")
}
</script>

<template>
    <div class="bg-white w-full observable" id="1"></div>
    <div class="bg-zinc-700 h-screen px-40">
        <div class="h-full py-32 flex flex-col gap-4">
            <h1 class="text-white text-5xl font-bold px-8">Projektid</h1>
            <swiper
            class="h-full px-8"
            :modules="modules"
            :space-between="25"
            :direction="'vertical'"
            :slides-per-view="2"
            :pagination="{ clickable: true }"
            mousewheel
            @swiper="onSwiper"            
            >
                <swiper-slide v-for="(project, index) in projects" :key="index" class="grid drop-shadow-md grid-cols-3 bg-zinc-600 rounded">
                    <img :src="project.image" class="rounded-l grid-cols-1 w-full h-full" style="object-fit: cover;">
                    <div class="col-span-2 p-4">
                        <p class="text-2xl text-white font-bold h-full">{{ project.title }}</p>
                        
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- <div class="swiper h-full">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-slate-50">Slide 1</div>
                <div class="swiper-slide bg-slate-50">Slide 2</div>
                <div class="swiper-slide bg-slate-50">Slide 3</div>
                <div class="swiper-slide bg-slate-50">Slide 4</div>
                ...
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </div> -->

        <!-- <Swiper class="h-full px-0">
            <swiper-slide v-for="(project, index) in projects" :key="index" class="px-12">
                <img :src="project.image" class="h-full w-full absolute -z-50 rounded" style="object-fit: cover; ">
                <p class="text-4xl text-white font-bold p-24">{{ project.title }}</p>
            </swiper-slide>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev bg-slate-500"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>
        </Swiper> -->
    </div>
</template>