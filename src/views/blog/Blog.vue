<template>
  <CardLayout class="mx-auto">
    <span class="text-3xl font-bold">Coming soon 🚧</span>
    <PostList />
  </CardLayout>
</template>
<script>
import { BlogProvider } from '/@/composables/blog-provider.js'
import CardLayout from '/@/layouts/CardLayout.vue'
import PostList from '/@/components/blog/PostList.vue'

export default {
  setup() {
    return {
      CardLayout,
      PostList,
      posts: BlogProvider.getPosts
    }
  }
}
</script>