<script setup>
import { services } from '../services'
</script>

<template>
    <div class="w-full h-full overflow-hidden text-white">
        <div class="px-12 md:px-24 lg:px-36 2xl:px-48 w-full h-full">
            <h1 class="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold py-16 lg:py-28 xl:py-32 font-['mrdafoe']">
                Services
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-h-[750px] overflow-auto py-24 pb-44 lg:pb-0 sm:py-32 lg:py-24 xl:py-24 gap-6 lg:gap-12 font-['quicksand'] px-4">
                <div v-for="(service, index) in services" :key="index" class="bg-zinc-900 rounded-xl border border-neutral-800 drop-shadow-cust p-6 -z-20 lg:z-0 hover:brightness-110 hover:scale-105 duration-150 gap-2 flex flex-col">
                    <div>
                        <h1 class="text-base md:text-xl font-bold">{{ service.title }}</h1>
                        <p>{{ service.priceRange }}</p>
                    </div>
                    <p class="text-sm lg:text-base">{{ service.description }}</p>
                </div>
            </div>
        </div>
        <div class="absolute -top-64  h-1/2 rotate-6 scale-125 w-full bg-zinc-900 drop-shadow-md -z-10" />
        <div class="absolute -top-64 lg:-top-44 -left-12 h-96 -rotate-12 scale-125 w-full bg-stone-800 drop-shadow-md -z-10" />
        
    </div>
</template>