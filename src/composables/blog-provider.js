import { reactive, computed, readonly } from 'vue'

const posts = import.meta.glob('../../blog/*.md')

for (const path in posts) {
  let newPath = path
    .replace(/^.*[\\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.')
  // posts[path]().then(res => {
  //   console.log(res)
  // })
  import('../../blog/' + newPath + '.md').then(async post => {
    console.log(post)

    state.posts.push({
      meta: post.attributes,
      post: post.html
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
