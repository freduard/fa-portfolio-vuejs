<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <Header position="fixed" :bg-on-scroll="false" :bg-clear="true"/>
    <div class="h-screen flex justify-center items-center min-h-[500px] text-white">
        <img src="../assets/images/bmw.jpg" alt="bmw" id="bgImage" class="fixed h-screen w-screen" style="object-fit: cover; filter: brightness(0.5) blur(100px) saturate(0.5); scale: 1.5; z-index: -50;">
        <div class="px-4 sm:px-12 md:px-24 lg:px-48">
            <div class="mb-8">
                <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold md:mb-2 xl:mb-4">Fredy Ait</h1>
                <p class="text-neutral-300 md:text-lg xl:text-xl">Noorem tarkvaraarendaja</p>
            </div>
            <div class="flex flex-col gap-4 md:text-lg xl:text-xl">
                <p>Olen Fredy ja alustasin programmeerimisega juba 9-aastaselt ning arvan, et olen selle ajaga jõudnud päris kaugele. 
                Nooremana nokitsesin GameMaker stuudioga, Javaga, veidi Pythoniga ja videote monteerimisega.</p>
                <p>Tänapäeval kasutan mitu erinvat keelt nagu C#, Pythonit, JavaScripti ja PHP'd.</p>
                <p>Vabal ajal meeldib mulle luua rakendusi, skripte ja veebisaite.</p>
            </div>
        </div>
    </div>
</template>