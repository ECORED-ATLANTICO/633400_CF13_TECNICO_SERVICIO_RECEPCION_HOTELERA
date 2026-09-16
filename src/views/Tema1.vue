<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proceso de <em>check-out</em> hotelero
  
    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1(data-aos="fade-right")
        .col-lg-7.p-4.order-1.order-lg-2
          p.mb-0 La salida del huésped constituye una de las etapas más importantes dentro de la operación hotelera, debido a que integra procedimientos administrativos, financieros y de servicio orientados a finalizar formalmente la estadía. Durante este proceso se verifican consumos, se gestionan pagos, se realiza el cierre de cuenta y se atienden inquietudes o novedades relacionadas con la experiencia del huésped. Por esta razón, el personal encargado debe actuar con organización, precisión y habilidades comunicativas que permitan garantizar una atención ágil y cordial.
        .col-lg-5.p-0.order-2.order-lg-1
          img(src="@/assets/curso/tema1/img01.png", alt="")

    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img02.svg").mx-auto
      .col-lg
        p.mb-0 En la hotelería contemporánea, el proceso de <em>check-out</em> trasciende el simple cobro de una cuenta. Actualmente, representa una oportunidad para fortalecer la percepción de calidad del servicio, consolidar la satisfacción del huésped y proyectar una imagen profesional del establecimiento. Asimismo, la incorporación de herramientas tecnológicas y procesos digitales ha permitido optimizar las operaciones de salida mediante facturación electrónica, actualización automática de consumos y plataformas de autoservicio orientadas a mejorar la experiencia del huésped.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Finalización de la estadía y cierre de cuenta

    p.mb-4 La finalización de la estadía corresponde al procedimiento mediante el cual el establecimiento formaliza la salida del huésped y consolida la información relacionada con los servicios utilizados durante su permanencia. Aunque este proceso suele desarrollarse en pocos minutos, involucra una serie de actividades operativas que requieren precisión, coordinación y capacidad de respuesta por parte del personal de recepción.
    

    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 Verificación de la habitación
              p.mb-0 Antes de efectuar el cierre de cuenta, es necesario verificar que todos los consumos realizados por el huésped hayan sido registrados correctamente en el sistema. Esto incluye alojamiento, alimentación, lavandería, minibar, transporte, llamadas telefónicas y demás servicios complementarios ofrecidos por el hotel. La correcta actualización de esta información permite evitar diferencias en la facturación y disminuye la posibilidad de reclamaciones posteriores.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img04.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 Revisión de consumos
              p.mb-0 En muchos establecimientos de alojamiento, el área de recepción mantiene comunicación permanente con departamentos como ama de llaves, restaurante o auditoría para confirmar el estado de la habitación y validar consumos pendientes antes de autorizar la salida definitiva. Esta articulación entre áreas resulta fundamental para garantizar el control operativo y mantener la trazabilidad sobre la operación hotelera.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img05.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 Validación de pagos y generación de factura
              p.mb-0 Asimismo, durante el cierre de cuenta se revisan anticipos, depósitos o garantías de pago registrados previamente en la reserva del huésped. Esta validación permite confirmar saldos pendientes y asegurar que la cuenta final refleje correctamente los valores asociados a la estadía. Cuando existen inconsistencias, el personal encargado debe atender la situación con claridad y actitud de servicio, evitando afectar negativamente la experiencia del cliente.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img06.png", alt="").img-fluid.mx-auto

          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 Entrega de soportes y confirmación de la salida
              p.mb-0 El proceso de salida también representa un momento importante de interacción con el huésped. Una atención organizada, amable y eficiente contribuye a generar una percepción positiva del servicio recibido y fortalece la imagen profesional del establecimiento. Por esta razón, el <em>check-out</em> no debe entenderse únicamente como un procedimiento administrativo, sino como parte integral de la experiencia hotelera.
            .col-lg-5.col-md-8.order-2.order-lg-2
              img(src="@/assets/curso/tema1/img07.png", alt="").img-fluid.mx-auto
          
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Facturación y verificación operativa

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img08.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-3(data-aos="fade-right") La facturación constituye uno de los procedimientos más sensibles dentro del proceso de salida del huésped, debido a que involucra la consolidación de todos los cargos asociados a la estadía y representa el soporte formal de la transacción realizada entre el huésped y el establecimiento. Una cuenta clara, organizada y correctamente emitida transmite confianza y profesionalismo, mientras que errores en este procedimiento pueden generar inconformidades y afectar la percepción final del servicio.
        .cajon.bg-color-23.p-4.mb-0
          p.mb-0 Durante esta etapa, el personal encargado debe revisar cuidadosamente la información registrada en el sistema para verificar que los valores correspondan realmente a los servicios consumidos. La validación incluye tarifas de alojamiento, impuestos, descuentos, consumos adicionales y pagos realizados previamente. Esta revisión requiere atención al detalle y un manejo adecuado de los procedimientos operativos del establecimiento.

    p.mb-4 Las inconsistencias más frecuentes durante el proceso de facturación suelen relacionarse con:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img10.svg' alt="", style="width: 100px;").mx-auto
            h5.mb-2.text-center Cobros duplicados
            p.mb-1.text-center Situación: se registra más de una vez el mismo servicio o consumo.
            p.mb-1.text-center Consecuencia: reclamos del cliente y reprocesos administrativos. 
            p.mb-0.text-center Recomendación: validar consumos antes del cierre y usar controles automáticos.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img11.svg' alt="", style="width: 100px;").mx-auto
            h5.mb-2.text-center Errores de digitación
            p.mb-1.text-center Situación: se ingresan valores, fechas o datos incorrectos.
            p.mb-1.text-center Consecuencia: diferencias en el total y ajustes posteriores.
            p.mb-0.text-center Recomendación: aplicar revisión cruzada y validaciones en el sistema.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img12.svg' alt="", style="width: 100px;").mx-auto
            h5.mb-2.text-center Servicios no actualizados
            p.mb-1.text-center Situación: tarifas o servicios no coinciden con la información vigente.
            p.mb-1.text-center Consecuencia: facturación incorrecta o pérdidas económicas.
            p.mb-0.text-center Recomendación: mantener la sincronización y la actualización constante de tarifas.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img13.svg' alt="", style="width: 100px;").mx-auto
            h5.mb-2.text-center Facturas incompletas
            p.mb-1.text-center Situación: falta información obligatoria en la factura.
            p.mb-1.text-center Consecuencia: rechazo del documento o incumplimiento normativo.
            p.mb-0.text-center Recomendación: verificar requisitos legales antes de emitir.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img14.svg' alt="", style="width: 100px;").mx-auto
            h5.mb-2.text-center Diferencias de consumo
            p.mb-1.text-center Situación: el consumo registrado no coincide con el real.
            p.mb-1.text-center Consecuencia: reclamos y pérdida de credibilidad.
            p.mb-0.text-center Recomendación: confirmar consumos con las áreas operativas.

          .tarjeta.bg-fondo-3.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8  
                img(src='@/assets/curso/tema1/img15.svg' alt="", style="width: 100px;").mx-auto
            h5.mb-2.text-center Cargos pendientes
            p.mb-1.text-center Situación: servicios consumidos no se incluyen en la factura final.
            p.mb-1.text-center Consecuencia: pérdidas económicas y reprocesos.
            p.mb-0.text-center Recomendación: establecer cortes operativos antes del <em>check-out</em>.


    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-2.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img16.png").mx-auto
      .col-lg-10
        p.mb-3 Cuando estas situaciones no son detectadas oportunamente, pueden generar retrasos en el <em>check-out</em>, reclamaciones o ajustes posteriores que afectan la operación hotelera.
        p.mb-3 Actualmente, muchos establecimientos utilizan sistemas de facturación electrónica integrados al PMS, lo que permite automatizar procesos y mantener la trazabilidad sobre las transacciones realizadas. Estas herramientas facilitan la generación de comprobantes, agilizan el cierre de cuenta y fortalecen el control financiero de la operación hotelera.
        p.mb-0 Sin embargo, aunque la tecnología optimiza los procedimientos, la verificación humana continúa siendo fundamental. El personal encargado debe revisar la información antes de emitir la factura definitiva y confirmar con el huésped cualquier duda relacionada con consumos o cargos registrados.


    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Atención al huésped durante el <em>check-out</em>

   
    .bg-full-width.bg-fondo-4.px-5.py-4
      img(src="@/assets/curso/tema1/img18.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La atención brindada durante el proceso de salida influye directamente en la percepción final que el huésped construye sobre el establecimiento. Aunque la experiencia de alojamiento involucra diferentes momentos de interacción, el <em>check-out</em> suele convertirse en el último contacto presencial entre el huésped y el hotel, razón por la cual debe desarrollarse mediante procedimientos organizados y una atención orientada a la calidad del servicio.



    .row.align-items-center.mb-4.mb-lg-5
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img19.svg").mx-auto
      .col-lg
        p.mb-0 Durante esta etapa, el huésped puede presentar inquietudes relacionadas con consumos, tiempos de espera, facturación o medios de pago. Frente a estas situaciones, el personal de recepción debe mantener una comunicación clara, respetuosa y profesional, brindando información precisa y demostrando actitud de servicio para resolver cualquier novedad presentada.

    p.mb-4 La atención durante el <em>check-out</em> requiere habilidades y buenas prácticas tales como: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 1.
          span Buenas prácticas de atención en el <em>check-out</em>  
        img.d-none.d-lg-block(data-aos="fade-down", src="@/assets/curso/tema1/img20.svg", alt="En la figura 1, titulada Buenas prácticas de atención en el check-out, se presenta una secuencia de seis habilidades o buenas prácticas de atención al momento de la salida del huésped del hotel organizados de arriba hacia abajo, conectados por una línea vertical. Estas son las siguientes: Escuchar con atención (prestar atención activa a necesidades e inquietudes del huésped), Verificar información (confirmar datos, consumos y cargos antes de realizar el cobro), Resolver inquietudes (responder de forma clara, precisa y oportuna todas las preguntas del huésped), Actitud cordial (mantener trato amable, respetuoso, y profesional durante toda la atención), Agilizar tiempos (organizar los procesos y evitar demoras innecesarias durante el check-out) y Cerrar amablemente (despedida cordial y agradecimiento por su visita, dejando una buena impresión final).").mx-auto
        img.d-block.d-lg-none(data-aos="fade-down", src="@/assets/curso/tema1/img21.svg", alt="En la figura 1, titulada Buenas prácticas de atención en el check-out, se presenta una secuencia de seis habilidades o buenas prácticas de atención al momento de la salida del huésped del hotel organizados de arriba hacia abajo, conectados por una línea vertical. Estas son las siguientes: Escuchar con atención (prestar atención activa a necesidades e inquietudes del huésped), Verificar información (confirmar datos, consumos y cargos antes de realizar el cobro), Resolver inquietudes (responder de forma clara, precisa y oportuna todas las preguntas del huésped), Actitud cordial (mantener trato amable, respetuoso, y profesional durante toda la atención), Agilizar tiempos (organizar los procesos y evitar demoras innecesarias durante el check-out) y Cerrar amablemente (despedida cordial y agradecimiento por su visita, dejando una buena impresión final).").mx-auto
        figcaption Nota.  SENA, (2026).
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.order-2.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img23.png", data-aos="zoom-in").mx-auto

      .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
        p.mb-2(data-aos="fade-right") Estas competencias permiten atender adecuadamente solicitudes e inconformidades sin afectar el ambiente de servicio ni la experiencia del huésped.
        p.mb-3(data-aos="fade-left") Asimismo, resulta importante mantener organización operativa durante momentos de alta ocupación o salida simultánea de clientes. La agilidad en los procedimientos, la coordinación entre áreas y el conocimiento de los procesos internos contribuyen a disminuir tiempos de espera y optimizar la atención en recepción.

        .bg-fondo-1.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0(data-aos="fade-right") Además del cierre administrativo de la cuenta, el proceso de salida representa una oportunidad para fortalecer la fidelización del huésped. Una despedida cordial, el agradecimiento por la visita y el interés por conocer la percepción del servicio pueden influir positivamente en futuras decisiones de reserva y en la reputación del establecimiento.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Tecnología aplicada al proceso de salida

    p.mb-4(data-aos="fade-right") La transformación digital ha optimizado los procesos de salida del huésped mediante automatización, integración operativa y herramientas digitales orientadas a mejorar la experiencia del cliente.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas PMS desempeñan un papel fundamental dentro de esta transformación, debido a que permiten integrar información relacionada con reservas, alojamiento, consumos, pagos y facturación en una sola plataforma. Gracias a esta integración, el personal de recepción puede acceder rápidamente al historial del huésped y desarrollar procesos de salida más organizados y eficientes.

    p.mb-4(data-aos="fade-right") Entre las herramientas tecnológicas más comunes utilizadas en hotelería se encuentran:
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-12
        TabsA.color-acento-botones()
          .tarjeta.color-acento-botones--borde.p-4(titulo="PMS (<em>Property Management System</em>)")
            p.mb-0 Permite centralizar información relacionada con reservas, alojamiento, consumos, pagos y facturación, facilitando la actualización automática de la cuenta huésped durante el proceso de <em>check-out</em>.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Facturación electrónica")
            p.mb-0 Genera comprobantes digitales automatizados, agiliza los procesos administrativos y fortalece el control financiero y tributario del establecimiento hotelero.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Pago móvil")
            p.mb-0 Facilita transacciones rápidas mediante dispositivos móviles, billeteras digitales o aplicaciones bancarias, disminuyendo tiempos de espera en recepción.

          .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Self-check-out</em>")
            p.mb-0 Permite al huésped finalizar su estadía mediante procesos automatizados, validando consumos y realizando pagos sin atención presencial permanente.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Confirmación digital")
            p.mb-0 Envía soportes electrónicos, comprobantes y validaciones automáticas al correo o dispositivo móvil del huésped una vez finalizado el proceso de salida.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Integración financiera en tiempo real")
            p.mb-0 Actualiza automáticamente pagos, consumos y registros operativos entre plataformas tecnológicas, fortaleciendo la trazabilidad y precisión de la información financiera.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img25.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-3(data-aos="fade-right") Estas soluciones contribuyen a disminuir tiempos de espera y facilitan experiencias más ágiles para el huésped.
        p.mb-3 En algunos establecimientos, el huésped puede realizar parte del proceso de salida mediante aplicaciones móviles o plataformas de autoservicio, validando consumos y efectuando pagos sin necesidad de interacción presencial permanente con el personal de recepción. Estas tendencias responden a nuevas dinámicas del turismo y a huéspedes que valoran rapidez, conectividad y autonomía durante la prestación del servicio.
        p.mb-3 Sin embargo, el uso de herramientas tecnológicas también requiere control y supervisión operativa. La actualización permanente de registros, la verificación de transacciones y la correcta administración de la información continúan siendo aspectos fundamentales para garantizar precisión y seguridad durante el proceso de salida.

        .bg-fondo-5.px-lg-4.py-lg-4.px-4.py-3.br-15.mb-0
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-flex
              img(src="@/assets/curso/tema1/img26.svg").mx-auto
            .col-lg
              p.mb-0 El proceso de <em>check-out</em> constituye una etapa fundamental dentro de la operación hotelera, debido a que integra procedimientos administrativos, financieros y de atención orientados a formalizar la salida del huésped de manera organizada y eficiente. La adecuada verificación de consumos, la precisión en la facturación, el uso de herramientas tecnológicas y la calidad en la atención permiten fortalecer la experiencia del huésped y proyectar una imagen profesional del establecimiento. En este contexto, el personal de recepción desempeña un papel estratégico para garantizar procesos ágiles, transparentes y orientados a la satisfacción del huésped. 

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-9.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de los procedimientos operativos relacionados con la salida del huésped, los establecimientos de alojamiento deben estar preparados para atender solicitudes, inconformidades y observaciones presentadas durante la prestación del servicio. Por esta razón, la gestión adecuada de PQRS se convierte en un elemento clave para fortalecer la comunicación, mejorar la experiencia del huésped y contribuir a la calidad del servicio hotelero.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
