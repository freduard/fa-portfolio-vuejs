<template>
    <div class="flex justify-between mb-6 items-center">
        <p class="text-2xl lg:text-6xl mr-[]">Dokumendid</p>
    </div>
    <div class="flex flex-col w-">
        <div v-for="(document, index) in documents" :key="index" class="duration-300 ease-in-out bg-zinc-700 rounded drop-shadow-md hover:bg-slate-600 mb-6">
            <div class="p-2 text-xl"><p>{{document.title}}</p></div>
            <embed type="application/pdf" class="w-full h-96 rounded-b" :src="document.document" style="object-fit: cover;">
        </div>
    </div>
</template>

<script setup>
import { documents } from '../documents.js'
</script>