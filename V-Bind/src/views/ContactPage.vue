<template>
   <section class="bg-blue-600 text-white py-20 text-center px-6">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
    <p class="text-lg md:text-xl max-w-2xl mx-auto">
      We’d love to hear from you. Reach out with any questions or feedback.
    </p>
  </section>

  <!-- Contact Form Section -->
  <section class="py-16 px-6 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-semibold mb-6 text-center">Send Us a Message</h2>
      <form class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow">
        <input type="text" placeholder="Your Name" class="border border-gray-300 p-3 rounded-md" required />
        <input type="email" placeholder="Your Email" class="border border-gray-300 p-3 rounded-md" required />
        <input type="text" placeholder="Subject" class="md:col-span-2 border border-gray-300 p-3 rounded-md" />
        <textarea placeholder="Your Message" rows="5" class="md:col-span-2 border border-gray-300 p-3 rounded-md" required></textarea>
        <button type="submit" class="md:col-span-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>

  <!-- Contact Info Section -->
  <section class="py-16 px-6">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 class="text-xl font-bold mb-2">Email</h3>
        <p class="text-gray-600">support@example.com</p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Phone</h3>
        <p class="text-gray-600">+1 (123) 456-7890</p>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">Address</h3>
        <p class="text-gray-600">123 Main Street, City, Country</p>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="py-16 px-6 bg-gray-100">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-6">Find Us</h2>
      <div class="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe 
          class="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.093159145559!2d-122.42177868468147!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e0c6b17%3A0x8c0e9ad1c5cc69cb!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616615633890!5m2!1sen!2sus" 
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>

  <!-- Call to Action Footer -->
  <footer class="bg-blue-600 text-white py-10 text-center">
    <h3 class="text-2xl font-bold mb-2">Let’s Work Together</h3>
    <p class="mb-4">Ready to start your next project with us?</p>
    <a href="/get-started" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition">
      Get Started
    </a>
  </footer>
</template>