<template>
  <div class="mx-auto text-gray-600 mb-2">
    <div class="flex flex-col text-center">
      <span class="text-3xl font-bold">Bill Hilbert</span>
      <span class="text-1xl font-bold text-gray-500">{{ cv[0].title }}</span>
    </div>
  </div>
  <div class="flex justify-center flex-start flex-col sm:flex-row mx-5">
    <div>
      <CVItem v-for="(item, index) in cv" :key="index" :source="item" />
    </div>
    <div class="ml-2 mt-2">
      <CardLayout>
        <div>
          <span class="text-lg font-bold">Skills</span>
        </div>
        <ul class="list-disc list-inside grid sm:grid-cols-3 grid-cols-2">
          <li v-for="(skill, index) in skills" :key="index">
            {{ skill }}
          </li>
        </ul>
      </CardLayout>
      <CardLayout class="mt-2">
        <div>
          <span
            >This list is a short summary of my favorite technology used. There
            are countless skills and technology used when developing! Reach out
            if you wish to know more.</span
          >
        </div>
      </CardLayout>
      <CardLayout class="mt-2">
        <div class="ml-2 mt-2 flex flex-col">
          <div>
            <span class="text-lg font-bold">Contact Info</span>
          </div>
          <span
            >Email:
            <a href="mailto:hilbertwilliam@gmail.com" class="underline"
              >hilbertwilliam@gmail.com</a
            ></span
          >
          <span>Location: St. Petersburg, FL</span>
        </div>
      </CardLayout>
    </div>
  </div>
</template>
<script>
import CardLayout from '/@/layouts/CardLayout.vue'
import CVItem from '/@/components/cv/CVItem.vue'
import cv from '/@/components/cv/cv.js'

export default {
  setup() {
    return {
      CardLayout,
      CVItem,
      cv,
      skills: [
        'JavaScript',
        'Vue.js',
        'React.js',
        'Angular',
        'TypeScript',
        'Nuxt.js',
        'Next.js',
        'Webpack',
        'Parcel',
        'Git',
        'Linux',
        'bash'
      ]
    }
  }
}
</script>
