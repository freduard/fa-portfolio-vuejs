<template>
    <div class="p-12 flex flex-col justify-center items-center text-[#E7685D] h-screen">
        <form action="https://tak21fredyait.itmajakas.ee/" method="post" class="gap-10 flex flex-col items-center w-1/2">
            <div class="flex justify-between w-full items-center">
                <h1 class="text-7xl">Contact me!</h1>
                <router-link to="/"><XIcon class="w-14" /></router-link>
            </div>
            <div class="w-full">
                <p class="text-4xl">Name</p>
                <input type="text" name="name" class="bg-black border-[#E7685D] border-b-2 outline-none text-3xl w-full">
            </div>
            <div class="w-full">
                <p class="text-4xl">E-Mail</p>
                <input type="text" name="emanueladdresshaha" class="bg-black border-[#E7685D] border-b-2 outline-none text-3xl w-full">
                <input type="text" name="email" autocomplete="off" class="hidden">
                <input type="text" name="website" autocomplete="off" class="hidden">
            </div>
            <div class="w-full">
                <p class="text-4xl">Message</p>
                <textarea name="message" rows="3" class="bg-black border-[#E7685D] border-b-2 outline-none text-3xl w-full"></textarea>
            </div>
            <button type="submit" name="submit" class="bg-black border-[#E7685D] border-2 hover:bg-[#E7685D] text-4xl hover:text-black duration-150 p-2 px-4">submit</button>
        </form>
    </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline'
</script>

<style>

</style>