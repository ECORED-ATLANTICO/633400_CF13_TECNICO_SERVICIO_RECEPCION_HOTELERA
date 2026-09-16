<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluando procesos de <em>check-out</em> y atención de PQRS en hotelería',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> reconocer los procedimientos operativos, tecnológicos y de atención relacionados con el proceso de salida del huésped, la gestión de PQRS y la calidad del servicio en establecimientos de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del proceso de <em>check-out</em> en hotelería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar habitaciones disponibles',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Registrar reservas futuras', esCorrecta: false },
            {
              id: 'c',
              texto: 'Formalizar la salida del huésped y cerrar la cuenta',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Programar actividades turísticas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué área suele verificar el estado de la habitación antes de autorizar la salida del huésped?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ama de llaves', esCorrecta: true },
            { id: 'b', texto: 'Cocina', esCorrecta: false },
            { id: 'c', texto: 'Seguridad privada', esCorrecta: false },
            { id: 'd', texto: 'Mercadeo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una de las funciones principales de la facturación hotelera?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar eventos sociales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consolidar los consumos del huésped',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar campañas publicitarias',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar inventarios de cocina',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué habilidad resulta fundamental durante la atención de PQRS?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseño gráfico', esCorrecta: false },
            { id: 'b', texto: 'Elaboración de menús', esCorrecta: false },
            { id: 'c', texto: 'Mantenimiento locativo', esCorrecta: false },
            { id: 'd', texto: 'Escucha activa', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué significa la sigla PQRS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesos, calidad, reservas y servicios',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Peticiones, quejas, reclamos y sugerencias',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Pagos, calidad, registros y salidas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos, quejas, reportes y seguridad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un beneficio de la facturación electrónica en hotelería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar tiempos de espera',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la comunicación entre áreas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Agilizar procesos administrativos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminuir reservas digitales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué situación puede generar inconformidad durante el <em>check-out</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Validación correcta de pagos',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Diferencias en facturación', esCorrecta: true },
            { id: 'c', texto: 'Atención cordial', esCorrecta: false },
            { id: 'd', texto: 'Confirmación de reservas', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta tecnológica centraliza información de reservas, consumos y pagos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'VPN', esCorrecta: false },
            {
              id: 'b',
              texto: 'PMS (<em>Property Management System</em>)',
              esCorrecta: true,
            },
            { id: 'c', texto: 'GPS', esCorrecta: false },
            { id: 'd', texto: 'CRM gastronómico', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es una ventaja del <em>self-check-out</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina completamente la atención al huésped',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Aumenta procesos manuales', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reduce la autonomía del cliente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agiliza la salida del huésped',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aspecto fortalece la reputación digital de un establecimiento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar comentarios de huéspedes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Responder oportunamente las PQRS',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar procesos tecnológicos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar canales de atención',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es una buena práctica durante el proceso de salida?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar explicar los cobros', esCorrecta: false },
            {
              id: 'b',
              texto: 'Mantener actitud cordial y profesional',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Omitir soportes de pago', esCorrecta: false },
            {
              id: 'd',
              texto: 'Retrasar la entrega de facturas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué canal digital permite enviar comprobantes y facturas electrónicas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Redes eléctricas', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ascensores inteligentes',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Correo electrónico', esCorrecta: true },
            {
              id: 'd',
              texto: 'Circuitos cerrados de televisión',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el objetivo principal de las encuestas de satisfacción?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar impuestos hoteleros',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir la percepción del huésped sobre el servicio',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar inventarios de habitaciones',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gestionar mantenimiento preventivo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué puede ocasionar una falla de comunicación entre áreas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor trazabilidad', esCorrecta: false },
            {
              id: 'b',
              texto: 'Mejor experiencia del huésped',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Optimización automática del servicio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Errores operativos y retrasos',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es una característica de la atención humanizada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comunicación irrespetuosa', esCorrecta: false },
            { id: 'b', texto: 'Falta de empatía', esCorrecta: false },
            {
              id: 'c',
              texto: 'Disposición de servicio y cordialidad',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Ausencia de acompañamiento', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué herramienta permite realizar pagos desde dispositivos móviles?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pago electrónico', esCorrecta: true },
            { id: 'b', texto: 'Tarjeta de registro', esCorrecta: false },
            { id: 'c', texto: 'Llave física', esCorrecta: false },
            { id: 'd', texto: 'Minibar digital', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué proceso permite registrar y monitorear solicitudes de huéspedes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Auditoría contable', esCorrecta: false },
            { id: 'b', texto: 'Gestión de PQRS', esCorrecta: true },
            { id: 'c', texto: 'Control de inventarios', esCorrecta: false },
            { id: 'd', texto: 'Supervisión de lavandería', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué acción ayuda a disminuir errores durante el <em>check-out</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Omitir validación de consumos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar coordinación entre áreas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificar previamente la información del huésped',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Retrasar los procesos de salida',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es uno de los beneficios de la automatización en hotelería?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir comunicación digital',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar procesos manuales',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Eliminar reservas en línea', esCorrecta: false },
            {
              id: 'd',
              texto: 'Optimizar tiempos de atención',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué elemento sigue siendo fundamental aunque existan procesos digitales automatizados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atención humanizada y calidad del servicio',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación de la recepción',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspensión de canales de comunicación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción total del personal hotelero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
