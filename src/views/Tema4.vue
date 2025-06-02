<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicio al cliente

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-9
        .bg12.mb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
              .bg11.p-3
                img.img-a.img-t(src='@/assets/curso/Tema4/img02.png', alt='')
            .col-lg-6.p-4(data-aos="fade-left")
              p.mb-0(data-aos="fade-right") Se entiende por servicio al cliente el conjunto de acciones, procesos y ejecuciones que el cliente espera, además del producto básico, como consecuencia del precio y la imagen. Son las actividades que buscan satisfacer las necesidades, deseos y expectativas de un cliente. En consecuencia, el objetivo institucional no es solo vender, sino ganar y mantener clientes satisfechos.  
      
      .col-lg-3.col-md-5.col-7
        img(src='@/assets/curso/Tema4/img01.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
          h3.bg7.py-2.w-card-text Para tener en cuenta

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.col-10
        img(src='@/assets/curso/Tema4/img03.png', alt='')
      .col-lg-7 
        p La atención al cliente se refiere al trato que le damos al cliente cuando interactuamos con él, se trata de una relación con cortesía, rapidez, confiabilidad, información, simpatía, empatía y sensibilidad. 
        p El servicio al cliente, en cambio, es la articulación sistemática y armoniosa de los procesos y acciones que buscan lograr la satisfacción del cliente. El servicio es más que amabilidad y gentileza, es disposición a servir con efectividad. 
        p El personal es clave, es necesario que las personas que trabajan para la empresa entiendan los objetivos del servicio y el por qué se debe alcanzar.  

        .bloque-texto-e.bg12.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h4 Un hombre sin una sonrisa en la cara no debería abrir una tienda
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                h6.mb-0.text-regular.colortex Proverbio chino

    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Tipos de servicio al cliente 
    
    p Para brindar una buena atención al cliente es fundamental adaptarse al canal o medio a través del cual se brinda este servicio.  
    p Se encuentran:
































</template>

<script>
export default {
  name: 'Tema4',
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
