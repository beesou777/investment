<template>
<div class="relative w-full md:aspect-[1920/350] aspect-[1920/500]">
  <img
    src="https://www.teamagendas.com/wp-content/uploads/2022/10/staff-meeting-ideas.jpg"
    alt="about us"
    class="w-full h-full object-cover object-center"
  />
    <div
      class="bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 min-h-full max-h-[350px] h-full w-full"
    ></div>
    <h2
      class="text-6xl font-bold absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] transition-all delay-100 text-white"
    >
      About Us
    </h2>
  </div>
  <div class=" bg-accent">
    <div class="grid md:grid-cols-3 grid-cols-2 max-w-[1440px] mx-auto py-10 px-[10px">
      <div class="">
        <h2>Some words about</h2>
        <p class="text-muted">Work with us</p>
      </div>
      <p class="text-muted">
        Mellentesque habitant morbi tristique senectus et netus et malesuada
        famesac turpis egestas. Ut non enim eleifend felis pretium feugiat.
      </p>
      <div class="text-muted">
        <p>
          Mellentesque habitant morbi tristique senectus et netus et malesuada
          famesac turpis egestas. Ut non enim eleifend felis pretium feugiat.
          Vivamus quis mi.
        </p>
        <h3 class="pt-6 text-primary h4">John Doe</h3>
        <p>Director of finance</p>
      </div>
    </div>
  </div>
</template>
<style>
.title-container {
  overflow: hidden;
  height: 100%;
}

@keyframes slideIn {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
