<!--Declaring Reactive State-->
<!--ref()-->

<!--WIHOUT REF OR REACTIVITY-->
<!--Example 1-->
<!-- <script setup>

import {ref} from 'vue';

let a = ref(10); 
let b = ref(20);
setTimeout(() => {
    console.log("Set Timeout Called");
    a.value = 30;
    console.log(a.value); // Now prints 30
    
    
},2000);

</script>


<template>

<p>TOTAL: {{ a+b }}</p>

</template> -->


<!--WIHOUT REF OR REACTIVITY-->
<!--Example 2-->

<script setup>
//import { reactive } from 'vue';
//import {ref} from 'vue';

//This is an example of object

// let myobj =  reactive({
//   name:"Danish",
//   LastName:"Hafeez",
//   age:32,
//   height:5.4,

//   City:"Lahore",
// })

// setTimeout(() => {
//    console.log("Set Timeout called");
//    myobj.name="Azeem"

// },2000);


//This is an example of array

let myArray = reactive ([1,2,3,4,5]);
let myArray2 = reactive ([6,7,8,9,10]);
   console.log("Before reactive my array is",myArray);

setTimeout(() => {
  
    // myArray.splice(2,1,33);
    // console.log(myArray.length);
    console.log("After reactive my array is",myArray.concat(myArray2));
}, 500);

// console.log(myArray.concat(myArray2));


const count = ref(0)

console.log(count.value);
// count.value++;
// console.log(count.value);

function increment(){
  count.value++;
}

</script>


<template>

<h1>Count: {{ myArray }}</h1>
<!-- <button @click="count++" class="bg-orange-700 text-white px-6 py-3 rounded ml-5 mt-5">Count: {{ count }}</button> -->



<button @click="increment" class="bg-red-700 text-white px-14 py-3">Click me: {{ count }}</button>





</template>