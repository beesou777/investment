<template>
  <div class="flex flex-col justify-center items-center my-16">
    <div class="my-4 flex flex-col justify-center items-center">
      <h2 class="investment-title border-bottom">Investment Focus</h2>
      <p class="my-4 text-center">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div class="carousel carousel-center rounded-box w-full space-x-4">
      <div class="carousel-item" v-for="item in carouselItems" :key="item">
        <div class="overlay-container">
          <div class="h-[400px] w-[300px]">
            <img
              :src="item.imgLink"
              class="rounded-box w-full h-full object-cover"
            />
          </div>
          <div class="overlay">
            <div class="absolute bottom-10 mx-4 text-white">
              <h3 class="md:text-base font-medium">{{ item.title }}</h3>
              <p class="md:text-2xl font-semibold">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const carouselItems = reactive([
  {
    title: "Tourism",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://i.pinimg.com/originals/21/e1/fb/21e1fb3d41173217d99ad57dc8417210.jpg",
  },
  {
    title: "Agriculture",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://i.pinimg.com/originals/77/a9/59/77a959d0af926db99f636778907a7e89.jpg",
  },
  {
    title: "Information Technology",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://i.pinimg.com/originals/e1/f3/6c/e1f36cff2cfe551bd0b5377255b53adb.jpg",
  },
  {
    title: "Clean Energy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://i.pinimg.com/564x/e3/31/fc/e331fcd10fdb455454dc964121c0e0d7.jpg",
  },
  {
    title: "Education",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis.",
    imgLink:
      "https://i.pinimg.com/564x/75/4f/a5/754fa5d98ecc794ec7812e37a0b6180f.jpg",
  },
]);
</script>
<style scoped>
.carousel-item {
  position: relative;
}
.overlay-container {
  position: relative;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(55, 49, 49, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.overlay-container:hover .overlay {
  opacity: 1;
}
</style>
