<template>
  <div class="about dark:bg-slate-700 dark:text-white">
    <h1>Hello my friends. I'm DETAIL</h1>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const fruits = new Map([
  [
    "testing-blog-details",
    {
      name: "Lam Hien Nghia",
      age: "20",
    },
  ],
  [
    "testing-blog-details1",
    {
      name: "Lam Hien Nghia1",
      age: "21",
    },
  ],
  [
    "testing-blog-details2",
    {
      name: "Lam Hien Nghia2",
      age: "22",
    },
  ],
]);


console.log(fruits.get(String(route.params.id)))


</script>

<style scoped></style>
