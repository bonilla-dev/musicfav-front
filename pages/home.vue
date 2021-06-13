<template>
<div>
  <Navbar />
  <div
    class="container is-flex is-justify-content-center is-align-items-center pt-6"
  >
    <div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center" v-if="isVisible">
    <h1 class="title m-6">TU MUSICA FAVORITA EN UN UNICO LUGAR</h1>
      <h3
        class="subtitle m-6"
      >Aun no tienes ninguna cuenta vinculada a que esperas para tener toda tu musica favorita en unico lugar y que no tengas que buscar mas</h3>
      <button @click="isVisible = false" class="button btn-vinc m-6">Vincular Cuentas</button>
    </div>
    <div class="is-flex is-flex-wrap-wrap" v-if="!isVisible">
    <CardMusic class="m-4"  v-for="n in 20" :key="n" />
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
  data() {
    return {
      isVisible: true
    };
  }
};
</script>
