<template>
  <div>
    <div class="card">
      <img v-if="isSpotify" :src="`${value.image}`" :alt="`${value.title} de ${value.author}`" width="100%" />
      <no-ssr  placeholder="Loading..." v-if="!isSpotify">
             <youtube :player-width="350" :player-height="350" :video-id="`${value.preview_url}`" />
       </no-ssr>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{value.author}}</p>
            <p class="subtitle is-6">{{value.title}}</p>
          </div>
        </div>
        <audio controls v-if="isSpotify">
          <source :src="`${value.preview_url}`" type="audio/mpeg" />Your browser does not support the audio tag.
        </audio>
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
  },
  computed:{
    isSpotify(){
      if(this.value.preview_url === null) {
        return true
      }
      if(this.value.preview_url.includes('http')){
        return true
      } else {
        return false
      }
  }}
};
</script>
