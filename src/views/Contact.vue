<template>
  <CardLayout class="mx-auto">
    <div class="mb-8">
      <span class="text-3xl font-bold">Let's talk ☎️</span>
      <p class="text-xl font-bold mb-2">
        Reach out to me on any of the platforms below -
      </p>
      <p>I will get back to you as soon as I can!</p>
    </div>
    <SocialButtons class="flex justify-center" />
  </CardLayout>
</template>

<script>
import CardLayout from '/@/layouts/CardLayout.vue'
import SocialButtons from '/@/components/nav/SocialButtons.vue'
export default {
  setup() {
    return {
      CardLayout,
      SocialButtons
    }
  }
}
</script>