<template>
<div>
  <Navbar />
  <div class="container">
    <div class="is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
      <figure class="image is-128x128">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      <h3 class="mt-5 subtitle">Nombre del Usuario</h3>
      <h3 class="subtitle">Email del usuario</h3>
      <div class="is-flex">
        <button class="mr-4 button-me btn-color-selected">Editar</button>
        <button class="ml-4 is-red btn-delete">Borrar</button>
      </div>
      <div class="columns mt-6 is-flex is-justify-content-space-evenly">
        <div
          class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
        >
          <figure class="image is-64x64 mb-4">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
          </figure>
          <button class="button-me btn-color-selected" v-if="isActive">Vincular</button>
          <button class="btn-delete is-red" v-if="!isActive">Desvincular</button>
        </div>
        <div
          class="column is-flex is-justify-content-center is-flex-direction-column is-align-items-center"
        >
          <figure class="image is-64x64 mb-4">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
          </figure>
          <button class="button-me btn-color-selected" v-if="isActive">Vincular</button>
          <button class="btn-delete is-red" v-if="!isActive">Desvincular</button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
export default {
  name: "PerfilPage",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>
