<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// import tinyTypewriter from "tiny-typewriter";
gsap.registerPlugin(ScrollTrigger);
import { onMounted, ref } from "vue";
const animatedLeft = ref<any>();

onMounted(() => {
  //   gsap.from("#img2", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   scale: 1,
  //   x: 100,
  // });

  // gsap.from("#img3", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   scale: 1,
  //   x: -100,
  // });
  //   gsap.to("#img2", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   scale: 1.3,
  //   x: -100,

  // });

  // gsap.to("#img3", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   scale: 1.2,
  //   x: 100,
  // });

  // gsap.to("#img4", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   scale: 1.3,
  // });

  // gsap.to("#img5", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   y: -100
  // });

  // gsap.to("#img1", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   scale: 1.5,
  // });

  gsap.from("#text-detail", {
    scrollTrigger: {
      trigger: "#text-detail",
    },
    scale: 0.2,
    opacity: 0,
  });
  gsap.to("#text-detail", {
    scrollTrigger: {
      trigger: "#text-detail",
    },
    duration: 0.7,
    scale: 1,
    opacity: 1,
  });

  gsap.from(".slideBottom", {
    scrollTrigger: {
      trigger: ".slideBottom",
    },
    y: 100,
    scale: 0.9,
    opacity: 0,
  });

  gsap.to(".slideBottom", {
    scrollTrigger: {
      trigger: ".slideBottom",
    },
    duration: 0.7,
    y: 0,
    scale: 1,
    opacity: 1,
  });

  gsap.to("#imgSpin", {
    scrollTrigger: {
      scrub: 1,
    },
    rotate: 180,
  });

  // const typewriter = document.querySelector("#typewriter");
  // tinyTypewriter(typewriter, {
  //   items: [
  //     "Hello! My name is Lam Hien Nghia. A Front-end Developer comes from Vietnam, with some experience in making Front-end websites.",
  //     "My technology skills include HTML, CSS, Javascript, Typescript, and some Javascript frameworks (VueJs, ReactJs, and Gsap for animation), SCSS, Bootstrap 5, Tailwind CSS, Firebase. So apart from tech skills, I have good self-study, enough writing and speaking skills in English.",
  //     "I'm so interested in the challenge, it's helped me the day better the day.",
  //     '"Today is better than yesterday, tomorrow is better today"',
  //   ],
  //   typeSpeed: 50,
  //   deleteSpeed: 40,
  //   startDelay: 5000,
  // });
});
</script>

<template>
  <!-- ------------------------------- START BANNER ------------- -->
  <div
    class="relative w-full lg:py-0 lg:h-screen h-full md:py-44 py-36 flex justify-center items-center bg-amber-200 dark:bg-slate-700 font-primary"
  >
    <div class="w-1/2 hidden sm:block">
      <img
        id="imgSpin"
        class="md:w-3/5 px-5 sm:w-9/12 mx-auto"
        src="../img/16.png"
        alt=""
      />
    </div>
    <div class="relative px-5">
      <h1
        id="text"
        ref="animatedLeft"
        class="z-10 sm:text-start text-center lg:text-8xl sm:text-7xl text-5xl font-bold animate__animated animate__backInRight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400 dark:from-yellow-500 dark:to-amber-300"
      >
        WELCOME TO LHN
      </h1>
    </div>
    <img
      class="w-2/12 absolute top-3/4 left-1/4 animate__animated animate__bounceIn"
      src="../img/1.png"
      alt=""
    />
    <img
      class="md:w-20 w-10 absolute top-full left-28 animate__animated animate__bounceIn"
      src="../img/1.png"
      alt=""
    />
    <img
      class="w-3/12 left-1/2 absolute bottom-3/4 animate__animated animate__bounceIn"
      src="../img/2.png"
      alt=""
    />
    <img
      class="w-3/12 absolute right-10 top-3/4 animate__animated animate__bounceIn"
      src="../img/4.png"
      alt=""
    />
  </div>
  <!-- ------------------------------- END BANNER ------------- -->
  <!-- ------------------------------- START INTRO ------------- -->
  <div
    class="relative dark:text-white dark:bg-gray-800 bg-white md:py-44 py-24 font-primary"
  >
    <div class="max-w-screen-xl mx-auto">
      <div id="text-detail">
        <h1
          id="text-intro"
          class="text-center lg:text-7xl md:text-6xl text-5xl py-5 font-semibold"
        >
          Introduce
        </h1>
        <h1
          class="text-center lg:px-32 md:px-24 px-5 lg:text-3xl md:text-2xl text-sm leading-tight font-medium"
        >
          <!-- <span id="typewriter">Fallback Text</span> -->
          <p>
            Hello! My name is
            <b
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"
              >Lam Hien Nghia</b
            >
            . A Front-end Developer comes from Vietnam, with some experience in
            making Front-end websites.
            <b
              class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-purple-500"
            >
              My technology skills include HTML, CSS, Javascript, Typescript,
              and some Javascript frameworks (VueJs, ReactJs, and Gsap for
              animation), SCSS, Bootstrap 5, Tailwind CSS, Firebase. Besides
              tech skills, I have good self-study, enough writing and speaking
              skills in English.</b
            >
          </p>
        </h1>
      </div>
    </div>
  </div>
  <!-- ------------------------------- END INTRO ------------- -->
  <!-- ---------------- START BREAK ------------------ -->
  <div>
    <div
      class="h-2 bg-gradient-to-r from-violet-500 via-pink-500 to-fuchsia-500"
    ></div>
  </div>
  <!-- ---------------- END BREAK ------------------ -->

  <!-- ----------------------------- START PROJECTS -->
  <div class="font-primary dark:bg-gray-700 md:py-36 py-24">
    <div class="max-w-screen-xl mx-auto">
      <h2
        id="text-project"
        class="text-center md:text-6xl text-5xl py-5 font-semibold dark:text-slate-200 text-slate-700"
      >
        Personal Projects
      </h2>
      <div
        class="flex md:flex-wrap flex-nowrap overflow-scroll md:justify-center mt-10"
      >
        <div class="slideBottom lg:w-1/4 md:w-4/12 sm:w-3/4 w-11/12 p-3">
          <div
            class="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex md:flex-col flex-col sm:flex-row"
          >
            <a
              target="_blank"
              href="https://github.com/NghiaLam11/LandingPage"
              class="md:w-full sm:w-1/2 w-full lg:h-1/2 h-1/2 sm:h-full overflow-hidden"
            >
              <img
                class="rounded-t-lg hover:scale-110 h-full transition linear duration-200 w-full"
                src="../img/14.jpg"
                alt=""
            /></a>
            <div class="p-5 sm:w-1/2 md:w-full w-full">
              <a
                target="_blank"
                href="https://github.com/NghiaLam11/LandingPage"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-600 hover:from-purple-600 truncate"
                >
                  My Responsive Website
                </h5>
              </a>
              <p
                class="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 hover:to-orange-400 hover:from-yellow-400 truncate font-semibold"
              >
                Technologies: HTML5, CSS3
              </p>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate block md:hidden"
              >
                This page is a static website. Using HTML, CSS and Media Query
                for responsive website.
              </p>

              <p
                class="mb-3 font-normal md:block hidden text-gray-700 dark:text-gray-300"
              >
                <span class="multiline-ellipsis">
                  This page is a static website. Using HTML, CSS and Media Query
                  for responsive website.
                </span>
              </p>
              <a
                target="_blank"
                href="https://github.com/NghiaLam11/LandingPage"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show resources
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="slideBottom lg:w-1/4 md:w-4/12 sm:w-3/4 w-11/12 p-3">
          <div
            class="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex md:flex-col flex-col sm:flex-row"
          >
            <a
              target="_blank"
              href="https://weather-app-34242.web.app/"
              class="md:w-full sm:w-1/2 w-full lg:h-1/2 h-1/2 sm:h-full overflow-hidden"
            >
              <img
                class="rounded-t-lg hover:scale-110 h-full transition linear duration-200 w-full"
                src="../img/w1.jpg"
                alt=""
            /></a>
            <div class="p-5 sm:w-1/2 md:w-full w-full">
              <a target="_blank" href="https://weather-app-34242.web.app/">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-600 hover:from-purple-600 truncate"
                >
                  The Weather App (Open Weather API)
                </h5>
              </a>
              <p
                class="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 hover:to-orange-400 hover:from-yellow-400 truncate font-semibold"
              >
                Technologies: VueJs, HTML5, CSS3, Javascript
              </p>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate block md:hidden"
              >
                If you want to check the weather at a location, use this page.(
                I using VueJs framework, HTML, CSS, Javascript to making this
                website. )
              </p>

              <p
                class="mb-3 font-normal md:block hidden text-gray-700 dark:text-gray-300"
              >
                <span class="multiline-ellipsis">
                  If you want to check the weather at a location, use this
                  page.( I using VueJs framework, HTML, CSS, Javascript to
                  making this website. )
                </span>
              </p>
              <a
                target="_blank"
                href="https://weather-app-34242.web.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show resources
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="slideBottom lg:w-1/4 md:w-4/12 sm:w-3/4 w-11/12 p-3">
          <div
            class="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex md:flex-col flex-col sm:flex-row"
          >
            <a
              target="_blank"
              href="https://flash-cards-9eccd.web.app"
              class="md:w-full sm:w-1/2 w-full lg:h-1/2 h-1/2 sm:h-full overflow-hidden"
            >
              <img
                class="rounded-t-lg hover:scale-110 h-full transition linear duration-200 w-full"
                src="../img/f2.jpg"
                alt=""
            /></a>
            <div class="p-5 sm:w-1/2 md:w-full w-full">
              <a target="_blank" href="https://flash-cards-9eccd.web.app">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-600 hover:from-purple-600 truncate"
                >
                  Flash Cards
                </h5>
              </a>
              <p
                class="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 hover:to-orange-400 hover:from-yellow-400 truncate font-semibold"
              >
                Technologies: VueJs, Typescript, HTML5, CSS3, Javascript,
              </p>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate block md:hidden"
              >
                Include some features to learn a language: adding, removing,
                editing, searching, and blending cards.
              </p>

              <p
                class="mb-3 font-normal md:block hidden text-gray-700 dark:text-gray-300"
              >
                <span class="multiline-ellipsis">
                  Include some features to learn a language: adding, removing,
                  editing, searching, and blending cards.
                </span>
              </p>
              <a
                target="_blank"
                href="https://flash-cards-9eccd.web.app"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show resources
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="slideBottom lg:w-1/4 md:w-4/12 sm:w-3/4 w-11/12 p-3">
          <div
            class="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex md:flex-col flex-col sm:flex-row"
          >
            <a
              target="_blank"
              href="https://flip-card-906d6.web.app/"
              class="md:w-full sm:w-1/2 w-full lg:h-1/2 h-1/2 sm:h-full overflow-hidden"
            >
              <img
                class="rounded-t-lg hover:scale-110 h-full transition linear duration-200 w-full"
                src="../img/f3.jpg"
                alt=""
            /></a>
            <div class="p-5 sm:w-1/2 md:w-full w-full">
              <a target="_blank" href="https://flip-card-906d6.web.app/">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-600 hover:from-purple-600 truncate"
                >
                  The Flip Fruits Game
                </h5>
              </a>
              <p
                class="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 hover:to-orange-400 hover:from-yellow-400 truncate font-semibold"
              >
                Technologies: ReactJs, HTML5, CSS3, Javascript,
              </p>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate block md:hidden"
              >
                You need to flip cards to have two of the same cards until all
                of the cards have been flipped.
              </p>

              <p
                class="mb-3 font-normal md:block hidden text-gray-700 dark:text-gray-300"
              >
                <span class="multiline-ellipsis">
                  You need to flip cards to have two of the same cards until all
                  of the cards have been flipped.
                </span>
              </p>
              <a
                target="_blank"
                href="https://flip-card-906d6.web.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show resources
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="slideBottom lg:w-1/4 md:w-4/12 sm:w-3/4 w-11/12 p-3">
          <div
            class="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex md:flex-col flex-col sm:flex-row"
          >
            <a
              target="_blank"
              href="https://github.com/NghiaLam11/facebook-clone"
              class="md:w-full sm:w-1/2 w-full lg:h-1/2 h-1/2 sm:h-full overflow-hidden"
            >
              <img
                class="rounded-t-lg hover:scale-110 h-full transition linear duration-200 w-full"
                src="../img/f1.jpg"
                alt=""
            /></a>
            <div class="p-5 sm:w-1/2 md:w-full w-full">
              <a
                target="_blank"
                href="https://github.com/NghiaLam11/facebook-clone"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-600 hover:from-purple-600 truncate"
                >
                  Facebook Clone
                </h5>
              </a>
              <p
                class="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 hover:to-orange-400 hover:from-yellow-400 truncate font-semibold"
              >
                Technologies: VueJs, NuxtJs, HTML5, CSS3, Javascript.
              </p>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate block md:hidden"
              >
                That awesome! It has a lot of features like adding, deleting,
                commenting, and reacting emotionally to statuses. You can upload
                short stories and delete them after 24 hours.
              </p>

              <p
                class="mb-3 font-normal md:block hidden text-gray-700 dark:text-gray-300"
              >
                <span class="multiline-ellipsis">
                  That awesome! It has a lot of features like adding, deleting,
                  commenting, and reacting emotionally to statuses. You can
                  upload short stories and delete them after 24 hours.
                </span>
              </p>
              <a
                target="_blank"
                href="https://github.com/NghiaLam11/facebook-clone"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show resources
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="slideBottom lg:w-1/4 md:w-4/12 sm:w-3/4 w-11/12 p-3">
          <div
            class="overflow-hidden h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex md:flex-col flex-col sm:flex-row"
          >
            <a
              target="_blank"
              href="https://lhnn-20b99.web.app/"
              class="md:w-full sm:w-1/2 w-full lg:h-1/2 h-1/2 sm:h-full overflow-hidden"
            >
              <img
                class="rounded-t-lg hover:scale-110 h-full transition linear duration-200 w-full"
                src="../img/f2.jpg"
                alt=""
            /></a>
            <div class="p-5 sm:w-1/2 md:w-full w-full">
              <a target="_blank" href="https://lhnn-20b99.web.app/">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 hover:to-pink-600 hover:from-purple-600 truncate"
                >
                  My lhnn Page
                </h5>
              </a>
              <p
                class="mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 hover:to-orange-400 hover:from-yellow-400 truncate font-semibold"
              >
                Technologies: ReactJs, HTML5, CSS3, Javascript,
              </p>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate block md:hidden"
              >
                I'm so happy to make this page for myself. Include my
                introduction, my timeline, and my resume in dark mode and light
                mode, and upload photos on my timeline.
              </p>

              <p
                class="mb-3 font-normal md:block hidden text-gray-700 dark:text-gray-300"
              >
                <span class="multiline-ellipsis">
                  I'm so happy to make this page for myself. Include my
                  introduction, my timeline, and my resume in dark mode and
                  light mode, and upload photos on my timeline.
                </span>
              </p>
              <a
                target="_blank"
                href="https://lhnn-20b99.web.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Show resources
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ----------------------------- END PROJECTS -->

</template>

<style scoped>
.multiline-ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

#text {
  filter: drop-shadow(5px 4px #cf2c7e);
}

#text-intro {
  filter: drop-shadow(4px 3px #a7a77c);
}

#text-project {
  animation: text-ani-project 4s linear infinite;
  transition: animation 2s linear;
}

@keyframes text-ani-project {
  from {
    filter: drop-shadow(1px 1px #a7a77c);
  }

  to {
    filter: drop-shadow(4px 3px #a7a77c);
  }
}
/* ------------------ ANIMATE LIBRARY ---------------- */
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 0.7;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 0.6;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__bounceIn {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
@-webkit-keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInRight {
  -webkit-animation-name: backInRight;
  animation-name: backInRight;
}
</style>
