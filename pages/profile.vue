<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
        <figure class="image is-128x128">
          <img class="is-rounded" :src="user.photo" />
        </figure>
        <h3 class="mt-5 subtitle">{{user.firstname}} {{user.lastname}}</h3>
        <h3 class="subtitle">{{user.email}}</h3>
        <div class="is-flex">
          <button class="mr-4 button-me btn-color-selected">Editar</button>
          <button class="ml-4 is-red btn-delete">Borrar</button>
        </div>
        <div class="columns mt-6 is-flex is-justify-content-space-evenly">
          <div
            class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
          >
            <figure class="image is-64x64 mb-4">
              <img class="is-rounded" src="@/assets/spotifylogo.jpg" />
            </figure>
            <button class="button-me btn-color-selected" @click="vincularSpotify">Vincular</button>
            <button class="btn-delete is-red" v-if="!isActive">Desvincular</button>
          </div>
          <div
            class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
          >
            <figure class="image is-64x64 mb-4">
              <img class="is-rounded" src="@/assets/youtubelogo.jpg" />
            </figure>
            <button
              class="button-me btn-color-selected"
              v-if="isActive"
              @click="vincularYoutube"
            >Vincular</button>
            <button class="btn-delete is-red" v-if="!isActive">Desvincular</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  name: "PerfilPage",
  head() {
    return {
      title: "Mi perfil"
    };
  },
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      isActive: true
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async vincularSpotify() {
      console.log(this.user._id)
      let config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
      const response = await this.$axios.$get(
        `/users/${this.user._id}/spotify`, config
      );
      console.log(response);
    },
    async vincularYoutube() {
      const response = await this.$axios.$get(
        `/users/${this.user._id}/youtube`
      );
      console.log(response);
    }
  }
};
</script>
