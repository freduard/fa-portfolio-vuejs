<script setup>
import Header from '../components/Header.vue';

const props = defineProps({
    state: String
})
</script>

<template>
    <Header position="fixed" :bg-on-scroll="true" :bg-clear="false" />
    <div class="h-screen w-screen min-h-[650px] bg-zinc-700 flex flex-col justify-center gap-5 items-center text-white">
        <div v-if="props.state == 1" class="bg-green-700 p-2 rounded drop-shadow-md flex gap-2">
            <p class="text-xl text-center font-bold">Tänan!</p>
            <p class="text-xl text-center">Võtan teiega esimesel võimalusel ühendust.</p>
        </div>
        <div v-if="props.state == 2" class="bg-[#E7685D] p-2 rounded drop-shadow-md flex gap-2" id="alert">
            <p class="text-xl text-center">Midagi läks valesti! Kontakteeru minuga otse: <a href="mailto:aitfredy@gmail.com" class="underline">aitfredy@gmail.com</a></p>
        </div>
        <form class="w-full px-4 sm:px-12 md:px-24 z-50 lg:px-48 xl:w-1/2 xl:px-0" action="https://tak21fredyait.itmajakas.ee/" method="post">
            <p class="text-3xl md:text-4xl xl:text-5xl font-bold mb-3 xl:mb-6 lg:mr-24">Kontakteeru</p>
            <div class="flex flex-col gap-3">
                <div>
                    <p class="text-md md:text-xl">Nimi</p>
                    <input type="text" name="name" required="required" class="text-md md:text-xl p-1 outline-none rounded bg-zinc-800 focus:drop-shadow-md duration-150 w-full">
                </div>
                <div>
                    <p class="text-md md:text-xl">E-Mail</p>
                    <input type="text" name="emanueladdresshaha" required="required" class="text-md md:text-xl p-1 bg-zinc-800 rounded w-full outline-none focus:drop-shadow-md duration-150">
                    <input type="text" name="email" autocomplete="off" class="hidden">
                    <input type="text" name="website" autocomplete="off" class="hidden">
                </div>
                <div>
                    <p class="text-md md:text-xl">Sõnum</p>
                    <textarea name="message" rows="3" spellcheck="false" required="required" class="text-md md:text-xl w-full resize-none outline-none rounded bg-zinc-800 p-1 focus:drop-shadow-md duration-150"></textarea>
                </div>
                <button type="submit" name="submit" class="bg-zinc-600 p-2 w-full m-auto lg:w-1/2 text-md md:text-xl rounded hover:bg-slate-600 duration-150 hover:drop-shadow-md">Submit</button>
            </div>
        </form>
    </div>
</template>