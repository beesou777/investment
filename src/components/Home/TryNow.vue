<template>
  <div class="max-w-[1440px] mx-auto py-10">
    <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <p class="h6 text-muted">TRY NOW</p>
      <h2
        class="lg:text-[57px] md:text-[45px] text-[30px] leading-[1.1] font-extrabold max-w-[620px]"
      >
        Prosper and grow with our services
      </h2>
    </div>
    <div class="flex flex-col justify-center gap-3 mt-4 font-medium item-start">
      <p class="text-muted">
        Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco.
      </p>
      <p class="text-muted">
        Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </p>
    </div>
  </div>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:py-10 py-5">
    <router-link to="/service" class="group max-h-full overflow-hidden" v-for="(item, index) in serviceData" :key="index">
      <div class="flex justify-start py-4 overflow-hidden">
        <img :src="item.icon" :alt="item.name" class="w-[70px] h-[60px]" />
      </div>
      <p class="py-4 h4 max-w-[230px] !font-extrabold text-pretty">{{ item.name }}</p>
      <p class="font-medium flex items-center gap-2 py-4 translate-x-[-25%] group-hover:translate-x-0 duration-300">
        <span
          >Read More</span
        >
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4167 1L18.5 8M18.5 8L11.4167 15M18.5 8L1.5 8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
    </router-link>
  </div>
  </div>
</template>

<script setup lang="ts">
import bullseye from "../../assets/icons/bullseye.svg";
import guidance from "../../assets/icons/guidance.svg";
import marketting_advertising from "../../assets/icons/marketting_advertising.svg";
import handshake from "../../assets/icons/handshake.svg";

interface Services {
  name: string;
  icon: string;
  link: string;
}

const serviceData: readonly Services[] = [
  {
    name: "Online banking help & security",
    icon: handshake,
    link: "https://i.pinimg.com/564x/08/31/2e/08312e96e86c9bfc560a82359b5d1412.jpg",
  },
  {
    name: "Wealth planning guidance",
    icon: guidance,
    link: "https://i.pinimg.com/564x/08/31/2e/08312e96e86c9bfc560a82359b5d1412.jpg",
  },
  {
    name: "Marketing and advertising",
    icon: marketting_advertising,
    link: "https://i.pinimg.com/564x/08/31/2e/08312e96e86c9bfc560a82359b5d1412.jpg",
  },
  {
    name: "Personal finance management",
    icon: bullseye,
    link: "https://i.pinimg.com/564x/08/31/2e/08312e96e86c9bfc560a82359b5d1412.jpg",
  },
];


</script>