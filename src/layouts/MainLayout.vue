<template>
    <header class="bg-black p-4">
        <nav 
        class="flex font-[Cabin] pb-2 text-2xl
         text-amber-50 list-none font-semibold
         border-b-white border-b px-16">
            <li class="mx-4">
                <router-link to="/">Home</router-link>
            </li>
            <li class="mx-4">
                <router-link to="/about">About</router-link>
            </li>
            <li class="mx-4">
                <router-link to="/contact">Contact</router-link>
            </li>
        </nav>
    </header>
    <router-view class="bg-black min-h-screen p-4">
    </router-view>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>