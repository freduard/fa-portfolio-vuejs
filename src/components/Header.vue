<script setup>
import { CodeIcon } from '@heroicons/vue/outline'
import { HomeIcon } from '@heroicons/vue/outline'
import { PhoneIcon } from '@heroicons/vue/outline'
import { onMounted } from 'vue';

const props = defineProps({
    position: String,
    currentSection: String,
})

function slideTo(index) {
  const swiper = document.querySelector('.swiper').swiper;
  swiper.slideTo(index)
}

const headers = [
    'Kodu',
    'Projektid',
    'Teenused',
    'Minust'
]

onMounted(() => {
    const header = document.querySelector('header')

    if(props.position != ""){
        header.classList.add(props.position)
    }
})


</script>

<template>
    <header class="h-12 md:px-14 z-50 text-white items-center fixed w-full flex justify-between lg:justify-around font-['quicksand'] font-semibold">
        <button class="h-full" v-on:click="slideTo(0)"><img src="../assets/logos/fa_logo.svg" class="h-full p-2 max-h-12 sm:px-12" alt=""></button>
        <div class="lg:flex h-full max-h-12 hidden justify-between w-96">
            <button v-for="(header, index) in headers" :key="header" v-on:click="slideTo(index)" :class="[{ active: index == currentSection }, `h-full hover:bg-white text-sm lg:text-base hover:text-black font-bold hover:drop-shadow-md duration-150 flex items-center px-4`]">
                {{ header }}
            </button>
            
        </div>
        <div class="lg:hidden flex h-full sm:px-12">
            <button v-for="(header, index) in headers" :key="header" v-on:click="slideTo(index)" :class="[{ active: index == currentSection }, `h-full text-sm lg:text-base hover:drop-shadow-md duration-150 flex items-center`]">
                <HomeIcon class="h-full p-2" v-if="index == 0"/>
                <CodeIcon class="h-full p-2" v-if="index == 1" />
                <PhoneIcon class="h-full p-2" v-if="index == 2" />
            </button>
        </div>
    </header>
</template>

<style scoped>
.active {
    color: #E3292C;
}
</style>