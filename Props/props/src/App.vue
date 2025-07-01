
<!--This is a Parent component -->
<!--Data from parent is going to the child  like TitleOfBlog-->

<script setup>
import BlogPost from './components/BlogPost.vue';


</script>


<template>

<BlogPost class="border border-red-700 my-6 mx-4" name="Azeem" greeting="Hello"/>

</template>