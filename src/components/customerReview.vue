<template>
  <div class="max-w-[1440px] mx-auto overflow-hidden relative">
    <p class="h6 text-center text-muted">Testimonials</p>
    <h2 class="h1 mx-auto">What our customers say</h2>
    <div class="slides" ref="slides">
      <div
        class="slide py-10 text-center transition-transform duration-300 cursor-pointer select-none"
        v-for="(item, index) in customerReview"
        :key="index"
      >
        <div class="flex justify-center py-5">
          <svg
            width="52"
            height="52"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.4169 18.1399L46.4169 50.907L26.9101 82.1399H10.0334L25.0471 52.8796H10.0334L10.0334 18.1399L46.4169 18.1399ZM90.5813 18.1399L90.5813 50.907L71.4032 82.1399H54.0882L69.4306 52.8796L54.0882 52.8796L54.0882 18.1399L90.5813 18.1399Z"
              fill="#54be73"
            />
          </svg>
        </div>
        <p
          class="body-1 mx-auto lg:max-w-[720px] md:max-w-[500px] max-w-[420px] !font-medium text-pretty px-[20px]"
        >
          {{ item.review }}
        </p>
        <p class="text-pretty body-1 !font-bold pt-5">
          {{ item.name }}
        </p>
        <p class="text-pretty body-1 text-muted">
          {{ item.position }}
        </p>
      </div>
    </div>
    <span
      class="prev sm:left-[20px] right-[40px] flex justify-center items-center absolute md:top-[50%] top-[40%] sm:w-[50px] w-[24px] sm:h-[50px] h-[24px] border-2 border-primary text-primary rounded-full cursor-pointer"
      @click="move(-1)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 17L10 12L15 7"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span
      class="next sm:right-[20px] right-[5px] flex justify-center items-center absolute md:top-[50%] top-[40%] sm:w-[50px] w-[24px] sm:h-[50px] h-[24px] border-2 border-primary text-primary rounded-full cursor-pointer"
      @click="move(1)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 7L15 12L10 17"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <ul class="dots">
      <li
        v-for="(review, index) in customerReview"
        :key="index"
        :class="{ active: index === active }"
        @click="jump(index)"
      ></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);

interface Review {
  review: string;
  name: string;
  position: string;
}

const customerReview: readonly Review[] = [
  {
    review:
      "This company has been our partner for two years. They take full responsibility for all assigned tasks and perform the work efficiently and on time. This company has competent employees, discipline, and a strong team spirit.",
    name: "Jennifer Lee",
    position: "Business ",
  },
  {
    review:
      "This company has been our partner for two years. They take full responsibility for all assigned tasks and perform the work efficiently and on time. This company has competent employees, discipline, and a strong team spirit.eiorghweiogjhewrio",
    name: "Bishwa jubng shah",
    position: "Business Owner",
  },
  {
    review:
      "This company has been our partner for two years. They take full responsibility for all assigned tasks and perform the work efficiently and on time. This company has competent employees, discipline, and a strong team spirit.",
    name: "Swetantha Singh",
    position: "Business Owner",
  },
  {
    review:
      "This company has been our partner for two years. They take full responsibility for all assigned tasks and perform the work efficiently and on time. This company has competent employees, discipline, and a strong team spirit.",
    name: "Bishwal prkhan",
    position: "Business Owner",
  },
];

const jump = (index: number) => {
  active.value = index;
  scrollToSlide(index);
};

const move = (direction: number) => {
  const newIndex =
    (active.value + direction + customerReview.length) % customerReview.length;
  jump(newIndex);
};

const scrollToSlide = (index: number) => {
  const slides = document.querySelector(".slides") as HTMLDivElement;
  const slideWidth = slides.clientWidth * index;
  slides.scrollTo({
    left: slideWidth,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.prev,
.next {
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    background: #54be73;
    color: #fff;
    transform: scale(1.1);
  }
  &:active {
    transform: translate(0, 3px) scale(1.2);
    @media (max-width: 639px) {
      transform: translate(0, 0) scale(1);
    }
  }
}

.dots {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 0;
  text-align: center;
  bottom: -10px;
  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #54be73;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}

.slides-container {
  position: relative;
}

.slides {
  display: flex;
  overflow: auto;
  transition: transform 0.3s ease;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.slide {
  min-width: 100%;
}
</style>
