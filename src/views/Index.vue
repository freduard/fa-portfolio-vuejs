<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <Header position="fixed" :bg-on-scroll="false"/>
    <div class="h-screen text-white">
        <img src="../assets/images/bmw.jpg" alt="bmw" id="bgImage" class="fixed h-screen w-screen" style="object-fit: cover; filter: brightness(0.5) blur(100px) saturate(0.5); scale: 1.5; z-index: -50;">
        <div class="p-48">
            <h1 class="text-7xl font-bold">Fredy Ait</h1>

        </div>
    </div>
</template>