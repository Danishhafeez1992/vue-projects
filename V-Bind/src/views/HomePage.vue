<script setup>
import TestimonialSlider from '../components/TestimonialSlider.vue'
</script>

<template>




   <!-- Hero Section -->
<section class="bg-[url('./banner.jpg')] bg-cover bg-center  overflow-hidden h-64 h-[500px] relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto text-center text-white relative z-10 py-40">
        <h1 class="text-5xl font-extrabold">Welcome to Your Dream Home</h1>
        <p class="mt-4 text-xl">Find the perfect space for your family</p>
        <a href="#services" class="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-500">Explore Now</a>
    </div>
</section>



<!-- Gallery Section -->
<section id="gallery" class="py-20 bg-white">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800">Gallery</h2>
        <p class="mt-4 text-lg text-gray-600">Browse through our beautiful homes</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            <div class="rounded-lg overflow-hidden shadow-lg">
                <img src="../assets/images/nature1.jpg" alt="Home 1" class="w-full h-64 object-cover">
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg">
                <img src="../assets/images/nature2.jpg" alt="Home 2" class="w-full h-64 object-cover">
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg">
                <img src="../assets/images/nature3.jpg" alt="Home 3" class="w-full h-64 object-cover">
            </div>
            <div class="rounded-lg overflow-hidden shadow-lg">
                <img src="../assets/images/nature4.jpg" alt="Home 4" class="w-full h-64 object-cover">
            </div>
        </div>
    </div>
</section>




<!-- Services Section -->
<section id="services" class="py-20 bg-gray-100">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800">Our Services</h2>
        <p class="mt-4 text-lg text-gray-600">What we offer to make your dream home a reality</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold text-gray-800">Interior Design</h3>
                <p class="mt-4 text-gray-600">Customized interior solutions for your unique style.</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold text-gray-800">Construction</h3>
                <p class="mt-4 text-gray-600">High-quality construction with attention to detail.</p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold text-gray-800">Landscaping</h3>
                <p class="mt-4 text-gray-600">Beautiful landscapes designed to enhance your home.</p>
            </div>
        </div>
    </div>
</section>

<TestimonialSlider/>

</template>

<style>
.bg-style{background: url('../assets/images/nature1.jpg');}
</style>