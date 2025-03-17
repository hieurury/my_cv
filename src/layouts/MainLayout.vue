<template>
    <header class="bg-black">
        <nav 
        class="flex items-center font-[Cabin] text-2xl
         text-amber-50 list-none font-semibold
         border-b-white border-b px-16 py-4">
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
    <router-view>
    </router-view>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>