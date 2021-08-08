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
      <div class="sm:border-none border">
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
              >This list is a short summary of my favorite technology used.
              There are countless skills and technology used when developing!
              Reach out if you wish to know more.</span
            >
          </div>
        </CardLayout>
      </div>
      <div class="sm:border-none border mt-2">
        <CardLayout class="mt-2">
          <div class="flex justify-between flex-col sm:flex-row">
            <div class="ml-2 flex flex-col">
              <div>
                <span class="text-lg font-bold">Contact Info</span>
              </div>
              <span
                >Email:
                <a href="mailto:billmakes@protonmail.com" class="underline"
                  >billmakes@protonmail.com</a
                ></span
              >
              <span>Location: St. Petersburg, FL</span>
            </div>
            <SocialButtons class="mt-4 self-center" />
          </div>
        </CardLayout>
      </div>
    </div>
  </div>
</template>
<script>
import CardLayout from '/@/layouts/CardLayout.vue'
import CVItem from '/@/components/cv/CVItem.vue'
import cv from '/@/components/cv/cv.js'
import SocialButtons from '/@/components/nav/SocialButtons.vue'

export default {
  setup() {
    return {
      CardLayout,
      SocialButtons,
      CVItem,
      cv,
      skills: [
        'JavaScript',
        'Vue.js',
        'React.js',
        'Angular',
        'TypeScript',
        'Node.js',
        'Express',
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
