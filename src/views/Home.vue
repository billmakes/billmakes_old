<template>
  <CardLayout class="mx-auto">
    <span class="text-3xl font-bold">Hi! I'm Bill Hilbert. 👋</span>
    <p class="text-xl font-bold mb-2">
      I'm a Software Engineer at DXC Technology.
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
</template>
<script>
import CardLayout from '../layouts/CardLayout.vue'

export default {
  setup() {
    return {
      CardLayout
    }
  }
}
</script>