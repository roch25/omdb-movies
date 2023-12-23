<template>
  <div class="text-gray-900 bg-primary font-body px-8 sm:px-16">
    <div>
      <nav-bar></nav-bar>
    </div>
    <main class="py-2">
      <header>
        <h2 class="text-2xl font-semibold">About</h2>
      </header>
      <div>First Tailwind Project</div>
    </main>
  </div>
</template>

<script>
import names from '../assets/Names'
import MovieList from './MovieList.vue'
import NavBar from './NavBar.vue'

export default {
  components: {
    MovieList,
    NavBar
  },
  data() {
    return {
      movies: {
        en: [],
        hi: []
      },
      hidden: 'hidden'
    }
  },
  methods: {
    async getMovies() {
      try {
        const KEY = import.meta.env.VITE_API_KEY
        const URL = `https://www.omdbapi.com/?type=movie&apikey=${KEY}&t=`

        const movies = await Promise.all([...names.map((name) => fetch(`${URL}${name}`))]).then((res) =>
          Promise.all(res.map(async (movie) => await movie.json()))
        )

        for (let [abbr, lang] of Object.entries({ en: 'English', hi: 'Hindi' }))
          this.movies[abbr] = movies.filter((movie) => movie.Language?.startsWith(lang))
      } catch (error) {
        console.log(error)
      }
    },
    toggle() {
      this.hidden = !!this.hidden ? '' : 'hidden'
    }
  },

  created() {
    this.getMovies()
  }
}
</script>
