<template>
  <div class="my-20">
    <div class="flex justify-center">
      <blockquote class="quote h2 text-center border-bottom">
        What people say about us
      </blockquote>
    </div>
    <div>
      <swiper
        :slidesPerView="`auto`"
        :centeredSlides="true"
        :spaceBetween="0"
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="i in 5" :key="i">
          <TestimonialDetail />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { ref } from "vue";
import TestimonialDetail from "./TestimonialDetail.vue";

const modules = ref([Pagination]);
</script>

<style scoped>
@import "../../../assets/scss/_utility.scss";
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0 !important;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 720px !important;
}

@media (max-width: 1024px) {
  .swiper-slide {
    width: 320px !important;
  }
}
</style>
