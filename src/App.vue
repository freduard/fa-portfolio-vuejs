<script setup>
import Index from './components/Index.vue';
import Projects from './components/Projects.vue';
import Documents from './components/Documents.vue';
import { ref, onMounted } from 'vue';

const headers = [
    'KODU',
    'PROJEKTID',
    'DOKUMENDID',
    'KONTAKT'
];

const currentSection = ref('')

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0) {
                currentSection.value = entry.target.getAttribute('id')
            }
        })
    },
    { 
      rootMargin: '0px 0px -90% 0px', 
    }
    )
    document.querySelectorAll('div.observable').forEach((section) => {
      observer.observe(section)
    })
})

window.addEventListener('scroll', function(){
  if(this.scrollY > 100){
    document.querySelector("header").style.backgroundColor = "rgb(82 82 91)";
    document.querySelector("header").classList.add("drop-shadow-md"); 
  } else{
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector("header").classList.remove("drop-shadow-md"); 
  }
})
</script>

<template>
  <header class="h-[10vh] fixed flex w-full justify-between px-12 lg:px-48 p-4 duration-200">
    <img src="./assets/logos/fa_logo.svg" class="h-full" alt="">
    <nav class="flex items-center gap-5 font-bold text-[#ddd] border-[#ddd] text-xs">
      <a v-for="(header, index) in headers" :key="header" :href="`#${index}`" :class="{active: index == currentSection}" class="h-full flex items-center border-t-2 border-b-2 border-transparent px-2 hover:text-white hover:border-white duration-200 drop-shadow">
        {{ header }}
      </a>
    </nav>
  </header>
  <Index/>
  <Projects/>
  <Documents/>
  <!-- <article class="bg-neutral-700">
    <section v-for="(header, index) in headers" :key="header" class="text-white h-screen">
      <h2 :id="index">{{ header }}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quasi nostrum. Nesciunt nulla suscipit mollitia veritatis, quibusdam rerum eos cum accusantium? Ipsa veniam voluptas laudantium fugiat voluptatem iste libero mollitia!</p>
    </section>
  </article> -->
  <!-- <img src="./assets/images/bmw.jpg" alt="bmw" id="bgImage" class="fixed h-screen w-screen" style="object-fit: cover; filter: brightness(0.5) blur(100px) saturate(0.5); scale: 1.5;">
  <div class="h-screen w-screen bg-zinc-900 p-4 lg:p-12 grid grid-rows-10 lg:grid-cols-3 lg:grid-rows-none gap-4 lg:gap-12">
      <SideNavVue />

      <div class="lg:flex lg:col-span-2 row-span-6 lg:row-span-1 bg-zinc-800 h-full rounded drop-shadow-md p-4 lg:p-12 flex-col justify-between items-center overflow-x-hidden componentWrapper">
        <router-view v-slot="{ Component, route }">
          <transition name="route" mode="out-in">
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </div>
  </div> -->

</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

html {
  scroll-behavior: smooth;
}

nav a.active {
  border-color: #ddd;
}
</style>

