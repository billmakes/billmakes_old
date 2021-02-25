<template>
  <div class="flex flex-col h-screen relative">
    <NavHeader />
    <div
      class="container items-center mx-auto max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md"
    >
      <div>
        <router-view />
      </div>
    </div>
    <div
      v-if="route.name != 'blog' && route.name != 'cv'"
      class="mt-3 container items-center mx-auto max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md"
    >
      <span class="font-bold">Latest blog posts</span>
      <p class="italic">Blog is still under construnction 🚧</p>
    </div>
    <div class="fixed bottom-0 right-0">
      <span class="italic text-gray-200">Under Construction</span>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import NavHeader from './components/nav/NavHeader.vue'

export default {
  setup() {
    const route = useRoute()

    return {
      route,
      NavHeader
    }
  }
}
</script>
