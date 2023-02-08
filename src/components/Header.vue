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
    'KODU',
    'PROJETKID',
    'KONTAKT'
]

onMounted(() => {
    const header = document.querySelector('header')

    if(props.position != ""){
        header.classList.add(props.position)
    }
})


</script>

<template>
    <header class="h-12 z-50 text-white items-center fixed w-full flex justify-between px-2 sm:px-12 md:px-24 lg:px-36 2xl:px-48 font-['quicksand'] font-semibold">
        <button class="h-full" v-on:click="slideTo(0)"><img src="../assets/logos/fa_logo.svg" class="h-full p-2" alt=""></button>
        <div class="sm:flex h-full hidden">
            <button v-for="(header, index) in headers" :key="header" v-on:click="slideTo(index)" :class="[{ active: index == currentSection }, `h-full hover:bg-white text-sm lg:text-base hover:text-black hover:drop-shadow-md duration-150 flex items-center px-4`]">
                {{ header }}
            </button>
        </div>
        <div class="sm:hidden flex h-full">
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
    color: rgb(244 63 94);
}
</style>