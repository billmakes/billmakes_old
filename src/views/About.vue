<template>
  <CardLayout class="mx-auto">
    <div
      class="flex flex-col sm:flex-row align-center justify-center items-center"
    >
      <div
        class="rounded-full flex items-center justify-center pr-1 pb-1 w-56 sm:w-64"
        :class="`bg-${BtnColorProvider.getSelectedColor}-500`"
      >
        <img src="../../assets/me_portrait.jpg" class="rounded-full" />
      </div>
      <div class="container mx-auto p-5">
        <span class="text-3xl font-bold text-center">About me 🌴</span>
        <p class="text-xl font-bold mb-2">
          I'm a {{ cv[0].title }} at {{ cv[0].name }}.
        </p>
        <p class="mb-2">
          Currently residing in sunny St. Petersburg, FL. For those who are
          interested, you may view my
          <router-link :to="{ name: 'cv' }" class="underline"
            >résumé</router-link
          >.
        </p>
        <p class="mb-2">
          Also don't hesitate to
          <router-link :to="{ name: 'contact' }" class="underline"
            >reach out</router-link
          >, I would love to help with any questions or look at any requests you
          may have.
        </p>
      </div>
    </div>
  </CardLayout>
</template>
<script>
import CardLayout from '/@/layouts/CardLayout.vue'
import { BtnColorProvider } from '/@/composables/btn-color-provider.js'
import cv from '../components/cv/cv.js'
export default {
  setup() {
    return {
      CardLayout,
      BtnColorProvider,
      cv,
    }
  }
}
</script>
