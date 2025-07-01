
<script setup>
import { ref } from 'vue';
// without ref
// let FirstName = "Sonam";
// let LastName = "Sharma";


// //Method or function concatenation
// function fullname () {
//   return FirstName + " " + LastName;
// }

// setTimeout(() => {
//     console.log("This will run after 2 seconds ");
//     FirstName = "Aliya"
    
    
    
// },2000);
// You can do this with arrow function as well
// const fullname = () => {
//     return FirstName + " " + LastName;
// }






// with ref
let FirstName = ref("Sonam");
let LastName = ref("Sharma");


//Method or function concatenation
// function fullname () {
//   return FirstName.value + " " + LastName.value;
// }

// setTimeout(() => {
//     console.log("This will run after 2 seconds ");
//     FirstName.value = "Aliya"
    
    
    
// },2000);


//Method or function concatenation with parameter

function fullname (Rollno) {
  return FirstName.value + " " + LastName.value + " " + "Roll No:" + Rollno ;
}

setTimeout(() => {
  console.log("This will run after 2 seconds ");
   FirstName.value = "Aliya"
}, 2000);
  

</script>



<template>

<h1>{{ fullname(101) }}</h1>
</template>


<style scoped>


</style>