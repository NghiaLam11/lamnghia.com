<script setup lang="ts">
// import { ref } from "vue";
import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Loader from './components/Loader.vue'
// let localTheme = localStorage.getItem("theme");
// console.log(localTheme);
// const isDark = ref(false);
// const checkMode = () => {
//   if (localTheme === "dark") {
//     document.getElementById("main")?.classList.add("dark");
//   } else if (localTheme === "light") {
//     document.getElementById("main")?.classList.add("light");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// };
// checkMode();

// const darkMode = () => {
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = "dark";
//   isDark.value = true;
//   document.getElementById("main")?.classList.add("dark");
//   document.getElementById("main")?.classList.remove("light");
// };
// const lightMode = () => {
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = "light";
//   isDark.value = false;
//   document.getElementById("main")?.classList.add("light");
//   document.getElementById("main")?.classList.remove("dark");
// };


</script>

<template>
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
    <!-- <Loader></Loader> -->
</template>

<style scoped></style>
