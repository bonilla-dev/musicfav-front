<template>
  <div class="container">
    <div class="is-flex is-align-items-center is-justify-content-center pt-6 pb-2">
      <figure class="image is-96x96">
        <img src="@/assets/logo.svg" />
      </figure>
      <h3 class="ml-4 title is-2">MUSICFAV</h3>
    </div>
    <div class="is-flex is-flex-direction-column is-justify-content-center m-6">
      <h3 class="subtitle is-4 is-black has-text-centered">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ut massa convallis amet. Bibendum blandit adipiscing duis et enim, potenti. Vulputate odio elementum scelerisque a enim dolor lorem. Nunc neque blandit sapien mi, egestas ultrices pharetra sagittis, fames.
      </h3>
      <div class="is-flex is-justify-content-center">
      <nuxt-link to="/register" class="m-6 has-text-centered button-me btn-color-selected">Registrarse</nuxt-link>
      <nuxt-link to="/login" class="m-6 has-text-centered button-me is-yellow">Login</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  head(){
    return {
      title: 'Bienvenido'
    }
  },
};
</script>
