<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .bg-full-width.bg-fondo-4.px-5.py-4
      img(src="@/assets/curso/intro/img03.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text El componente formativo <em>Check-out</em> y atención de PQRS permite comprender la importancia de los procedimientos operativos, administrativos y de servicio relacionados con la salida del huésped dentro de los establecimientos de alojamiento. A lo largo de los contenidos se abordan aspectos asociados al cierre de cuenta, facturación, verificación operativa, atención durante el <em>check-out</em>, gestión de PQRS y solución de novedades, fortaleciendo la comprensión de los procesos requeridos para garantizar una atención organizada, eficiente y orientada a la satisfacción del cliente.

    .row.align-items-center.mb-3
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/intro/img04.svg").mx-auto
      .col-lg
        p.mb-0 Asimismo, el componente desarrolla temas relacionados con calidad del servicio, comunicación con el huésped, coordinación entre áreas y transformación digital aplicada a la operación hotelera. De igual manera, se reconoce la importancia de las herramientas tecnológicas, la atención humanizada y las buenas prácticas de servicio como elementos fundamentales para optimizar la experiencia del huésped y fortalecer la competitividad de los establecimientos de alojamiento dentro de la hotelería contemporánea.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Check-out y atención de PQRS permite comprender la importancia de los procedimientos operativos, administrativos y de servicio relacionados con la salida del huésped dentro de los establecimientos de alojamiento. A lo largo de los contenidos se abordan aspectos asociados al cierre de cuenta, facturación, verificación operativa, atención durante el check-out, gestión de PQRS y solución de novedades, fortaleciendo la comprensión de los procesos requeridos para garantizar una atención organizada, eficiente y orientada a la satisfacción del cliente. Asimismo, el componente desarrolla temas relacionados con calidad del servicio, comunicación con el huésped, coordinación entre áreas y transformación digital aplicada a la operación hotelera. De igual manera, se reconoce la importancia de las herramientas tecnológicas, la atención humanizada y las buenas prácticas de servicio como elementos fundamentales para optimizar la experiencia del huésped y fortalecer la competitividad de los establecimientos de alojamiento dentro de la hotelería contemporánea.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
