<template>
  <div
    class="mt-2 flex sm:flex-row flex-col justify-center content-center mx-auto"
  >
    <div class="flex flex-col mx-auto my-auto pr-3 text-center">
      <span class="italic text-gray-600 font-bold">{{ source.name }}</span>
      <span class="italic text-gray-500">{{ source.location }}</span>
      <span class="italic text-gray-500">{{ source.title }}</span>
      <span class="italic text-gray-500"
        >{{ source.start }} - {{ source.end }}</span
      >
    </div>
    <CardLayout class="mx-1">
      <ul class="list-disc">
        <li
          v-for="(item, index) in source.description"
          :key="index"
          class="ml-4 mb-2 text-sm"
        >
          {{ item }}
        </li>
      </ul>
    </CardLayout>
  </div>
</template>
<script>
import CardLayout from '../../layouts/CardLayout.vue'

export default {
  props: {
    source: Object
  },
  setup(props) {
    return {
      CardLayout,
      source: props.source
    }
  }
}
</script>