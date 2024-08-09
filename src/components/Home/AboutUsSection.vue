<template>
  <div>
    <div class="mt-16">
      <div class="flex justify-center">
        <h2 class="h2 border-bottom text-center">About Us</h2>
      </div>
      <div
        class="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-8 my-8"
      >
        <div class="h-[500px] rounded-xl">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about us"
            class="object-cover object-center w-full h-full rounded-xl"
          />
        </div>

        <div class="lg:w-1/2 w-full flex flex-col text-justify">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur architecto deserunt, error porro ipsam ipsa fugiat est
            numquam delectus tempore commodi exercitationem ab animi, quibusdam
            harum voluptatibus inventore repudiandae fugit aliquam dignissimos
            odit distinctio aperiam quis? Magni, debitis aspernatur ducimus
            nihil deleniti minima a assumenda ad nobis iure minus officiis neque
            cum hic delectus earum illo, temporibus esse. Facilis eligendi nisi
            ex similique quod a nobis illo repellendus maiores quam cupiditate,
            aliquam accusamus. Saepe esse dicta harum ullam, dolore sequi enim?
          </span>
          <router-link :to="{ name: 'about' }">
            <button
              class="btn bg-green-400 text-black font-medium hover:bg-green-500 mt-2"
            >
              View Our Core Values
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.26);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}
</style>
