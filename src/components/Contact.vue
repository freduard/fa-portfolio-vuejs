<script setup>
const props = defineProps({
    state: String
})
</script>

<template>
    <div class="w-full min-h-screen font-['mrdafoe']">
        <div class="w-full h-32 md:h-40 bg-neutral-900 top-0 relative contactHeader flex justify-center items-center">
            <h1 class="z-50 text-5xl md:text-6xl absolute font-bold">Contact</h1>
        </div>

        <!-- <div v-if="props.state == 1" class="bg-green-700 p-2 rounded drop-shadow-md flex gap-2">
            <p class="text-xl text-center font-bold">Tänan!</p>
            <p class="text-xl text-center">Võtan teiega esimesel võimalusel ühendust.</p>
        </div>
        <div v-if="props.state == 2" class="bg-[#E7685D] p-2 rounded drop-shadow-md flex gap-2" id="alert">
            <p class="text-xl text-center">Midagi läks valesti! Kontakteeru minuga otse: <a href="mailto:aitfredy@gmail.com" class="underline">aitfredy@gmail.com</a></p>
        </div> -->
        <div class="w-full h-full p-6 sm:px-20 md:px-32 lg:px-64 xl:px-96 2xl:px-[40rem] py-32 sm:py-48 md:py-64 flex flex-col justify-center items-center">
            <form class="bg-neutral-800 flex flex-col p-6 contactCard relative cds w-full" action="https://tak21fredyait.itmajakas.ee/" method="post">
                <div class="font-['quicksand'] font-semibold flex flex-col gap-4">
                    <div>
                        <p class="">Your Name</p>
                        <input type="text" name="name" required="required" class="w-full p-2 rounded bg-neutral-900">
                    </div>
                    <div>
                        <p class="">Your E-Mail</p>
                        <input type="text" name="emanueladdresshaha" required="required" class="w-full p-2 rounded bg-neutral-900">
                        <input type="text" name="email" autocomplete="off" class="hidden">
                        <input type="text" name="website" autocomplete="off" class="hidden">
                    </div>
                    <div>
                        <p class="">Message</p>
                        <textarea name="message" rows="3" spellcheck="false" required="required" class="resize-none outline-none w-full p-2 rounded bg-neutral-900"></textarea>
                    </div>
                    <button type="submit" name="submit" class="">Submit</button>
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