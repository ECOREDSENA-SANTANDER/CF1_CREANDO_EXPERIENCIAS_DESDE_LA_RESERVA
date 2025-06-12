<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Normativa de formalización
      
      p.mb-4 La Ley 300 de 1996 expide la ley general de turismo, la cual se modificó por la Ley 1558 de 2012 y por la Ley 1101 de 2006.  

      .fondo1
        .py-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            LineaTiempoD.color-acento-contenido
              .row.justify-content-center.align-items-center(numero="2012" titulo="La Ley 1558 de 2012")
                .col-lg-3.col-8.col-md-4
                  figure
                    img.mb-2(src='@/assets/curso/Tema1/img01.png', alt='')
                .col-lg-9.mb-4.mb-md-0
                  p #[b En su artículo 2], establece que el turismo es una industria esencial para el desarrollo del país y en especial de las diferentes entidades territoriales, regionales, provincias y que cumple una función social.
                  p El estado le dará especial protección en razón de su importancia para el desarrollo nacional.
              
              .row.justify-content-center(numero="1996" titulo="Capítulo I de la Ley 300 de 1996")
                .col-lg-3.col-8.col-md-4
                  figure
                    img.mb-2(src='@/assets/curso/Tema1/img02.png', alt='')
                .col-lg-9.mb-4.mb-md-0
                  p #[b Llamado “De los prestadores de servicios turísticos en particular”,] el artículo 76 hace referencia a toda persona natural o jurídica que habitualmente proporcione, intermedie o contrate directa o indirectamente con el turista, la prestación de los servicios a que se refiere esta ley y que se encuentre inscrito en el Registro Nacional de Turismo.
              
              .row.justify-content-center(numero="1996" titulo="Artículo 62 de la Ley 300 de 1996")
                .col-lg-3.col-8.col-md-4
                  figure
                    img.mb-2(src='@/assets/curso/Tema1/img03.png', alt='')
                .col-lg-9.mb-4.mb-md-0
                  p #[b “Prestadores de servicios turísticos”,] (reglamentado por el Decreto Nacional 504 de 1997 y modificado por el art. 12. Ley 1101 de 2006), son prestadores de servicios turísticos:        
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los hoteles, centros vacacionales, campamentos, viviendas turísticas y otros tipos de hospedaje no permanente, excluidos los establecimientos que prestan el servicio de alojamiento por horas.
                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Las agencias de viajes y turismo, agencias mayoristas y las agencias operadoras.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Las oficinas de representaciones turísticas.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los guías de turismo.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los operadores profesionales de congresos, ferias y convenciones.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los arrendadores de vehículos para turismo nacional e internacional.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los usuarios operadores, desarrolladores e industriales en zonas francas turísticas.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Las empresas promotoras y comercializadoras de proyectos de tiempo compartido y multipropiedad.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los establecimientos de gastronomía y bares turísticos.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Las empresas captadoras de ahorro para viajes y de servicios turísticos prepagados.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los concesionarios de servicios turísticos en parque.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Las empresas de transporte terrestre automotor especializado, las empresas operadoras de chivas y de otros vehículos automotores que presten servicio de transporte turístico.

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Los demás que el Ministerio de Comercio, Industria y Turismo determine. 
              .row.justify-content-center(numero="1996" titulo="Capitulo II, artículo 78")
                .col-lg-3.col-8.col-md-4
                  figure
                    img.mb-2(src='@/assets/curso/Tema1/img04.png', alt='')
                .col-lg-9.mb-4.mb-md-0
                  p #[b “De los establecimientos hoteleros o de hospedaje”] Se entiende por establecimiento hotelero o de hospedaje, el conjunto de bienes destinados por la persona natural o jurídica a prestar el servicio de alojamiento no permanente inferior a 30 días, con o sin alimentación y servicios básicos y/o complementarios o accesorios de alojamiento, mediante contrato de hospedaje. 

      .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Ley 1558 de 2012 
                p.mb-0 Lo invitamos a visitar el siguiente PDF, donde podrá conocer las modificaciones realizadas a la Ley 300 de 1996.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.mincit.gov.co/getattachment/minturismo/normatividad-turismo/revise-las-leyes,-decretos-y-resoluciones-en-mater/2012/ley-1558-de-2012-por-la-cual-se-modifica-la-ley-30/ley-1558.pdf.aspx" target="_blank")
                  span Descargar 
                  i.fas.fa-file-download




  </template>

<script>
export default {
  name: 'Tema1',
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
