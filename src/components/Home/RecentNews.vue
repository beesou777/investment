<template>
  <div class="max-w-[1440px] mx-auto md:py-10 py-5">
    <p class="text-small !font-extrabold uppercase text-muted text-center">
      from our blogs
    </p>
    <h2 class="h1 mx-auto py-5 leading-[1.1]">Recent News</h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <router-link :to="`/blog/${item?.name}`" class="group" v-for="(item, index) in blogsData.slice(0, 3)" :key="index">
        <div
          class="aspect-[480/258] overflow-hidden rounded-[4px] bg-[#f5f5f5]"
        >
          <img
            :src="item.imgUrl"
            alt="blog1"
            width="100%"
            height="100%"
            class="w-full aspect-[480/258] group-hover:scale-[1.1] object-cover duration-300 max-w-full h-auto"
          />
        </div>
        <div class="text-pretty">
          <p
            class="body-2 group-hover:underline duration-300 font-bold mt-4 mb-0 text-gray-950 leading-[150%] text-pretty"
          >
            {{ item.name }}
          </p>
          <span class="text-pretty text-muted">{{ item.details }}</span>
        </div>
        </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { blogType } from "../../types/type";

const blogsData: readonly blogType[] = [
  {
    name: "Exploring the Wonders of Nature",
    details:
      "Discover the beauty of the natural world through breathtaking landscapes.",
    imgUrl:
      "https://i.pinimg.com/originals/6a/68/0f/6a680f6ddc6c46c7dabd2e6704ba9189.jpg",
  },
  {
    name: "The Art of Culinary Delights",
    details:
      "Embark on a culinary journey with this blog post that explores gourmet recipes.",
    imgUrl:
      "https://i.pinimg.com/564x/65/ed/de/65edde4a6864e821cd97179499329f39.jpg",
  },
  {
    name: "Tech Innovations Shaping the Future",
    details:
      "Dive into the latest advancements in technology and how they are transforming.",
    imgUrl:
      "https://i.pinimg.com/originals/07/51/2b/07512bdadcae01854bb600a60c30cb18.jpg",
  },
  {
    name: "Traveling the World",
    details:
      "Join us on a global adventure as we explore top travel destinations.",
    imgUrl:
      "https://i.pinimg.com/originals/94/67/f4/9467f4513d12dc7c34a58138fc60a621.jpg",
  },
  {
    name: "Mastering the Craft of Photography",
    details:
      "Unlock the secrets to capturing stunning photographs with tips on composition.",
    imgUrl:
      "https://i.pinimg.com/564x/d8/16/4a/d8164a7d91f58a8974b0b56ca38dbf1b.jpg",
  },
  {
    name: "The Evolution of Modern Architecture",
    details:
      "Explore the journey of architectural design from classical styles to contemporary innovations.",
    imgUrl:
      "https://i.pinimg.com/originals/29/8f/99/298f99b004e924211657944e1eaf54f3.jpg",
  },
];
</script>
