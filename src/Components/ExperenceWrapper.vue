<template>
    <div :class="['flex justify-center lg:flex-row lg:justify-around items-center flex-col-reverse', {'lg:flex-row-reverse': reverse}]">
        <section class="flex flex-col items-start justify-center">
            <h2 class="text-2xl font-semibold tracking-wider">
                {{ title }}</h2>
            <p class="italic text-slate-300">{{ description }}</p>
            <ul class="list-disc list-inside font-semibold italic text-sm text-orange-200">
                <li v-for="technology in technologies" >{{ technology }}</li>
            </ul>
            <!-- mô tả bằng logo công nghệ -->
            <div class="flex items-center w-full mt-4">
                <!-- item 1 -->
                <section v-for="technology in technologies"  class="flex items-center px-4 bg-white mx-2 rounded-md text-black">
                    <img class="w-8 h-8" :src="`/imgs/${technology.toLowerCase()}.svg`" alt="">
                </section>
            </div>
        </section>
        <!-- hình mô tả -->
        <section class="flex flex-col items-center justify-center">
            <DotLottieVue class="w-72 h-72 lg:h-44 lg:w-44" autoplay loop :src="lottie" />
            <!-- <img class="w-20 scale-img rotate-img" :src="img" alt=""> -->
            <a :href="link" type="button"
                class="cursor-pointer mt-6 z-30 text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                <span>Show more</span>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
            </a>
        </section>
    </div>
    <span class="border-b w-full border-fade-left mt-2"></span>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
defineProps({
    title: String,
    description: String,
    technologies: Array,
    lottie: String,
    link: String,
    reverse: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="css" scoped>
/* rotate 35 */
.rotate-img {
    rotate: 10deg;
}

.rotate-img-reverse {
    rotate: -10deg;
}

.scale-img {
    scale: 2.5;
}
</style>