<template>
  <div class="container">
    <div class="is-flex is-align-items-center is-justify-content-center pt-6 pb-2">
      <figure class="image is-96x96">
        <img src="@/assets/logo.png" />
      </figure>
      <h3 class="ml-4 title is-2">MUSICFAV</h3>
    </div>
    <div class="container is-flex is-flex-direction-column is-justify-content-center m-6">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="text" placeholder="Introduzca su email"
          @click="hasErrors=false" />
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
            @click="hasErrors=false"
          />
        </div>
      </div>
      <article v-if="hasErrors" class="message is-danger">
        <div class="message-body" v-html="errorMessage"></div>
      </article>
      <button class="mt-4 has-text-centered button-me is-yellow" @click="login">Login</button>
      <div class="mobile-text is-flex m-4 is-justify-content-space-evenly">
        <nuxt-link to="/register" class="is-black">
          <p>
            ¿Aún no tienes cuenta?
            <strong>Click Áqui</strong>
          </p>
        </nuxt-link>
        <nuxt-link to="/forgot-password" class="is-black">
          <p>
            ¿Olvidaste tu contraseña?
            <strong>Click Áqui</strong>
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  head() {
    return {
      title: "Login"
    };
  },
  data() {
    return {
      hasErrors: false,
      errorMessage: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        this.validForm();
        const credentials = {
          email: this.email,
          password: this.password
        };
        const response = await this.$api.auth.login(this.email, this.password);
        const token = response.token;
        this.$store.dispatch("login", token);
        this.$router.push("/home");
      } catch (error) {
        this.errorMessage = error.message;
        this.hasErrors = true;
      }
    },
    validForm() {
      if (this.email === "" && this.password === "") {
        throw new Error("Introduce el email y el password");
      }
      if (this.email === "") {
        throw new Error("Introduce el email");
      }
      if (this.password === "") {
        throw new Error("Introduce la contraseña");
      }
    }
  }
};
</script>
