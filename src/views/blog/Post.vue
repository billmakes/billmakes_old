<template>
  <div class="flex flex-col">
    <div class="text-center mb-2">
      <Button :color="btnColor" @click="router.push({ name: 'blog' })"
        >Back to blog</Button
      >
    </div>
    <CardLayout class="mx-auto">
      <div id="BlogPost">
        <div v-if="post">
          <div>
            <span class="font-bold text-4xl">{{ post.meta.title }}</span>
            <span class="font-bold text-lg">{{ post.meta.date }}</span>
          </div>
          <div v-html="post.post"></div>
        </div>
      </div>
    </CardLayout>
  </div>
</template>
<script>
import marked from 'marked'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Button from '/@/components/Button.vue'
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
      marked,
      btnColor: BtnColorProvider.getSelectedColor,
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