import { reactive, computed, readonly } from 'vue'

const colors = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink'
]

const state = reactive({
  selectedColor: colors[Math.floor(Math.random() * Math.floor(colors.length))]
})

function changeColor() {
  let index = colors.indexOf(state.selectedColor)
  state.selectedColor = colors[index + 1]
}

const getSelectedColor = computed(() => state.selectedColor)

export const BtnColorProvider = readonly({
  getSelectedColor,
  changeColor
})
