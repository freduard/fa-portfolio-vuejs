<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Navigation } from 'swiper';
import 'swiper/css';

import { ref, onMounted } from 'vue'
import Header from './components/Header.vue';
import Index from './views/Index.vue';


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
    <Header position="fixed" :current-section="currentSection" />
    
    <swiper 
    class="h-screen w-screen test"
    :hash-navigation="{
      watchState: true,
    }"
    :slides-per-view="'auto'"
    :css-mode="true"
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
      <swiper-slide data-hash="0" class="overflow-hidden min-h-screen">
        <section id="0" class="bg-white w-full"></section>
        <Index />
      </swiper-slide>
      <swiper-slide data-hash="1" class="router-slide min-h-screen">
        <section id="1" class="bg-white top-0 w-full"></section>
        <router-view v-slot="{ Component, route }">
          <transition name="route" mode="out-in">
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </swiper-slide>
      <swiper-slide data-hash="2">
        <section id="2" class="bg-white w-full"></section>
        <h1>KONTAKT</h1>
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
</style>

