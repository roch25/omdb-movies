<template>
  <div class="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5">
    <movie v-for="movie in movies" :key="movie.Title">
      <template v-slot:title>
        {{ movie.Title }}
      </template>
      <template v-slot:poster>
        <img :src="movie.Poster" :alt="movie.Title" class="w-full h-84 md:h-72"/>
      </template>
      <template v-slot:actors>
        {{ movie.Actors }}
      </template>
      <template v-slot:rated>
        {{ movie.Rated }}
      </template>
    </movie>
  </div>
</template>

<script>
import Movie from "./Movie.vue";
export default {
  components: {
    Movie,
  },
  props: {
    movies: {
      type: Object,
    },
  },
};
</script>
