<template>
    <div class="flex flex-col justify-between gap-5 p-4 lg:p-12 h-screen text-5xl text-[#E7685D]">
        <div>
            <div class="flex flex-col lg:flex-row lg:items-end">
                <!-- class="w-80 h-fit" -->
                <img class="w-40 lg:w-80 h-fit" src="../assets/logos/fa_logo.svg" alt="">
                <p class="hidden lg:block">Fredy Ait</p>
            </div>
        </div>
        <div class="flex flex-col gap-5 lg:gap-10 text-2xl lg:text-4xl">
            <p>Hei, ma olen Fredy.</p>
            <p>Alustasin programmeerimisega juba 9-aastaselt ning arvan, et olen selle vähese ajaga jõudnud päris kaugele. Varem tegelesin C# 
                rakenduste ja videote monteerimisega, hetkel tegelen peamiselt HTML, CSS, JavaScripti ja Pythoniga. Mulle meeldib ehitada ja arendada 
                veebisaite, programme ja skripte.</p>
            <router-link :to="{ path: '/Contact.vue', query: { state: 0 }}">Contact</router-link>

        </div>
        <div>
            <p class="text-6xl lg:text-8xl" id="ptag">Projektid</p>
        </div>
    </div>
    <Projects />
</template>

<script setup>
import Projects from '../components/Projects.vue'
</script>