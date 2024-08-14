<template>
  <div class="max-w-[1440px] mx-auto px-[10px] py-5">
    <BlogGrid>
      <BlogPost v-for="(item, index) in dataItems" :key="index" :item="item" />
    </BlogGrid>
  </div>
</template>
<script setup lang="ts">
import BlogGrid from "@/components/Blog/BlogGrid.vue";
import BlogPost from "@/components/Blog/BlogPost.vue";
import type { blogType } from "../types/type";

import Blog_1 from "../assets/img/blogs/blog-1.webp";
import Blog_2 from "../assets/img/blogs/blog-2.webp";
import Blog_3 from "../assets/img/blogs/blog-3.webp";


const dataItems: blogType[] = [
  {
    name: "Exploring the Wonders of Nature",
    details:
      "Discover the beauty of the natural world through breathtaking landscapes.",
    imgUrl:Blog_1,
  },
  {
    name: "The Art of Culinary Delights",
    details:
      "Embark on a culinary journey with this blog post that explores gourmet recipes.",
    imgUrl:Blog_2,
  },
  {
    name: "Tech Innovations Shaping the Future",
    details:
      "Dive into the latest advancements in technology and how they are transforming.",
    imgUrl:Blog_3,
  },
  {
    name: "Traveling the World",
    details:
      "Join us on a global adventure as we explore top travel destinations.",
    imgUrl:Blog_1,
  },
  {
    name: "Mastering the Craft of Photography",
    details:
      "Unlock the secrets to capturing stunning photographs with tips on composition.",
    imgUrl:Blog_2,
  },
  {
    name: "The Evolution of Modern Architecture",
    details:
      "Explore the journey of architectural design from classical styles to contemporary innovations.",
    imgUrl:Blog_3,
  },
];
</script>
