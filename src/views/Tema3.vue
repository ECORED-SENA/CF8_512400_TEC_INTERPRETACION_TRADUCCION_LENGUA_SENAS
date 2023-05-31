<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instrumentos de evaluación

    p(data-aos="fade-up") De acuerdo con Arumí y Domínguez (citado en Domínguez, 2015), los instrumentos de evaluación son herramientas que:

    .col-lg-10.m-auto
      .bloque-texto-d.color-primario.p-4.mt-5
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left
          h4 Desempeñan un papel importante para fomentar la autorregulación y la conciencia sobre el aprendizaje de los alumnos de interpretación en el aula. Los instrumentos intentan fomentar el aprendizaje de los alumnos mediante el acercamiento a la reflexión y al conocimiento de sus propios procesos mentales cuando interpretan. Al mismo tiempo, proporcionan información muy útil a los docentes sobre el efecto de lo practicado o visto en clase sobre los alumnos y sobre las necesidades individuales de estos en cada momento. Los instrumentos de evaluación han aportado a una gran variedad de propuestas de apoyo al aprendizaje de la interpretación y reflexión sobre esta.
          i.fas.fa-quote-right

    Separador

    #t_3_1
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right")  3.1 Tipos de instrumentos

    p(data-aos="fade-up") Siguiendo a Domínguez (2015), los principales tipos y ejemplos de instrumentos de evaluación tratados en la bibliografía especializada son:

    figure.mt-5.d-none.d-md-block
      img(src="@/assets/curso/tema3/1.svg" data-aos="zoom-in-up")

    .d-md-none

      figure.mt-5.p-3.mb-3.d-flex.justify-content-center
        .col-6
          img(src="@/assets/curso/tema3/1b.svg" data-aos="zoom-in-up")

      ul.lista-ul--separador
        li
          i.fas.fa-angle-right
          | Tutorías especializadas
        li
          i.fas.fa-angle-right
          | Hojas de autoevaluación
        li
          i.fas.fa-angle-right
          | Matrices de valoración
        li
          i.fas.fa-angle-right
          | Hojas de evaluación
        li
          i.fas.fa-angle-right
          | Modelos
        li
          i.fas.fa-angle-right
          | Parrillas y autoevaluación
        li
          i.fas.fa-angle-right
          | Diarios retrospectivos semi-guiados
        li
          i.fas.fa-angle-right
          | Lista de autoevaluación
        li
          i.fas.fa-angle-right
          | Portafolios
        li
          i.fas.fa-angle-right
          | Diarios del profesor
        li
          i.fas.fa-angle-right
          | Pautas meta cognitivas
        li
          i.fas.fa-angle-right
          | Diarios de aprendizaje no guiados


    Separador

    #t_3_2
    .titulo-segundo.color-secundario
      h2(data-aos="fade-right")  3.2 Diseño de instrumentos

    p(data-aos="fade-up") Es un procedimiento que permite elaborar las herramientas para evaluar el proceso, en concordancia con Domínguez (2015) pueden considerarse fuentes primarias y secundarias, a su vez es importante definir el porqué de las técnicas e instrumentos seleccionados y su relevancia para el análisis de la información (p. 123 -124).
    p.mt-4(data-aos="fade-up") Es fundamental contemplar dentro del diseño del instrumento y dentro del proceso de evaluación mismo, las particularidades del proceso que se está evaluando. No es posible evaluar un proceso con un instrumento que desconoce aspectos propios de aquello que se evalúa. La articulación del proceso que se evalúa y del instrumento de evaluación debe ser completa; de no ser así, el beneficio de la evaluación podría no contribuir con el proceso y obstaculizar el crecimiento de este.

    .col-lg-10.m-auto.mt-5
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/2.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 La elaboración de un instrumento de evaluación debe estar a cargo de expertos en el proceso a evaluar, pues son ellos quienes pueden predecir el comportamiento del proceso en diferentes contextos o escenarios y de esta manera ajustar o flexibilizar los instrumentos para que puedan estar en concordancia con los objetivos del proceso para obtener los beneficios de la evaluación.

    p.mt-5(data-aos="fade-up") A continuación, se presenta un ejemplo de un instrumento para realizar una evaluación individual a un intérprete según algunos parámetros de calidad del servicio:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 1.
      span Instrumento de evaluación individual

    .d-flex.justify-content-center
      figure.mt-4.d-flex.justify-content-center
        img(src="@/assets/curso/tema3/tabla.svg" data-aos="zoom-in-up" style="max-width:820px")

</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
    modal1: false,
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
<style lang="sass">
.bloque-texto-d.color-primario:before
  background-color: #FBE6E9
</style>
