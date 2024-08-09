<template>
  <div class="">
    <h1 class="text-center md:my-10 my-5 border-bottom">Blogs</h1>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    <slot></slot>
  </div>
  </div>
</template>
<style scoped>
.blog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
}
</style>
