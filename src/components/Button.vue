<template>
  <button
    class="rounded transition ease-in-out transform hover:scale-95"
    :class="`bg-${color}-500 hover:bg-${color}-400`"
  >
    <div
      class="font-bold mb-1 p-2 pb-2 rounded"
      :class="`bg-${color}-300 hover:bg-${color}-200`"
    >
      <span :class="`text-${color}-700`"><slot /></span>
    </div>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return {
      navItem: props.navItem,
      color: computed(() => props.color)
    }
  }
}
</script>

<style>
</style>
