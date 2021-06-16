<template>
  <div class="container">
    <div class="is-flex is-align-items-center is-justify-content-center pt-6 pb-2">
      <figure class="image is-96x96">
        <img src="@/assets/logo.svg" />
      </figure>
      <h3 class="ml-4 title is-2">MUSICFAV</h3>
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
          <input
            v-model="lastname"
            class="input"
            type="text"
            placeholder="Introduzca sus apellidos"
          />
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
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="Introduzca su contraseña"
          />
        </div>
      </div>
      <label class="mb-2">
        <input type="checkbox" v-model="legalAcceptance" required />
        <span class="is-black ml-2">Acepto los términos y condiciones legales</span>
      </label>
      <article class="message is-danger" v-if="this.hasErrors">
        <div class="message-body" v-html="this.errorMessage"></div>
      </article>
      <button
        @click="registerUser"
        class="mt-4 has-text-centered button-me btn-color-selected"
      >Registrarse</button>
      <nuxt-link to="/login" class="is-flex is-justify-content-center is-black mt-4">
        <p>
          ¿Ya tienes cuenta?
          <strong>Click Áqui</strong>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  head() {
    return {
      title: "Registro"
    };
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      legalAcceptance: false
    };
  },
  methods: {
    async registerUser() {
      try {
        this.hasErrors = false;
          if (!this.email || !this.firstname || !this.lastname || !this.password) {
            this.errorMessage =
              "Te faltan campos por rellenar.";
            this.hasErrors = true;
            return;
          }
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
        this.$router.push("/login");
      } catch (error) {
        const response = error.response;
        this.hasErrors = true;
        this.errorMessage = response.data.message;
      }
    }
  }
};
</script>
