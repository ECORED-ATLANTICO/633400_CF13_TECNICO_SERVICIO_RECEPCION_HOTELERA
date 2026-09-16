<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-4(data-aos="fade-right") El componente formativo <em>Check-out</em> y atención de PQRS permite comprender los procedimientos operativos y de servicio relacionados con la finalización de la estadía del huésped dentro de los establecimientos de alojamiento. La correcta gestión del proceso de salida constituye un momento fundamental dentro de la experiencia del huésped, debido a que involucra validación de consumos, facturación, cierre de cuenta y atención de solicitudes o inconformidades relacionadas con el servicio recibido.
        .bg-fondo-1.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 A lo largo del componente se desarrollan contenidos asociados al proceso de <em>check-out</em>, la atención de peticiones, quejas, reclamos y sugerencias, la solución de novedades operativas aplicada al servicio hotelero. Asimismo, se fortalecen criterios relacionados con comunicación, calidad en la atención, trazabilidad operativa y uso de herramientas tecnológicas orientadas a mejorar la experiencia del huésped y optimizar los procesos de servicio en hotelería contemporánea.

</template>

<script>
export default {
  name: 'Introduccion',
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
