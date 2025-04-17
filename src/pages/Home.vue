<template>
    <div 
    class="container text-white relative bg-black h-screen 
    snap-y snap-mandatory overflow-y-scroll no-scrollbar">

        <!-- Intruduce -->
        <div class="flex justify-center items-center flex-col text-center h-screen relative snap-start">
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
                <li class="mx-4 sepia-50 hover:sepia-0">
                    <a href="mailto:hieurury007@gmail.com">
                        <img class="w-8 h-8 rounded-full" src="/imgs/gmail.svg" alt="">
                    </a>
                </li>
            </ul>
            <!-- address and country -->
            <ul class="flex justify-between items-center z-50 mt-8 py-1 px-6">
                
            </ul>
        </div>

        <!-- *process -->
        <div id="process" class="lg:h-screen lg:snap-start">
            <div id="container" 
            class="lg:flex lg:h-screen lg:px-16 
                block justify-around items-center px-8 py-8">
                <!-- bố cục bên trái -->
                <section class="flex flex-col justify-around items-center flex-grow lg:h-screen">
                    <!-- phần tử thứ 1 bên trái -->
                    <div class="lg:w-full lg:pr-8 lg:h-auto lg:snap-align-none
                         flex flex-col h-screen snap-start">
                        <!-- nội dung -->
                        <ExperenceWrapper 
                            title="Nhập môn lặp trình web"
                            description="Bắt đầu học lập trình web từ năm 2020"
                            :technologies="['HTML5', 'CSS3', 'JavaScript']"
                            lottie="/lottie/web01.lottie"
                            link="/about/start-web"
                        />
                        
                    </div>
                    <!-- phần tử thứ 2 bên trái -->
                    <div class="lg:w-full lg:pr-8 lg:h-auto lg:snap-align-none 
                        flex flex-col h-screen snap-start">
                        <!-- nội dung -->
                        <ExperenceWrapper 
                            title="Hoàn thiện hơn với Vue"
                            description="Bắt đầu học thêm Front-end Framework"
                            :technologies="['Vuejs', 'vite', 'tailwind']"
                            lottie="/lottie/web-fe.lottie"
                            link="/about/start-web"
                            reverse
                        />
                    </div>
                </section>
                
                <!-- vách ngăn ở giữa -->
                <section class="w-0.5 h-full bg-white"></section>

                <section class="flex flex-col justify-around items-center flex-grow lg:h-screen">
                    <div class="lg:w-full lg:pl-8 lg:h-auto lg:snap-align-none 
                    flex flex-col h-screen snap-start">
                        <!-- nội dung -->
                        <ExperenceWrapper 
                            title="Bắt đầu học sâu hơn"
                            description="Tạo web động với các Back-end technologies"
                            :technologies="['Nodejs', 'MongoDB', 'Express']"
                            lottie="/lottie/web.lottie"
                            link="/about/start-web"
                        />
                    </div>
                </section>
            </div>
        </div>


        <!-- *project -->
         <div id="project" class="lg:h-screen lg:snap-start">
            <div class="h-screen snap-start">
                <Carousel :data="[
                    {
                        title: 'Project 1',
                        description: 'Description 1',
                        img: '/imgs/CTU.jpg'
                    },
                    {
                        title: 'Project 2',
                        description: 'Description 2',
                        img: '/imgs/CTU.jpg'
                    },
                    {
                        title: 'Project 3',
                        description: 'Description 3',
                        img: '/imgs/CTU.jpg'
                    }
                ]"/>
            </div>
         </div>
    </div>
</template>

<script setup>
    import Introduce from '../Components/Introduce.vue';
    import Avatar from '../Components/Avatar.vue';
    import ExperenceWrapper from '../Components/ExperenceWrapper.vue';
    import Carousel from '../Components/Carousel.vue';
    import Card from '../Components/Card.vue';
</script>

<style lang="css" scoped>
    /* Hide scrollbar for WebKit browsers */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    /* border */
    .border-fade-right {
        border: 1px solid transparent;
        border-image: linear-gradient(to right, #dbd8e2, #e9d5ed, #e77427, #e06f0b) 1;
        border-image-slice: 1;
    }
    .border-fade-left {
        border: 1px solid transparent;
        border-image: linear-gradient(to left, #dbd8e2, #e9d5ed, #e77427, #e06f0b) 1;
        border-image-slice: 1;
    }

    
</style>