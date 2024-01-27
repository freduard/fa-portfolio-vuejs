<script setup>
import { IconInstagram, IconGithub, IconLinkedinIn } from '@iconify-prerendered/vue-fa-brands';
import { onMounted } from 'vue'

import Index from './components/Index.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

onMounted(() => {
    const sections = document.querySelectorAll('section')
    let isMobile = screen.width < 1024
    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 500;
            let sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if(isMobile) {
                    document.querySelector(".navigation a[href*=" + sectionId + "].mlink").children[0].children[0].setAttribute('fill', '#E3292C')
                } else {
                    document.querySelector(".navigation a[href*=" + sectionId + "].dlink").classList.add("active");
                }
            
            } else {
                if(isMobile) {
                    document.querySelector(".navigation a[href*=" + sectionId + "].mlink").children[0].children[0].setAttribute('fill', 'white')
                } else {
                    document.querySelector(".navigation a[href*=" + sectionId + "].dlink").classList.remove("active");
                }
            }
        });
    });
})
</script>

<template>
    <article class="wrapper h-screen w-screen -z-[9999]"></article>

    <Header />
    <div class="hidden sm:flex font-['mrdafoe'] items-center justify-center w-20 h-full fixed left-0 z-[1000]">
        <a href="mailto:aitfredy@gmail.com" class="hover:text-[#E3292C] duration-150" style="transform: rotate(-90deg);">aitfredy@gmail.com</a>
    </div>
    <div class="hidden sm:flex font-['mrdafoe'] items-center flex-col justify-center w-20 gap-5 h-full fixed right-0 z-[1000]">
        <a href="" class="flex items-center justify-center p-1"><IconInstagram class="h-6 w-6"/></a>
        <a href="" class="flex items-center justify-center p-1"><IconGithub class="h-6 w-6" /></a>
        <a href="" class="flex items-center justify-center p-1"><IconLinkedinIn class="h-6 w-6" /></a>
    </div>

    <section id="index"><Index /></section>
    <section id="about"><About /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
</template>


<style scoped>
a:hover >>> path {
    transition-duration: 150ms;
    color: #E3292C !important;
}
</style>

