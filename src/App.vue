<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.fullPath">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style>
* {
  font-family: 'Times New Roman', Times, serif;
  scroll-behavior: smooth;
}

html {
  background-color: black;
}

.project-card-txt-shdw {
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,.7) 0%, rgba(252,70,70,0) 100%); 
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-out;;
}
</style>

