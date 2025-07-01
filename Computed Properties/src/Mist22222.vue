<script setup>

import {ref,computed} from 'vue';

//✅ Example 1: Full Name Join karna

let FirstName = "Danish";
let LastName = "Hafeez";

const fullName = computed(()=>{
  return FirstName + " " + LastName; 
})
//fullName automatically update ho jata hai jab firstName ya lastName change hota hai.


</script>


<template>
<p>{{  fullName }}</p>

</template>

