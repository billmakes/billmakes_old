<template>
  <div class="flex">
    <div
      v-for="(tag, index) in tags"
      :key="index"
      class="mr-2 d-flex align-center"
      style="cursor: pointer"
    >
      <span
        class="font-bold items-center text-xs shadow rounded p-1"
        style="padding: 0.3em"
        :class="` bg-${BtnColorProvider.getSelectedColor}-300 hover:bg-${BtnColorProvider.getSelectedColor}-200 text-${BtnColorProvider.getSelectedColor}-700`"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
<script>
import { BtnColorProvider } from '/@/composables/btn-color-provider.js'
export default {
  props: {
    tags: Array
  },
  setup(props) {
    return {
      BtnColorProvider,
      tags: props.tags
    }
  }
}
</script>