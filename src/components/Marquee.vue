<template>
  <div class="p-3 marquee-wrapper">
    <div class="marquee marquee--hover-pause">
      <ul class="marquee__content">
        <li v-for="i in 6" :key="i" class="mb-0 flex justify-around gap-3">
          <span>Join Us for Just NPR.999!</span>
          <span class="font-medium">Your Path to Growth Starts Here</span>
          <span>👌</span>
        </li>
      </ul>

      <ul aria-hidden="true" class="marquee__content">
        <li v-for="i in 6" :key="i" class="mb-0 flex justify-around gap-3">
          <span>Join Us for Just NPR.999!</span>
          <span class="font-medium">Your Path to Growth Starts Here</span>
          <span>👌</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  background:black;
  color: white;
}

.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  gap: var(--gap);
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  gap: var(--gap);
  padding: 0 !important;
  margin: 0 !important;
}

.marquee__content {
  animation: scroll 60s linear infinite;
}

.marquee--hover-pause:hover .marquee__content {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
