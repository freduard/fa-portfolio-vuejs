<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition name="route" mode="out-in">
        <div :key="route.fullPath">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
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

      
  </div> -->

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

