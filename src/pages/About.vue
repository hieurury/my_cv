<template>
    <div class="snap-y snap-mandatory overflow-scroll h-screen">
        <div class="snap-start h-screen flex justify-center items-center">Mục 1</div>
        <div class="snap-start h-screen flex justify-center items-center">Mục 2</div>
        <div class="snap-start h-screen flex justify-center items-center">Mục 3</div>
        <div class="snap-start h-screen flex justify-center items-center">Mục 4</div>
    </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
        .a {
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow-y: scroll;
            scroll-snap-type: y mandatory; /* Kích hoạt snap cuộn dọc */
            overflow-y: scroll;
        }

        .section {
            height: 100vh; /* Chiếm toàn bộ màn hình */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            scroll-snap-align: start; /* Căn chỉnh điểm dừng */
        }

        .section:nth-child(1) { background: #FF5733; }
        .section:nth-child(2) { background: #33A1FF; }
        .section:nth-child(3) { background: #33FF57; }
        .section:nth-child(4) { background: #F333FF; }
</style>