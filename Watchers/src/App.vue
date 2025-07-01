<script setup>
import { ref, watch } from 'vue';

const heartRate = ref(85)
// <!--*Watchers - watch()-->
//<!--*Single Ref-->
watch(heartRate, (newHeartRateValue, oldHeartRateValue) => {
  console.log("New Heart Rate value is :", newHeartRateValue);
  console.log("Old Heart Rate value is :", oldHeartRateValue);
  if (newHeartRateValue > oldHeartRateValue && newHeartRateValue >= 120) {
    alert("Your heart rate is too much ")
  }
})

// <!--* Example 1: Simple Counter Watcher->
const counter = ref(0)

watch(counter, (newValue, oldValue) => {
  alert(`The old value is ${oldValue}: and the new Value is: ${newValue}`)
  console.log("Hello World");
  
})


// <!--*counter ek number hai.

// <!--*Jab button dabate ho to counter barhta hai.

// <!--* watch counter ko dekh raha hai.

/// <!--* Jab value change hoti hai, alert aata hai.-->



//<!--*Example 2: Input Watcher->

const name = ref('')

watch(name, (NewValue) => {
  console.log(`This is a newValue, ${NewValue}`);

})

//<!--*watch ka matlab hota hai kisi variable ko observe karna. Jab us variable me change hota hai, tab watch chalega.>

//<!--*Input box me likhne se name variable change hota hai.

//<!--*Watcher name ko dekh raha hai.

//<!--*Jaise hi likhte ho, console me new name show hota hai.




//<!--*Example 3: Multiple Variables Watch Karna-->

const firstName = ref('')
const lastName = ref('')

const fullName = ref('')

watch([firstName, lastName], ([newFirstName, newLastName]) => {
  console.log(`First name: ${newFirstName} Last name: ${newLastName} `);

})

// <!--*Dono input fields ko watch kar rahe hain.

//<!--*Jab bhi koi naam change hota hai, console me purana aur naya naam aata hai.


const name2 = ref('')

watch(name2, (showMessage) => {
  console.log(`Welcome:${showMessage}`);

})


let counter2 = ref(0)
watch(counter2, (newCounterValue) => {
  console.log(`Double value is: ${newCounterValue * 2}`);

})

// const firstName1 = ref('')
// const lastName1 = ref('')
// const fullName2 = ref('')
// watch([firstName1, lastName1], (newValue, oldValue) => {
//   // console.log({ oldValue: oldValue });
//   console.log({ FullName: firstName1.value + ' ' + lastName1.value });
//   fullName2.value = `${firstName1.value} ${lastName1.value}`
//   return fullName2.value
// })



const fname = ref('')
const lname = ref('')

const fullname = ref('')

watch([fname, lname], (new1, old1) => {
  console.log({ full: fname.value + ' ' + lname.value });
  fullname.value = `fullname: ${fname.value} ${lname.value}`

})





</script>

<template>



  <!--*Watchers - watch()-->
  <!--*Single Ref-->

  <h1 class="text-3xl font-bold underline">
    Heart Tracking System
  </h1>

  <h1 v-if="heartRate > 0">Heart Beats per minute : {{ heartRate }}</h1>

  <h2 v-if="heartRate <= 0">Sorry you are dead......</h2>

  <button @click="heartRate += 5" class="border border-red-700 mr-4 p-2">Increase</button>
  <button @click="heartRate -= 5" class="border border-red-700 p-2">Decrease</button>



  <p>{{ counter }}</p>
  <button class="bg-red-300 p-3" @click="counter++">Click me</button>
  <!--*counter ek number hai.

  <!--*Jab button dabate ho to counter barhta hai.->

  <!--*watch counter ko dekh raha hai.->

  <!--*Jab value change hoti hai, alert aata hai <!-->



  <div>
    <input class="border border-black-400 p-3" type="text" placeholder="Please type here....." v-model="name">
    <p>Name:{{ name }}</p>
  </div>

  <!--*Input box me likhne se name variable change hota hai.

  <!--*Watcher name ko dekh raha hai.

  <!--*Jaise hi likhte ho, console me new name show hota hai.-->






  <!--*Example 3: Multiple Variables Watch Karna-->


  <!-- <input class="border border-black-400 p-2" type="text" placeholder="Enter First name....." v-model="firstname2">
  <input class="border border-black-400 p-2" type="text" placeholder="Enter Last name...." v-model="lastname2">
  <p>Fullname: {{ fullName }}</p> -->


  // <!--*Dono input fields ko watch kar rahe hain.
  //<!--*Jab bhi koi naam change hota hai, console me purana aur naya naam aata hai.<!-->





  <!--*ref aur reactive variables ko Composition API me watch karte hain.<!-->

  <!--*watch ka syntax:

<!--//*watch(variable, (newValue, oldValue) => { 
<!--*  // jab variable change ho, ye chalega 
})<!-->



  <div>
    <input class="border border-green-400 p-3" type="text" placeholder="Enter text here....." v-model="name2">
    <p>Name:{{ name2 }}</p>
  </div>


  <button class="bg-red-600 p-2 text-white" @click="counter2 = counter2 + 5">Click me</button>
  <p>Double value is :{{ counter2 }}</p>



  <!-- <div>
    <input class="border border-blue-500 p-2" type="text" placeholder="Enter your First name...." v-model="firstName1">
    <input class="border border-blue-500 p-2" type="text" placeholder="Enter your Last name...." v-model="lastName1">
    <div>Fullname: {{ fullName2 }}</div>
  </div> -->



  <div>
    <input class="border border-green-500 p-2" type="text" placeholder="Enter first name" v-model="fname">
    <input class="border border-green-500 p-2" type="text" placeholder="Enter last name" v-model="lname">
    <p>Fullname : {{ fullname }}</p>
  </div>

</template>
