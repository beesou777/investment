<template>
  <div class="error_content h-[90vh] mt-40">
    <h1
      class="w-full md:text-[270px] text-[150px] leading-[1em] text-center relative z-[2]"
    >
      404
    </h1>
    <div class="w-full text-center z-[2]">
      <h2 class="w-full mx-[20px] leading-[1.1em] text-center z-[2]">
        Oops...
      </h2>
      <p class="text-[19px] mt-[17px] mb-7 font-normal text-muted text-lg">
        The page you are looking for does not exist.
      </p>
      <div class="text-center py-10 z-50">
        <router-link
          :to="{ name: 'home' }"
          class="bg-green-500 text-gray-950 font-medium px-10 py-4 duration-150 hover:bg-green-700"
        >
          Home
        </router-link>
      </div>
    </div>
    <div
      class="all-svg md:block hidden transition-all duration-[0.4s] ease-in-out"
    >
      <span
        class="svg-1 block w-[95px] h-[95px] z-[20] absolute top-[20%] 2xl:left-[35%] left-[25%] text-[#ffdac536]"
      >
        <img :src="squareSVG" alt="svg1" />
      </span>
      <span
        class="svg-2 absolute left-[38%] bottom-[10%] w-[140px] h-[140px] z-10"
      >
        <img :src="circleSVG" alt="svg2" />
      </span>
      <span class="svg-3 absolute top-[24%] right-[23%] w-[60px] h-[60px] z-10">
        <img :src="cross1SVG" alt="svg4" />
      </span>
      <span
        class="svg-4 absolute top-[50%] xl:left-[23%] left-[20%] w-[36px] h-[36px] z-10"
      >
        <img :src="cross2SVG" alt="svg4" />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { squareSVG, circleSVG, cross1SVG, cross2SVG } from "../../utils/index";
</script>

<style scoped lang="scss">
.all-svg {
  transition: all 0.4s ease-in-out;
}

.svg-1,
.svg-2,
.svg-3,
.svg-4 {
  transition: transform 0.4s ease-in-out;
}

.error_content:hover .all-svg .svg-1 {
  transform: translateY(-10px) translateX(10px);
}

.error_content:hover .all-svg .svg-2 {
  transform: translateY(10px) translateX(-10px);
}

.error_content:hover .all-svg .svg-3 {
  transform: translateY(-10px) translateX(-10px);
}

.error_content:hover .all-svg .svg-4 {
  transform: translateY(10px) translateX(10px);
}
</style>