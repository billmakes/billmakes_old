<template>
  <CardLayout class="mx-auto">
    <div class="flex text-3xl font-bold">
      Hi! I'm Bill Hilbert.
      <div
        class="transition duration-200 ease-in-out transform hover:rotate-45"
      >
        👋
      </div>
    </div>
    <p class="text-xl font-bold mb-2">
      I'm a {{ cv[0].title }} at {{ cv[0].name }}.
    </p>
    <p class="mb-2">
      Passionate about quality code, efficiency, fan of minimal design. My goal
      is to create outstanding user experiences using the latest tools in web
      technology, and to contribute something great to the open web.
    </p>
    <p class="mb-2">
      If you have any questions, I would be happy to help. Feel free to shoot me
      an email
      <a class="underline" href="mailto:hilbertwilliam@gmail.com">here</a>.
    </p>
  </CardLayout>
  <CardLayout class="mx-auto mt-4">
    <Button
      @click="BtnColorProvider.changeColor"
      :color="BtnColorProvider.getSelectedColor"
      >Change Color</Button
    >
    <span class="ml-3"
      ><span class="font-bold">Color: </span
      >{{
        BtnColorProvider.getSelectedColor
          ? BtnColorProvider.getSelectedColor
          : 'none'
      }}</span
    >
  </CardLayout>
</template>
<script>
import cv from '/@/components/cv/cv.js'
import Button from '/@/components/Button.vue'
import CardLayout from '/@/layouts/CardLayout.vue'

import { BtnColorProvider } from '/@/composables/btn-color-provider.js'

export default {
  setup() {
    return {
      Button,
      BtnColorProvider,
      CardLayout,
      cv
    }
  }
}
</script>