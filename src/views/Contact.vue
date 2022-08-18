<template>
    <div class="p-12 flex flex-col justify-center items-center text-[#E7685D] h-screen">
        <form v-if="props.state == 0" action="https://tak21fredyait.itmajakas.ee/" method="post" class="gap-10 flex flex-col items-center w-1/2">
            <div class="flex justify-between w-full items-center">
                <h1 class="text-7xl">Contact me!</h1>
                <router-link to="/"><XIcon class="w-14" /></router-link>
            </div>
            <div class="w-full">
                <p class="text-4xl">Name</p>
                <input type="text" name="name" required="required" class="text-3xl w-full outline-none">
            </div>
            <div class="w-full">
                <p class="text-4xl">E-Mail</p>
                <input type="text" name="emanueladdresshaha" required="required" class="text-3xl w-full outline-none">
                <input type="text" name="email" autocomplete="off" class="hidden">
                <input type="text" name="website" autocomplete="off" class="hidden">
            </div>
            <div class="w-full">
                <p class="text-4xl">Message</p>
                <textarea name="message" rows="3" spellcheck="false" required="required"  class="text-3xl w-full resize-none outline-none"></textarea>
            </div>
            <button type="submit" name="submit" class="bg-black border-[#E7685D] border-2 hover:bg-[#E7685D] text-4xl hover:text-black duration-150 p-2 px-4">submit</button>
        </form>
        <div v-if="props.state == 1" class="flex flex-col items-center justify-center gap-10">
            <h1 class="text-9xl">Thank you!</h1>
            <p class="text-4xl">I've received your message and will get back to you as soon as possible.</p>
            <router-link to="/" class="text-4xl underline">Home</router-link>
        </div>
    </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline'

const props = defineProps({
    state: String
})
</script>

<style>

</style>