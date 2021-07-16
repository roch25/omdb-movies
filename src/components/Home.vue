<template>
  <div class="text-gray-700 bg-primary font-body">
    <div>
      <nav>
        <div>
          <h1 class="font-bold p-4">
            <a href="/" class="text-2xl sm:text-3xl">OMBd Movies</a>
          </h1>
        </div>
        <ul>
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
      </nav>
    </div>
    <main class="px-16 py-5">
      <div class="flex justify-center md:justify-end">
        <a href="#" class="text-secondary">Log in</a>
        <a href="#" class="text-secondary ml-2">Sign up</a>
      </div>

      <header>
        <h2 class="text-4xl font-semibold">Movies</h2>
        <h3 class="text-2xl">For all</h3>
      </header>

      <div>
        <h4 class="font-bold mt-12 pb-2 border-b">English</h4>
        <div class="mt-5">
          <div>
            <ul>
              <li v-for="movie in names.en">
                <span>{{ movie.Title }}</span>
                <span>{{ movie.Actors }}</span>
                <img :src="movie.Poster" :alt="movie.Title" />
              </li>
            </ul>
          </div>
        </div>

        <h4 class="font-bold mt-12 pb-2 border-b">Hindi</h4>
        <div class="mt-5">
          <div>
            <ul>
              <li v-for="movie in names.hi">
                <span>{{ movie.Title }}</span>
                <span>{{ movie.Actors }}</span>
                <img :src="movie.Poster" :alt="movie.Title" />
              </li>
            </ul>
          </div>
        </div>

        <div class="flex justify-center">
          <div>Load more</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import names from "../assets/Names";

export default {
  data() {
    return {
      names: {
        en: [],
        hi: [],
      },
      moviesEN: [],
      moviesHI: [],
    };
  },
  methods: {
    async getMovies() {
      try {
        const KEY = import.meta.env.VITE_API_KEY;
        const URL = `http://www.omdbapi.com/?type=movie&apikey=${KEY}&t=`;

        for (const i in names) {
          this.names[i] = await Promise.all([
            ...names[i].map((name) => fetch(`${URL}${name}`)),
          ]).then((res) =>
            Promise.all(res.map(async (movie) => await movie.json()))
          );
        }
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

<style scoped></style>
