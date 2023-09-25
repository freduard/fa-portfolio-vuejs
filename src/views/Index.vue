<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { onMounted } from 'vue';

const modules = [
    Pagination,
    Autoplay,
    EffectFade
]

function slideNext() {
  const swiper = document.querySelector('.swiper.pede').swiper;
  swiper.slideNext()
}
function slideProjects() {
  const swiper = document.querySelector('.swiper').swiper;
  document.getElementById('scrollHint').style.opacity = 0;
  swiper.slideNext()
}
function slidePrev() {
  const swiper = document.querySelector('.swiper.pede').swiper;
  swiper.slidePrev()
}

onMounted(() => {
    setTimeout(() => {
        document.getElementById('scrollHint').style.opacity = 1
    }, 7500)
})
</script>

<template>
    <img src="../assets/images/desktopbg.png" alt="bmw" id="bgImage" class="fixed h-screen w-screen -z-50 saturate-0 opacity-50 hidden md:block" style="object-fit: cover;">
    <img src="../assets/images/mobilebg.png" alt="bmw" id="bgImage" class="fixed h-screen w-screen -z-50 saturate-0  md:hidden" style="object-fit: cover;">
    <div class="h-full w-full text-white pt-24 pb-12 sm:gap-16 gap-8 md:gap-0 md:pb-0 md:pt-0 px-2 sm:px-12 md:px-24 lg:px-36 2xl:px-48 flex flex-col md:grid md:grid-cols-2 justify-center">
        <div class="flex flex-col items-center md:items-start justify-center gap-2">
            <p class="hidden md:block text-sm lg:text-lg text-rose-500 font-['quicksand'] font-semibold">─ Tere, ma olen</p>
            <p class="md:hidden text-sm lg:text-lg text-rose-500 font-['quicksand'] font-semibold">Tere, ma olen</p>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-['mrdafoe']">FREDY AIT</h1>
            <p class="text-sm lg:text-lg text-rose-500 font-['quicksand'] font-semibold">Noorem tarkvaraarendaja</p>
        </div>
        <div class="flex flex-col justify-center font-['quicksand']">
            <swiper 
            class="h-full pb-12 sm:pb-6 md:pb-0 w-full md:h-1/2 xl:h-1/3 pede"
            :modules="modules"
            :pagination="{
                clickable: true,
            }"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: true
            }"
            :effect="'fade'"
            :fade-effect="{
                crossFade: true
            }"
            :speed="500"
            >
                <swiper-slide class="p-2 text-left flex flex-col justify-center gap-2 sm:text-lg md:text-xl">
                    <p>Alustasin programmeerimisega juba 9-aastaselt ja olen selle ajaga omandanud palju.</p> 
                    <p>Nooremana nokitsesin GameMaker stuudioga, Javaga, Pythoniga ja videote monteerimisega.</p>
                </swiper-slide>
                <swiper-slide class="p-2 text-left flex flex-col justify-center gap-2 sm:text-lg md:text-xl">
                    <p>Tänapäeval kasutan mitu erinvat keelt nagu C#, Pythonit, JavaScripti ja PHP'd.</p>
                    <p>Vabal ajal meeldib mulle luua rakendusi, skripte ja veebisaite.</p>
                </swiper-slide>
                <swiper-slide class="p-2 text-left flex flex-col justify-center gap-2 sm:text-lg md:text-xl">
                    <p>Oskan...</p>
                    <ul>
                        <li>- HTML, JS/Vue.js, CSS/Tailwind (font-end)</li>
                        <li>- PHP & SQL (back-end)</li>
                        <li>- Python & AutoHotKey skriptimine</li>
                        <li>- C# & .NET äppid</li>
                    </ul>
                </swiper-slide>
            </swiper>
        </div>
        <div class="h-12 w-full sm:absolute bottom-0 left-0 flex justify-center items-center font-['quicksand'] font-semibold opacity-0 delay-[5000] duration-1000" id="scrollHint">
            <button v-on:click="slideProjects" class="h-full hover:text-rose-500 text-sm hover:drop-shadow-md duration-150 flex items-center px-4 ">
                <h1 class="flex items-center gap-2"><ChevronDownIcon class="h-4"/>PROJEKTID<ChevronDownIcon class="h-4"/></h1>
            </button>
        </div>
    </div>
</template>