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
          <button class="ml-4 is-red btn-delete" @click="modalActive=true">Borrar</button>
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
            <a class="button is-success mt-2" :href="`https://musicfav-api.herokuapp.com/users/${user._id}/spotify`" v-if="!isActiveSpotify"><i class="fas fa-sync-alt"> Recargar Musica</i></a>
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
            <a class="button is-success mt-2" :href="`https://musicfav-api.herokuapp.com/users/${user._id}/youtube`" v-if="!isActiveSpotify" ><i class="fas fa-sync-alt"> Recargar Musica</i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="{'is-active': modalActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head is-yellow">
          <p class="modal-card-title">
            ¿Seguro que quieres
            <strong class="is-red">ELIMINAR</strong> tu usuario?
          </p>
        </header>
        <section class="modal-card-body">
          <p>
            Para ELIMINAR tu usuario debes escribir:
            <strong>{{user.email}}</strong>
          </p>
          <input class="input" v-model="email" @click="hasErrors=false" />
          <article v-if="hasErrors" class="message is-danger">
            <div class="message-body" v-html="errorMessage"></div>
          </article>
        </section>
        <footer class="modal-card-foot is-blue">
          <button class="button is-danger" @click="deleteUser(user)">Borrar</button>
          <button class="button" @click="modalActive=false">Cancel</button>
        </footer>
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
      isActiveSpotify: true,
      email: "",
      hasErrors: false,
      errorMessage: "",
      modalActive: false
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
    const foundUser = await this.$axios.get(
      `https://musicfav-api.herokuapp.com/users/${this.user._id}`,
      config
    );
    if (foundUser.data.platforms.includes("Youtube")) {
      this.isActiveYoutube = false;
    }
    if (foundUser.data.platforms.includes("Spotify")) {
      this.isActiveSpotify = false;
    }
  },
  methods: {
    async deleteUser(user) {
      if (this.email !== this.user.email) {
        this.errorMessage = "El email no coincide";
        this.hasErrors = true;
        return;
      }
      const token = this.$store.state.token;
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      await this.$axios.delete(
        `https://musicfav-api.herokuapp.com/users/${user._id}`,
        config
      );
    }
  }
};
</script>
