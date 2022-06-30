<template>
    <div class="flex flex-col justify-between gap-20 p-12 h-screen text-5xl text-[#E7685D]">
        <div>
            <div class="flex items-end">
                <img class="w-80 h-fit" src="../assets/logos/fa_logo.svg" alt="">
                <p>Fredy Ait</p>
            </div>
        </div>
        <div class="flex flex-col gap-10 text-4xl">
            <p>Hei, ma olen Fredy.</p>
            <p>Alustasin programmeerimisega juba 9-aastaselt ning arvan, et olen selle vähese ajaga jõudnud päris kaugele. Varem tegelesin C# 
                rakenduste ja videote monteerimisega, hetkel tegelen peamiselt HTML, CSS, JavaScripti ja Pythoniga. Mulle meeldib ehitada ja arendada 
                veebisaite, programme ja skripte.</p>
            <router-link to="/Contact.Vue">Contact</router-link>
        </div>
        <div>
            <!-- <a href="#projects" class="text-9xl" id="projects">Projektid</a> -->
            <p class="text-8xl">Projektid</p>
        </div>
    </div>
    <Projects />
</template>

<script setup>
import Projects from '../components/Projects.vue'
</script>