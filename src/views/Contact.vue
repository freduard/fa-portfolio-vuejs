<script setup>
const props = defineProps({
    state: String
})
</script>

<template>
    <form v-if="props.state != 1 && props.state != 2" action="https://tak21fredyait.itmajakas.ee/" method="post">
        <p class="text-6xl mb-6 lg:mr-24">Kontakteeru</p>
        <div class="flex flex-col gap-3">
            <div>
                <p class="text-3xl">Nimi</p>
                <input type="text" name="name" required="required" class="text-xl outline-none w-full">
            </div>
            <div>
                <p class="text-3xl">E-Mail</p>
                <input type="text" name="emanueladdresshaha" required="required" class="text-xl w-full outline-none">
                <input type="text" name="email" autocomplete="off" class="hidden">
                <input type="text" name="website" autocomplete="off" class="hidden">
            </div>
            <div>
                <p class="text-3xl">Sõnum</p>
                <textarea name="message" rows="3" spellcheck="false" required="required" class="text-xl w-full resize-none outline-none"></textarea>
            </div>
            <button type="submit" name="submit" class="bg-zinc-700 p-2 text-xl rounded hover:bg-slate-600 duration-150">Submit</button>
        </div>
    </form>
    <div v-if="props.state == 2" class="bg-[#E7685D]" id="alert">
        <p class="text-center p-2 mb-2">Midagi läks valesti! Kontakteeru minuga otse: <a href="mailto:aitfredy@gmail.com" class="underline">aitfredy@gmail.com</a></p>
    </div>
    <div v-if="props.state == 1" class="flex flex-col items-center justify-center gap-10 p-24">
        <h1 class="text-4xl lg:text-6xl">Tänan!</h1>
        <p class="text-4xl text-center">Olen su sõnumi kätte saanud ning võtan teiega esimesel võimalusel ühendust.</p>
        <router-link to="/" class="bg-zinc-700 p-2 rounded hover:bg-slate-600 duration-150 text-2xl">TAGASI KOJU</router-link>
    </div>
</template>