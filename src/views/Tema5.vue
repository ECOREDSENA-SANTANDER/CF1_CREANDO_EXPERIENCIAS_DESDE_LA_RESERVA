<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistema de información de alojamiento turístico

    p El sistema de información de alojamiento turístico es una herramienta tecnológica que permite registrar la información de los huéspedes. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-1
          p.bg11.py-2.w-card-text2 El Ministerio de Comercio, Industria y Turismo (MINCIT) brinda a los establecimientos de alojamiento, una herramienta tecnológica llamada SIAT – (Sistema de Información de Alojamiento Turístico) – la cual le permite realizar el registro de los huéspedes del establecimiento. Para instalar esta herramienta tecnológica el establecimiento debe disponer del Registro Nacional de Turismo (RNT) activo.  
          img.w-card-icon(src="@/assets/curso/Tema5/img01.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
          h3.bg7.py-2.w-card-text El SIAT tiene los siguientes objetivos
    
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-12
              .bg23.mb-0
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-7(data-aos="fade-left")
                    .bg23.p-2.mb-3.px-3
                      .py-2
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p.mb-0 Simplificar el proceso de registro de los huéspedes.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p.mb-0 Mejorar la atención al turista.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p.mb-0 Facilitar el relacionamiento con los turistas.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p.mb-0 Consolidar estadísticas del sector turístico.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Proporcionar datos a la autoridad estadística nacional (DANE).  

                  .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
                    .bg8.p-3
                      img.img-a.img-t(src='@/assets/curso/Tema5/img02.png', alt='')
                  
        .col-lg-4.mt-5
          .row.align-items-end.mb-0
            .col-lg-3.col-3.col-md-2
              img.mb-3(src='@/assets/curso/Tema5/img03.png', alt='')
            .col-lg-12
              p Los establecimientos que cuenten con RNT activo pueden hacer uso del sistema de acuerdo con el grupo al que pertenezcan según sus condiciones y capacidades tecnológicas.

    .row.justify-content-center(data-aos="flip-up")  
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema5/img04.png', alt='tema1')
          .p-2.mb-4
            h4.text-center.bg14.p-1 Alojamiento con PMS
            p.text-center  Los PMS (por sus siglas en inglés #[em Property Management System)] son #[em softwares] hoteleros; sistemas que ofrecen, entre otras funcionalidades, gestión de reservas, cancelaciones, registro de sus huéspedes y control sobre las habitaciones disponibles y ocupadas. Si hace uso de algún PMS, hará parte de este grupo. 
      
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema5/img05.png', alt='tema1')
          .p-2.mb-4
            h4.text-center.bg14.p-1 Alojamientos con conexión a internet
            p.text-center Si es un alojamiento que dispone con acceso a internet permanente, pero no tiene un PMS, hará parte del grupo que utilizará directamente el SIAT en internet.  
   
      
      .col-lg-4.col-md-6.mb-4
        .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
          img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema5/img06.png', alt='tema1')
          .p-2.mb-4
            h4.text-center.bg14.p-1 Alojamientos sin conexión a internet
            p.text-center Si no se cuenta con acceso a internet, el establecimiento de alojamiento puede descargar el SIAT en su versión para trabajar sin internet. 

    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Manual de integración PMS
                p.mb-0 Lo invitamos a visitar el siguiente PDF, donde podrá encontrar el paso a paso para instalar la herramienta tecnológica SIAT.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://tramincit.gov.co/tarjeta/media/docs/1-MANUAL-SIAT-21Abril2022.pdf" target="_blank")
                  span Descargar 
                  i.fas.fa-file-download

    separador
    #t_5_1.titulo-segundo.mb-5
      h2 5.1 Técnicas de recolección de datos

    p El análisis de datos es el proceso de examinar conjuntos de datos, para buscar patrones, sacar conclusiones, apoyar la toma de decisiones y predecir futuras tendencias del mercado.
    p.mb-4 En los hoteles se utilizan técnicas de recolección de datos para recopilar, analizar datos de diversas fuentes a través del sitio web del hotel, los canales de redes sociales, las agencias de viajes (OTA, Online Travel Agency), las encuestas. Estos datos se utilizan para realizar cambios que mejoren la gestión de los ingresos, la ocupación, la experiencia de los huéspedes y la eficacia operativa. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        .bg12.mb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
              .bg11.p-3
                img.img-a.img-t(src='@/assets/curso/Tema5/img07.png', alt='')
            .col-lg-6.p-4(data-aos="fade-left")
              .bg3.p-1.mb-4
                h4.mb-0(data-aos="fade-left") La técnica de recolección de datos brinda los siguientes beneficios: 
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Comprende los cambios en las preferencias de los viajeros.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Optimiza el rendimiento del canal por donde llegan las reservas.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Examina los patrones de reservas anteriores para ayudar a aumentar los índices de ocupación futura.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Compara los precios con los de la competencia para desarrollar una estrategia de precios eficaz.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Analiza el comportamiento de gasto de los huéspedes para identificar los segmentos más rentables.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Hace un seguimiento de los costos laborales por habitación ocupada para identificar los niveles óptimos de dotación de personal que proporcionen una mayor satisfacción al cliente. 

      .col-lg-3.col-8.col-md-5
        img.mb-3(src='@/assets/curso/Tema5/img08.png', alt='')

    separador
    #t_5_2.titulo-segundo.mb-5
      h2 5.2 Técnicas de registro de datos

    p.mb-4 El Ministerio de Comercio, Industria y Turismo (MINCIT) establece que los prestadores de servicios de alojamiento turístico deben implementar la Tarjeta de Registro de Alojamiento (TRA).
    .bg16.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/Tema5/img09.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .row.p-4
            .col-lg-8
              h4.bg14.p-1 La TRA es un sistema para el registro de los huéspedes
            .col-lg-12 
              p.mb-4(data-aos="fade-left") Los prestadores de servicios de alojamiento turístico deben adoptar un protocolo de autorización que informe al huésped sobre el tratamiento de los datos personales.
              p Los prestadores de servicios de alojamiento turístico deben cumplir con la Ley 1581 de 2012 también conocida como ley de protección de datos personales, la Ley 1558 de 2012 de turismo y las normas que las modifiquen. 
              p Para implementar la TRA (Tarjeta de Registro de Alojamiento) se debe tener el RNT activo y acceso a la cuenta de correo electrónico reportada en el RNT. 


    separador
    #t_5_3.titulo-segundo.mb-5
      h2 5.3 Ley 1581 de 2012 – Ley de protección de datos personales

    p.mb-4 Esta ley establece principios que aplican a los establecimientos de alojamiento y a otras entidades públicas y privadas. 

    .tarjeta.fondoslyder.p-4
      PasosB.fondoblanco.p-4
        .row.justify-content-center.align-items-center.mb-5(titulo="")
            .py-3
            .col-md-12.col-lg-6
              h4.mb-3 Principios de la Ley 1581 de 2012
              ul.lista-ul--color
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 Los datos personales deben ser veraces, completos, exactos, actualizados, comprobables y comprensibles.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 El tratamiento de datos personales debe ser legal, tener una finalidad legítima e informar al titular.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 El tratamiento de datos personales solo puede hacerse con el consentimiento previo expreso e informado del titular.
                li.d-flex.mb-0 
                  i.fas.fa-circle-check
                  p.mb-0 El titular tiene derecho a conocer, actualizar y rectificar los datos personales que se hayan recogido sobre él. 
            .col-md-6.col-lg-4
              img(src='@/assets/curso/Tema5/img10.png', alt='')


        .row.justify-content-center(titulo="")
          .col-md-12.col-lg-6
            h4.mb-3 Obligaciones de los establecimientos de alojamiento 
            ul.lista-ul--color
              li.d-flex.mb-0 
                i.fas.fa-circle-check
                p.mb-0 Los establecimientos de alojamiento deben adoptar procedimientos que permitan a los titulares conocer la información que será recolectada sobre ellos.

              li.d-flex.mb-0 
                i.fas.fa-circle-check
                p.mb-0 Los establecimientos de alojamiento no pueden utilizar medios engañosos o fraudulentos para recolectar y tratar datos personales.
          .col-md-6.col-lg-4
            img(src='@/assets/curso/Tema5/img11.png', alt='')

        .row.justify-content-center(titulo="")
          .col-md-12.col-lg-6
            h4.mb-3 Sanciones por incumplimiento
            ul.lista-ul--color
              li.d-flex.mb-0 
                i.fas.fa-circle-check
                p.mb-0 Las multas podrán ser sucesivas mientras subsista el incumplimiento que las originó.

              li.d-flex.mb-0 
                i.fas.fa-circle-check
                p.mb-0 Se pueden suspender las actividades relacionadas con el tratamiento de datos personales hasta por un término de seis (6) meses.  
          .col-md-6.col-lg-4
            img(src='@/assets/curso/Tema5/img12.png', alt='')









</template>

<script>
export default {
  name: 'Tema5',
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
