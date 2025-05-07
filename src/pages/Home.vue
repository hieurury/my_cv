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
         <div id="project" class="lg:h-screen lg:snap-start lg:p-12 h-screen snap-start">
            <div class="h-full w-full">
                <h1 class="lg:text-4xl text-2xl font-bold italic m-2 uppercase border-b border-slate-300 py-2 inline-block px-4 tracking-wide">Các dự án của tôi</h1>
                <Carousel :data="[
                    {
                        title: 'Website Truyện tranh',
                        description: 'Website đọc truyện tranhh miễn phí sử dụng API được cung cung cấp sẵn. sử dụng HTML5, CSS3, Bootstrap5 và JavaScript EJ6 kết hợp với React. Áp dụng các kiến thức về Fetch API, Promise cũng như xử lí dữ liệu Object để hoàn thành dự án. Tuy nhiên một số chức năng vẫn chưa hoàn tất và cần thời gian để nâng cấp!',
                        pattern: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
                        img: '/imgs/rury_comics.jpg',
                        duration: '5days',
                        link: 'https://hieurury.github.io/rury_comics'
                    },
                    {
                        title: 'Sáng tạo Blog cùng Rury Comunity',
                        description: 'Website viết các Blog và tương tác xã hội với nhiều tính năng soạn thảo được tích hợp sẵn. Sử dụng thư viện giúp soạn thảo văn bản nổi tiếng CKeditor giúp việc soạn thảo trở nên trơn chu hơn. Sử dụng các công nghệ như NodeJs, Express, Handlebars, Tailwindcss đi cùng với MongoDB. Ngoài ra trang web cũng tích hợp JWT - Json Web Token để bảo mật thông tin người dùng.',
                        pattern: ['NodeJs', 'Express', 'Tailwind', 'MongoDB'],
                        img: '/imgs/rury_comunity.jpg',
                        duration: 'Comming soon',
                        link: 'https://github.com/hieurury/rury_community'
                    },
                    {
                        title: 'Xem phim hấp dẫn cùng Rury Movie',
                        description: 'Website xem phim miễn phí với nhiều thể loại khác nhau. Sử dụng API được cung cấp sẵn. Sử dụng HTML5, CSS3, Bootstrap5 và JavaScript EJ6 kết hợp với React. Áp dụng các kiến thức về Fetch API, Promise cũng như xử lí dữ liệu Object để hoàn thành dự án. Tuy nhiên một số chức năng vẫn chưa hoàn tất và cần thời gian để nâng cấp!',
                        pattern: ['HTML5', 'CSS3', 'JavaScript'],
                        img: '/imgs/rury_movies.jpg',
                        duration: 'Comming soon',
                        link: 'https://github.com/hieurury/rury_community'
                    },
                ]"/>
            </div>
         </div>


         <!--* Favorite -->
         <div id="favorite" class="lg:h-screen lg:snap-start lg:p-12 h-screen snap-start">
             <div class="h-full w-full flex lg:flex-row flex-col justify-center items-center">
                <h1 class="lg:text-4xl text-2xl font-bold italic m-2 uppercase border-b border-slate-300 py-2 inline-block px-4 tracking-wide">Sở thích của tôi</h1>
                <Card 
                    img="/imgs/coding.jpg"
                    title="coding"
                    description="Tôi thích lập trình, Coding ở mọi nơi, hầu hết thời gian rảnh tôi điều dành thời gian cho việc lập trình, đôi khi nó chỉ là những dòng code nhỏ và cẩu thả nhưng đó là thứ giúp tôi thư giãn vì được làm thứ mình yêu thích. Tôi hay lên ý tưởng và lập trình những thứ mình gặp dù đôi lúc nó không liên quan lắm."
                />
                <Card 
                    img="/imgs/design.jpg"
                    title="design"
                    description="Tôi cũng rất thích thiết kế các sản phẩm, giao diện và những cấu trúc theo những cách riêng. Đôi khi tôi cũng sáng tạo lại các ý tưởng đâu đó mà tôi tìm thấy trên Internet!"
                />
                <Card 
                    img="/imgs/gaming.png"
                    title="game"
                    description="Chơi game cũng là một sở thích của tôi, đôi lúc nó mang đến cho tôi nhiều ý tưởng cũng như những cách nhìn nhận mới mẽ hơn về mặt lập trình. Tôi cũng khá hứng thú với việc Mod game và lập trình Game!"
                />
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
    body {
        scroll-behavior: smooth;
    }
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