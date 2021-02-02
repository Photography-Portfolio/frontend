<template>
  <div class="flex flex-wrap -mx-6 overflow-hidden sm:-mx-5 md:-mx-6 lg:-mx-6 xl:-mx-8 justify-center w-100">

    <div v-for="index in 10" :key="index" class="my-6 px-6 w-full overflow-hidden sm:my-5 sm:px-5 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
      <div class="w-12/12 px-4">
        <img src="../assets/pictures/img_31.jpeg" />
      </div>
    </div>

    <div class="my-6 px-6 w-full overflow-hidden sm:my-5 sm:px-5 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
      <!-- Column Content -->
    </div>

    <div class="my-6 px-6 w-full overflow-hidden sm:my-5 sm:px-5 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
      <!-- Column Content -->
    </div>

    <div class="my-6 px-6 w-full overflow-hidden sm:my-5 sm:px-5 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
      <!-- Column Content -->
    </div>

    <div class="my-6 px-6 w-full overflow-hidden sm:my-5 sm:px-5 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
      <!-- Column Content -->
    </div>

    <div class="my-6 px-6 w-full overflow-hidden sm:my-5 sm:px-5 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-8 xl:px-8 xl:w-1/3">
      <!-- Column Content -->
    </div>

  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>