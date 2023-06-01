export default {
  global: {
    componenteFormativo: 'Proceso de verificación de la calidad del servicio',
    descripcionCurso:
      'Todo plan o proyecto debe pasar por una fase constante de verificación o evaluación, y el servicio de interpretación no es la excepción, porque permite validar el alcance y cumplimiento de las diferentes competencias –saber, hacer, ser y estar–, así como el desempeño de quienes prestan dicho servicio. A continuación, se reconocerán todos los elementos necesarios a tener en cuenta durante este proceso.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Verificar la calidad del servicio y resolución de situaciones adversas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Resolución de situaciones adversas ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Quejas y reclamos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de evaluación ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Procesos de evaluación ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Momentos de la evaluación ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Criterios de evaluación ',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Retroalimentación de los resultados ',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instrumentos de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de instrumentos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diseño de instrumentos',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF08_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alles, M. A. (2007). <em>Desempeño por competencias: evaluación de 360°</em>. Ediciones Granica. ',
      link:
        'https://books.google.com.co/books?id=HYGSeoWISbYC&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Domínguez, A., L. (2015). <em>La evaluación para el aprendizaje de la interpretación de conferencias, concepciones y prácticas de docentes y discentes en tres cursos de posgrado de Cataluña, Portugal y Canarias.</em> Universitat Autònoma de Barcelona. ',
      link: 'https://www.tdx.cat/handle/10803/317965',
    },
    {
      referencia:
        'Galán, Y., Ramírez, M., y Jaime, J. (2010). Modelo 360 para la evaluación por competencias (enseñanza-aprendizaje). <em>Innovación Educativa</em>, 10(53), 43-53. ',
      link: 'https://www.redalyc.org/pdf/1794/179420770003.pdf',
    },
    {
      referencia:
        'Gestión. (s. f.). <em>Comunicación interna en la empresa: cuando hablar y comunicarse hace ganar dinero.</em> ',
      link:
        'https://www.gestion.org/elementos-de-comunicacion-interna-en-la-empresa/',
    },
    {
      referencia:
        'Insor. (s. f.). <em>Política operacional del sistema integrado de gestión.</em> ',
      link:
        'https://www.insor.gov.co/home/entidad/sistema-integrado-de-gestion/',
    },
    {
      referencia:
        'Rosales, M. (2014). Proceso evaluativo: evaluación sumativa, evaluación formativa y Assesment su impacto en la educación actual. <em>Congreso Iberoamericano de Ciencia, Tecnología, Innovación y Educación</em>, 4, 662. ',
      link:
        'https://eduvirtual.cuc.edu.co/moodle/pluginfile.php/616134/mod_resource/content/2/OEI%20TIPOS%20DE%20EVALUACION.pdf',
    },
    {
      referencia:
        'Universidad de Antioquia. (s. f.). <em>Sistema de gestión de la calidad.</em> ',
      link:
        'http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/informacion-organizacional',
    },
    {
      referencia:
        'Van Dijk, T. A. (2005). <em>Estructuras y funciones del discurso: una introducción interdisciplinaria a la lingüística del texto y a los estudios del discurso.</em> Siglo XXI. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6401753',
    },
  ],
  glosario: [
    {
      termino: '<em>Back interpretation</em>',
      significado:
        'pedir al usuario que repita la información recibida para comprobar si ha entendido su contenido.',
    },
    {
      termino: 'Deontología',
      significado:
        'rama de la ética que trata de los deberes, especialmente de los que rigen actividades profesionales y el conjunto de deberes relacionados con el ejercicio de una profesión.',
    },
    {
      termino: 'Evaluación',
      significado:
        'proceso que se usa para determinar de manera sistemática, el mérito, el valor y el significado de un trabajo, alguna capacidad intelectual, física o de alguien en función de ciertos criterios respecto a un conjunto de normas.',
    },
    {
      termino: 'Instrumentos de evaluación',
      significado:
        'constituyen una ayuda para obtener datos e informaciones respecto del aprendiz, por ello el instructor debe poner mucha atención en la calidad de estos, ya que un instrumento inadecuado provoca una distorsión de la realidad.',
    },
    {
      termino: 'Petición',
      significado:
        'derecho fundamental que tiene toda persona a presentar solicitudes respetuosas a las autoridades por motivos de interés general o particular y a obtener su pronta resolución.',
    },
    {
      termino: 'Queja',
      significado:
        'malestar o descontento por algo que está relacionado directamente al producto o servicio comprado o la mala atención al público.',
    },
    {
      termino: 'Reclamos',
      significado:
        'disconformidad relacionada directamente con los bienes o servicios adquiridos. Derecho de una persona a encontrar una solución rápida.',
    },
    {
      termino: 'Sordos poslingüísticos o poslocutivos',
      significado:
        'personas que perdieron la audición habiendo tenido ya conocimiento de la lengua oral.',
    },
    {
      termino: 'Sugerencia',
      significado:
        'manifestación de una idea o propuesta para mejorar el servicio o la gestión de una entidad.',
    },
  ],
  complementario: [
    {
      tema:
        'Verificar la calidad del servicio y resolución de situaciones adversas.',
      referencia:
        'Bao, M., y González, R. (2011). Aproximación a los parámetros de calidad en la interpretación de la lengua de signos española. <em>Quality in interpreting; widening the Scope</em>, 293. ',
      tipo: 'PDF',
      link:
        'https://cnlse.es/antiguos/Aproximaci%C3%B3n%20a%20los%20par%C3%A1metros%20de%20calidad%20en%20la%20interpretaci%C3%B3n%20de%20la%20lengua%20de%20signos%20espa%C3%B1ola.pdf',
    },
    {
      tema:
        'Verificar la calidad del servicio y resolución de situaciones adversas.',
      referencia:
        'Maio, V. (2011). <em>La interpretación en lengua de signos española en los servicios públicos.</em> Centro de Normalización Lingüística de la Lengua de Signos Española. ',
      tipo: 'Artículo',
      link:
        'https://cnlse.es/es/recursos/biblioteca/la-interpretaci%25C3%25B3n-en-lengua-de-signos-espa%25C3%25B1ola-en-los-servicios-p%25C3%25BAblicos',
    },
    {
      tema:
        'Verificar la calidad del servicio y resolución de situaciones adversas.',
      referencia:
        'Alles, M. (2007). <em>Desempeño por competencias: evaluación de 360°</em>. Ediciones Granica. ',
      tipo: 'PDF',
      link:
        'https://books.google.com.co/books?id=HYGSeoWISbYC&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      tema: 'Evaluación',
      referencia:
        'Gómez, G., Sáiz, M., y Jiménez, E. (2013). Autoevaluación, evaluación entre iguales y coevaluación: conceptualización y práctica en las universidades españolas. <em>Revista de Investigación en Educación</em>, 11(2), 198-210. ',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4734976 ',
    },
    {
      tema: 'Evaluación',
      referencia:
        'Salom, M. (2018). La autoevaluación. Una propuesta formativa e innovadora. <em>Revista Iberoamericana de Educación</em>, 76(2), 135-152. ',
      tipo: 'Artículo',
      link: 'https://rieoei.org/RIE/article/view/3081/3964',
    },
    {
      tema: 'Evaluación',
      referencia:
        'Rosales, M. (2014). <em>Proceso evaluativo: evaluación sumativa, evaluación formativa y assesment su impacto en la educación actual</em>. Congreso Iberoamericano de Ciencia, Tecnología, Innovación y Educación, 4, 662.',
      tipo: 'PDF',
      link:
        'https://eduvirtual.cuc.edu.co/moodle/pluginfile.php/616134/mod_resource/content/2/OEI%20TIPOS%20DE%20EVALUACION.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta Temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
