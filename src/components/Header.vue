<script setup>
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
            <a href="#index" class="mlink flex items-center"><unicon name="estate" fill="#E3292C" class="h-7 w-7" /></a>
            <a href="#about" class="mlink flex items-center"><unicon name="award" fill="white" class="h-7 w-7" /></a>
            <a href="#projects" class="mlink flex items-center"><unicon name="files-landscapes" fill="white" class="h-7 w-7" /></a>
            <a href="#contact" class="mlink flex items-center"><unicon name="phone-volume" fill="white" class="h-7 w-7" /></a>
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
header {
    transition: all 0.3s;
    backdrop-filter: blur(25px) opacity(1);
}

header:hover {
    background-color: rgba(23, 23, 23, 0.5);
}
</style>