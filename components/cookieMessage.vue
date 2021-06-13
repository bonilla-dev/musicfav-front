<template>
  <div>
    <client-only>
      <cookie-law theme="royal" buttonText="Vendo mi alma al diablo">
        <div slot="message" class="size-08">
          Al hacer clic en “Vendo mi alma al diablo”, usted permite que las cookies posean su dispositivo para mejorar la navegación del sitio, analizar el uso del mismo y colaborar con nuestros estudios para marketing.
        </div>
      </cookie-law>
    </client-only>
  </div>
</template>

<script>
  export default {
    name: 'CookieMessage',
  }
</script>
