<template>
  <div id="slide-container" class="w-full lg:h-full flex lg:flex-row lg:py-4 py-24 flex-col lg:justify-between justify-center items-center ">
    <!-- phụ trách thông tin bên trái -->
    <Transition name="information" mode="out-in">
      <div class="flex flex-col justify-center items w-3/4 h-full lg:w-1/2 lg:px-16"
      v-if="currentElement"
      :key="currentElement">
        <h1 class="lg:text-4xl text-2xl uppercase tracking-wider font-semibold">{{ currentElement.title }}</h1>
        <p v-if="!isMobile" class="mt-4 italic text-slate-200 w-full lg:block">{{currentElement.description}}</p>
        <ul v-if="!isMobile" class="lg:flex my-4 hidden">
          <li v-for="item in currentElement.pattern" class="px-6 py-1 bg-white mx-2 rounded-md text-black">
            <img class="w-8 h-8" :key="item" :src="`/imgs/${item.toLowerCase()}.svg`"/>
          </li>
        </ul>
        <div v-if="!isMobile" id="information" class="flex justify-between pt-2 border-t-1 px-2">
          <span>
            <span class="font-semibold">Duration: </span>
            <span class="text-orange-300">{{ currentElement.duration }}</span>
          </span>
          <span>
            <span class="font-semibold">Link: </span>
            <a class="italic text-orange-300" :href="currentElement.link">{{ currentElement.link }}</a>
          </span>
          
        </div>
      </div>
    </Transition>
    <!-- phụ trách hình ảnh bên phải -->
    <Transition name="slide" mode="out-in">
      <div class="flex flex-col justify-center lg:items-center items-start w-3/4 lg:h-full lg:w-1/2 lg:px-12"
      v-if="currentElement"
      :key="currentElement">
        <img class="shadow-lg shadow-[#fff5] rounded-md" :src="currentElement.img" alt="">
        <p v-if="isMobile" class="text-sm mt-4 italic text-slate-200 w-full lg:block">{{currentElement.description}}</p>
        <ul v-if="isMobile" class="lg:flex my-4 hidden">
          <li v-for="item in currentElement.pattern" class="px-6 py-1 bg-white mx-2 rounded-md text-black">
            <img class="w-8 h-8" :key="item" :src="`/imgs/${item.toLowerCase()}.svg`"/>
          </li>
        </ul>
        <div v-if="isMobile" id="information" class="flex flex-col justify-between pt-2 border-t-1 px-2">
          <span>
            <span class="font-semibold">Duration: </span>
            <span class="text-orange-300 text-sm">{{ currentElement.duration }}</span>
          </span>
          <span>
            <span class="font-semibold">Link: </span>
            <a class="italic text-orange-300 text-sm" :href="currentElement.link">{{ currentElement.link }}</a>
          </span>
          
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, onUnmounted } from 'vue';
//khai báo props
const props = defineProps({
  data: {
    type: Array,
  },
});

//cập nhật giao diện mobile
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const dataElements = ref([]);
const currentElement = ref(null);
//giao diện mobile
const isMobile = ref(false);


onMounted(() => {
  //*SLIDES
  // Lấy dữ liệu từ props
  dataElements.value = props.data || [];
  // Khởi tạo slide đầu tiên
  let currentIndex = 0;
  currentElement.value = dataElements.value[currentIndex];
  // Thay đổi slide mỗi 2 giây
  setInterval(() => {
    currentIndex = (currentIndex + 1) % dataElements.value.length;
    currentElement.value = dataElements.value[currentIndex];
  }, 8000);


  //kiểm tra kích thước màn hình để cập nhật giao diện mobile
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

//khi giao diện được tắt
onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style lang="css" scoped>
/* Hiệu ứng khi phần tử được thêm */
.slide-enter-active,
.slide-leave-active {
  transition: transform .75s ease, opacity .5s ease;
}

.information-enter-active,
.information-leave-active {
  transition: transform .75s ease, opacity .5s ease;
}

.slide-enter-from {
  transform: translateX(100px);
  filter: blur(5px);
  opacity: 0;
}
.information-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  filter: blur(0px);
  opacity: 1;
}
.information-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  filter: blur(0px);
  opacity: 1;
}
.information-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100px);
  filter: blur(5px);
  opacity: 0;
}
.information-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

#slide-element {
    width: 50%;
    height: 50%;
}
</style>