<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
    <div
      class="group relative overflow-hidden bg-gray-100 my-2 md:my-0"
      v-for="(item, index) in featureData"
      :key="index"
    >
      <img
        :src="item.image"
        alt="Feature"
        class="w-full h-full max-h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-[20px] left-[20px] group-hover:translate-y-[-20px] flex duration-300 group-hover:scale-100"
      >
        <div class="text-center text-white">
          <h2 class="h3 font-semibold">{{ item.title }}</h2>
          <p class="m-0 body-2">{{ item.desc }}</p>
          <svg
            class="translate-y-[50px] duration-300 group-hover:translate-y-[10px]"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4167 1L18.5 8M18.5 8L11.4167 15M18.5 8L1.5 8"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        class="absolute top-0 left-0 h-full w-full hover:bg-gray-900 opacity-10 hover:opacity-[15%] transition-all duration-300"
      ></div>
    </div>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 py-10 bg-[#f1f1f1]"
  >
    <div
      class="relative first:after:w-0 max-[1024px]:odd:after:w-0 max-[767px]:after:w-0 after:content-[''] after:absolute after:inset-0 after:w-[2px] after:bg-gray-200 after:h-[60px] after:top-[50%] after:translate-y-[-50%]"
      v-for="(item, index) in MileStoneData"
      :key="index"
    >
      <div class="card-body py-0 items-center text-center">
        <h2
          class="card-title absolute top-[45%] font-[900] text-[16px] md:text-[28px] translate-y-[-50%]"
        >
          {{ item.title }}
        </h2>
        <p
          class="lg:text-[10em] md:text-[8em] text-[4em] m-0 leading-[1.1] text-[#24DB8E] opacity-20 font-black"
        >
          {{ item.data }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import service_1 from "../../assets/img/service/service-Image-1.webp";
import service_2 from "../../assets/img/service/service-image-2.webp";
import service_3 from "../../assets/img/service/service-image-3.webp";
import service_4 from "../../assets/img/service/service-image-4.webp";
import type { Feature, MileStone } from "../../types/type";

const featureData: readonly Feature[] = [
  {
    title: "Affiliate Programs",
    desc: "lorem ipsum ipsum ipsum",
    image: service_2,
  },
  {
    title: "Business Opening",
    desc: "lorem ipsum ipsum ipsum",
    image: service_1,
  },
  {
    title: "Financial Analysis",
    desc: "lorem ipsum ipsum ipsum",
    image: service_3,
  },
  {
    title: "Bank Guarantees",
    desc: "lorem ipsum ipsum ipsum",
    image: service_4,
  },
];

const MileStoneData: readonly MileStone[] = [
  {
    title: "Projects Completed",
    data: 90,
  },
  {
    title: "people",
    data: 30,
  },
  {
    title: "Years",
    data: 10,
  },
  {
    title: "Happy Clients",
    data: 200,
  },
];
</script>
