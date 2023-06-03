<template>
  <div
    class="newsfeed bg-gradient-to-b pb-5 dark:from-slate-900 dark:via-gray-800 dark:to-slate-950 dark:text-white min-h-screen font-primary"
  >
    <div class="max-w-screen-xl mx-auto">
      <div class="text-center py-20">
        <h2 class="text-5xl font-bold">My Timeline</h2>
        <p class="dark:text-white text-slate-700">
          These are evil times, so make every minute count.
        </p>
      </div>
      <div class="lg:px-44 md:px-10 px-4">
        <!-- Card-->
        <article
          v-for="status in renderStatuses"
          :key="status.id"
          class="mb-7 shadow break-inside p-6 rounded-xl bg-white border-2 border-gray-300 dark:border-0 dark:bg-slate-800 flex flex-col bg-clip-border"
        >
          <div class="flex pb-6 items-center justify-between">
            <div class="flex">
              <a class="inline-block mr-4" href="#">
                <img
                  class="rounded-full max-w-none w-12 h-12"
                  :src="status?.imgAuth"
                />
              </a>
              <div class="flex flex-col">
                <div>
                  <a
                    class="inline-block text-lg font-bold dark:text-white"
                    href="#"
                    >{{ status?.auth }}</a
                  >
                </div>
                <div class="text-slate-500 dark:text-slate-300">
                  {{ status?.dateUpload }}
                </div>
              </div>
            </div>
          </div>
          <h2 class="md:text-3xl font-bold dark:text-white">
            {{ status?.title }}
          </h2>
          <div class="py-4">
            <div class="flex justify-between gap-1 mb-1">
              <a class="flex" href="#">
                <img class="max-w-full rounded-tl-lg" :src="status?.img1" />
              </a>
              <a class="flex" href="#">
                <img class="max-w-full" :src="status?.img2" />
              </a>
              <a class="flex" href="#">
                <img class="max-w-full rounded-tr-lg" :src="status?.img3" />
              </a>
            </div>
            <div class="flex justify-between gap-1">
              <a class="flex" href="#">
                <img class="max-w-full rounded-bl-lg" :src="status?.img4" />
              </a>
              <a class="flex" href="#">
                <img class="max-w-full rounded-br-lg" :src="status?.img5" />
              </a>
            </div>
          </div>
          <p class="dark:text-slate-200">
            {{ status?.desc }}
          </p>
          <div class="py-4">
            <div class="inline-flex items-center select-none" href="#">
              <span class="mr-2" @click="onReactLove(status)">
                <svg
                  class="fill-rose-600 dark:fill-rose-400 reactLove"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  ></path>
                </svg>
              </span>
              <span v-if="hiddenLove" class="text-lg font-bold">{{
                love
              }}</span>
              <span v-else class="text-lg font-bold">{{ status?.love }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  <Loader />
</template>

<script setup lang="ts">
import Loader from "../components/Loader.vue";
import { computed, ref } from "vue";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
const allStatus = ref<any>([]);
const renderStatuses = computed(() => {
  return allStatus.value;
});
// const reactLove = ref();
getDocs(collection(db, "statuses")).then((status) => {
  console.log(status);
  status.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    allStatus.value.push({
      id: doc.id,
      ...doc.data(),
    });
  });
});

const love = ref(0);
const hiddenLove = ref(false);
const preventFetch = ref(false);
const onReactLove = (status: any) => {
  hiddenLove.value = true;
  const docRef = doc(db, "statuses", status.id);
  love.value = status.love + 1;
  const data = {
    love: status.love + 1,
  };
  if (preventFetch.value === false) {
    document.querySelector(".reactLove")?.classList.add("scaleIt");
    console.log(status);
    updateDoc(docRef, data)
      .then(() => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
        preventFetch.value = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.scaleIt {
  animation: scaleDown 0.4s ease-in-out;
}
@keyframes scaleDown {
  0% {
    transform: scale(1);
    transition: all 2s ease;
  }

  50% {
    transform: scale(0.6);
    transition: all 2s ease;
  }
  100% {
    transform: scale(1);
    transition: all 2s ease;
  }
}
</style>
