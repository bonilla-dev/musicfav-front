<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
<img class="ml-4 navbar-item" src="@/assets/logo.png" width="96" height="96" />
        <a
          role="button"
          class="navbar-burger" :class="{'is-active': active}"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="active = !active"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': active}">
        <div class="navbar-end">
          <nuxt-link to="/home" exact-active-class="btn-color-selected" class="button-me m-3">Home</nuxt-link>

          <nuxt-link
            to="/profile"
            exact-active-class="btn-color-selected"
            class="button-me m-3"
          >Perfil</nuxt-link>
          <nuxt-link
            to="/songs"
            exact-active-class="btn-color-selected"
            class="button-me m-3"
          >Canciones</nuxt-link>
          <nuxt-link
            to="/login"
            exact-active-class="btn-color-selected"
            class="button-me m-3"
            @click="logout"
          >Logout</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      active: false
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push(" ");
    }
  }
};
</script>
