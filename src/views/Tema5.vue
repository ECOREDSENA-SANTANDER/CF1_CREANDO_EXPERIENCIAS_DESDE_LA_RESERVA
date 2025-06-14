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
    p.mb-4 En los hoteles se utilizan técnicas de recolección de datos para recopilar, analizar datos de diversas fuentes a través del sitio web del hotel, los canales de redes sociales, las agencias de viajes (OTA, #[em Online Travel Agency]), las encuestas. Estos datos se utilizan para realizar cambios que mejoren la gestión de los ingresos, la ocupación, la experiencia de los huéspedes y la eficacia operativa. 

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

      .col-lg-3.col-6.col-md-5
        img.mb-3(src='@/assets/curso/Tema5/img08.png', alt='')

    separador
    #t_5_2.titulo-segundo.mb-5
      h2 5.2 Técnicas de registro de datos

    p.mb-4 El Ministerio de Comercio, Industria y Turismo (MINCIT) establece que los prestadores de servicios de alojamiento turístico deben implementar la Tarjeta de Registro de Alojamiento (TRA).
    .bg16.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right").d-none.d-lg-block
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

    .tarjeta.fondoslyder.p-4.mb-4
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


    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Política de Tratamiento y Protección de Datos Personales
                p.mb-0 Lo invitamos a visitar el siguiente PDF, donde podrá revisar el documento Política de Tratamiento y Protección de Datos Personales del Ministerio de Ambiente y Desarrollo Sostenible.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.minambiente.gov.co/wp-content/uploads/2024/09/DS-E-GET-01_V5-1R.pdf " target="_blank")
                  span Descargar 
                  i.fas.fa-file-download

    separador
    #t_5_4.titulo-segundo.mb-5
      h2 5.4 Documentos de identidad legales 

    p.mb-4 Los documentos legales que deben portar las personas en Colombia son los siguientes:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
          h3.bg7.py-2.w-card-text Tipos de documentos

    .tarjeta--container.row.mb-4(data-aos='fade-right')
        .col-md.tarjeta.bgizq.p-5
          .row.justify-content-center.align-items-center.mb-0
            .col-5.col-lg-3.col-md-6
              figure
                img(src='@/assets/curso/Tema5/img13.png', alt='Texto que describa la imagen')          
            .col-12.col-lg-10
              br
              h2.text-center Si son de nacionalidad colombiana
          p.mb-5 Son la cédula de ciudadanía para mayores de 18 años, si son menores de edad tarjeta de identidad o registro civil de nacimiento. 
        
        .col-md.tarjeta.bgder.p-5
          .row.justify-content-center.align-items-center.mb-0
            .col-5.col-lg-3.col-md-6
              figure
                img(src='@/assets/curso/Tema5/img14.png', alt='Texto que describa la imagen')          
            .col-12.col-lg-10
              br
              h2.text-center Para una persona extranjera
          p Que esté dentro de territorio colombiano deben portar el pasaporte o la cédula de extranjería. 

    p.mb-4 La cédula de extranjería es un documento que expide Migración Colombia a los extranjeros en Colombia. La vigencia es igual a la de la visa del titular, debe estar acorde con la visa que se les haya otorgado. Si la visa es indefinida la cédula debe renovarse cada cinco años. Si la visa tiene fecha de vencimiento, la cédula también vence en esa fecha. 

    .row.justify-content-center.align-items-center.mb-4
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-12
              .bg23.mb-0
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-7(data-aos="fade-left")
                    .bg23.p-2.mb-3.px-3
                      .py-2
                      p.mb-0(data-aos="fade-right") #[b Permiso de Ingreso y Permanencia (PIP):] Migración Colombia también otorga permisos de ingreso y permanencia a extranjeros de algunas nacionalidades que no requieren visa de turismo. El PIP generalmente es por 90 días calendario.  
                  .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
                    .bg8.p-3
                      img.img-a.img-t(src='@/assets/curso/Tema5/img15.png', alt='')
                  

        .col-lg-4.mt-5
          .row.align-items-center.mb-0
            .col-lg-3.col-3.col-md-2
              img.mb-3(src='@/assets/curso/Tema5/img16.png', alt='')
            .col-lg-12
              p Los establecimientos de alojamiento y hospedaje de acuerdo con las normas migratorias deben realizar el respectivo registro del hotel, hostal o vivienda turística en la plataforma SIRE de Migración Colombia, que lleva el registro de extranjeros en el país. 

    .bg14.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right").d-none.d-lg-block
          img(src='@/assets/curso/Tema5/img17.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .row.p-4
            .col-lg-8
              h4.bg14.p-1 “PILAS AL ALOJAR”
            .col-lg-12 
              p.mb-4(data-aos="fade-left") Los casos más frecuentes de errores cometidos a la hora de registrar en la plataforma SIRE a un huésped extranjero son: no hacerlo dentro de la primera hora de su llegada, no buscar la nacionalidad del cliente en la plataforma, no llenar todos los espacios, no preguntar ni registrar procedencia y destino, realizar solo la entrada al establecimiento y no anotar la salida, cargar únicamente a la persona que hizo la reservación o que se encargó del pago de la cuenta. 

    separador
    #t_5_5.titulo-segundo.mb-5
      h2 5.5 Técnicas de validación de datos  

    p.mb-4 Solicitar todos los datos del turista al momento del registro en el establecimiento de alojamiento o vivienda turística de acuerdo con la obligación que existe desde la Ley 300 de 1996 sobre la Tarjeta de Registro Hotelero, posteriormente Tarjeta de Registro de Alojamiento con la Ley 2068 de 2020. 


    .tarjeta.fondoslyder.p-4.mb-4
      SlyderA(tipo="b").fondoblanco.p-4
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4.mb-4 En el diligenciamiento de la Tarjeta de Registro de Alojamiento se incluyen los siguientes datos: 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Nombre completo.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Número de identificación.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Fecha de nacimiento.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Género.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Fecha de entrada y salida.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Número de acompañantes.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Tipo de acomodación.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Tarifa.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Número total de noches.   
          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img18.png', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4.mb-4 Además de los datos del huésped, la TRA debe incluir información del establecimiento como:
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Identificación del establecimiento.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Matrícula mercantil.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Registro nacional de turismo (RNT).
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Operador del alojamiento.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Razón social.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Nombre comercial.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Ubicación, departamento, municipio y dirección.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Actividad económica relacionada con el alojamiento.

          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img19.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6
            h4.mb-4 Para los menores de edad según lo establecido en la Resolución 409 de 2022 se debe diligenciar la tarjeta de registro de alojamiento de manera que se incluyan los siguientes datos:
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Tipo de identificación.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Número de identificación. 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Nombre completo. 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Ciudad de residencia. 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Ciudad de procedencia. 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Principal motivo de viaje. 
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Fecha de entrada #[em (check-in)] y de salida #[em (check-out).]
        

          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema5/img20.png', alt='')

    p.mb-4 De acuerdo con el código de prevención y denuncia de la Explotación Sexual Comercial de Niños, Niñas y Adolescentes (ESCNNA), para realizar una reserva a un menor de edad con su familia o tutor se requiere validar la siguiente información:

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img.imggran(src='@/assets/curso/Tema5/img21.png', alt='')
      .col-lg-8
        ul.lista-ul--color.bg23.p-3.mb-4
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 En caso de no haber parentesco alguno con el menor de edad, se solicita el documento de autorización de los padres autenticado, en el cual se autorice o se informe que el menor de edad se aloja en compañía de otra persona mayor de 18 años con el conocimiento de sus tutores.
        ul.lista-ul--color.bg23.p-3.mb-4
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Si el adulto indica estar casado con el menor de edad, se solicita el soporte del contrato de matrimonio que compruebe el vínculo. Se anexa copia de la identificación y de los documentos presentados que evidencien la verificación que realizó en el protocolo de registro.   
        ul.lista-ul--color.bg23.p-3.mb-4
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 Para grupos de excursiones de adultos con personas menores de 18 años, tenga en cuenta al momento de la acomodación ubicar a las personas menores de 18 años en habitaciones diferentes a las de los adultos. 
    
        ul.lista-ul--color.bg23.p-3.mb-4
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p.mb-0 En los hoteles que tienen servicio de piscina, restaurante y spa, entre otros servicios, para personas que no están alojadas y van con niñas, niños o adolescentes es necesario que se exijan los mismos requisitos para demostrar el parentesco.
    
    
    
    
    
    
    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Manual de Buenas Prácticas de Turismo Responsable
                p.mb-0 Lo invitamos a visitar el siguiente PDF, donde podrá revisar y descargar el Manual de Buenas Prácticas de Turismo Responsable.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://portucolombia.mincit.gov.co/portal_turistico_colombia/media/observatorioturistico/Pdf/MANUAL-DE-BUENAS-PRACTICAS.pdf" target="_blank")
                  span Descargar 
                  i.fas.fa-file-download


















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
