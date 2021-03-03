<template>
  <header>
    <nav
      class="flex flex-col sm:flex-row justify-center sm:justify-between items-center p-6"
    >
      <div class="mb-2 sm:mb-0">
        <NavButton
          :nav-item="{ label: 'billmakes', name: 'home' }"
          color="gray"
          class="ml-2 sm:text-5xl text-4xl"
          >billmakes</NavButton
        >
      </div>
      <div>
        <NavButton
          v-for="item in navRoutes"
          :nav-item="item"
          :key="item.name"
          color="gray"
          class="ml-2 sm:text-lg text-sm"
        >
          {{ item.label }}
        </NavButton>
      </div>
    </nav>
  </header>
</template>

<script>
import NavButton from './NavButton.vue'

const navRoutes = [
  { label: 'About', name: 'about' },
  { label: 'Contact', name: 'contact' },
  { label: 'Blog', name: 'blog' },
  { label: 'CV', name: 'cv' }
]
export default {
  setup() {
    return {
      navRoutes,
      NavButton
    }
  }
}
</script>

<style>
</style>
