<script setup>
import { onMounted } from 'vue'

import Index from './components/Index.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

onMounted(() => {
    const sections = document.querySelectorAll('section')
    // const navLinks = document.querySelectorAll('header nav a')
    let isMobile = screen.width < 1024
    window.addEventListener("scroll", () => {
        // Get current scroll position
        let scrollY = window.scrollY;
        
        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 500;
            let sectionId = current.getAttribute("id");
            
            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
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
    <div class="hidden sm:flex font-['mrdafoe'] items-center flex-col justify-center w-20 gap-4 h-full fixed right-0 z-[1000]">
        <!-- <a href="" class="social flex items-center justify-center"><unicon class="svg h-6 w-6" fill="white" hover-fill="#E3292C" name="instagram"  /></a>
        <a href="" class="social flex items-center justify-center"><unicon class="svg h-6 w-6" fill="white" hover-fill="#E3292C" name="github-alt" /></a>
        <a href="" class="social flex items-center justify-center"><unicon class="svg h-6 w-6" fill="white" hover-fill="#E3292C" name="linkedin-alt" /></a> -->
    </div>

    <section id="index"><Index /></section>
    <section id="about"><About /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
</template>

