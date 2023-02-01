<script setup>
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { CodeIcon } from '@heroicons/vue/outline'
import { HomeIcon } from '@heroicons/vue/outline'
import { DocumentTextIcon } from '@heroicons/vue/outline'
import { PhoneIcon } from '@heroicons/vue/outline'
import { projects } from '../projects.js'
import { onMounted } from 'vue';

const props = defineProps({
    position: String,
    bgOnScroll: Boolean,
    bgClear: Boolean
})

onMounted(() => {
    const header = document.querySelector('header')
    const dropDownBtn = document.getElementsByClassName('dropDownBtn')[0]
    const dropDownContents = document.getElementById('dropDownContents')

    dropDownBtn.addEventListener('click', () => {
        if(dropDownBtn.style.transform != 'rotate(180deg)'){
            dropDownBtn.style.transform = 'rotate(180deg)'
            dropDownContents.style.maxHeight = '230px'
            
        } else {
            dropDownBtn.style.transform = 'rotate(0deg)'
            dropDownContents.style.maxHeight = '0'
        }
        
    })

    if(props.position != ""){
        header.classList.add(props.position)
    }

    if(props.bgOnScroll){
        window.addEventListener('scroll', () => {
            if(scrollY > 30) {
                header.classList.add('drop-shadow-md')
            }
            else {
                header.classList.remove('drop-shadow-md')
            }
        })
    }
    
    if(!props.bgClear) {
        header.classList.add('bg-zinc-600')
    }
})


</script>

<template>
    <!-- <header class="h-16 md:hidden flex w-full justify-between sm:px-12 md:px-24 z-50 lg:px-48 duration-200">
        
    </header> -->
    <header class="h-16 md:h-[10vh] flex w-full justify-between px-4 sm:px-12 md:px-24 z-50 lg:px-48 py-4 duration-200">
        <img src="../assets/logos/fa_logo.svg"  alt="" class="h-full md:hidden">
        <nav class="md:hidden flex items-center font-bold text-[#ddd] border-[#ddd] text-xs 2xl:text-sm">
            <router-link class="border-b-2 border-transparent p-2 flex justify-center items-center" to="/" ><HomeIcon class="w-8"/></router-link>
            <router-link class="border-b-2 border-transparent p-2 flex justify-center items-center" to="/Projects" ><CodeIcon class="w-8"/></router-link>
            <router-link class="border-b-2 border-transparent p-2 flex justify-center items-center" to="/Documents" ><DocumentTextIcon class="w-8"/></router-link>
            <router-link class="border-b-2 border-transparent p-2 flex justify-center items-center" :to="{ path: '/Contact', query: { state: 0 }}" ><PhoneIcon class="w-8"/></router-link>
        </nav>
        <img src="../assets/logos/fa_logo.svg"  alt="" class="hidden md:block h-full">
        <nav class="hidden md:flex items-center gap-5 font-bold text-[#ddd] border-[#ddd] text-xs">
            <router-link to="/" class="h-full flex items-center border-b-2 border-transparent px-2 2xl:px-4 hover:text-white hover:border-white duration-200 drop-shadow">KODU</router-link>
            <div class="h-full flex justify-center">
                <div class="flex h-full items-center">
                    <router-link to="/Projects" class="h-full flex items-center border-b-2 border-transparent px-2 2xl:px-4 hover:text-white hover:border-white duration-200 drop-shadow gap-1">PROJEKTID</router-link>
                    <ChevronDownIcon class="w-5 h-5 mb-0.5 duration-300 ease-in-out dropDownBtn" />
                </div>
                <div class="bg-zinc-800 rounded top-[10vh] max-h-0 overflow-hidden absolute flex flex-col duration-300 ease-in-out z-50 drop-shadow-md" id="dropDownContents">
                    <router-link class="py-1.5 hover:bg-slate-600 duration-150 px-1.5" :to="{ path: '/Project', query: { projectIndex: index }}" v-for="(project, index) in projects">{{ project.title }}</router-link>
                </div>
            </div>
            <router-link to="/Documents" class="h-full flex items-center border-b-2 border-transparent px-2 2xl:px-4 hover:text-white hover:border-white duration-200 drop-shadow">DOKUMENDID</router-link>
            <router-link to="/Contact" class="h-full flex items-center border-b-2 border-transparent px-2 2xl:px-4 hover:text-white hover:border-white duration-200 drop-shadow">KONTAKT</router-link>
        </nav>
    </header>
</template>

<style scoped>
.router-link-active {
    border-color: white;
}
</style>