<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-in") El proceso de evaluación dentro de cualquier tipo de proceso resulta fundamental, pues a partir de ciertos indicadores, instrumentos y métricas se puede determinar la calidad del servicio prestado y los elementos sobre los cuales se debe trabajar para mejorar. 

    p.mt-4(data-aos="fade-up") El intérprete necesita conocer las habilidades y competencias que debe reforzar y trabajar en su desarrollo, esto garantizará, de cierta manera, que se preste un servicio con todas las garantías que permitan satisfacer las expectativas y las necesidades del usuario, por lo que este componente permite vislumbrar los elementos necesarios para realizar este proceso de validación. 

    p.mt-4(data-aos="fade-up") Una breve revisión de los temas vistos, se encuentran en el siguiente esquema.

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
