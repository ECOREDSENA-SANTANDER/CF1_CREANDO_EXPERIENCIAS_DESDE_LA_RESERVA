<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 El área de reservas es un componente crucial para el éxito de cualquier establecimiento de alojamiento, ya sea un hotel, hostal, resort o similar. Su importancia radica en varios aspectos clave como la gestión eficiente de la disponibilidad, la mejora en la experiencia del cliente, la coordinación con otros departamentos, el análisis de datos convirtiéndose en un pilar fundamental para la rentabilidad, la eficiencia y la calidad del servicio dentro de un establecimiento de alojamiento.  

    .row.justify-content-center.align-items-center
      .col-lg-12
        .bg1.mb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
              .bg2
                img.img-a.img-t(src='@/assets/curso/img01.png', alt='')
            .col-lg-7.col-10.p-1(data-aos="fade-left")
              p(data-aos="fade-right") Todo parte desde la necesidad de un cliente de alojarse de una manera segura con una estancia planificada y sin contratiempos; es desde ahí donde el establecimiento de alojamiento funciona como una herramienta fundamental para garantizar una experiencia de viaje planificada, segura y confortable. 
              p Una pregunta clave en este punto es ¿Cómo ofrecer a un cliente una experiencia significativa? La respuesta a este interrogante nace desde el primer momento en que un cliente toma la iniciativa de comunicarse con el establecimiento de alojamiento. 
              p A partir de este punto se enseñarán las técnicas y procesos necesarios en el procedimiento de una reserva de alojamiento. 
      .col-lg-10  
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

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
