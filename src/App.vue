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
  border-radius: 50%;
  background: black;
  opacity: .75;
  -webkit-filter: blur(100px);
  filter: blur(100px);
  -webkit-transform: scale(1, 0.2);
  transform: scale(1, 0.2);
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

