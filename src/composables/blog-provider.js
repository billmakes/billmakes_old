import { reactive, computed, readonly } from 'vue'

const posts = import.meta.glob('../../blog/*.md')

for (const path in posts) {
  let newPath = path
    .replace(/^.*[\\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.')

  import('../../blog/' + newPath + '.md').then(async (post) => {
    state.posts.push({
      meta: post.attributes,
      post: post.html,
    })
  })
}

function findMatches(term) {
  if (term.length) {
    state.filteredPosts = state.posts.filter((post) => {
      const regex = new RegExp(term, 'gi')
      return post.meta.title.match(regex) || post.meta.description.match(regex)
    })
  } else state.filteredPosts = []
}

const state = reactive({
  posts: [],
  filteredPosts: [],
})

const getPosts = computed(() =>
  state.posts.sort((a, b) =>
    Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1
  )
)
const getFilteredPosts = computed(() =>
  state.filteredPosts.sort((a, b) =>
    Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1
  )
)

export const BlogProvider = readonly({
  getPosts,
  getFilteredPosts,
  filterPosts: findMatches,
})
