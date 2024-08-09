<template>
  <div class="max-w-[1440px] mx-auto md:pt-10 pt-5 px-[10px]">
    <h1 class="text-center py-10 border-bottom">Our Services</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-10">
      <div v-for="(item, index) in sercviceData" :key="index">
        <div class="bg-white h-full rounded">
          <figure class="px-10 pt-10 flex justify-center items-center">
            <img :src="item.icons" alt="Shoes" class="h-[42px] w-[42px]" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-10">
      <h6 class="uppercase">What we do</h6>
      <p class="h2 max-w-[820px] mx-auto text-pretty">
        Creating long-term value with entrepreneurial intelligence! Our main
        goal is advance.
      </p>
      <h6>Director name here</h6>
      <p class="text-gray-500 m-0">Creative Director</p>
    </div>
  </div>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-10">
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
        class="absolute flex items-center justify-center bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 animation"
      >
        <div class="text-center">
          <h2 class="text-lg font-semibold">{{ item.title }}</h2>
          <p class="m-0">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-[1440px] mx-auto px-[10px]">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 py-10">
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
            class="lg:text-[10em] md:text-[8em] text-[4em] m-0 leading-[1.1] text-[#24DB8E] opacity-20"
          >
            {{ item.data }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="relative bg-center h-full"
    :style="{ background: 'url(' + about_us + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="md:py-[10rem] py-[6rem] text-center text-white">
      <h6 class="uppercase">Business Analytics</h6>
      <h2 class="h1 text-center mx-auto">Market analysis and innovation</h2>
      <div class="text-center py-10">
        <router-link :to="{ name: 'about' }" class="bg-green-500 text-gray-950 font-medium px-10 py-4 duration-150 hover:bg-green-700">About us</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import tax_disputed from "../../assets/icons/target.svg";
import legal_support from "../../assets/icons/legal_support.svg";
import tax_accounting from "../../assets/icons/tax_accounting.svg";
import time_reporting from "../../assets/icons/time_reporting.svg";

import service_1 from "../../assets/img/service/service-Image-1.webp";
import service_2 from "../../assets/img/service/service-image-2.webp";
import service_3 from "../../assets/img/service/service-image-3.webp";
import service_4 from "../../assets/img/service/service-image-4.webp";

import about_us from "../../assets/img/service/home-2.webp";

interface Service {
  title: string;
  desc: string;
  imgLink?: string;
  icons?: string;
}

interface Feature {
  title: string;
  desc: string;
  image: string;
}

interface MileStone {
  title: string;
  data: number;
}

const sercviceData: readonly Service[] = [
  {
    title: "Tax Accounting",
    desc: "Comprehensive tax management and planning services..",
    imgLink:
      "https://i.pinimg.com/originals/21/e1/fb/21e1fb3d41173217d99ad57dc8417210.jpg",
    icons: tax_accounting,
  },
  {
    title: "Legal Support",
    desc: "Expert legal advice for businesses and individuals.",
    imgLink:
      "https://i.pinimg.com/originals/21/e1/fb/21e1fb3d41173217d99ad57dc8417210.jpg",
    icons: legal_support,
  },
  {
    title: "Tax Disputes",
    desc: "Resolving tax-related issues and conflicts efficiently.",
    imgLink:
      "https://i.pinimg.com/originals/21/e1/fb/21e1fb3d41173217d99ad57dc8417210.jpg",
    icons: tax_disputed,
  },
  {
    title: "Zero Reporting",
    desc: "Simplified zero-income tax filing solutions.",
    imgLink:
      "https://i.pinimg.com/originals/21/e1/fb/21e1fb3d41173217d99ad57dc8417210.jpg",
    icons: time_reporting,
  },
];

const featureData: readonly Feature[] = [
  {
    title: "Cost Reduction",
    desc: "Startup",
    image: service_2,
  },
  {
    title: "Increase Efficiency",
    desc: "Startup",
    image: service_1,
  },
  {
    title: "Our Workflow",
    desc: "Startup",
    image: service_3,
  },
  {
    title: "Data Charts",
    desc: "Startup",
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

<style scoped lang="scss">
.group {
  position: relative;

  .animation {
    max-height: 100px;
    height: 100%;
    max-width: 360px;
    width: 100%;
    opacity: 0;
    transform: translate(-50%, 0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    background: white;
    padding: 1rem;
    left: 50%;
    bottom: 0;
    @media (max-width: 1024px) {
      transform: translate(-50%, -50%);
      opacity: 1;
      max-width: 320px;
      width: 100%;
    }

    @media (max-width: 360px) {
      transform: translate(-50%, 0);
    }
  }

  &:hover .animation {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>