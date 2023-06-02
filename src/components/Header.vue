<script setup lang="ts">
import { onMounted, ref } from "vue";
const navbar = ref();
const onDisplayNav = () => {
  if (navbar.value.style.top === "-500%") {
    navbar.value.style.top = "70%";
  } else {
    navbar.value.style.top = "-500%";
  }
};
var countToggleDarkMode = ref(0);
const checked = ref(false);
const ball = ref<any>()
let localTheme = localStorage.getItem("theme");
console.log(localTheme);
const isDark = ref(false);
const checkMode = () => {
  if (localTheme === "dark") {
    countToggleDarkMode.value += 1
    checked.value = true
    onMounted(() => {
      ball.value.style.left = '60%'
    })
    document.getElementById("main")?.classList.add("dark");
  } else if (localTheme === "light") {
    document.getElementById("main")?.classList.add("light");
    onMounted(() => {
      ball.value.style.left = '5px'
    })
  } else {
    localStorage.setItem("theme", "dark");
  }
  console.log('000')
};

checkMode();


const darkMode = () => {
  // Whenever the user explicitly chooses dark mode
  if (countToggleDarkMode.value % 2 == 0) {
    ball.value.style.left = '60%'
    localStorage.theme = "dark";
    isDark.value = true;
    checked.value = true
    document.getElementById("main")?.classList.add("dark");
    document.getElementById("main")?.classList.remove("light");
  } else {
    ball.value.style.left = '5px'
    localStorage.theme = "light";
    checked.value = false
    isDark.value = false;
    document.getElementById("main")?.classList.add("light");
    document.getElementById("main")?.classList.remove("dark");
  }
  countToggleDarkMode.value += 1;
};

</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 font-primary">
      <div
        class="max-w-screen-xl bg-white dark:bg-gray-900 flex flex-wrap items-center justify-between mx-auto p-4 relative z-50"
      >
        <a
          href="#"
          class="flex items-center animate__animated animate__lightSpeedInLeft"
        >
          <img
            src="/logo.png"
            class="h-11 mr-3 rounded-full"
            alt="JClahi Logo"
          />
          <span
            class="self-center italic text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 whitespace-nowrap"
            >JCLahi</span
          >
        </a>
        <button
          @click="onDisplayNav"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="w-full md:block md:w-auto absolute right-0 left-0 md:static nav__hidden md:z-10 z-50"
          style="top: -500%"
          ref="navbar"
        >
          <ul
            class="font-semibold flex flex-col items-start md:items-center p-4 md:p-0 mt-5 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li class="h-full">
              <router-link
                active-class="active-link"
                exact-active-class="exact-active-link"
                to="/"
                class="block py-2 pl-3 pr-4 text-dark rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                exact-active-class="exact-active-link"
                to="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                exact-active-class="exact-active-link"
                to="/blogs"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Blogs</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                exact-active-class="exact-active-link"
                to="/news-feed"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >News Feed</router-link
              >
            </li>
            <li>
              <router-link
                active-class="active-link"
                exact-active-class="exact-active-link"
                to="/resume"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Résume</router-link
              >
            </li>
            <li class="py-2 pl-3 pr-4 flex flex-col justify-center items-start">
              <input type="checkbox" v-model="checked" id="dark-mode" />
              <label @click="darkMode" for="dark-mode darkmode"><span ref="ball"></span></label>
              <div class="background"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav__hidden {
  transition: all ease 1.2s;
}
@-webkit-keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInLeft {
  -webkit-animation-name: lightSpeedInLeft;
  animation-name: lightSpeedInLeft;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}

label {
  position: relative;
  width: 50px;
  height: 20px;
  display: block;
  background: url("../img/21.gif");
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(198, 247, 253, 0.3);
  border-radius: 100px;
  cursor: pointer;
  transition: 1s ease;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
}
label span {
  content: "";
  position: absolute;
  height: 15px;
  width: 15px;
  background: #fffefe;
  border-radius: 50%;
  top: calc(50% - (16px / 2));
  transition: 0.8s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.background {
  position: absolute;
  background: #9ad6f7;
  z-index: -1;
  transition: all 1s ease;
}

input:checked + span {
  left: 90%;
  transform: translateX(-100%);
  background: #777ba5;
}
input:checked ~ label {
  background: url("../img/22.gif");
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(90, 79, 136, 0.2);
}
input:checked ~ .background {
  background: #0e377c;
}
input {
  display: none;
}
</style>
