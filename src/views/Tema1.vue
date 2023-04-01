<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de peligros

    .col-lg-10.m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 Es fundamental reconocer los diferentes procesos que permiten validar y evaluar la prestación de un servicio, en este caso, el servicio de interpretación, porque a partir de la formulación de ciertos indicadores, se pueden identificar opciones de mejora que lleven al intérprete a ofrecer un servicio con una muy alta calidad. A continuación, se presentan los elementos que se deben tener en cuenta para realizar dicho proceso.
    
    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-contenido.p-4(titulo="Sistema de calidad")
        h4 Sistema de calidad
        p.mt-3 Es una herramienta que permite planear, ejecutar y controlar las actividades necesarias para el desarrollo de la misión, a través de la prestación de servicios con altos estándares de calidad, los cuales son medidos a través de los indicadores de satisfacción de los usuarios, para el caso de la lengua de señas comprende un conjunto de procesos, procedimientos y recursos que permiten administrar la calidad del servicio de interpretación y traducción.
      .tarjeta.color-acento-contenido.p-4(titulo="Política de calidad")
        h4 Política de calidad
        p.mt-3 Es un documento escrito que define los objetivos de calidad y las líneas de acción para alcanzarlos. Además, debe recoger el compromiso por la mejora continua y de qué modo se medirá el cumplimiento de esos objetivos. (Gestión.org, s. f.).  En el caso de la interpretación y traducción en Lengua de Señas Colombiana - español, se plantea como la intención manifiesta de orientar la prestación del servicio de manera óptima mediante la mejora constante del sistema de gestión de calidad establecido en la entidad para la cual se presta el servicio. 
      .tarjeta.color-acento-contenido.p-4(titulo="Evaluación del servicio")
        h4 Evaluación del servicio
        p.mt-3 La evaluación es un instrumento que permite definir parámetros frente a los cuales se valora el proceso y los resultados.
        p.mt-3 De acuerdo con Sainz (2011) algunos parámetros que aplican para la Lengua de Señas Colombiana son el acento nativo, voz agradable, fluidez, coherencia interna, transmisión completa y con sentido del discurso original, estilo apropiado, buen uso de la lengua de señas, uso gramaticalmente correcto, preparación a fondo del servicio/conferencia - conocimiento del tema, autodisciplina, mejora continua, autoexigencia, trabajo en equipo, adaptación a diferentes situaciones, manejo de estrés, etc. (p. 302-303).
        p.mt-3 En el marco de los criterios de calidad establecidos por Solow (2011), pueden destacarse la flexibilidad, objetividad y autodisciplina (p.304). 
        p.mt-3 Pero, uno de los elementos más importantes es, sin dudas, la experiencia. 
    
    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Resolución de situaciones adversas
    
    p(data-aos="fade-up") A diferencia de la mala suerte, una situación adversa es un suceso difícil de sobrellevar, un infortunio, calamidad o desgracia en determinado momento, sea para una o más personas.  
    p.mt-4(data-aos="fade-up") Las personas pueden atravesar una situación adversa en cualquier momento y lugar, por ende, resulta importante reconocer los tipos de estrategias y herramientas que se pueden aplicar en caso de presentarse dichas situaciones durante el servicio de interpretación. 
    p.mt-4(data-aos="fade-up") De otra parte, las experiencias personales han sido la única formación de la mayoría de los intérpretes de lengua de señas en Colombia, evidencia de ello es que, hasta el momento, no existe un código ético o deontológico para que el intérprete asuma ciertas posiciones en situaciones adversas, lo que hace que estén más expuestos al desconocimiento de sus funciones y esto ocasiona, en muchos casos, que se incurran en varios errores durante el desempeño de su labor. 

    .col-lg-10.mt-5.m-auto
      .cajon.color-secundario.p-4.row
        .col-auto
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")
        .col
          p(data-aos="fade-up") Estas situaciones pueden ser infinitamente variadas, porque no existen servicios, personas, clientes, compañeros, instituciones, empresas, entidades, momentos ni días exactamente iguales. Las contingencias, por lo tanto, pueden ser externas o internas, es decir, por parte del intérprete (internas) o por factores que se escapan al manejo o función de este (externas). 
          p.mt-4(data-aos="fade-up") En el siguiente documento se referencian cada una de ellas:
          a.boton.color-acento-botones.fw-bold.mt-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Situaciones adversas
    
    p.mt-5(data-aos="fade-up") Intentar explicar la complejidad de interpretar un concepto, tener la agilidad mental para reconstruir una imagen y adaptarla a un idioma con un léxico, morfología y sintaxis diferente, y darle una forma literal con signos lingüísticos hechos con las manos, además de ir haciéndolo sobre la marcha, puede resultar sofocante, pero, sobre todo, es aún más opresivo cuando se está haciendo el ejercicio mientras se está expuesto a situaciones adversas sin herramientas o estrategias para resolverlas. 
    p.mt-4(data-aos="fade-up") Al respecto, en el siguiente video se aprecian las situaciones adversas más comunes presentadas en el proceso de interpretación y algunas sugerencias para solucionarlas.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Quejas y reclamos

    p(data-aos="fade-up") Hay una gran diferencia entre estos dos términos que a continuación se exponen:  

    .col-lg-8.m-auto.mt-5.row
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/3.svg')
          .tarjeta.color-primario(style="background-color:#FBE6E9;")
            .text-white.p-4
              h4.text-center.mt-3(data-aos="fade-up" style="color:#12263F !important;") Quejas
              p(data-aos="fade-up" style="color:#12263F !important;") Malestar o descontento por algo que está relacionado directamente al producto o servicio comprado, o hace referencia a la mala atención al público.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/4.svg')
          .tarjeta.color-primario(style="background-color:#FBE6E9;")
            .text-white.p-4
              h4.text-center.mt-3(data-aos="fade-up" style="color:#12263F !important;") Reclamo
              p(data-aos="fade-up" style="color:#12263F !important;") Disconformidad relacionada directamente con los bienes o servicios adquiridos.
    
    p.mt-5(data-aos="fade-up") La reclamación no es una denuncia, por lo que no se inicia un procedimiento para sancionar al proveedor. Lo que se busca es que se solucione el problema rápidamente y de manera directa entre el consumidor y el proveedor del servicio. El reclamo parte de un derecho que tiene toda persona de exigir, reivindicar o demandar una solución por la indebida prestación de un servicio o la falta de atención. 
    p.mt-4(data-aos="fade-up") Por otro lado, la queja es la manifestación de protesta, censura, descontento o inconformidad de una persona en relación con una conducta que considera irregular de uno o varios servicios por el mal desarrollo de sus funciones. La queja tampoco constituye una denuncia y tampoco inicia un procedimiento para sancionar al proveedor.

    .col-lg-10.m-auto.mt-5
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 Sabía que el sistema de #[strong PQRS] (peticiones, quejas, reclamos y sugerencias) está regulado por la Ley de transparencia y acceso a la información (#[strong Ley 1712 de 2014]), del Estatuto anticorrupción (#[strong Ley 1474 de 2011]) y de la Estrategia de gobierno en línea (#[strong Decreto 2693 de 2012]). Ningún ciudadano colombiano está exento de este sistema de PQRS. Los usuarios o clientes pueden hacer ejercicio de sus derechos de manera respetuosa sea directamente al intérprete y/o a sus superiores.

    .row.mt-5
      .col-lg-4.mb-lg-0.mb-4(style="place-self:center;")
        img(src="@/assets/curso/tema1/6.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") En el caso de que sea el intérprete quien desee hacer uso de este derecho constitucional, deben tener muy claros los conceptos de PQRS, respetar la estructura jerárquica de la entidad, es decir, saber a quién dirigirse y cómo hacerlo; y conocer los procedimientos para llevar a cabo la información. 
        p.mt-4(data-aos="fade-up") Cuando el intérprete requiera responder a alguno de estos procedimientos, debe recordar hacerlo de manera concisa y correcta, prestar atención al cliente o usuario, aclarar inconvenientes de manera respetuosa, con un lenguaje amigable y nunca de manera automática. No es prudente generar discusiones o desacuerdos, sino más bien, solucionar de manera efectiva el inconveniente manteniendo un tono profesional y si es necesario y de ser el caso, pedir disculpas. 
        p.mt-4(data-aos="fade-up") Los instrumentos de evaluación son esenciales para el mejoramiento de un servicio de interpretación, debido a que se centran en el desempeño de la labor y los conocimientos adquiridos con el tiempo. Para ello, es necesario tener evidencias que soporten las competencias, desempeño, conocimiento, habilidades y actitudes del intérprete. Algunos instrumentos de evaluación son: 

    figure.mt-5 
      img(src="@/assets/curso/tema1/7.svg" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") El permitir que se realicen críticas y evaluarse puede generar que se solucionen inconvenientes que se desconocían sobre la labor particular del intérprete, ya que se tiene un punto de vista externo del ejercicio realizado y además mejora la calidad del servicio, genera experiencia, crea mejores relaciones laborales y se generan nuevas ideas que son útiles para el crecimiento personal.

    .col-lg-10.mt-5.m-auto
      .cajon.color-secundario.p-4.row
        .col-auto(style="place-self:center;")
          img(src="@/assets/curso/tema1/8.svg" data-aos="fade-right")
        .col(style="place-self:center;")
          p.mb-0(data-aos="fade-up") Cuando el intérprete se encuentra con una situación adversa o una crítica, la reacción que tome será fundamental para su desarrollo profesional. Es necesario saber gestionar y llevar de forma positiva la situación, para evitar tener reacciones exageradas. Si no es así, se corre el riesgo de estropear y/o empeorar las relaciones con las personas, clientes, usuarios, y culturas; y, más importante aún, consigo mismo.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
.tabs-a__content-item--active .tarjeta.color-acento-contenido
  background-color: #DBEFFC
.tabs-a__content-item--active .tarjeta.color-acento-contenido *
  color: #12263F !important
.tabs-a__tab
  background-color: #E8E8E8
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  background-color: #D5667A !important
  color: #fff !important
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #D5667A !important
.tabs-a.color-acento-botones .tabs-a__tab__selected
  background-color: #D5667A
  color: white
.cajon.color-secundario
  background-color: #BFE5F9
</style>
