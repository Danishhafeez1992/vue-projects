<script setup>
import { ref, reactive, watch } from 'vue';
import CheckboxVue from './checkbox-vue.vue';
const fullname = ref('');
//<!--* NOW THE fullname and input v-model is two way binding>
function handleFormSubmit() {
    console.log("Form Submitted", formData);

}
// <!--*Now with the object we can create >

const formData = reactive({
    fullname: "",
    email: "",
});
const number = ref('');

const checked = ref('true');

const Multiple = ref([]);

const radioBtn = ref('');

const selected = ref('')

const selected1 = ref('A')

const options = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' },
])


// const check = ref(false)

// watch(() => selected.value, (newValue, oldValue) => {
//     console.log({ SelectedNew: newValue });
//     console.log({ SelectedOld: oldValue });

// })


const toggle = ref('false')
//<!--* Default value is 'no' because checkbox is not checked initially-->


//dynamic values
const dynamicTrueValue = ref('Yes')
const dynamicFalseValue = ref('No')

// function to change the value at run time
function changeValues() {
    dynamicTrueValue.value = 'Active'
    dynamicFalseValue.value = 'Inactive'
}
const toggle2 = ref('No')

const first = ref('Yes')
const second = ref('No')
const pick = ref('')



const msg = ref('')

</script>



<template>
    <p>Name is : {{ formData.fullname }}</p>

    <p>Email is : {{ formData.email }}</p>
    <form @submit.prevent="handleFormSubmit">
        <div>
            <label for="name">Name:</label>
            <input class="border border-blue-700" type="text" id="name" v-model="formData.fullname"
                placeholder="Enter here" />
        </div>

        <div>
            <label for="email">Email :</label>
            <input class="border border-blue-700 " id="email" for="email" v-model="formData.email" type="email">
        </div>

        <p>Number is :{{ number }}</p>
        <input class="border border-brown-800" v-model="number" type="number"><br><br>

        <input type="checkbox" id="box" v-model="checked">
        <label for="box"> {{ checked }} </label><br><br>

        <!--*We can also bind multiple checkboxes to the same array or Set value:-->

        <div>Checked Names: {{ Multiple }}</div>

        <input class="mr-2" type="checkbox" id="waqar" value="Waqar" v-model="Multiple">
        <label for="waqar">Waqar</label>

        <input class="mr-2 ml-2" type="checkbox" id="babar" value="Babar" v-model="Multiple">
        <label for="babar">Babar</label>

        <input class="mr-2 ml-2" type="checkbox" id="danish" value="Danish" v-model="Multiple">
        <label for="danish">Danish</label><br><br>

        <!--*In this case, the checkedNames array will always contain the values from the currently checked boxes.-->


        <!--*Radio btn-->
        <p>Picked : {{ radioBtn }}</p>

        <input class="mr-2 ml-2" type="radio" id="one" value="one" v-model="radioBtn">
        <label for="one">One</label>

        <input class="mr-2 ml-2" type="radio" id="two" value="two" v-model="radioBtn">
        <label for="two">Two</label><br>



        <!--*Select-->
        <div class="mt-10">Selected: {{ selected }}</div>

        <select class="border border-red-700" v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>


        <div class="mt-10">Selected 2 :{{ selected1 }}</div>

        <select class="border bg-red-800" v-model="selected1"><br>
            <option v-for="option in options" :value="option.value">{{ option.text }}</option>

        </select><br><br>


        <p>current value : {{ toggle }}</p>
        <input type="checkbox" v-model="toggle" true-value="true" false-value="false">



        <!--*Yeh thoda advanced Vue concept hai jahan tum checkbox ki true-value aur false-value hardcoded nahi kar rahe, balke Vue ke data se dynamically assign kar rahe ho.-->
        <div>
            <input type="checkbox" v-model="toggle2" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue">
        </div>

        <p>Checkbox Value: {{ toggle2 }}</p>


        <!--*Radio btn example-->

        <div class="flex gap-4 mt-10 mb-10">
            <input type="radio" v-model="pick" :value="first">
            <label>True</label>

            <input type="radio" v-model="pick" :value="second">
            <label>False</label>
        </div>

        <p>Selected Value : {{ pick }}</p>



        <!--*Select Options-->

        <select v-model="selected">
            <option :value="{ number: 123 }">123</option>
        </select>



        <input class="border border-red-700" v-model.lazy="msg" />
        <p>You typed: {{ msg }}</p>


        <!-- <button class="border border-red-700 bg-red-700 text-white p-3 mt-4 mx-auto w-[130px] block" type="Submit">Click
            me</button> -->

    </form>

    <!-- <CheckboxVue /> -->




</template>
