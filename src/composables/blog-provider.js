import { reactive, computed, readonly } from 'vue'

const posts = import.meta.glob('../../blog/*.md')

for (const path in posts) {
  import(/* @vite-ignore */ path + '?raw').then(async post => {
    let regMetaMatch = post.default.match(/(?<=\%)(.*?)(?=\%)/)[1]
    let meta = await JSON.parse(regMetaMatch)

    if (!meta) {
      return console.error(
        'Error: please include a metadata line at the top of your markdown file. (ex: % {"title": "test", "date": "today"} % )'
      )
    }

    state.posts.push({
      meta,
      post: post.default.replace(`%${regMetaMatch}%`, '')
    })
  })
}

const state = reactive({
  posts: []
})

const getPosts = computed(() => state.posts)

export const BlogProvider = readonly({
  getPosts
})
