<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evaluación

    p(data-aos="fade-up") Este es un instrumento que se utiliza para determinar el grado de asimilación de la información con miras a demostrar, establecer o calcular la importancia de una determinada cosa o asunto. La evaluación aplicada correctamente permite, primero, conocer la trayectoria del intérprete en su proceso laboral, sus aciertos y necesidades; y segundo, establecer el potencial de modificación de la práctica profesional. Además, sirve como elemento de comprobación y medio de aprendizaje.  

    .col-lg-10.m-auto.mt-5
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 "En lo que respecta a la calidad en la interpretación de la lengua de señas, podríamos pensar que no se debería exigir los mismos resultados que a un intérprete de lenguas orales que ha pasado por un proceso formativo superior, al que se le exige un conocimiento lingüístico previo, que trabaja con lenguas descriptas y reconocidas socialmente desde hace mucho tiempo, que cuenta con investigaciones sobre su profesión y con un mercado laboral totalmente diferente al del intérprete de lengua de señas" (Bao Fente, 2011)
    
    p.mt-5(data-aos="fade-up") Hasta ahora no existen preceptos concretos para una evaluación estándar de la lengua de señas en Colombia, aunque se han realizado estudios lingüísticos, sociolingüísticos y críticas generales que pueden servir como fundamento para una valoración.  
    p.mt-4(data-aos="fade-up") Por lo tanto, para delimitar los parámetros e indicadores que ayudan a determinar una buena interpretación en Lengua de Señas Colombiana es necesario conocer, de antemano, los tipos, procesos, momentos, criterios y retroalimentación para la evaluación. 

    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Tipos de evaluación

    p(data-aos="fade-up") Hay diferentes formas de evaluación según el propósito que se desee obtener, según la lengua meta, momento, la función, los conocimientos previos, los contenidos, entre otros. Algunos de los tipos de evaluación que existen son:

    ImagenInfografica.color-acento-botones.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/2.svg' data-aos="zoom-in-up")
      .tarjeta.color-primario.p-3(x="25.5%" y="10%" numero="+")
        .h4.mb-2 De enfoque
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Evaluación cualitativa.
          li 
            i.lista-ul__vineta
            | Evaluación cuantitativa.
          li 
            i.lista-ul__vineta
            | Evaluación cuali-cuantitativa.
      .tarjeta.color-primario.p-3(x="61.5%" y="12%" numero="+")
        .h4.mb-2 De finalidad
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Evaluación diagnóstica o preevaluación.
          li 
            i.lista-ul__vineta
            | Evaluación formativa.
          li 
            i.lista-ul__vineta
            | Evaluación sumativa.
      .tarjeta.color-primario.p-3(x="87%" y="35%" numero="+")
        .h4.mb-2 De comparación
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Evaluación normativa. 
          li 
            i.lista-ul__vineta
            | Evaluación de criterio.
      .tarjeta.color-primario.p-3(x="73.5%" y="75%" numero="+")
        .h4.mb-2 De momento
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Evaluación inicial.
          li 
            i.lista-ul__vineta
            | Evaluación de proceso o procesual.
          li 
            i.lista-ul__vineta
            | Evaluación final.
      .tarjeta.color-primario.p-3(x="26%" y="85%" numero="+")
        .h4.mb-2 De agente evaluador
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Interna
          li 
            i.lista-ul__vineta
            | Externa
          li 
            i.lista-ul__vineta
            | Coevaluación
          li 
            i.lista-ul__vineta
            | Autoevaluación
          li 
            i.lista-ul__vineta
            | Heteroevaluación
      .tarjeta.color-primario.p-3(x="11%" y="62%" numero="+")
        .h4.mb-2 De extensión
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Evaluación parcial. 
          li 
            i.lista-ul__vineta
            | Evaluación global.

    p.mt-5(data-aos="fade-up") Cada uno de estos tipos de evaluación contiene diferentes instrumentos para lograr sus objetivos particulares. Por ejemplo, rejillas, encuestas, entrevistas, KPSI, observación, contraste, entre muchos otros. Es necesario que luego de la evaluación se dé una retroalimentación (feedback) para reconocer las fortalezas y debilidades por mejorar, así se identifican las necesidades particulares, se aprende de los errores y se hacen mejoras en el servicio.  

    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Procesos de evaluación

    p(data-aos="fade-up") La evaluación debe ejecutarse de manera permanente, sistemática y planificada para que proporcione información útil, oportuna y confiable, es por esto que dentro de las misma deben existir tres procesos básicos, los cuales son: 

    SlyderF.slyderf1.mt-5(columnas="col-12")
      .tarjeta.color-acento-botones.p-5.cont_slyderf
        h4 Coevaluación
        p.mt-4 Se realiza entre compañeros para analizar el desempeño y los procesos en los servicios de interpretación. El aprendizaje mutuo se hace evidente en este tipo de evaluación donde se suelen aplicar criterios subjetivos y la retroalimentación o feedback, generalmente no es muy fluida, aunque en algunas ocasiones se hace uso de una rúbrica para delinear los criterios, además de la observación y el análisis mutuo.
        p.mt-4 Autores como Dochy, Segers y Sluijmans (1999) apoyan el término coevaluación o coassesment, y aclaran que la evaluación colaborativa (collaborative assessment) y la evaluación cooperativa (cooperative assessment) son sinónimos.  La coevaluación suele hacerse en grupos en donde se escuchan, formulan preguntas y se evita divagar en las respuestas; aunque pueden asignarse tareas individuales.
        .row.mt-4
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            p Para implementar la coevaluación, se recomienda:
            ul.lista-ul.mt-4
              li 
                i.lista-ul__vineta
                | Tener un objetivo común.
              li 
                i.lista-ul__vineta
                | Evaluar el desempeño y la calidad del trabajo.
              li 
                i.lista-ul__vineta
                | Tener criterios predefinidos.
              li 
                i.lista-ul__vineta
                | Respetar y atender la opinión de los pares. 
          .col-lg-6(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/4.png")
      .tarjeta.color-acento-botones.p-5.cont_slyderf
        h4 Autoevaluación
        p.mt-4 El proceso de autoevaluación busca la mejora desde una perspectiva interna, de la formación continua y de la eficacia del servicio de interpretación. Ayuda a la toma de conciencia del intérprete evaluando su propio trabajo, según sus propias características y habilidades; como las estrategias cognitivas, los conocimientos previos, el ajuste emocional y social, entre otros. 
        p.mt-4 El prestador del servicio aprende a ser una persona responsable y crítica de su labor; se vuelve más consciente de su trabajo, desarrollando cualidades como el autoanálisis, la autoestima y la participación. Así, un profesional tiene la capacidad de reflexionar y planificar sobre su propio desempeño. Pueden hacerse autoevaluaciones individuales o grupales, dependiendo del objetivo y el procedimiento.
        .row.mt-4
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            p Para implementar la autoevaluación, se pueden seguir las siguientes recomendaciones: 
            ul.lista-ul.mt-4
              li 
                i.lista-ul__vineta
                | Tener objetivos concretos.
              li 
                i.lista-ul__vineta
                | Mantener una mente abierta y flexible.
              li 
                i.lista-ul__vineta
                | Estimular un clima positivo de aprendizaje.
          .col-lg-6(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/5.png")
      .tarjeta.color-acento-botones.p-5.cont_slyderf
        h4 Heteroevaluación
        .row.mt-4
          .col-lg.mb-4.mb-lg-0(style="place-self:center;")
            p Analiza el desempeño, rendimiento y conocimientos en la labor ejercida por una persona que ocupa una función diferente a la propia, así, es posible reconocer muy claramente la posición entre el evaluador y el evaluado. La calificación que se da en este tipo de evaluación suele ser objetiva, aunque no siempre es el caso, como ocurre con un profesor que se deja llevar por sentimientos o arraigos hacia su estudiante.  
            p.mt-4 La heteroevaluación puede realizarse a un solo individuo o a un grupo de personas. Además, a diferencia de otras formas de evaluación, en la heteroevaluación no influyen los puntos de vista del evaluador, quien es un profesional en el área, y le explica al evaluado cómo mejorar en los puntos débiles. 
          .col-lg(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/6.png")
    
    p.mt-5(data-aos="fade-up") Toda evaluación requiere que los siguientes conceptos sean claros para llevarla a cabo: 

    .row.mt-5
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.cont_figura1(style="background-color:#DBEFFC;border-radius:15px;")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.text-center.mb-0(data-aos="fade-up") ¿Qué evaluar?
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.cont_figura1(style="background-color:#DBEFFC;border-radius:15px;")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.text-center.mb-0(data-aos="fade-up") ¿A quién se va a evaluar? 
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.cont_figura1(style="background-color:#DBEFFC;border-radius:15px;")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.text-center.mb-0(data-aos="fade-up") ¿Por qué hacer la evaluación? 
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.cont_figura1(style="background-color:#DBEFFC;border-radius:15px;")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/10.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.text-center.mb-0(data-aos="fade-up") ¿Qué tipo de evaluación hacer? 
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.cont_figura1(style="background-color:#DBEFFC;border-radius:15px;")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/11.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.text-center.mb-0(data-aos="fade-up") ¿Cómo llevar a cabo la evaluación? 
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-4.cont_figura1(style="background-color:#DBEFFC;border-radius:15px;")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/12.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.text-center.mb-0(data-aos="fade-up") ¿Cuándo realizarla?
    
    p.mt-5(data-aos="fade-up") En la medida en que estos conceptos se identifiquen antes, durante y después de evaluar, será mucho más fácil tener una retroalimentación que servirá de orientación para determinar los conocimientos, logros y dificultades a mejorar en el servicio que se preste.

    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Momentos de evaluación
    
    p(data-aos="fade-up") A continuación, se describen cada uno de los momentos que se deben tener en cuenta en el momento de realizar un proceso de evaluación.

    .row.mt-5
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta")
          .row(titulo="Evaluación inicial")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 También llamada diagnóstica, este tipo de evaluación busca conocer los conocimientos o contextos antes de comenzar cualquier ocupación, revela posibles necesidades o ideas previstas, su objetivo principal es la indagación y se realiza por medio de entrevistas, pruebas e historiales.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/14.png') 
          .row(titulo="Evaluación de proceso")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 También llamada formativa, este tipo de evaluación valida los progresos, conocimientos, métodos  y dificultades durante un proceso, detecta el desarrollo y lo reorienta, por ende, su objetivo principal es la orientación, se realiza por medio de autoevaluación, entrevistas, pruebas y observación. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/15.png') 
          .row(titulo="Evaluación final")
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 También llamada sumativa este tipo de evaluación mide los resultados alcanzados, los conocimientos y el progreso a nivel global, evidencia los avances y comprueba necesidades, su objetivo principal es la valoración, se realiza por medio de autoevaluación, entrevistas, pruebas y observación. 
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/16.png') 
      .col-lg-3
        .h-100.w-100(style="background-color:#DBEFFC;")
    
    br
    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Criterios de evaluación

    p(data-aos="fade-up") En el momento de realizar cualquier tipo de evaluación, es fundamental tener ciertos indicadores concretos que sirven como parámetros o referencias para emitir algún juicio; esto es lo que se conoce como criterios de evaluación.

    .col-lg-10.m-auto.mt-5
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/17.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p.mb-0 Los criterios definen lo que se espera del sujeto evaluado, analizándolo y comparándolo con un estándar de desempeño de la labor realizada, en otras palabras, los criterios son los que responden a la pregunta: ¿Qué es lo que se va a evaluar?, así, cuando se tienen claros estos parámetros, se puede empezar a componer la evaluación.
    
    p.mt-5(data-aos="fade-up") Estos criterios pueden ser, entre otros:

    SlyderF.mt-5.slyderf2(columnas="col-lg-6 col-xl-3")
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/18.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center Tipos de usuarios.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/19.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center Logísticos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/20.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center Según la capacidad laboral o la habilidad.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/21.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center Según los contenidos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/22.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center A nivel grupal.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/23.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center A nivel individual.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/24.png' style="max-width:120px;")
        .tarjeta.w-100(style="background-color:#FBE6E9;")
          .p-4
            h5.text-center Según los objetivos.
    
    br
    .p-3.mt-5.ps-4.pe-4.mb-5(style="background-color:#0079B9;width: fit-content;border-top-right-radius:30px;border-bottom-left-radius:30px;")
      h3.mb-0.text-white.text-center(data-aos="fade-up") Retroalimentación de los resultados

    .col-lg-10.mt-5.m-auto
      .cajon.color-secundario.p-4.row
        .col-auto
          img(src="@/assets/curso/tema2/25.png" data-aos="fade-right")
        .col
          p(data-aos="fade-up") La retroalimentación debe cumplir una función formativa orientada al aprendizaje, las necesidades, el desarrollo y los avances del servicio de interpretación prestado.  
          p.mt-4(data-aos="fade-up") El término retroalimentación hace referencia a: 
          a.boton.color-acento-botones.fw-bold.mt-3(@click="modal1 = true")
            span Retroalimentación
          ModalA(:abrir-modal.sync="modal1")
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/26.png' style="max-width:200px;")
              .col
                h4 Retroalimentación
                p Viene del anglicismo feedback, que hace referencia a una reacción, respuesta o retorno sobre un asunto determinado, en este caso, sobre el resultado de una evaluación.

    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") El feedback o retroalimentación de los resultados de una evaluación comparte información, observaciones, sugerencias y preocupaciones; con el fin de mejorar la calidad del servicio que se prestó. Por tal razón, es imprescindible que los resultados de la retroalimentación se comenten con el intérprete o grupo de trabajo. Esto para escuchar las opiniones del equipo, quizás en una coevaluación, y las sugerencias para mejorar. 
        p.mt-4(data-aos="fade-up") Este es, tal vez, uno de los pasos más importantes en una evaluación, porque al revisar el desempeño teniendo una comunicación fluida con el equipo de intérpretes, se cierra el ciclo de la evaluación y se establecen nuevas pautas de trabajo. La retroalimentación puede generar un impacto positivo o negativo en el evaluado, según la manera como se realice y puede contribuir o no al proceso de aprendizaje continuo del intérprete. Puede incidir la autoestima, la autoconcepción y la motivación del evaluado. 
      .col-lg-3(style="place-self:center;")
        figure
          img(src='@/assets/curso/tema2/27.png' data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") Para lograr que la retroalimentación de los resultados sea efectiva, se pueden seguir las siguientes recomendaciones:

    h4.mt-5.text-center(data-aos="fade-up" style="color:#0098E8;") Recomendaciones para una retroalimentación efectiva

    figure.mt-5
      img(src='@/assets/curso/tema2/28.svg' data-aos="zoom-in-up")
      


</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
.img-infografica__card .tarjeta.color-primario
  background-color: #FAE4E8 !important
.slyderf1 .cont_slyderf
  background: url(../assets/curso/tema2/3.png)
  background-repeat: no-repeat
  background-size: cover
.slyderf1 .slyder-f__btn i
  font-size: 1.5rem
  background-color: #FFA031
  padding: 0.8rem 1rem
  border-radius: 100%
.cont_figura1:hover
  background-color: #FAE4E8 !important
  cursor: pointer
.cont_figura1:hover p
  font-weight: bold
.acordion .tarjeta
  border-bottom: 1px #E8E8E8 solid
  border-radius: 0px
.tarjeta.acordion__activo
  background: url(../assets/curso/tema2/13.png)
  background-repeat: no-repeat
  background-size: cover
  border-bottom: 0px !important
  border-radius: 20px
.slyderf2 .slyder-f__btn i
  font-size: 3rem
  color: #707BA3
.modal-a__content
  background-color: #B8E0F9
</style>
