<template>
    <div class="w-full min-h-screen overflow-x-clip font-['mrdafoe'] dotsBG pb-24">
        <div class="bg-[#E3292C] h-48 sm:h-52 md:h-56 xl:h-64 -top-12 sm:-top-16 cds w-full z-10 relative aboutHeader flex items-center px-12 sm:px-24 lg:px-36 xl:px-48 2xl:px-72">
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-8 lg:mt-16">Experience</h1>
        </div>
        <div class="flex flex-col py-24 xl:grid xl:grid-cols-2 gap-24 xl:gap-x-20 xl:gap-y-40 xl:px-36 xl:py-44">
            <div class="px-6 sm:px-20 lg:px-36 xl:px-0 font-['quicksand']">
                <div class="h-96 bg-amber-200 relative z-10 shepherdCard cds p-8 md:p-12">
                    <h1 class="text-3xl font-bold">Job Experience</h1>
                </div>
            </div>
            <div class="px-6 sm:px-20 lg:px-36 xl:px-0 font-['quicksand']">
                <div class="h-96 bg-teal-200 relative z-10 competitionCard cds p-8 md:p-12">
                    <h1 class="text-3xl font-bold">Competitions</h1>
                </div>
            </div>
            <div class="px-6 sm:px-20 lg:px-36 xl:px-0 font-['quicksand']">
                <div class="h-96 bg-indigo-900 relative z-10 competitionCard cds p-8 md:p-12">
                    <h1 class="text-3xl font-bold">Education</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.aboutHeader::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(-9deg);
    z-index: -2;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

@media (min-width: 768px) {
    .aboutHeader::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(-6deg);
    z-index: -2;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}
}

@media (min-width: 1536px) {
    .aboutHeader::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(-3deg);
    z-index: -2;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}
}

.shepherdCard::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(6deg);
    z-index: -2;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

.competitionCard::after {
    content: '';
    background: rgb(39 39 42);
    inset: 0;
    position: absolute;
    transform: skewY(6deg);
    z-index: -2;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 24px;
}

.dotsBG {
    --dot-bg: rgb(23 23 23);
    --dot-color: rgb(61, 61, 61);
    --dot-size: 1px;
    --dot-space: 22px;
        background:
            linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
            var(--dot-color);
}
</style>