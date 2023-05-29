<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { onMounted, ref } from "vue";
const animatedLeft = ref<any>();

// setTimeout(() => {
//   animatedLeft.value.classList.remove('animate__animated')
//   animatedLeft.value.classList.remove('animate__backInUp')
//   animatedLeft.value.style.transform = 'translateY(0)'
// }, 1500);

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

  gsap.to("#cloud1", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -300,
    x: -800,
    scale: 2,
  });
  gsap.to("#sun", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -600,
    x: 100,
    scale: 1.7,
  });
  gsap.to("#cloud2", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -200,
    scale: 1.4,
    x: 400,
  });

  gsap.to("#cloud3", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -200,
    scale: 2,
    x: 800,
  });
  gsap.from("#cloud4", {
    scrollTrigger: {
      scrub: 1,
    },
    y: 0,
    x: -600,
  });
  gsap.to("#cloud4", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -600,
    x: -900,
  });

  gsap.to("#img1", {
    scrollTrigger: {
      scrub: 1,
    },
    scale: 1.5,
  });
  // gsap.from("#text", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   y: 0,
  //   scale: 1,
  // });

  // gsap.to("#text", {
  //   scrollTrigger: {
  //     scrub: 1,
  //   },
  //   y: -400,
  //   scale: 2,
  // });

  gsap.from("#text-detail", {
    scrollTrigger: {
      trigger: "#text-detail",
    },
    x: 100,
  });
  gsap.to("#text-detail", {
    scrollTrigger: {
      trigger: "#text-detail",
    },
    x: 0,
  });

  gsap.to("#imgSlideLeft", {
    scrollTrigger: {
      scrub: 1,
    },
    rotate: 180,
  });
});
</script>

<template>
  <div class="home w-full lg:py-0 lg:h-screen h-full md:py-44 py-36 flex justify-center items-center bg-amber-200 dark:bg-slate-700">
    <div class="w-1/2 hidden sm:block">
      <img id="imgSlideLeft" class="md:w-3/5 px-5 sm:w-9/12 mx-auto" src="../img/16.png" alt="" />
    </div>
    <div>
      <h1
        id="text"
        ref="animatedLeft"
        class="sm:text-start text-center px-5 lg:text-8xl sm:text-7xl text-5xl font-bold animate__animated animate__backInRight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-300"
      >
        WELCOME TO LHN
      </h1>
    </div>

    <!-- <img
      id="sun"
      class="absolute top-10 right-1/2 w-1/2 md:w-1/3 z-30 rounded-full blur-sm opacity-80"
      src="../img/12.png"
      alt=""
    />
    <img
      id="img1"
      class="w-full h-full origin-bottom absolute top-0 left-0 z-20 object-cover"
      src="../img/14.jpg"
      alt=""
    />
    <img
      id="cloud1"
      class="absolute md:top-0 left-0 top-24 md:w-1/4 w-1/2 z-30 opacity-60"
      src="../img/11.png"
      alt=""
    />
    <img
      id="cloud4"
      class="absolute md:top-30 md:hidden block top-20 w-1/3 z-30"
      src="../img/11.png"
      alt=""
    />
    <img
      id="cloud2"
      class="absolute top-10 right-1/3 w-1/5 md:block hidden z-30 opacity-60"
      src="../img/11.png"
      alt=""
    />
    <img
      id="cloud3"
      class="absolute top-40 right-1 md:w-1/5 w-1/3 z-30 opacity-60"
      src="../img/11.png"
      alt=""
    /> -->
  </div>
  <div class="h-screen home__blur relative dark:bg-gray-900 bg-white">
    <h1 id="text-detail" class="text-center lg:text-8xl text-5xl">
      HELLO THEN
    </h1>
  </div>
</template>

<style scoped>
#text {
  filter: drop-shadow(5px 4px #db36a4);
}

/* .home__blur::before {
  position: absolute;
  z-index: 10;
  bottom: 100%;
  content: "";
  width: 100vw;
  height: 100px;
  background-image: linear-gradient(to top, rgb(255, 255, 255), #fde68a);
} */

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
