<template>
  <section class="py-4 px-6 bg-gray-100">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <Swiper
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :pagination="{ clickable: true }"
        class="w-full"
      >
        <SwiperSlide
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="p-6 bg-white rounded-xl shadow-md"
        >
          <p class="text-lg text-gray-700 italic mb-4 mt-4">"{{ testimonial.quote }}"</p>
          <div class="flex items-center justify-center my-[30px]">
            <img
              :src="testimonial.image"
              alt="User"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="font-semibold">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-500">{{ testimonial.title }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
// ✅ Swiper imports for Vue 3 and Swiper 9+
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

//These are the slider images
import testi1 from '../assets/images/testi1.png';
import testi2 from '../assets/images/testi2.png';
import testi3 from '../assets/images/testi3.png';
const testimonials = [
  {
    quote: 'This team exceeded our expectations. The project was on time and within budget.',
    name: 'Sarah Johnson',
    title: 'Marketing Director, Company A',
    image: testi1,
  },
  {
    quote: 'Incredible support and communication. Highly recommend their services.',
    name: 'Mark Robinson',
    title: 'CTO, TechCorp',
    image: testi2,
  },
  {
    quote: 'A pleasure to work with. Professional and detail-oriented from start to finish.',
    name: 'Emily White',
    title: 'Founder, Startup XYZ',
    image: testi3,
  },
];
</script>

<style scoped>
.swiper-pagination-bullet {
  background-color: #3b82f6;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
