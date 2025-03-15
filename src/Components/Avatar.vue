<template>
    <div class="w-48 h-48 flex justify-center items-center my-4 z-50">
        <img :src="url" alt="Avatar" class="rounded-full w-full h-full border-4 shadow shadow-white">
    </div>
</template>

<script setup>
    import { ref, defineProps } from 'vue'
    const props = defineProps({
        url: String,
        size: String
    })
</script>

<style lang="scss" scoped>

</style>