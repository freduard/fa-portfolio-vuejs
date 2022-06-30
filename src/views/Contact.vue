/<template>
    <div class="flex flex-col justify-between gap-20 p-12 h-screen text-5xl text-[#E7685D]">
        <form class="text-4xl flex flex-col gap-10">
            <div class="flex flex-col gap-5">
                <p>Name</p>
                <input type="name" name="" id="" required class="text-2xl p-1 focus:outline-none focus:border-red-300 duration-150">
            </div>
            <div class="flex flex-col gap-5">
                <p>E-Mail</p>
                <input type="email" name="" id="" required class="text-2xl p-1 focus:outline-none focus:border-red-300 duration-150">
            </div>
            <div class="flex flex-col gap-5">
                <p>Message</p>
                <textarea name="message" id="" cols="30" rows="5" class="text-2xl p-1 focus:outline-none focus:border-red-300 duration-150"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>