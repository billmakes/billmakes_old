<template>
  <button
    class="rounded transition ease-in-out transform hover:scale-95"
    :class="`bg-${BtnColorProvider.getSelectedColor}-500 hover:bg-${BtnColorProvider.getSelectedColor}-400`"
  >
    <router-link :to="{ name: navItem.name }">
      <div
        class="font-bold mb-1 p-2 pb-2 rounded"
        :class="`bg-${BtnColorProvider.getSelectedColor}-300 hover:bg-${BtnColorProvider.getSelectedColor}-200`"
      >
        <span :class="`text-${BtnColorProvider.getSelectedColor}-700`"
          ><slot
        /></span>
      </div>
    </router-link>
  </button>
</template>

<script>
import { BtnColorProvider } from '../../composables/btn-color-provider.js'
export default {
  props: {
    navItem: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: 'yellow'
    }
  },
  setup(props) {
    return {
      navItem: props.navItem,
      BtnColorProvider
    }
  }
}
</script>

<style>
</style>
