<template>
  <button
    class="rounded"
    :class="`bg-${computedColor}-500 hover:bg-${computedColor}-400`"
  >
    <router-link :to="{ name: navItem.name }">
      <div
        class="font-bold mb-1 p-2 pb-2 rounded"
        :class="`bg-${computedColor}-300 hover:bg-${computedColor}-200`"
      >
        <span :class="`text-${computedColor}-700`"><slot /></span>
      </div>
    </router-link>
  </button>
</template>

<script>
import { computed } from 'vue'
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
    let colors = [
      'gray',
      'red',
      'yellow',
      'green',
      'blue',
      'indigo',
      'purple',
      'pink'
    ]
    const computedColor = computed(() => {
      if (props.color === 'random') {
        return colors[Math.floor(Math.random() * colors.length)]
      } else {
        return props.color
      }
    })
    console.log(computedColor.value)
    return {
      navItem: props.navItem,
      computedColor: computedColor
    }
  }
}
</script>

<style>
</style>
