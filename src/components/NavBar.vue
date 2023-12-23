<template>
  <nav class="grid grid-rows-2">
    <div class="flex justify-between py-5">
      <h1 class="font-semibold">
        <a href="/" class="text-2xl sm:text-3xl">OMDb Movies</a>
      </h1>
      <span class="cursor-pointer sm:hidden" @click="toggle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </span>
    </div>
    <div class="flex flex-col justify-evenly sm:flex-row sm:justify-between items-center">
      <ul class="flex-col sm:flex-row sm:flex" :class="hidden">
        <li class="pt-1 mr-2" :class="selected == 'home' ? 'border-t-2 border-secondary' : ''">
          <a href="/" class="hover:font-semibold flex font-semibold">
            <span>Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </li>
        <li class="pt-1 mr-2" :class="selected == 'about' ? 'border-t-2 border-secondary' : ''">
          <a href="/about" class="hover:font-semibold flex">
            <span>About</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </li>
      </ul>
      <div>
        <button href="#" class="btn">Log in</button>
        <button href="#" class="btn ml-2">Sign up</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hidden: 'hidden',
      selected: this.$route.name
    }
  },
  methods: {
    toggle() {
      this.hidden = !!this.hidden ? '' : 'hidden'
    }
  }
}
</script>
