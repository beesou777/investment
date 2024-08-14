<template>
  <div class="max-w-[1440px] mx-auto md:py-10 py-5">
    <p class="text-small !font-extrabold uppercase text-muted text-center">
      from our blogs
    </p>
    <h2 class="h1 mx-auto py-5 leading-[1.1]">Recent News</h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <router-link
        :to="`/blog/${item?.name}`"
        class="group"
        v-for="(item, index) in blogsData.slice(0, 3)"
        :key="index"
      >
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

import Blog_1 from "../../assets/img/blogs/blog-1.webp";
import Blog_2 from "../../assets/img/blogs/blog-2.webp";
import Blog_3 from "../../assets/img/blogs/blog-3.webp";

const blogsData: readonly blogType[] = [
  {
    name: "Exploring the Wonders of Nature",
    details:
      "Discover the beauty of the natural world through breathtaking landscapes.",
    imgUrl: Blog_1,
  },
  {
    name: "The Art of Culinary Delights",
    details:
      "Embark on a culinary journey with this blog post that explores gourmet recipes.",
    imgUrl: Blog_2,
  },
  {
    name: "Tech Innovations Shaping the Future",
    details:
      "Dive into the latest advancements in technology and how they are transforming.",
    imgUrl: Blog_3,
  },
];
</script>
