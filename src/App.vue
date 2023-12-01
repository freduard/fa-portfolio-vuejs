<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Navigation } from 'swiper';
import 'swiper/css';

import { ref, onMounted } from 'vue'
import Header from './components/Header.vue';
import Index from './views/Index.vue';
import Services from './views/Services.vue';


const modules = [
    Mousewheel,
    Navigation
]

const currentSection = ref()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
      if(entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  },
  {
    rootMargin: '0px 0px -50% 0px',
  }
  )
  
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <article class="wrapper"></article>
  <Header position="fixed" :current-section="currentSection" />
  
  <swiper
  class="h-screen w-screen"
  :hash-navigation="{
    watchState: true,
  }"
  :slides-per-view="'auto'"
  :speed="400"  
  :direction="'vertical'"
  :mousewheel="true"
  :modules="modules"
  :breakpoints="{
    '640': {
      allowTouchMove: false
    }
  }"
  >
    <swiper-slide data-hash="0" class="overflow-hidden w-screen min-h-screen">
      <section id="0" class="bg-white w-full"></section>
      <Index />
    </swiper-slide>
    <swiper-slide data-hash="1" class="router-slide min-h-screen w-screen overflow-hidden z-50">
      <section id="1" class="bg-white top-0 w-full"></section>
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <div :key="route.fullPath">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </swiper-slide>
    <swiper-slide data-hash="2" class="min-h-screen w-screen overflow-hidden">
      <section id="2" class="bg-white w-full"></section>
      <Services />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease-out;

}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

html {
  scroll-behavior: smooth;
}

.wrapper {
  position: fixed;
  filter: blur(16px) brightness(.5);
  scale: 1.1;
  animation: scroll 100s linear infinite;
  background: url('./assets/images/photo-1465146633011-14f8e0781093.avif'),
    #111111;
  color: #eee;
  height: 100vh;
  min-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  perspective-origin: 50% 50%;
}

@keyframes scroll {
  100% {
    background-position: 0px -400%;
  }
}

/* Fallback if the operatring system prefers reduced motion*/
@media (prefers-reduced-motion) {
  .wrapper {
    animation: scroll 800s linear infinite;
  }
}

@media (min-width: 670px) {
  .title {
    font-size: 5rem;
  }
}
</style>

