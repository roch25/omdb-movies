<template>
  <div class="text-gray-900 bg-primary font-body px-8 sm:px-16">
    <div>
      <nav class="grid grid-rows-2">
        <div class="flex justify-between py-5">
          <h1 class="font-semibold">
            <a href="/" class="text-2xl sm:text-3xl">OMDb Movies</a>
          </h1>
          <span class="cursor-pointer sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
        <div
          class="flex flex-col justify-evenly sm:flex-row sm:justify-between items-center"
        >
          <ul class="flex-col sm:flex-row sm:flex" :class="hidden">
            <li class="border-t-2 border-secondary pt-1 mr-2">
              <a href="#" class="hover:font-semibold flex font-semibold">
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <li class="pt-1 mr-2">
              <a href="#" class="hover:font-semibold flex">
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </li>
            <li class="pt-1 mr-2">
              <a href="#" class="hover:font-semibold flex">
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div>
            <a href="#" class="btn">Log in</a>
            <a href="#" class="btn ml-2">Sign up</a>
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
      hidden: "hidden"
    };
  },
  methods: {
    async getMovies() {
      try {
        const KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://www.omdbapi.com/?type=movie&apikey=${KEY}&t=`;

        const movies = await Promise.all([
          ...names.map((name) => fetch(`${URL}${name}`)),
        ]).then((res) =>
          Promise.all(res.map(async (movie) => await movie.json()))
        );

        for (let [abbr, lang] of Object.entries({ en: "English", hi: "Hindi" }))
          this.movies[abbr] = movies.filter((movie) =>
            movie.Language.startsWith(lang)
          );
      } catch (error) {
        console.log(error);
      }
    },
    toggle() {
      this.hidden = !!this.hidden ? "" : "hidden"
    },
  },

  created() {
    this.getMovies();
  },
};
</script>
