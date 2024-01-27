<script setup>
import { IconInstagram, IconGithub, IconLinkedinIn } from '@iconify-prerendered/vue-fa-brands';
</script>

<template>
    <div class="w-full h-screen flex justify-center items-center lg:justify-normal px-12 sm:px-24 lg:px-36 xl:px-48 2xl:px-72">
        <div class="flex flex-col gap-12 items-center text-center lg:items-start lg:text-left">
            <div class="font-['mrdafoe'] font-semibold flex flex-col gap-4">
                <p class="text-sm md:text-base lg:text-lg xl:text-xl text-[#E3292C]">- I am</p>
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">Fredy Ait</h1>
                <p class="text-sm md:text-base lg:text-lg xl:text-xl text-[#E3292C]">Junior Software Developer</p>
            </div>
            <div>
                <p class="text-sm lg:text-base max-w-[30rem]">I'm an active young man who likes anything to do with computers, cars and fitness. 
                    I tinker with websites, programs, scripts and stay active in my free time.</p>
            </div>
            <div class="flex flex-col items-center max-w-48 sm:hidden">
                <div class="flex w-full justify-between p-1 pb-2 border-b border-neutral-500">
                    <a href="https://www.instagram.com/fredy.ait/" target="_blank"><IconInstagram class="h-7 w-7"/></a>
                    <a href="https://github.com/freduard" target="_blank"><IconGithub class="h-7 w-7" /></a>
                    <a href="https://www.linkedin.com/in/fredy-ait-7504b3227/" target="_blank"><IconLinkedinIn class="h-7 w-7" /></a>
                </div>
                <a href="" class="p-1 font-['mrdafoe'] text-sm">aitfredy@gmail.com</a>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
a:hover >>> path {
    color: #E3292C !important;
}
</style>