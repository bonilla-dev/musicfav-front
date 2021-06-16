<template>
  <div>
    <div class="card">
      <img :src="`${value.image}`" :alt="`${value.title} de ${value.author}`" width="100%" />
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{value.author}}</p>
            <p class="subtitle is-6">{{value.title}}</p>
          </div>
         <a :href="`${value.preview_url}`" class="mt-6 mr-4 is-black">
          <i class="fas fa-play"></i>
          </a>
          <audio :src="`${value.preview_url}`"></audio>
        </div>
          <img :src="`${value.platform}`" :alt="`${value.title} de ${value.author}`" width="30%" />
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
