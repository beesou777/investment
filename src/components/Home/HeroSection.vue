<template>
  <div class="max-w-[1440px] mx-auto px-[10px]">
    <h1 class="lg:text-[67px] md:text-[48px] text-[36px] leading-[1.1] pb-5 tracking-wider uppercase">Your loyal guardian</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="">
        <img :src="herosectionImag" alt="" />
      </div>
      <div class="bg-white flex flex-col justify-center items-start md:p-10">
        <h2 class="h1 leading-[1.1] max-w-[450px]">
          We’re here to safeguard what matters most to you
        </h2>
        <div class="text-muted text-pretty max-w-[450px] py-5 body-1">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </div>
        <div class="text-center py-10">
          <router-link
            :to="{ name: 'service' }"
            class="bg-green-500 text-gray-950 font-medium px-10 py-4 duration-150 hover:bg-green-600"
            >Get Started</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import herosectionImag from "../../assets/img/homepage/hero-section.webp";

const data = ref<any[]>([]);

const parseCSV = (csv: string) => {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");
  const result = lines.slice(1).map(line => {
    const values = line.split(",");
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index]?.trim();
      return obj;
    }, {} as Record<string, string>);
  });
  return result;
};

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://docs.google.com/spreadsheets/d/1_DX0OHTzJUt0S9wBva-IcbTV9TpmdS5syqIIboP21vE/pub?gid=0&single=true&output=csv"
    );
    data.value = parseCSV(response.data);
    console.log(data.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchData();
});

</script>
