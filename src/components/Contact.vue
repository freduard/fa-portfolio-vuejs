<script setup>
import { onMounted } from 'vue'

function handleForm(res, inputs, textArea) {
    setTimeout(() => {
        inputs.forEach((input) => {
            input.value = ''
        })

        textArea.value = ''
        res.style.padding = '0.5rem'
        res.classList.replace('max-h-0', 'max-h-16')
    }, 500)

    setTimeout(() => {
        res.style.padding = '0rem'
        res.classList.replace('max-h-16', 'max-h-0')
    }, 5000)

    document.querySelector('button').setAttribute('disabled', 'disabled')
}

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const submitted = urlParams.get('s');
    const inputs = document.querySelectorAll('input')
    const textArea = document.querySelector('textarea')
    const res = document.querySelector('.successMessage')

    if(submitted == 1) {
        handleForm(res, inputs, textArea)
    }

    if(submitted == 0) {
        res.classList.replace('bg-green-700', 'bg-red-700')
        res.innerHTML = 'Something went wrong... Try again later or contact me directly at aitfredy@gmail.com.'
        handleForm(res, inputs, textArea)
    }
})
</script>

<template>
    <div class="w-full min-h-screen font-['mrdafoe']">
        <div class="w-full h-32 md:h-40 bg-neutral-900 top-0 relative contactHeader flex justify-center items-center">
            <h1 class="z-50 text-5xl sm:text-6xl md:text-7xl absolute font-bold">Contact</h1>
        </div>
        <div class="w-full h-full p-6 sm:px-20 md:px-32 lg:px-64 xl:px-96 2xl:px-[40rem] py-32 sm:py-48 md:py-64 flex flex-col justify-center items-center">
            <form class="bg-neutral-800 flex flex-col p-6 contactCard relative cds w-full" action="https://tak21fredyait.itmajakas.ee/" method="post">
                <div class="text-center successMessage bg-green-700 p-0 overflow-hidden duration-500 rounded mb-4 font-['quicksand'] text-sm font-semibold max-h-0">
                    Sent! I will get back you as soon as possible.
                </div>
                <p class="font-['quicksand'] text-center font-semibold text-sm lg:text-base">Need a website, portfolio or something specific unrelated to web development? I can definitely be of help. Shoot me an email!</p>
                <div class="font-['quicksand'] font-semibold flex flex-col gap-4 mt-4">
                    <div>
                        <p class="">Your Name</p>
                        <input type="text" name="name" required="required" class="w-full text-sm bg-neutral-900 appearance-none border-2 border-neutral-900 rounded p-2 leading-tight outline-none focus:border-[#E3292C] focus:drop-shadow-lg duration-150">
                    </div>
                    <div>
                        <p class="">Your E-Mail</p>
                        <input type="text" name="emanueladdresshaha" required="required" class="w-full text-sm bg-neutral-900 appearance-none border-2 border-neutral-900 rounded p-2 leading-tight outline-none focus:border-[#E3292C] focus:drop-shadow-lg duration-150">
                        <input type="text" name="email" autocomplete="off" class="hidden">
                        <input type="text" name="website" autocomplete="off" class="hidden">
                    </div>  
                    <div>
                        <p class="">Message</p>
                        <textarea name="message" rows="3" spellcheck="false" required="required" class="w-full text-sm bg-neutral-900 appearance-none border-2 border-neutral-900 rounded p-2 leading-tight focus:border-[#E3292C] focus:drop-shadow-lg duration-150 resize-none outline-none"></textarea>
                    </div>
                    <button type="submit" name="submit" class="bg-neutral-900 p-2 rounded hover:bg-zinc-900 duration-150 disabled:bg-neutral-950 disabled:text-neutral-800">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.contactCard::after {
    content: '';
    background: rgb(38, 16, 75);
    inset: 0;
    position: absolute;
    height: 105%;
    transform: skewY(-6deg);
    z-index: -2;
}

.contactCard::before {
    content: '';
    background: rgb(28, 30, 59);
    inset: 0;
    position: absolute;
    transform: skewY(9deg);
    height: 105%;
    top: -5%;
    z-index: -1;
}

.contactHeader::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(-6deg);
    bottom: -15%;
    /* z-index: -1; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

.contactHeader::before {
    content: '';
    background: rgb(30 41 59);
    inset: 0;
    position: absolute;
    transform: skewY(3deg);
    bottom: -15%;
    /* z-index: -1; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

@media (min-width: 768px) {
    .contactHeader::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(-4deg);
    bottom: -15%;
    /* z-index: -1; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

.contactHeader::before {
    content: '';
    background: rgb(30 41 59);
    inset: 0;
    position: absolute;
    transform: skewY(2deg);
    bottom: -15%;
    /* z-index: -1; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}
}

@media (min-width: 1024px) {
    .contactHeader::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(-2deg);
    bottom: -15%;
    /* z-index: -1; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

.contactHeader::before {
    content: '';
    background: rgb(30 41 59);
    inset: 0;
    position: absolute;
    transform: skewY(1deg);
    bottom: -15%;
    /* z-index: -1; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}
}

p {
    margin-bottom: .5rem;
}
</style>