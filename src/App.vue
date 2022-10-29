<script>
import SideNavVue from './components/SideNav.vue';

export default {
  components: {
    SideNavVue
  },
}
</script>

<template>
  <img src="./assets/images/dark-wallpaper.png" alt="">
  <div class="h-screen w-screen bg-zinc-900 p-6 lg:p-12 grid grid-cols-3 gap-6 lg:gap-12">
      <SideNavVue />

      <div class="col-span-2 bg-zinc-800 h-full rounded drop-shadow-md p-12 flex flex-col justify-between items-center overflow-x-hidden">
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

