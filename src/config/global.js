export default {
  global: {
    Name: 'Creando experiencias desde la reserva',
    Description:
      'Para incursionar en el aprendizaje sobre el proceso de reservas, es fundamental comprender los conceptos básicos que hacen posible la magia de la hospitalidad. Aprende sobre los tipos de alojamiento, los servicios que se prestan dentro del mismo, las funciones que desempeña el área de reservas para que cada tipo de clientes que requieren del servicio se sientan como en su hogar lejos de su casa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Normativa de formalización',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Apropiación de conocimientos básicos dentro de un establecimiento de alojamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de alojamiento y hospedajes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Categorización de los hoteles',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de habitaciones y acomodación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Portafolio de servicios ',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Clientes – tipos de clientes – características',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Área de reservas ',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de comunicación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Canales de comunicación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de comunicación  ',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Clasificación según la trasmisión',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Habilidades comunicativas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de servicio al cliente',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Protocolos en el servicio al cliente',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '4.3	Ética del servicio',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistema de información de alojamiento turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas de recolección de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de registro de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ley 1581 de 2012 – Ley de protección de datos personales',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Documentos de identidad legales',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Técnicas de validación de datos',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estrategias de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Técnicas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Políticas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Manejo de objeciones',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        download: 'downloads/ejemplo.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Apropiación de conocimientos básicos dentro de un establecimiento de alojamiento.',
      referencia:
        'Grupo técnico de turismo de la Alianza del Pacifico. (2017). Terminología y vocabulario del sector hotelero en los países de la alianza del pacífico.',
      tipo: 'PDF',
      link:
        'https://alianzapacifico.net/assets/gallery/Terminologia-y-Metodologia-para-la-Homologacion-Version-Final.pdf',
    },
    {
      tema: 'Servicio al cliente.',
      referencia:
        'Cordón, S. R. (2009). Manual de etiqueta para uso en instituciones hoteleras. ',
      tipo: 'PDF',
      link: 'https://glifos.unis.edu.gt/digital/tesis/2009/24157.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acomodación',
      significado:
        'Es la organización interna de la habitación en cuanto al tipo de camas de acuerdo a la capacidad de la habitación. ',
    },
    {
      termino: '<i>Brochure</i>',
      significado:
        'Es un folleto impreso o un documento que presenta información sobre una empresa, producto o servicio. ',
    },
    {
      termino: 'Categorías',
      significado:
        'En un establecimiento de alojamiento la categoría se mide por estrellas de acuerdo a los servicios que ofrece y el tamaño de la instalación. ',
    },
    {
      termino: 'Conserjería',
      significado:
        'Área del hotel cuyas funciones son atender o coordinar, o ambos, apropiadamente los requerimientos de los huéspedes y visitantes, los cuales incluyen mensajes, equipajes, información turística o general, entre otras definidas por el establecimiento.  ',
    },
    {
      termino: '<i>Coworking</i>',
      significado: 'Es un espacio de trabajo compartido.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso que elimina o reduce la concentración de microorganismos patógenos como virus y bacterias en superficies o en el agua.',
    },
    {
      termino: 'Huésped',
      significado:
        'Persona que se aloja en un establecimiento de alojamiento y hospedaje, mediante contrato de hospedaje. ',
    },
    {
      termino: 'Jacuzzi',
      significado:
        'Bañera para hidromasaje compuesta por un sistema de chorros de agua que produce remolinos y burbujeo. ',
    },
    {
      termino: 'Percepción',
      significado:
        'Proceso psicológico que consiste en recibir, interpretar y comprender las señales que provienen del exterior. ',
    },
    {
      termino: 'Pernoctar',
      significado:
        'Quedarse a dormir en otro lugar fuera de su propio domicilio. ',
    },
    {
      termino: '<i>Pet friendly</i>',
      significado: 'Se permite la entrada de mascotas. ',
    },
    {
      termino: 'Proxémica',
      significado:
        'Parte de la semiótica. Ciencia que estudia el sistema de signos empleado en la comunicación. Dedicada al estudio de la organización del espacio en la comunicación. ',
    },
    {
      termino: '<i>Room service</i>',
      significado: 'Servicio de alimentación a la habitación. ',
    },
    {
      termino: 'Sarcasmo',
      significado:
        'Ironía mordaz y cruel con que se ofende o maltrata a alguien o algo. ',
    },
    {
      termino: 'Sauna',
      significado:
        'Baño de vapor en recinto de madera a muy alta temperatura, que produce una rápida y abundante sudoración y que se toma con fines higiénicos y terapéuticos. ',
    },
    {
      termino: 'Senderismo',
      significado:
        'Es una caminata que se realiza es espacios naturales y en terrenos irregulares. ',
    },
    {
      termino: 'Servicio de botones',
      significado:
        'Es un servicio al cliente que se ofrece en un establecimiento de alojamiento, donde se le ayuda al huésped con el traslado de las maletas desde la recepción hasta la habitación o viceversa. ',
    },
    {
      termino: '<i>Spa</i>',
      significado:
        'Infraestructura habilitada para aprovechar las propiedades de elementos naturales reconocidos como beneficiosas para la salud tales como emanaciones de agua mineral o volcánica, las características del mar, las condiciones climáticas. En ocasiones es utilizado complementariamente en tratamientos de salud. ',
    },
    {
      termino: 'Turco',
      significado:
        'Es un baño a vapor en ambiente húmedo con temperaturas bajas. ',
    },
    {
      termino: 'Utilería',
      significado: 'Utensilios destinados a un uso manual. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayala, A., Cortés, A., Cruz, A., Ramírez, D., Rodríguez, A., Rodríguez, C., & Soler, C. (2011). Código ético de los prestadores de servicios de alojamiento inscritos en el registro nacional de turismo, su texto y el proceso de construcción a través de actos de habla. Anuario Turismo y Sociedad, (12), 275-283. ',
      link: '',
    },
    {
      referencia:
        'Barajas, A. (2023). Hospedar o contratar extranjeros tiene sus normas. Vivir En el Poblado. ',
      link:
        'https://vivirenelpoblado.com/hospedar-o-contratar-extranjeros-tiene-sus-normas/   ',
    },
    {
      referencia: 'Ceupe. (2024). Atención al cliente en la empresa hotelera. ',
      link:
        'https://www.ceupe.com/blog/atencion-al-cliente-en-la-empresa-hotelera.html',
    },
    {
      referencia:
        'Cloudbeds. (2024). Cómo la analítica de datos optimiza las operaciones hoteleras. Cloudbeds. ',
      link:
        'https://www.cloudbeds.com/es/articulos/analisis-datos-hotel/#:~:text=Sistema%20de%20punto%20de%20venta,y%20los%20m%C3%A9todos%20de%20pago.  ',
    },
    {
      referencia:
        'Cordón, S. R. (2009). Manual de etiqueta para uso en instituciones hoteleras. ',
      link: '',
    },
    {
      referencia:
        'Elphick, D. (2024). Canales de Distribución Para Hoteles: Dominar los Conceptos y Llevar a Cabo las Mejores Prácticas. SiteMinder',
      link:
        'https://www.siteminder.com/es/r/canales-distribucion-hoteles/#ejemplos-de-canales-de-distribuci-n-para-hoteles  ',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2009). Clasificación de establecimientos de alojamiento y hospedaje. Categorización por estrellas de hoteles, requisitos normativos (NTSH 006). ',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx',
    },
    {
      referencia:
        'Jacidi. (2024). Conociendo los Tipos de Clientes en un Hotel. eRoom Suite: Sistema Omnicanal de Comunicación Hotelera. ',
      link: 'https://www.eroomsuite.com/tipos-clientes-hotel/  ',
    },
    {
      referencia:
        'Ley 1558 del 2012. Por la cual se modifica la Ley 300 de 1996. Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. Julio 10 de 2012.',
      link: '',
    },
    {
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan las disposiciones generales para protección de datos personales.  Octubre 17 de 2012.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (1999). Código Ético Mundial para el Turismo. ',
      link: 'https://www.unwto.org/es/codigo-etico-mundial-para-el-turismo ',
    },
    {
      referencia: 'Porto, J. P., & Merino, M. (2022). Definición de hotel. ',
      link: 'https://definicion.de/hotel/#google_vignette ',
    },
    {
      referencia: 'Soho Apps. (2024). Clasificación de un hotel. Soho Apps. ',
      link: 'https://sohoapps.co/clasificacion-de-un-hotel/ ',
    },
    {
      referencia:
        'Zendesk. (13 marzo de 2023). 12 tipos de clientes en hotelería y cómo ofrecerles el mejor servicio. Blog de Zendesk',
      link: 'https://www.zendesk.com.mx/blog/tipos-de-clientes-en-hoteleria/ ',
    },
    {
      referencia:
        'Zendesk. (s.f.) Tipos de servicio al cliente: ¿cómo brindar a mejor atención?. Blog de Zendesk',
      link:
        'https://www.zendesk.com.mx/blog/cuales-son-tipos-de-servicio-al-cliente/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega ',
          cargo: 'Experta temática.',
          centro: 'Centro Agroturístico - Regional Santander.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
