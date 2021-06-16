<template>
<div>
  <Navbar />
  <div class="control mt-3 ml-3 mr-3 has-icons-left has-icons-right">
  <input class="input is-rounded" type="text" placeholder="Buscar por cantante" v-model="songSearch">
  <span class="icon is-left">
    <i class="fas fa-search"></i>
  </span>
</div>
  <div
    class="container is-flex is-justify-content-center is-align-items-center pt-6"
  >
    <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
    <CardMusic class="m-2" v-for="song in songsFiltered" :key="song._id" :value="song" />
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
export default {};
</script>

<script>
import CardMusic from "@/components/partials/listMusic";
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
    return this.songs = songsFound
  },
    data() {
    return {
      isVisible: true,
      songs: [],
      songSearch: ""
    };
  },
  computed: {
    songsFiltered() {
      if(this.songSearch === "") return this.songs
      return this.songs.filter(song => song.author.includes(this.songSearch))

    }
  }
};
</script>

