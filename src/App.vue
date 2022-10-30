<script>
import SideNavVue from './components/SideNav.vue';

export default {
  components: {
    SideNavVue
  }
}
</script>

<template>
  <img src="./assets/images/bmw.jpg" alt="bmw" id="bgImage" class="fixed h-screen w-screen" style="object-fit: cover; filter: brightness(0.5) blur(100px) saturate(0.5); scale: 1.5;">
  <div class="h-screen w-screen bg-zinc-900 p-4 lg:p-12 grid grid-rows-6 lg:grid-cols-3 lg:grid-rows-none gap-4 lg:gap-12">
      <SideNavVue />

      <div class="lg:flex lg:col-span-2 row-span-5 lg:row-span-1 bg-zinc-800 h-full rounded drop-shadow-md p-4 lg:p-12 flex-col justify-between items-center overflow-x-hidden">
        <router-view v-slot="{ Component, route }">
          <transition name="route" mode="out-in">
            <div :key="route.fullPath">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </div>
  </div>

</template>

<style>
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
</style>

