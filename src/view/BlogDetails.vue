<template>
  <!-- ------------ START BLOG DETAILS ------------- -->
  <div class="blog-details dark:bg-slate-700 dark:text-white font-primary">
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article
          class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div
                class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
              >
                <img
                  class="mr-4 w-16 h-16 rounded-full"
                  :src="blog?.imgAuth"
                  alt="Jese Leos"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    class="text-xl font-bold text-gray-900 dark:text-white"
                    >{{ blog?.auth }}</a
                  >
                  |
                  <span
                    class="text-base font-light text-green-600 dark:text-green-400"
                  >
                    <i :class="[blog?.iconType, 'px-1']"></i>
                    {{ blog?.type }}
                  </span>
                  <p
                    class="text-base font-light text-gray-500 dark:text-gray-400"
                  >
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                      >{{ blog?.dateUpload }}</time
                    >
                  </p>
                </div>
              </div>
            </address>
            <h1
              class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
            >
              {{ blog?.title }}
            </h1>
          </header>
          <p class="lead">
            {{ blog?.desc1 }}
          </p>
          <figure>
            <img :src="blog?.img1" alt="" />
            <figcaption>Digital art by Unsplash</figcaption>
          </figure>
          <p>
            {{ blog?.desc2 }}
          </p>
          <p>
            {{ blog?.desc3 }}
          </p>

          <p class="lead">
            {{ blog?.desc1 }}
          </p>
          <figure>
            <img :src="blog?.img2" alt="" />
            <figcaption>Digital art by Unsplash</figcaption>
          </figure>

          <p class="lead">
            {{ blog?.desc2 }}
          </p>
          <p class="lead">
            {{ blog?.desc1 }}
          </p>
        </article>
      </div>
    </main>

    <aside
      aria-label="Related articles"
      class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div class="px-4 mx-auto max-w-screen-xl">
        <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2>
        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="blogs in renderBlogs"
            :key="blogs.title"
            class="max-w-xs"
          >
            <a href="#">
              <img
                :src="blogs?.thumbnail"
                class="mb-5 rounded-lg"
                alt="Image 1"
              />
            </a>
            <h2
              class="text-xl font-bold leading-tight text-gray-900 dark:text-white"
            >
              <a href="">{{ blogs?.title }}</a>
            </h2>
            <p
              class="mb-4 font-light text-gray-500 dark:text-gray-400 truncate"
            >
              {{ blogs?.desc }}
            </p>
            <p
              class="mb-2 font-light text-sm text-primary-400 dark:text-primary-500"
            >
              <i :class="[blogs.iconType, 'px-1']"></i> {{ blogs?.type }}
              {{ blogs?.dateUpload }}
            </p>
            <router-link :to="`/blog/${blogs.title}`">
                <span
                @click="reloadPage"
                  class="inline-flex items-center font-medium dark:text-cyan-500 text-blue-700 hover:underline"
                  >Read more</span
                >
              </router-link>
          </article>
        </div>
      </div>
    </aside>
  </div>
  <Loader />
  <!-- ------------ END BLOG DETAILS ------------- -->
</template>

<script setup lang="ts">
import Loader from "../components/Loader.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const route = useRoute();

const reloadPage = () => { 
  setTimeout(() => {
    location.reload();
  })
};


const blogsMap = new Map();
const blog = ref<any>();
const allBlogs = ref<any>([]);

getDocs(collection(db, "blog"))
  .then((blogs) => {
    var i = 0;
    blogs.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data().title);
      blogsMap.set(String(doc.data().title), { ...doc.data(), id: doc.id });
      // Just limit blog could be display in blog details, the limit is 4
      if (i >= 0 && i <= 3) {
        allBlogs.value.push({
          id: doc.id,
          ...doc.data(),
        });
        console.log(i);
        i++;
      }
    });
  })
  .then(() => {
    blog.value = blogsMap.get(String(route.params.id));
    console.log(blogsMap.get(String(route.params.id)));
  });

const renderBlogs = computed(() => {
  return allBlogs.value;
});
</script>

<style scoped></style>
