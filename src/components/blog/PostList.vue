<template>
  <div>
    <ul v-if="posts.length">
      <li
        v-for="post in posts"
        :key="post.meta.id"
        class="flex sm:flex-row flex-col sm:border-none border rounded sm:p-0 p-3 justify-between mb-2"
      >
        <div>
          <router-link
            :to="{ name: 'blog-post', params: { id: post.meta.id } }"
          >
            <span
              class="underline"
              :class="
                !BlogProvider.getFilteredPosts.length
                  ? ''
                  : `bg-${BtnColorProvider.getSelectedColor}-200`
              "
              >{{ post.meta.title }}</span
            >
            <span class="italic text-gray-500 text-sm">{{
              ` - ${post.meta.date}`
            }}</span></router-link
          >
        </div>
        <div>
          <TagList :tags="post.meta.tags" />
        </div>
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
import { computed, watch } from 'vue'
import TagList from '/@/components/blog/TagList.vue'
import { BtnColorProvider } from '/@/composables/btn-color-provider.js'
import { BlogProvider } from '/@/composables/blog-provider.js'

const recentSize = 3

export default {
  props: {
    recent: Boolean,
    term: String
  },
  setup(props) {
    watch(
      () => props.term,
      term => {
        BlogProvider.filterPosts(term)
      }
    )
    let posts = computed(() => {
      if (props.recent) {
        return BlogProvider.getPosts.slice(0, recentSize)
      } else {
        if (BlogProvider.getFilteredPosts.length)
          return BlogProvider.getFilteredPosts
        return BlogProvider.getPosts
      }
    })
    return {
      posts,
      TagList,
      BlogProvider,
      BtnColorProvider,
      recent: props.recent
    }
  }
}
</script>