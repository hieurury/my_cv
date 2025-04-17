<template>
  <div id="slide-container">
    <transition
      name="slide"
      mode="out-in"
    >
      <div
        v-if="currentElement"
        :key="currentElement"
        id="slide-element"
      >
        <Card :data="currentElement" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import Card from './Card.vue';

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
  }, 5000);
});
</script>

<style lang="css" scoped>
/* Hiệu ứng khi phần tử được thêm */
.slide-enter-active,
.slide-leave-active {
  transition: transform .75s ease, opacity .5s ease;
}

.slide-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

#slide-element {
    width: 50%;
    height: 50%;
  background-color: #FF9119;
}
</style>