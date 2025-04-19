<template>
  <div id="slide-container" class="w-full h-full flex justify-between items-center">
    <!-- phụ trách thông tin bên trái -->
    <Transition name="information" mode="out-in">
      <div class="flex flex-col justify-center w-1/2 h-full px-16"
      v-if="currentElement"
      :key="currentElement">
        <h1 class="text-4xl uppercase tracking-wider font-semibold">{{ currentElement.title }}</h1>
        <p class="mt-4 italic text-slate-200">{{currentElement.description}}</p>
        <ul class="flex my-4">
          <li v-for="item in currentElement.pattern" class="px-6 py-1 bg-white mx-2 rounded-md text-black">
            <img class="w-8 h-8" :key="item" :src="`/imgs/${item.toLowerCase()}.svg`"/>
          </li>
        </ul>
        <div id="information" class="flex justify-between pt-2 border-t-1 px-2">
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
      <div class="flex justify-center items-center w-1/2 h-full px-12"
      v-if="currentElement"
      :key="currentElement">
        <img class="shadow-lg shadow-[#fff5] rounded-md" :src="currentElement.img" alt="">
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Array,
  },
});

const dataElements = ref([]);
const currentElement = ref(null);
let currentIndex = 0;

onMounted(() => {
  // Lấy dữ liệu từ props
  dataElements.value = props.data || [];
  // Khởi tạo slide đầu tiên
  currentElement.value = dataElements.value[currentIndex];

  // Thay đổi slide mỗi 2 giây
  setInterval(() => {
    currentIndex = (currentIndex + 1) % dataElements.value.length;
    currentElement.value = dataElements.value[currentIndex];
  }, 8000);
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