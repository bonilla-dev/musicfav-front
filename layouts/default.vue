<template>
  <div >
    <Nuxt />
    <cookieMessage />
  </div>
</template>


<script>

import CookieMessage from '@/components/cookieMessage'
export default {
  name: "WelcomePage",
  components: {
    CookieMessage
  },
   mounted(){
    const token = this.$cookies.get('jwt-token')
    this.$store.dispatch('login',token)
  }
};

</script>
