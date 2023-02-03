<script setup>
import Header from '../components/Header.vue';
import { documents } from '../documents.js'
</script>

<template>
    <Header position="fixed" :bg-on-scroll="true" :bg-clear="false"/>
    <div class="flex flex-col bg-zinc-700 min-h-screen px-4 sm:px-12 md:px-24 lg:px-48 py-24 text-white">
        <h1 class="text-3xl 2xl:text-6xl mb-4 font-bold">Dokumendid</h1>
        <div class="xl:grid xl:grid-cols-2 xl:gap-4">
            <div v-for="(document, index) in documents" :key="index" class="duration-300 ease-in-out bg-zinc-600 rounded drop-shadow-md hover:bg-slate-600 mb-6">
                <div class="p-2 text-xl"><p>{{document.title}}</p></div>
                <embed type="application/pdf" class="w-full h-[70vh] rounded-b" :src="document.document" style="object-fit: cover;">
            </div>
        </div>
    </div>
</template>