<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.bg-c2
      .col-12
        .px-5
          p(data-aos="fade-up") Bienvenido a este componente formativo. Para comenzar el recorrido por el mismo, se invita a revisar la información que se presenta a continuación.

          figure.my-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/P9kmYwT-hM8" title="Importancia de la evaluación de la calidad de servicio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video: Importancia de la evaluación de la calidad de servicio.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
