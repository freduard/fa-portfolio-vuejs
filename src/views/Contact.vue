<template>
    <div class="p-4 lg:p-12 flex flex-col justify-center items-center text-[#E7685D] h-screen">
        <form v-if="props.state != 1" action="https://tak21fredyait.itmajakas.ee/" method="post" class="gap-10 flex flex-col items-center w-full lg:w-1/2">
            <div v-if="props.state == 2" class="w-full bg-[#E7685D] text-black text-2xl overflow-hidden duration-1000 ease-in-out mt-10 lg:mt-0" id="alert">
                <p class="text-center p-2">Something went wrong, contact me directly at <a href="mailto:aitfredy@gmail.com" class="underline">aitfredy@gmail.com</a>.</p>
            </div>
            <div class="flex justify-between w-full items-center">
                <h1 class="text-4xl lg:text-7xl">Contact me!</h1>
                <router-link to="/"><XIcon class="w-10 lg:w-14" /></router-link>
            </div>
            <div class="w-full">
                <p class="text-2xl lg:text-4xl">Name</p>
                <input type="text" name="name" required="required" class="text-2xl w-full outline-none">
            </div>
            <div class="w-full">
                <p class="text-2xl lg:text-4xl">E-Mail</p>
                <input type="text" name="emanueladdresshaha" required="required" class="text-2xl w-full outline-none">
                <input type="text" name="email" autocomplete="off" class="hidden">
                <input type="text" name="website" autocomplete="off" class="hidden">
            </div>
            <div class="w-full">
                <p class="text-2xl lg:text-4xl">Message</p>
                <textarea name="message" rows="3" spellcheck="false" required="required"  class="text-2xl w-full resize-none outline-none"></textarea>
            </div>
            <button type="submit" name="submit" class="bg-black border-[#E7685D] border-2 hover:bg-[#E7685D] text-2xl lg:text-4xl hover:text-black duration-150 p-2 px-4">submit</button>
        </form>
        <div v-if="props.state == 1" class="flex flex-col items-center justify-center gap-10">
            <h1 class="text-4xl lg:text-9xl">Thank you!</h1>
            <p class="text-4xl">I've received your message and will get back to you as soon as possible.</p>
            <router-link to="/" class="text-4xl underline">Home</router-link>
        </div>
    </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/outline'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
    const alert = document.getElementById('alert');
    setTimeout(() => {
    alert.style.height = '0%'
    }, 2000)
})
    


const props = defineProps({
    state: String
})
</script>

<style>

</style>