<template>
  <div class="card hover:shadow-lg">
    <div>
      <slot name="poster"></slot>
    </div>
    <div class="p-2">
      <h4 class="text-xl md:text-xl1">
        <slot name="title"></slot>
      </h4>
      <p class="mt-4">
        <slot name="actors"></slot>
      </p>
      <span>
        <slot name="rated"></slot>
      </span>
    </div>
  </div>
</template>
