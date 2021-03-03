<template>
  <div class="flex flex-col h-screen relative">
    <NavHeader />

    <div class="py-5">
      <router-view />
    </div>

    <div
      v-if="
        route.name != 'blog' && route.name != 'cv' && route.name != 'blog-post'
      "
      class="container items-center mx-auto max-w-xl p-5 text-gray-700 bg-gray-100 sm:bg-white rounded sm:shadow-md"
    >
      <div>
        <span class="italic text-gray-500"
          >Under Construction - Coming Soon 🚧</span
        >
      </div>
      <span class="font-bold">Latest blog posts 📚</span>
      <PostList recent />
    </div>
    <div class="fixed bottom-0 right-0">
      <span class="italic text-gray-200">Under Construction</span>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import PostList from '/@/components/blog/PostList.vue'
import NavHeader from '/@/components/nav/NavHeader.vue'

export default {
  setup() {
    const route = useRoute()

    return {
      route,
      PostList,
      NavHeader
    }
  }
}
</script>
