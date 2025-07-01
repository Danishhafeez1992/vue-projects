<script setup>
import { ref, reactive, toRaw } from 'vue';

//<!--*Example no 1 
let name = ref('fadsfasdf');

//<!--*Example no 2-->

const agree = ref(true)






// const student = ref({
//   name: 'Hasaam',
//   class: 12,
//   hobby: 'Jocking'
// })

// function handleFormSubmit() {
//   console.log({ Student: toRaw(student.value) });

// }


function handleFormSubmit() {
  console.log({ student: toRaw(student.value) });

}

const student = ref({
  name: '',
  class: '',
  hobby: '',

})

const handleEvent = (ev) => {
  console.log({ Event: ev.target.checked });
  agree.value = ev.target.checked
}
const gender = ref('')
</script>



<template>


  <!-- <div>
    <input type="radio" value="Male" v-model="gender" /> Male
    <input type="radio" value="Female" v-model="gender" /> Female
    <p>Selected Gender: {{ gender }}</p>
  </div> -->



  <!--*Example no 1-->
  <div>
    <input class="border border-red-700" type="text" v-model="name" placeholder="Apna naam likhen" />
    <p>Apka naam: {{ name }}</p>
  </div>
  <!--*Jab user input field mein naam likhega, name variable ki value change hoti rahegi.
  <!--*Aur agar name variable manually change karo, to input field ka value bhi update ho jata hai.-->




  <!--*Example no 2-->

  <div class="flex gap-3">
    <label>i agree</label>
    <input class="border border-blue-900" :value="'agree'" type="checkbox" @change="(e => handleEvent(e))" />
    <h1>Status: {{ agree }}</h1>
  </div>






















  <!-- <div class="my-8 mx-6 flex-col flex gap-y-4">
    <input type="text" v-model="student.name" id="name" placeholder="Name"
      class="w-36 h-10 border border-red-500 outline-none pl-2 rounded-lg " />
    <input type="number" v-model="student.class" id="name" placeholder="Class"
      class="w-36 h-10 border border-red-500 outline-none pl-2 rounded-lg " />
    <input type="text" v-model="student.hobby" id="name" placeholder="Hobby"
      class="w-36 h-10 border border-red-500 outline-none pl-2 rounded-lg " />
    <button @click="handleFormSubmit"
      class="w-36 h-10 border-2 bg-red-400 border-red-800 outline-none pl-2 rounded-lg ">Submit</button>
  </div> -->




  <div class="max-w-sm mx-auto p-4">
    <!-- Text Input -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input type="text" id="name" placeholder="Enter your name" v-model="student.name"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <!-- Number Input -->
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
        Age
      </label>
      <input type="number" id="age" placeholder="Enter your age" v-model="student.age"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <button @click="handleFormSubmit" class="border border-red-800 mt-6 " type="submit">Click me</button>

  </div>


</template>
