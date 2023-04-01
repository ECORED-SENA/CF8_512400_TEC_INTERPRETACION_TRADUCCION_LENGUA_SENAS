<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-interno
  height: 114px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.titulo-principal__numero
  background-color: #0098E8 !important
.titulo-principal__numero span
  color: #fff !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #0098E8 !important
.banner-principal-decorativo-1
  top: 25% !important
  right: 80% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
.banner-principal-decorativo-2
  top: 67% !important
  right: 75% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
  max-width: 90px
.banner-principal-decorativo-3
  top: 15% !important
  right: 11% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
  max-width: 80px
.banner-principal-decorativo-4
  top: 63% !important
  right: 13% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
  max-width: 110px
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: 0 !important
</style>
