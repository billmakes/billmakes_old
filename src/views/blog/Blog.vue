<template>
  <div
    class="relative container items-center max-w-xl bg-gray-100 rounded mx-auto mb-2"
  >
    <input
      type="text"
      placeholder="Search"
      v-model="term"
      class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"
    />
    <span
      class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
    >
      🔎
    </span>
  </div>
  <CardLayout class="mx-auto">
    <span class="text-3xl font-bold">Coming soon 🚧</span>
    <PostList :term="term" />
  </CardLayout>
</template>
<script>
import { ref } from 'vue'
import CardLayout from '/@/layouts/CardLayout.vue'
import PostList from '/@/components/blog/PostList.vue'

export default {
  setup() {
    let term = ref('')

    return {
      CardLayout,
      PostList,
      term
    }
  }
}
</script>