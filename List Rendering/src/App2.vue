<script setup>
import {ref,reactive,computed} from 'vue';
import Home from '../src/Home.vue'
import MyComponent from './components/MyComponent.vue'
// Array of Strings
const students = ref(["Danish11","waqar22","Babar33","asif44"]);

// Arrays of Objects
const employees = ref([
  {name:"Danish" , salary : 10000},
  {name:"Babar" , salary : 20000 },
  {name:"Waqar" , salary : 30000},
]);


//Arrays of Arrays
const languages = ref([
  ["Java","Android"],
  ["Python", "Python"],
  ["Dart", "Flutter"],
])

//Object key value pair

const course = reactive({
  title : "Learn vue js",
  author : "Danish tutorials",
  duration :  "6 Months",
});


// Object of Objects

const frameworks = reactive({
  vuejs:{
    id:1,
    title: "Learn vue js",
    fees : 100,
  },
  react:{
    id:2,
    title:"Learn react js",
    fees : 200,
  },
  angular:{
    id:3,
    title: "Learn angular",
    fees : 300,
  },


});


const myobj = reactive({
  name:"Danish",
  age:30,
  height:5.4,
});




const items = ref([{message:'Foo'}, {message:'Bar'}])

const parentMessage = ref('Parent')



</script>


<template>
<!-- <Home v-for="n of 5"/> -->

<!-- <Home v-for="(student,i) in students" :key="i" :item="students"/> -->
<Home :item="students"/>
<MyComponent/>


<!-- <h1 v-for="(language,i) of languages">{{ i }}  {{ language }}</h1> -->

<!--One way to prints all array values single just like this but it is not recommended-->

<!-- <h1>{{ students[0] }}</h1>
<h1>{{ students[1] }}</h1>
<h1>{{ students[2] }}</h1> -->


<!--USING V-FOR LOOP TO PRINT ALL ARRAY VALUES-->


<!-- <h2 v-for="student in students">{{ student }}</h2> -->

<!--Arrays of Strings Print like that--> 
<!-- <h1 v-for="(student,i) in students" key="i"> {{ i }} {{ student  }}</h1> -->




<!--Arrays of object print like that  with key-->
<!-- <h1 v-for="(employee,i) in employees" key="i">{{ i }}  {{ employee.name }} {{ employee.salary }}</h1> -->




<!--Destructuring-->

<!-- <h1 v-for="(name,salary) in employees">{{ employee }} </h1> -->


<!--Array of Arrays or nested v-for loop-->

<!-- <div v-for="language in languages">{{ language }}
  <h1 v-for="item in language">{{ item }}</h1>
</div> -->


 <!-- <template v-for="(language,i) in languages":key="i">
  <h1 v-for="item in language">{{ item }}</h1>
  <hr/>
</template> -->




<!--Object key value pair -->

<!-- <h1 v-for="value in course">{{ value }}</h1> -->

<h2 v-for="(value,i,k) in course " key="i">{{ k }} {{ i }}: {{ value }}  </h2>
<hr/>







<!--Object of Object-->

<!-- <h1 v-for="framework in frameworks">
  {{framework.id}}
  {{ framework.title }}:
  {{ framework.fees }}
</h1>
   -->

<!--With the key-->


<!-- <h1 v-for="framework in frameworks" :key="framework.id">
  {{framework.id}}
  {{ framework.title }}:
  {{ framework.fees }}
</h1> -->


<!-- <div v-for="framework in frameworks" :key="framework.id">

  <h1 v-for="value in framework">{{ value }}</h1>

</div> -->


<!-- <div v-for="framework in frameworks" :key="framework.id">
  <h1 v-for="value in framework">{{ value }}</h1>
</div> -->


<template v-for="framework in frameworks" :key="framework.id">
  <h1 v-for="(value,k) in framework">{{ value }}: {{ k }}</h1>
</template>






<li v-for="item in items">{{ item.message }}</li>


<li v-for="(item,i) in items">
  {{ parentMessage }} - {{ i }} - {{ item.message }}

</li>







<!--v-for with a Range-->

<!-- <h1 v-for="n in 5">{{ n }}</h1> -->

<h1 v-for="n in 5" :key="n">{{ n }}</h1>




<!--v-for on <template>-->
<template v-for="n in 5" :key="n">
<h1>Price</h1>

</template>



<!--v-for with v-if-->
<!-- <h1 v-for="employee in employees ">{{ employee }}</h1> -->

<div v-for="({name,salary},i) in employees">

   <h1 v-if="salary > 10001">{{ name }}: {{ salary }}</h1>

</div>





</template>






<style>


</style>