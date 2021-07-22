<template>
  <div
    class="
      mt-5
      grid
      gap-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      px-4
      sm:px-1
    "
  >
    <movie
      v-for="movie in movies"
      :key="movie.Title"
      @click="openMovie(true, movie)"
    >
      <template v-slot:title>
        {{ movie.Title }}
      </template>
      <template v-slot:poster>
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="w-full h-84 md:h-64"
        />
      </template>
      <template v-slot:actors>
        {{ movie.Actors }}
      </template>
      <template v-slot:rated>
        <p
          :class="
            movie.imdbRating < 8.0 ? 'badge bg-blue-200' : 'badge bg-green-200'
          "
          title="IMDB Rating"
        >
          {{ movie.imdbRating }}
        </p>
      </template>
    </movie>
  </div>

<movie-details-modal :selectedMovie="selectedMovie" :isOpen="isOpen" :openMovie="openMovie"/>
  
</template>

<script>
import { ref } from "vue";
import Movie from "./Movie.vue";
import MovieDetailsModal from "./MovieDetailsModal.vue";

export default {
  components: {
    Movie,
    MovieDetailsModal
  },
  setup() {
    const isOpen = ref(false);
    let selectedMovie = {};

    return {
      isOpen,
      openMovie(value, movie = null) {
        isOpen.value = value;
        this.selectedMovie = movie;
      },
      selectedMovie,
    };
  },
  props: {
    movies: {
      type: Object,
    },
  },
};
</script>
