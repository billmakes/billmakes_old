<template>
  <div>
    <ul>
      <li
        v-for="post in recent ? posts.slice(0, recentSize) : posts"
        :key="post.meta.id"
      >
        <router-link :to="{ name: 'blog-post', params: { id: post.meta.id } }"
          >{{ post.meta.title }}
          <span class="italic text-gray-500 text-sm">{{
            `- ${post.meta.date}`
          }}</span></router-link
        >
      </li>
    </ul>
  </div>
  <div v-if="recent" class="mt-2 underline">
    <span
      ><router-link :to="{ name: 'blog' }"
        >Click here to see more posts</router-link
      ></span
    >
  </div>
</template>
<script>
import { BlogProvider } from '/@/composables/blog-provider.js'
export default {
  props: {
    recent: Boolean
  },
  setup(props) {
    return {
      posts: BlogProvider.getPosts,
      recent: props.recent,
      recentSize: 3
    }
  }
}
</script>