<template>
  <div class="about min-h-screen dark:bg-gray-800 dark:text-white font-primary">
    <section class="bg-white dark:bg-gray-800">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2
            class="mb-4 text-5xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Our Blog
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <article
            class="p-6 bg-slate-200 rounded-lg border border-gray-300 shadow-md hover:bg-slate-300 hover:dark:bg-gray-950 dark:bg-gray-900 dark:border-gray-700"
          >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span
                class="bg-primary-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:text-green-500 text-green-600"
              >
                <i class="fas fa-flask px-1"></i>
                Testing
              </span>
              <span class="text-sm text-yellow-600 dark:text-yellow-500"
                >14 days ago</span
              >
            </div>
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-500 hover:to-pink-600 hover:from-purple-600"
            >
              <a href="#">How to quickly deploy a static website</a>
            </h2>
            <p class="mb-5 font-light text-gray-600 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are
              becoming the basis for a variety of tools that even influence both
              web designers and developers influence both web designers and
              developers.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="/logo.png"
                  alt="Jc avatar"
                />
                <span class="font-medium dark:text-white"> JcLahi </span>
              </div>
              <router-link
                to="/blog/testing-blog-details"
              >
              <span class="inline-flex items-center font-medium dark:text-cyan-500 text-blue-700 hover:underline">Read more</span>
                
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
