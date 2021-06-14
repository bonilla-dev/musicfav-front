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
            <figure class="image is-64x64 mb-4 mt-6">
              <img class="is-rounded" src="@/assets/spotifylogo.jpg" />
            </figure>
            <a
              class="button-me btn-color-selected"
              :href="`https://musicfav-api.herokuapp.com/users/${user._id}/spotify`"
              v-if="isActiveSpotify"
            >Vincular</a>
            <h3 class="is-green" v-if="!isActiveSpotify">Vinculada</h3>
          </div>
          <div
            class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
          >
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <span style="font-size: 2em; color: Tomato;">
                  <i class="fas fa-info-circle"></i>
                </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <h3 class="subtitle">
                      Para que youtube funcione necesitas crear una playlist con el nombre
                      <strong>Favorite</strong>.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <figure class="image is-64x64 mb-4">
              <img class="is-rounded" src="@/assets/youtubelogo.jpg" />
            </figure>
            <a
              class="button-me btn-color-selected"
              v-if="isActiveYoutube"
              :href="`https://musicfav-api.herokuapp.com/users/${user._id}/youtube`"
            >Vincular</a>
            <h3 class="is-green" v-if="!isActiveYoutube">Vinculada</h3>
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
      isActiveYoutube: true,
      isActiveSpotify: true
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  async beforeMount() {
    const token = this.$store.state.token;
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    const userFound = await this.$axios.get(
      `https://musicfav-api.herokuapp.com/users/${this.user._id}`,
      config
    );
    console.log(userFound.data);
    if (userFound.data.platforms.includes("Youtube")) {
      this.isActiveYoutube = false;
    }
    if (userFound.data.platforms.includes("Spotify")) {
      this.isActiveSpotify = false;
    }
  }
};
</script>
