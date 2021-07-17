<template>
  <div class="text-gray-900 bg-primary font-body px-16">
    <div>
      <nav class="grid grid-rows-2">
        <div>
          <h1 class="font-bold py-5">
            <a href="/" class="text-2xl sm:text-3xl">OMBd Movies</a>
          </h1>
        </div>
        <div
          class="flex flex-col justify-evenly sm:flex-row sm:justify-between"
        >
          <ul class="grid grid-cols-3 gap-1">
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <div>
            <a href="#" class="text-secondary">Log in</a>
            <a href="#" class="text-secondary ml-2">Sign up</a>
          </div>
        </div>
      </nav>
    </div>
    <main class="py-2">
      <header>
        <h2 class="text-2xl font-semibold">Movies</h2>
      </header>

      <div>
        <h4 class="font-bold mt-12 pb-2 border-b">English</h4>
        <movie-list :movies="movies.en" />

        <h4 class="font-bold mt-12 pb-2 border-b">Hindi</h4>
        <movie-list :movies="movies.hi" />
      </div>
    </main>
  </div>
</template>

<script>
import names from "../assets/Names";
import MovieList from "./MovieList.vue";

export default {
  components: {
    MovieList,
  },
  data() {
    return {
      movies: {
        en: [],
        hi: [],
      },
    };
  },
  methods: {
    async getMovies() {
      try {
        const KEY = import.meta.env.VITE_API_KEY;
        const URL = `http://www.omdbapi.com/?type=movie&apikey=${KEY}&t=`;

        const movies = await Promise.all([
          ...names.map((name) => fetch(`${URL}${name}`)),
        ]).then((res) =>
          Promise.all(res.map(async (movie) => await movie.json()))
        );

        console.log(movies);
        this.movies.en = movies.filter((movie) =>
          movie.Language.startsWith("English")
        );
        this.movies.hi = movies.filter((movie) =>
          movie.Language.startsWith("Hindi")
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getMovies();
  },
};
</script>
