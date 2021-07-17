<template>
  <div class="card">
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
      <div class="badge">
        <span>
          <slot name="rated"></slot>
        </span>
      </div>
    </div>
  </div>
</template>
