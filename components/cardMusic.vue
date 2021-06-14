<template>
  <div>
    <div class="cards" :style="`background: url( ${value.image})`">
      <div class="is-flex is-flex-direction-column">
        <h3 class="m-2">{{value.author}}</h3>
        <h3 class="ml-2">{{value.title}}</h3>
        <a :href="`${value.preview_url}`" class="mt-6 mr-4 is-align-self-flex-end is-black">
          <i class="fas fa-play"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMusic",
  props: {
    value: Object
  }
};
</script>
