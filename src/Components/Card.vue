<template>
    <div>
        <h3>{{ data.title }}</h3>
        <p>{{ data.description }}</p>
        <img :src="data.img" alt="">
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    data: Object,
})

</script>

<style lang="scss" scoped>

</style>