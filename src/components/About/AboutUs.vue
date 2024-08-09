<template>
  <div>
    <div class="relative h-[350px] w-full rounded-lg">
      <img
        src="https://www.teamagendas.com/wp-content/uploads/2022/10/staff-meeting-ideas.jpg"
        alt="about us"
        class="w-full h-full object-cover object-top rounded-lg"
      />
      <div
        class="overlay bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 h-full w-full rounded-lg"
      />
      <div class="title-container">
        <h2
          class="md:text-8xl text-6xl font-bold absolute md:top-[250px] top-[290px] md:left-[25px] left-[20px] transition-all delay-100 text-white animated-text"
        >
          About Us
        </h2>
      </div>
    </div>
    <div
      class="company-overview text-justify py-4 px-6 mt-4 w-full rounded-lg"
    >
      <h1 class="font-bold">Finance Investment</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam minus
        officiis quia, vero atque illo illum ipsum, temporibus ipsam
        voluptatibus corrupti perspiciatis. Facilis mollitia quidem obcaecati
        perspiciatis dignissimos. Officiis, id. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iusto facilis iste explicabo dolore sunt
        fugit optio illum magnam repellat maxime enim, tempore quidem minus.
        Quisquam laborum earum consequatur deserunt ad pariatur facilis
        repellendus. <br /><br />
        Repudiandae saepe dolorem veritatis repellat harum exercitationem
        eveniet provident dolores neque similique, dignissimos quisquam cumque
        ullam laborum praesentium quasi. In ab ipsam dignissimos inventore
        repudiandae nobis nam quia dolorem at ad? Voluptatum placeat blanditiis
        assumenda, suscipit eius temporibus earum expedita, excepturi sunt est
        adipisci. At!
      </p>
    </div>
  </div>
</template>
<style>
.title-container {
  overflow: hidden;
  height: 100%;
}
.animated-text {
  display: inline-block;
  transform: translateY(20px);
  opacity: 0;
  animation: slideIn 1s forwards;
}
@keyframes slideIn {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.company-overview {
  background-image: linear-gradient(
    to bottom,
    #f3f4f6,
    #f4f5f7,
    #f5f7f8,
    #f6f8f9,
    #f7f9fa,
    #f8fafb,
    #fafafb,
    #fbfbfc,
    #fcfcfd,
    #fdfdfd,
    #fefefe,
    #ffffff
  );
}
</style>
