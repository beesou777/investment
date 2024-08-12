<template>
  <div class="error_content h-[90vh] mt-40">
    <h1 class="title">404</h1>
    <div class="info">
      <h2 class="subtitle">Oops...</h2>
      <p class="description">The page you are looking for does not exist.</p>
      <div class="text-center py-10 z-50">
        <router-link
          :to="{ name: 'home' }"
          class="bg-green-500 text-gray-950 font-medium px-10 py-4 duration-150 hover:bg-green-700"
        >
          About us
        </router-link>
      </div>
    </div>
    <div class="all-svg">
      <span class="svg-1">
        <img :src="squareSVG" alt="svg1" />
      </span>
      <span class="svg-2">
        <img :src="circleSVG" alt="svg2" />
      </span>
      <span class="svg-3">
        <img :src="corss1SVG" alt="svg3" />
      </span>
      <span class="svg-4">
        <img :src="cross2SVG" alt="svg4" />
      </span>
    </div>
  </div>
</template>
<script setup>
import { squareSVG, circleSVG, cross1SVG, cross2SVG } from "../../utils/index";
</script>

<style scoped>
.title {
  width: 100%;
  font-size: 270px;
  line-height: 1em;
  text-align: center;
  position: relative;
  z-index: 2;
}

.info {
  width: 100%;
  text-align: center;
  z-index: 2;
}

.subtitle {
  width: 100%;
  margin: 20px 0 0;
  font-size: 47px;
  line-height: 1.1em;
  text-align: center;
  z-index: 2;
}

.all-svg {
  transition: all 0.4s ease-in-out;
}

.svg-1,
.svg-2,
.svg-3,
.svg-4 {
  transition: transform 0.4s ease-in-out;
}

.svg-1 {
  display: block;
  width: 95px;
  height: 95px;
  z-index: 20;
  position: absolute;
  top: 20%;
  left: 35%;
  color: #ffdac536
}
.svg-2 {
  position: absolute;
  left: 38%;
  bottom: 10%;
  width: 140px;
  height: 140px;
  z-index: 10;
}
.svg-3 {
  position: absolute;
  top: 24%;
  right: 23%;
  width: 60px;
  height: 60px;
  z-index: 10;
}
.svg-4 {
  position: absolute;
  top: 47%;
  left: 23%;
  width: 36px;
  height: 36px;
  z-index: 10;
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
