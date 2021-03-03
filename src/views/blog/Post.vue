<template>
  <div v-if="post" class="flex flex-col">
    <CardLayout class="mx-auto mb-2">
      <div class="flex flex-col text-center">
        <span class="font-bold text-4xl">{{ post.meta.title }}</span>
        <span>{{ post.meta.description }}</span>
        <span class="font-bold text-lg">{{ post.meta.date }}</span>
        <TagList :tags="post.meta.tags" />
      </div>
    </CardLayout>
    <CardLayout class="mx-auto">
      <div id="BlogPost">
        <div v-if="post">
          <div v-html="post.post"></div>
        </div>
      </div>
    </CardLayout>
    <div
      class="fixed bottom-0 right-0 mb-4 mr-4 opacity-80 sm:opacity-100 text-sm"
    >
      <Button :color="color" @click="router.push({ name: 'blog' })"
        >Back to blog</Button
      >
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Button from '/@/components/Button.vue'
import TagList from '/@/components/blog/TagList.vue'
import { BtnColorProvider } from '/@/composables/btn-color-provider.js'
import { BlogProvider } from '/@/composables/blog-provider.js'
import CardLayout from '/@/layouts/CardLayout.vue'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    return {
      Button,
      CardLayout,
      TagList,
      color: BtnColorProvider.getSelectedColor,
      post: computed(() =>
        BlogProvider.getPosts.find(post => post.meta.id === route.params.id)
      ),
      router
    }
  }
}
</script>
<style lang="scss" scoped>
#BlogPost {
}
</style>