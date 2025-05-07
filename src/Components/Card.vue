<template>
    <div class="h-full w-1/3 flex flex-col items-center justify-center px-4 py-18">
        <div class="relative overflow-hidden transition-all duration-300
            w-full h-full bg-cover bg-center flex flex-col items-center 
            justify-center rounded-lg 
            hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105
            group">
            <img class="w-full h-full object-cover z-0
            absolute top-0 right-0 bottom-0 left-0
            group-hover:blur-sm" :src="`${img}`" alt="">
            <div class="absolute z-10 flex flex-col items-center 
                justify-center w-full h-full bg-black/50 p-8">
                <h1 class="mb-4 text-2xl uppercase shadow-2xl transition-all duration-500
                text-orange-600 font-bold border-b px-8">{{ title }}</h1>
                <p class="opacity-0 translate-y-4 transition-all duration-500 italic
                group-hover:opacity-100 group-hover:translate-y-0">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: String,
    description: String,
    img: String,
})

</script>

<style lang="css" scoped>
    
</style>