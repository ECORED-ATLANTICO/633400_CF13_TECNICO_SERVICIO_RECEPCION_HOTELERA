export default {
  global: {
    Name: '<em>Check-out</em> y atención de PQRS',
    Description:
      'El componente formativo <em>Check-out</em> y atención de PQRS aborda los procedimientos técnicos y operativos relacionados con la salida del huésped, la gestión de pagos, la atención de inconformidades y la calidad del servicio en establecimientos de alojamiento. Asimismo, incorpora contenidos relacionados con la transformación digital de los servicios de alojamiento, incluyendo la digitalización y automatización de procesos operativos, el uso de herramientas tecnológicas para la gestión del servicio y la atención al cliente mediante canales virtuales, de acuerdo con las necesidades y tendencias del sector hotelero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Proceso de <em>check-out</em> hotelero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Finalización de la estadía y cierre de cuenta',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Facturación y verificación operativa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Atención al huésped durante el <em>check-out</em>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tecnología aplicada al proceso de salida',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'PQRS en establecimientos hoteleros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Gestión de peticiones, quejas, reclamos y sugerencias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Atención y comunicación en situaciones de inconformidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedimientos y trazabilidad de PQRS',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'PQRS y reputación digital',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Calidad del servicio y solución de novedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Servicio al cliente en procesos de salida',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Manejo de situaciones operativas frecuentes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Buenas prácticas en atención y solución de novedades',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Transformación digital aplicada al <em>check-out</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Herramientas digitales utilizadas en el proceso de salida',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procesos automatizados en el <em>check-out</em>',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Comunicación digital durante la salida del huésped',
            hash: 't_4_3',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF13_DU.pdf',
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
  glosario: [
    {
      termino: 'Atención al huésped',
      significado:
        'Conjunto de acciones orientadas a brindar acompañamiento, orientación y servicio al cliente durante su estadía.',
    },
    {
      termino: 'Canales digitales',
      significado:
        'Medios tecnológicos utilizados para la comunicación y atención de huéspedes, como aplicaciones, correos electrónicos o plataformas web.',
    },
    {
      termino: '<em>Check-in</em>',
      significado:
        'Proceso de ingreso y registro del huésped al establecimiento de alojamiento.',
    },
    {
      termino: '<em>Check-out</em>',
      significado:
        'Procedimiento de salida del huésped que incluye cierre de cuenta, verificación y facturación.',
    },
    {
      termino: 'Cierre de cuenta',
      significado:
        'Validación final de consumos, pagos y servicios utilizados por el huésped durante la estadía.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Forma de comunicación clara, respetuosa y orientada a la solución de situaciones.',
    },
    {
      termino: 'Comprobante digital',
      significado:
        'Documento electrónico que confirma pagos, reservas o transacciones realizadas por el huésped.',
    },
    {
      termino: 'Consumo huésped',
      significado:
        'Registro de servicios o productos utilizados por el cliente durante la estadía.',
    },
    {
      termino: 'Encuesta de satisfacción',
      significado:
        'Herramienta utilizada para conocer la percepción del huésped sobre la calidad del servicio recibido.',
    },
    {
      termino: 'Facturación electrónica',
      significado:
        'Generación digital de facturas mediante sistemas tecnológicos autorizados.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategias orientadas a fortalecer la permanencia y preferencia del huésped hacia el establecimiento.',
    },
    {
      termino: 'Gestión de PQRS',
      significado:
        'Procedimientos utilizados para atender peticiones, quejas, reclamos y sugerencias.',
    },
    {
      termino: 'Habitación pendiente',
      significado:
        'Estado operativo que indica que una habitación requiere revisión antes de autorizar la salida del huésped.',
    },
    {
      termino: 'Huésped',
      significado:
        'Persona que utiliza temporalmente los servicios de alojamiento de un establecimiento hotelero.',
    },
    {
      termino: 'Inconformidad',
      significado:
        'Situación de insatisfacción manifestada por el huésped frente al servicio recibido.',
    },
    {
      termino: 'Llave digital',
      significado:
        'Herramienta tecnológica que permite acceso electrónico a habitaciones o servicios del hotel.',
    },
    {
      termino: 'Novedad operativa',
      significado:
        'Situación imprevista que afecta el desarrollo normal de los procesos hoteleros.',
    },
    {
      termino: 'Pago electrónico',
      significado:
        'Transacción financiera realizada mediante medios digitales o plataformas tecnológicas.',
    },
    {
      termino: 'Personalización del servicio',
      significado:
        'Adaptación de la atención de acuerdo con las necesidades o preferencias del huésped.',
    },
    {
      termino: 'PMS (<em>Property Management System</em>)',
      significado:
        'Sistema utilizado para administrar reservas, habitaciones, consumos y procesos operativos del hotel.',
    },
    {
      termino: 'PQRS',
      significado:
        'Sigla utilizada para peticiones, quejas, reclamos y sugerencias presentadas por los huéspedes.',
    },
    {
      termino: 'Reputación digital',
      significado:
        'Percepción que los usuarios construyen sobre un establecimiento a partir de opiniones y comentarios en medios digitales.',
    },
    {
      termino: 'Seguimiento de solicitudes',
      significado:
        'Proceso de monitoreo y control de requerimientos presentados por los huéspedes.',
    },
    {
      termino: '<em>Self-check-out</em>',
      significado:
        'Modalidad de salida automatizada que permite al huésped finalizar su estadía mediante herramientas digitales.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Incorporación de tecnologías orientadas a optimizar procesos y mejorar la experiencia del huésped en hotelería.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Hotel & Lodging Educational Institute (AHLEI). (2020). <em>Front office operations and management</em> (9.ª ed.). AHLEI.',
    },
    {
      referencia:
        'Bardi, J. (2011). <em>Hotel Front Office Management</em> (5a ed.). John Wiley & Sons.',
    },
    {
      referencia:
        'Corral, F. (2012). Manual de recepción hotelera: principios y técnicas (7ª ed.). Septem Ediciones.',
    },
    {
      referencia: 'CredibanCo. (2021). Guía rápida de uso del datáfono.',
      link:
        'https://www.credibanco.com/wp-content/uploads/2021/01/guia-rapida-del-datafono.pdf',
    },
    {
      referencia:
        'DIAN. (2020). Factura electrónica en Colombia. Dirección de Impuestos y Aduanas Nacionales.',
    },
    {
      referencia:
        'Hosteltur. (2021). Tecnología y transformación digital en hotelería.',
    },
    {
      referencia:
        'ICONTEC. (2021). Norma Técnica Sectorial Colombiana NTSH 006: Clasificación de establecimientos de alojamiento y hospedaje. Instituto Colombiano de Normas Técnicas y Certificación.',
    },
    {
      referencia:
        'Kasavana, M. L., & Cahill, J. J. (2017). Managing computers in the hospitality industry. AHLEI.',
    },
    {
      referencia:
        'Marrero, F. (2016). Glosario de términos hoteleros, turísticos y relacionados.',
      link: 'https://www.hosteltur.com/files/web/templates/term/wikitur.pdf',
    },
    {
      referencia:
        'Migración Colombia. (2013). Cartilla de Usuario Externo SIRE. Ministerio de Relaciones Exteriores.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Guía legal de los prestadores de servicios turísticos: alojamiento y hospedaje.',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2020). Recomendaciones sobre turismo y transformación digital. OMT.',
      link: 'https://www.unwto.org/es',
    },
    {
      referencia:
        'Oracle Hospitality. (2023). <em>Property Management Systems (PMS)</em>.',
      link: '',
    },
    {
      referencia:
        'Parasuraman, A., Zeithaml, V. A., & Berry, L. L. (1991). Servicio de calidad: cómo comprenderlo y mejorarlo. Díaz de Santos.',
    },
    {
      referencia: 'Revfine. (2023). <em>Hotel technology trends</em>.',
    },
    {
      referencia:
        'Scheel, A. (1992). Control de alojamiento. Contabilidad de huéspedes. Universidad Externado de Colombia.',
    },
    {
      referencia:
        'Simón, M. (2006). <em>Recepción Front Office</em>. Ediciones Turísticas.',
    },
    {
      referencia: 'SiteMinder. (2023). Tendencias tecnológicas en hotelería.',
    },
    {
      referencia:
        'Turpo-Gebera, O., & Hurtado-Mazeyra, A. (2021). Transformación digital y experiencia del cliente en servicios turísticos. Revista de Investigación en Turismo y Desarrollo Local, 14(31), 1-15.',
    },
    {
      referencia:
        'Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2018). <em>Marketing</em> de servicios (7.ª ed.). McGraw-Hill.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
