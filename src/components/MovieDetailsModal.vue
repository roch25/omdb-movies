<template>
<TransitionRoot as="template" :show="isOpen">
    <Dialog
      :open="isOpen"
      @close="openMovie"
      as="div"
      class="fixed z-10 inset-0"
    >
      <div
        class="flex items-end justify-center pt-4 
        px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            "
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-xs sm:text-base">
              <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
              <div class="flex flex-col sm:flex-row sm:justify-between">
                <DialogTitle
                  as="h3"
                  class="text-xl leading-6 font-medium text-gray-900"
                >
                  {{ selectedMovie?.Title || "Movie Name" }}
                </DialogTitle>
                <span>  {{ selectedMovie?.Year }} </span>
              
              </div>
                <div class="mt-4 flex gap-2">
                  <div class="text-left flex flex-col">
                    <h2 class="text-md mb-1">
                      <span class="font-bold">Starring: </span>
                      {{ selectedMovie.Actors }}
                    </h2>
                   
                    <p class="text-md mb-1">
                      <span class="font-bold">Genre: </span>
                       {{ selectedMovie?.Genre }}
                    </p>
                    <p class="text-md mb-1">
                      <span class="font-bold">Directed by: </span>
                      {{ selectedMovie?.Director }}
                    </p>
                    <p class="text-md mb-1">
                      <span class="font-bold">Runtime: </span>
                      {{ selectedMovie?.Runtime }}
                    </p>

                    <p class="text-md mb-1 h-32 overflow-y-scroll">
                      <span class="font-bold">Plot: </span>
                      {{ selectedMovie?.Plot }}
                    </p>
                  </div>
                  <img
                    :src="selectedMovie?.Poster"
                    :alt="selectedMovie?.Poster"
                    class="h-36 md:h-64 self-center"
                  />
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                class="
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  shadow-sm
                  px-4
                  py-2
                  bg-secondary
                  text-base
                  font-medium
                  text-white
                  hover:bg-opacity-90
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  sm:ml-3 sm:w-auto sm:text-sm
                "
                @click="openMovie(false)"
              >
                Close
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue"

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
 
  props: {
    selectedMovie: {
      type: Object,
    },
    openMovie: {
        type: Function 
    },
    isOpen: {
      type: Boolean,
    },
  },
 
};

</script>