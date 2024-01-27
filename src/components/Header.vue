<script setup>
import { IconHouseThin, IconMedalThin, IconCodeThin, IconPhoneCallThin } from '@iconify-prerendered/vue-ph'

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && !document.querySelector('header').matches(':hover')) {
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
	}
	lastScroll = currentScroll;
});
</script>

<template>
    <header class="fixed flex justify-between duration-150 h-20 w-full p-6 sm:px-24 lg:px-36 xl:px-48 2xl:px-72 z-[1000] navigation">
        <a href="#"><img src="../assets/icons/fa_logo.svg" class="h-full" alt="logo"></a>
        <nav class="flex gap-6 text-xl justify-center items-center lg:hidden">
            <a href="#index" class="mlink homeLink flex items-center"><IconHouseThin class="w-8 h-8"/></a>
            <a href="#about" class="mlink flex items-center"><IconMedalThin class="w-8 h-8"/></a>
            <a href="#projects" class="mlink flex items-center"><IconCodeThin class="w-8 h-8"/></a>
            <a href="#contact" class="mlink flex items-center"><IconPhoneCallThin class="w-8 h-8"/></a>
        </nav>
        <nav class="hidden gap-6 justify-center items-center lg:flex font-['quicksand'] font-semibold">
            <a href="#index" class="dlink flex items-center duration-150 p-2 hover:text-black hover:bg-white active">Home</a>
            <a href="#about" class="dlink flex items-center duration-150 p-2 hover:text-black hover:bg-white">Experience</a>
            <a href="#projects" class="dlink flex items-center duration-150 p-2 hover:text-black hover:bg-white">Projects</a>
            <a href="#contact" class="dlink flex items-center duration-150 p-2 hover:text-black hover:bg-white">Contact</a>
        </nav>
    </header>
</template>

<style scoped>
@media (max-width: 1024px) {
    header {
        backdrop-filter: blur(20px);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
    }
}

header:hover {
    transition: all 0.5s;
    backdrop-filter: blur(20px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
    background-color: rgba(0, 0, 0, 0.25);
}

.homeLink >>> path {
    color: #E3292C;
}
</style>