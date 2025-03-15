<template>
    <div class="container px-16 text-white relative">

        <div class="flex justify-center items-center flex-col">
            <Avatar url="/imgs/avatar-catoon.jpg" size="16"/>
            <h1 class="text-4xl font-semibold mb-2">
                <span class="lg:inline-block block">Hi there!</span>
                 I'm <span class="text-orange-400">hieurury</span></h1>
            <Introduce />
            <img class="absolute opacity-20 z-0 top-0 w-full h-full object-cover" src="/imgs/CTU.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
    import Introduce from '../Components/Introduce.vue';
    import Avatar from '../Components/Avatar.vue';
</script>

<style lang="css" scoped>
</style>