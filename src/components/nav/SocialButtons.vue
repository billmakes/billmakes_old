<template>
  <div class="flex">
    <div
      v-for="link in socialLinks"
      :key="link.label"
      class="w-8 h-8 mr-2 mb-2 cursor-pointer hover:shadow-lg bg-gray"
    >
      <a :href="link.url">
        <img :src="`../../../assets/${link.icon}`" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const socialLinks = [
      {
        label: 'email',
        url: 'mailto:billmakes@protonmail.com',
        icon: 'gmail.svg'
      },
      {
        label: 'github',
        url: 'https://github.com/billmakes',
        icon: 'github.svg'
      },
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/bill-hilbert-414bb5123/',
        icon: 'linkedin.svg'
      }
    ]
    return {
      socialLinks
    }
  }
}
</script>

<style>
</style>
