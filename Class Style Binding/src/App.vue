<script setup>
import HelloWorld from './components/HelloWorld.vue'
import App2 from './components/HelloWorld.vue'
import { ref, reactive } from 'vue'

const isActive = ref(true)
const hasError = ref(false)



const classObject = reactive({
    active: false,
    hasError: true,
})



//Binding to Arrays

const activeClass = ref('static');
const errorClass = ref('hasError');


const activeColor = ref('green')
const fontSize = ref('30')
const fontWeight = ref('300')
const style = ref({ color: 'green', fontSize: '50' + 'px', fontWeight: '600' })

const myobj = ref({
    name: "Danish",
    rollNo: 30,
})


const baseStyles = ref('color: red')
const overridingStyles = ref('font-size:30px')
const fontStyle = ref('font-weight:600')

</script>



<template>
    <!-- <HelloWorld class="baz boo" /> -->
    <!-- <HelloWorld :class="{ active: isActive } " /> -->

    <HelloWorld class="baz" />

    <!-- <h1 class="static" :class="{ active: isActive, 'danger': hasError }">Danish Hafeez</h1> -->
    <!-- <h1 :class="classObject">Danish Hafeez</h1> -->



    <!--Binding to arrays-->
    <div :class="[activeClass, errorClass]">Danish Hafeez</div>
    <!--Binding to arrays-->

    <!-- ternary expression:-->
    <div :class="[isActive ? 'active' : 'hasError']">Ternary operator</div>



    <div :class="[{ [activeClass]: isActive }, errorClass]">Multiple conditions</div>

    <!-- <div v-for="(obj, index) in myobj">
        <div>{{ obj }}</div>
    </div> -->

    <h2>{{ myobj.name }}, {{ myobj.rollNo }}</h2>

    <h3 :style="style">Testing</h3>

    <!--Binding to Arrays-->

    <div :style="[baseStyles, overridingStyles, fontStyle]">This is array</div>

</template>



<style>
.active {
    font-size: 40px;
    color: green;
}

.hasError {
    font-size: 40px;
    color: red;
}

.static {
    font-size: 40px;
    color: blueviolet;
}


.activeColor {
    color: red;
    font-size: 30px;
}

.baseStyles {
    color: cadetblue;
    font-size: 30px;
}
</style>