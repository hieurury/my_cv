<template>
    <div class="flex justify-center items-center">
        <h1 class="text-white transition text-xl italic">{{ text }} <span id="space">{{ icon }}</span></h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'
    const says = ref([
            "My full name is Vo Minh Hieu",
            "I'm a web developer",
            "I'm a web designer",
            "I'm studying at Can Tho University",
            "I like to learn new things",
    ])
    function getRandomText(data) {
        let text = data[0];
        data.push(data[0]);
        data.shift();
        return text;
    }
    
    const randomText = ref(getRandomText(says.value).split(''));
    const text = ref('');
    const icon = ref("✏️");
    let isRun = true;
   function startInterval(data) {
       const setText = setInterval(() => {
            if(data.length > 0 && isRun) {
                text.value += `${data[0]}`;
                data.shift();
            } else if(data.length === 0 && isRun) {
                setTimeout(() => {
                    isRun = false
                }, 1000)
            } else if(!isRun) {
                icon.value = "📍";
                text.value = text.value.slice(0, -1);
                if(text.value.length === 0) {
                    clearInterval(setText);
                    data = getRandomText(says.value).split('');
                    isRun = true;
                    icon.value = "✏️";
                    startInterval(data);
                }
            }
    }, 50);
   }
    startInterval(randomText.value);
</script>

<style lang="scss" scoped>

</style>