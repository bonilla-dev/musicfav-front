<template>
  <div class="is-flex is-justify-content-space-between 	">
    <div class="is-flex is-align-items-center ml-6 mt-6 mb-4">
      <figure class="image is-48x48">
        <img src="@/assets/logo.svg" />
      </figure>
      <h3 class="ml-2 subtitle">MUSICFAV</h3>
    </div>
    <div class="mr-6 mt-6 mb-4">
      <nuxt-link to="/home" exact-active-class="btn-color-selected" class="button-me mr-3">Home</nuxt-link>
      <nuxt-link to="/profile" exact-active-class="btn-color-selected" class="button-me mr-3">Perfil</nuxt-link>
      <nuxt-link to="/songs" exact-active-class="btn-color-selected" class="button-me mr-3">Canciones</nuxt-link>
      <nuxt-link to="/login" exact-active-class="btn-color-selected" class="button-me mr-3" @click="logout">Logout</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push(" ")
    }
  }
};
</script>
