<template>
    <div class=" mx-auto flex justify-center gap-8 items-center">
        <div class="my-10 items-center flex">
            <label class="text-blue-600 text-2xl font-semibold text-center flex items-center">This is
                checkbox</label>
        </div>
        <input type="checkbox" v-model="toggle" true-value="Azeem" false-value="Danish" />

        <input type="checkbox" v-model="toggle" class="accent-cyan-600" />
    </div>
</template>

<script setup>
import { ref, vModelCheckbox, watch } from 'vue';

const toggle = ref('')


watch(() => (toggle.value), (newValue, oldValue) => {
    console.log({ CheckboxNew: newValue });
    console.log({ CheckboxOld: oldValue });

})

// const myfunction = (ev) => {
//     console.log({ checkbox1: ev.target });

// }
// const myfunction2 = (ev) => {
//     console.log({ checkbox2: ev.target.value });

// }
// Func
// watch(() => toggle.value, (newValue) => {
//     console.log({ Toggle: toggle.value });

// })
</script>