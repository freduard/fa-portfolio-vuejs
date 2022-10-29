<script setup>
import { CodeIcon } from '@heroicons/vue/outline'
import { InformationCircleIcon } from '@heroicons/vue/outline'
import { DocumentTextIcon } from '@heroicons/vue/outline'
import { PhoneIcon } from '@heroicons/vue/outline'
</script>

<template>
    <div class=" bg-zinc-800 h-full rounded flex flex-col drop-shadow-md">
        <div class="p-8 lg:p-16 flex justify-center items-center">
            <img src="../assets/logos/fa_logo.svg" style="filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, .35));" draggable="false">
        </div>
        <div class="px-8 lg:px-16 text-xl flex flex-col gap-3 drop-shadow-md">
            <router-link to="/" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150 flex items-center gap-2"><InformationCircleIcon class="w-5"/>KODU</router-link>
            <router-link to="/Projects.vue" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150 flex items-center gap-2"><CodeIcon class="w-5"/>PROJEKTID</router-link>
            <router-link to="/Documents.vue" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150 flex items-center gap-2"><DocumentTextIcon class="w-5"/>DOKUMENDID</router-link>
            <router-link :to="{ path: '/Contact.vue', query: { state: 0 }}" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150 flex items-center gap-2"><PhoneIcon class="w-5"/>KONTAKT</router-link>
        </div>
    </div>
</template>

<style scoped>
a.router-link-active {
    background-color: rgb(51 65 85);
}

a.router-link-active:hover {
    background-color: rgb(71 85 105);
}
</style>