<template>
    <div class="container px-16 text-white relative">

        <div class="flex justify-center items-center flex-col text-center">
            <Avatar url="/imgs/avatar-catoon.jpg" size="16"/>
            <h1 class="text-4xl font-semibold mb-2">
                <span class="lg:inline-block block">Hi there!</span>
                 I'm <span class="text-orange-400">hieurury</span></h1>
            <Introduce />

            <!-- inner bg -->
            <img class="absolute opacity-20 z-0 top-0 w-full h-full object-cover" src="/imgs/CTU.jpg" alt="">

            <!-- list social -->
            <ul class="flex justify-between items-center z-50 mt-8 py-1 px-6 border-t bg-white rounded-md">
                <li class="mx-4 sepia-50 hover:sepia-0">
                    <a href="https://www.facebook.com/profile.php?id=100047342773932&locale=vi_VN">
                        <img class="w-8 h-8 rounded-full" src="/imgs/facebook.svg" alt="">
                    </a>
                </li>
                <li class="mx-4 sepia-50 hover:sepia-0">
                    <a href="https://github.com/hieurury">
                        <img class="w-8 h-8 rounded-full" src="/imgs/github.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import Introduce from '../Components/Introduce.vue';
    import Avatar from '../Components/Avatar.vue';
</script>

<style lang="css" scoped>
</style>