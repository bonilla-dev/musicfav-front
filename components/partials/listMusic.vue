<template>
  <div>
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="`${value.image}`" :alt="`${value.title} de ${value.author}`" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-4">{{value.author}}</p>
            <p class="subtitle is-6">{{value.title}}</p>
          </div>
        <img :src="`${value.platform}`" :alt="`${value.title} de ${value.author}`" width="40" />
        <a :href="`${value.preview_url}`" class="mt-6 mr-4  is-black">
          <i class="fas fa-play"></i>
        </a>
        </div>
        <button class="button is-danger" @click.prevent="deleteSong(value)">Borrar</button>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMusic",
  props: {
    value: Object
  },
  methods: {
     async deleteSong(song){
       try{

    const userId = this.$store.state.user._id
    const token = this.$store.state.token;
    const songId = this.value._id;
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    await this.$axios.$delete(`https://musicfav-api.herokuapp.com/users/${userId}/songs/${songId}`, config)
      this.$nuxt.refresh()
       }catch(error) {
         return error.message
       }
    },
  }
};
</script>
