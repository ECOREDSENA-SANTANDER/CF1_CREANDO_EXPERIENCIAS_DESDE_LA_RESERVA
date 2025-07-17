<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estrategias de venta

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        p En el sector hotelero las ventas, no son exclusividad de unos pocos funcionarios, es responsabilidad de todos los empleados de la organización, cada uno ejerce influencia sobre los clientes, por lo tanto, la disposición a prestar un excelente servicio debe ser una estrategia permanente.  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .bg12.mb-5
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                  .bg11.p-3
                    img.img-a.img-t(src='@/assets/curso/Tema6/img02.png', alt='')
                .col-lg-6.p-4(data-aos="fade-left")
                  .bg3.p-1.mb-4
                    h4.mb-0(data-aos="fade-left") Definición
                  p.mb-0(data-aos="fade-right") Venta es una acción que se genera de vender un bien o servicio que se encuentra a disposición del público a cambio de dinero. 
      .col-lg-3.col-8.col-md-5
        img.mb-3(src='@/assets/curso/Tema6/img01.png', alt='')

      p.mb-4 En el sector hotelero se deben definir una serie de variantes para ofrecer el servicio como son: 

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
        .col-lg-5
          img.mb-3(src='@/assets/curso/Tema6/img03.png', alt='')
        .col-lg-7
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 ¿Qué busca el cliente que llama?
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Disponibilidad de habitaciones.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Movimiento de entrada y salida de huéspedes.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Número de días a necesitar el servicio.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Precios.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p.mb-0 Requerimiento de servicios complementarios como alimentación, bebidas, salón de eventos, sala de negocios, entre otros.
      separador
      #t_6_1.titulo-segundo.mb-5
        h2 6.1 Técnicas

      p La comunicación es el elemento fundamental dentro de las técnicas de ventas se da presencial y no presencial (telefónicamente o escrita): 
      p.mb-5 En la venta se repiten las fases de la negociación desde la planificación del producto o servicio a ofrecer, acercamiento o presentación del producto o servicio, argumentación del ofrecimiento y/o manejo de las objeciones y cierre. Dentro de algunas técnicas podemos mencionar:

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-3.col-8.col-md-5
          img.mb-3(src='@/assets/curso/Tema6/img04.png', alt='')
        .col-lg-9 
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="Modelo AIDA")
              .col-md-11.mb-4.mb-md-0
                p Son las iniciales de: 
                p.mb-0 #[b Atención:] se lleva al cliente a fijarse en lo que se le quiere vender.
                p.mb-0 #[b Interés:] animar al cliente a interesarse estimulándolo con los beneficios.
                p.mb-0 #[b Deseo:] lograr que el cliente quiera adquirir el producto.
                p #[b Acción:] se efectúa la venta. 

            .row.justify-content-center(titulo="Técnica SPIN")
              .col-md-11.mb-4.mb-md-0
                p Consiste en obtener el máximo de información por parte del cliente con base en hacer una cantidad de preguntas, con el fin de ofrecerle un mejor servicio.  
                p.mb-0 #[b Situación:] preguntas que ayudan a identificar qué motiva al cliente a comprar.
                p.mb-0 #[b Problema:] preguntas para detectar las dificultades o indecisiones del cliente para ayudarle a que se sienta comprendido.
                p.mb-0 #[b Implicación:]  preguntar para que el cliente vea las consecuencias negativas si no toma rápidamente una decisión.
                p #[b Necesidad o beneficio:]  preguntas para que el cliente quede convencido que sus necesidades serán satisfechas.

            .row.justify-content-center(titulo="Sistema de entrenamiento Zelev Noel ")
              .col-md-11.mb-4.mb-md-0
                p Propuesta sobre el acróstico VENTAS 
                p.mb-0 #[b V]erificación de preparativos: preparar todos los elementos a usar para el momento del acercamiento con el cliente.
                p.mb-0 #[b E]ntrevista efectiva y vendedora para detectar la tipología de cliente.
                p.mb-0 #[b N]ecesidades establecidas previamente planteando preguntas para buscar las necesidades del cliente.
                p.mb-0 #[b T]area de demostración del producto mostrando las características y señalando los beneficios.
                p.mb-0 #[b A]cción de negociación buscando un pacto rápido y seguro.
                p #[b S]atisfacción total y posventa consiguiendo la satisfacción del cliente y buen resultado. 

      separador
      #t_6_2.titulo-segundo.mb-5
        h2 6.2 Políticas 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/Tema6/img05.png')})`}")
        .bloque-texto-g__texto.p-4.py-lg-5
          br
          p.mb-5 La empresa establece una serie de normas y reglas que rigen las actividades diarias del establecimiento a lo que se le llaman políticas.
          br
          br
          p El departamento de ventas es el área encargada, con aprobación de la alta gerencia de establecer las políticas de ventas y negociación ya que esta área conoce el producto, su costo y considera la oferta y la demanda. 
          br
          br
      separador
      #t_6_3.titulo-segundo.mb-5
        h2 6.3 Manejo de objeciones
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-12
          .bg13.mb-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
                .bg11.p-3
                  img.img-a.img-t(src='@/assets/curso/Tema6/img06.png', alt='')
              .col-lg-11.col-12(data-aos="fade-left")
                .bg13.p-1.mb-3
                  .py-2
                  p.mb-0(data-aos="fade-right") Las objeciones son los obstáculos que se presentan en un momento determinado, se utiliza el “no” o el “pero” por parte del cliente, esto lo puede hacer para asegurarse que el producto o servicio cumplirá sus expectativas.
      
      p Es necesario que el vendedor desarrolle la habilidad para dar un manejo acertado y se efectúe la venta, por esta razón necesitará conocer muy bien los servicios que se ofrecen en el establecimiento, y tener la capacidad de transmitir la información y dar la seguridad al cliente que obtendrá lo que está buscando.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center.mt-3
            img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
            h3.bg7.py-2.w-card-text Cierre de la venta

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-12
              .bg23.mb-0
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-7(data-aos="fade-left")
                    .bg23.p-2.mb-3.px-3
                      .py-2
                      p.mb-0(data-aos="fade-right") Mediante el proceso de venta se utilizan argumentos y material de apoyo, que permiten captar la atención e interés del usuario, no obstante, durante el desarrollo se pueden presentar errores de apreciación, lo cual obstaculiza la venta, sin embargo, se entiende que la tarea principal del vendedor es lograr que el usuario realice la compra o utilice el servicio que se le está ofreciendo.
                  .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
                    .bg8.p-3
                      img.img-a.img-t(src='@/assets/curso/Tema6/img08.png', alt='')
                  

        .col-lg-4.mt-5
          .row.align-items-center.mb-0
            .col-lg-2.col-3.col-md-2
              img.mb-3(src='@/assets/curso/Tema6/img07.png', alt='')
            .col-lg-12
              p Posterior al proceso mencionado se realiza el cierre de la venta en donde su objetivo principal es precisamente que el cliente realice la solicitud formal del producto o servicio. En esta parte del proceso el vendedor siempre debe actuar con actitud positiva demostrando que se ha llegado a un acuerdo, y concluirá mencionando los beneficios que el cliente está aceptando.
              











































</template>

<script>
export default {
  name: 'Tema6',
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
