<script setup>
    const props = defineProps({

    })
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
                <div class="flex w-full justify-between p-1 border-b border-neutral-500">
                    <a href=""><unicon name="instagram" fill="white" class="h-6 w-6" /></a>
                    <a href=""><unicon name="github-alt" fill="white" class="h-6 w-6" /></a>
                    <a href=""><unicon name="linkedin-alt" fill="white" class="h-6 w-6" /></a>
                </div>
                <a href="" class="p-1 font-['mrdafoe'] text-sm">aitfredy@gmail.com</a>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.svg {
    fill: red;
}

.social:hover .svg {
    fill: #E3292C;
}
</style>