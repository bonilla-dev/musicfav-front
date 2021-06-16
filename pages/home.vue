<template>
<div>
  <Navbar />
  <div
    class="container is-flex is-justify-content-center is-align-items-center pt-6"
  >
    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center" v-if="viewSongs">
    <h1 class="title m-6">TU MUSICA FAVORITA EN UN UNICO LUGAR</h1>
      <h3
        class="subtitle m-6"
      >Aun no tienes ninguna cuenta vinculada a que esperas para tener toda tu musica favorita en unico lugar y que no tengas que buscar mas</h3>
      <nuxt-link to="/profile" class="button btn-vinc m-6">Vincular Cuentas</nuxt-link>
    </div>
    <div class="is-flex is-flex-wrap-wrap" v-if="!viewSongs">
    <CardMusic class="m-4" v-for="song in songs" :key="song._id" :value="song" />
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
export default {};
</script>

<script>
import CardMusic from "@/components/cardMusic";
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  name: "HomePage",
  head(){
    return {
      title: 'Página principal'
    }
  },
  components: {
    CardMusic,
    Navbar,
    Footer
  },
  async beforeMount() {
    if(!this.$store.state.user) {
      this.$router.push('/')
    }
    const userId = this.$store.state.user._id
    const token = this.$store.state.token;
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    const songsFound = await this.$axios.$get(`https://musicfav-api.herokuapp.com/users/${userId}/songs`, config)
    console.log(songsFound)
    return this.songs = songsFound
  },
    data() {
    return {
      isVisible: true,
      songs: []
    };
  },
  computed:{
    viewSongs() {
      if(this.songs === []) {
        return true
      }
      if(this.songs !== []) {
        return false
      }
    }
  }
};
</script>
