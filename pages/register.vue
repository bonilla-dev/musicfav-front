<template>
  <div class="container">
    <div class="is-flex is-align-items-center is-justify-content-center pl-6 pt-6 pb-4">
      <figure class="image is-96x96">
        <img src="@/assets/logo.svg" />
      </figure>
      <h3 class="ml-4 title">MUSICFAV</h3>
    </div>
    <div class="is-flex is-flex-direction-column is-justify-content-center m-6">
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input v-model="firstname" class="input" type="text" placeholder="Introduzca su nombre" />
        </div>
      </div>
      <div class="field">
        <label class="label">Apellidos</label>
        <div class="control">
          <input v-model="lastname" class="input" type="text" placeholder="Introduzca sus apellidos" />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="text" placeholder="Introduzca su email" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="Introduzca su contraseña" />
        </div>
      </div>
      <div class="column is-12">
        <div class="form-group">
          <label class="checkbox">
            <input type="checkbox" v-model="legalAcceptance" required />
            Acepto los términos y condiciones legales
          </label>
        </div>
      </div>
    <article class="message is-danger" v-if="this.hasErrors">
      <div class="message-body" v-html="this.errorMessage"></div>
    </article>
    <button @click="registerUser" class="mt-4 has-text-centered button-me btn-color-selected">Registrarse</button>
    <nuxt-link to="/login" class="is-black mt-4">¿Ya tienes cuenta?<strong> Click Áqui</strong></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  head(){
    return {
      title: 'Registro'
    }
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      legalAcceptance: false,
    };
  },
methods: {
    async registerUser() {
      try {
        this.hasErrors = false
        if (!this.legalAcceptance) {
          this.errorMessage =
            "Debes aceptar las condiciones del sitio para poder acceder.";
          this.hasErrors = true;
          return;
        }
        const newUserData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        };
        await this.$api.users.register(newUserData);
        this.$router.push("/login")
      } catch (error) {
        const response = error.response
        this.hasErrors = true
        this.errorMessage = response.data.message
      }
    },
  },
};
</script>
