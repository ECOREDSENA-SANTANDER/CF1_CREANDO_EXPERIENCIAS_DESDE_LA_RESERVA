<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9 
        p La capacidad de comunicación del personal dentro del área de reservas, resulta imprescindible para establecer una buena relación con los clientes y para dar una buena imagen general del establecimiento o servicio que se ofrece. 
        .py-1
        .row.justify-content-center.align-items-center
          .col-lg-12
            .bg12.mb-5
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                  .bg11.p-3
                    img.img-a.img-t(src='@/assets/curso/Tema3/img01.png', alt='')
                .col-lg-6.p-4(data-aos="fade-left")
                  .bg3.p-1.mb-4
                    h4.mb-0(data-aos="fade-left") Definición
                  p.mb-0(data-aos="fade-right") La comunicación es un proceso que consiste en la transmisión e intercambio de mensajes entre un emisor y un receptor. La palabra deriva del latín communicare que significa compartir, participar en algo o poner en común. 
      .col-lg-3 
        img(src='@/assets/curso/Tema3/img02.png', alt='')
      
      separador
      #t_3_1.titulo-segundo.mb-5
        h2 3.1 Tipos de comunicación

      p.mb-3 La comunicación puede llevarse a cabo de diferentes maneras: 

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-3.col-8.col-md-5
          img.mb-3(src='@/assets/curso/Tema3/img03.png', alt='')
        .col-lg-9 
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="Lenguaje verbal")
              .col-md-11.mb-4.mb-md-0
                p Se refiere a la comunicación que se vale de la palabra para dar el mensaje, es la principal forma de comunicación que se utiliza. Puede ser oral o escrita.  

            .row.justify-content-center(titulo="Comunicación oral")
              .col-md-11.mb-4.mb-md-0
                p Es el intercambio de mensajes a través del habla. La voz juega un papel muy importante en nuestro contacto con el cliente. Debemos ser directos al hablar. Evitar “muletillas o gaguear” y sobre todo, evitar la voz postiza o fingida.  
                p La presentación personal, el espacio adecuado para atender al cliente y mantener un contacto visual.   

            .row.justify-content-center(titulo="Comunicación escrita")
              .col-md-11.mb-4.mb-md-0
                p En este caso, el proceso comunicacional ocurre a través del lenguaje escrito. Ejemplo: carta, mensajes de texto, correos electrónicos. 
                p El contenido del mensaje es riguroso y preciso, lógico y claro aplicando normas gramaticales y reglas de acentuación. 
                
            .row.justify-content-center(titulo="Lenguaje no verbal")
              .col-md-11.mb-4.mb-md-0
                p Son todos los gestos que consciente e inconscientemente transmitimos en nuestras relaciones interpersonales y que dan cuenta de nuestras posiciones acerca de lo que el otro dice o hace.
                p Se expresa a través del lenguaje corporal, la proximidad, signos no lingüísticos y sonidos sin palabras. 

      separador
      #t_3_2.titulo-segundo.mb-5
        h2 3.2 Canales de comunicación 

      p Los establecimientos de alojamiento reciben reservas a través de una variedad de canales tanto directos como indirectos.
      .row.justify-content-center.align-items-center
        .col-lg-8 
          .col-lg-12
            .bg11.mb-5
              .row.justify-content-center.align-items-center.mb-5
                .col-lg-6.p-4(data-aos="fade-left")
                  h5.px-3 Canales directos como:
                  ul.lista-ul--color.px-3
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Sitio web del hotel:] a través de las páginas web ofrecen tarifas, beneficios y servicios. 
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Teléfono:] para clientes que prefieren la atención personalizada.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Correo electrónico:] los clientes envían solicitudes de reservas sobre todo para grupos o eventos especiales.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[b Redes sociales:] a través de mensajes directos o enlaces en la biografía del hotel.
                
                
                
                .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                  .bg13.p-3
                    img.img-a.img-t(src='@/assets/curso/Tema3/img04.png', alt='')
        .col-lg-4
          .row.mt-5
            .py-1
            .col-lg-3
              img.mb-4(src='@/assets/curso/Tema3/img05.png', alt='')
            .col-lg-12
              .bg11
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-12.p-3(data-aos="fade-left")
                    h5.px-3 Canales indirectos como:
                    ul.lista-ul--color.px-3
                      li.d-flex.mb-0
                        i.fas.fa-circle-check
                        p.mb-0 A través de agencias de viajes en línea, agencias de viajes tradicionales, metabuscadores como Google y TripAdvisor. 



      separador
      #t_3_3.titulo-segundo.mb-5
        h2 3.3 Técnicas de comunicación  

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center.mt-3
            img.w-card-icon(src="@/assets/curso/Tema3/img06.png")
            p.bg13.py-2.w-card-text La comunicación es un arte y se debe aprender, se debe preparar bien el mensaje que desea transmitir. 
              Definir y tener muy claro lo que se quiere comunicar utilizando el lenguaje más adecuado y considerando el contexto en el que se efectúa la comunicación.

      p.mb-4 Las siguientes son técnicas que permiten una interacción más confiable con el cliente:

      TabsB.color-acento-contenido.mb-4.escala-grises
        .py-4.py-md-6(titulo="Generar confianza" :icono="require('@/assets/curso/Tema3/ico1.svg')")
          .row.justify-content-center.mb-0
            .col-md-12.mb-4.mb-md-0.col-lg-8
              p Para que se dé una buena comunicación y generar confianza con el oyente se debe tener convicción, el emisor debe estar convencido y creer lo que está diciendo, de no ser así es posible que el mensaje no llegue al receptor como se piensa y de lo contrario sea interpretado de manera errónea, y no se logrará el objetivo.  
            .col-md-4.col-9.d-none.d-lg-block.col-lg-3
              figure
                img(src='@/assets/curso/Tema3/ico1.png', alt='Texto que describa la imagen')
        .py-4.py-md-6(titulo="Actitud de escucha" :icono="require('@/assets/curso/Tema3/ico2.svg')")
          .row.justify-content-center.mb-0
            .col-md-12.mb-4.mb-md-0.col-lg-8
              p Es la principal herramienta. La escucha activa consiste en una forma de comunicación, que demuestra al hablante, que el oyente le está entendiendo. 
            .col-md-4.col-9.d-none.d-lg-block.col-lg-3
              figure
                img(src='@/assets/curso/Tema3/ico2.png', alt='Texto que describa la imagen')
        .py-4.py-md-6(titulo="Postura y movimientos" :icono="require('@/assets/curso/Tema3/ico3.svg')")
          .row.justify-content-center.mb-0
            .col-md-12.mb-4.mb-md-0.col-lg-8
              p La posición física del cuerpo es un reflejo de la condición mental y del estado de ánimo en el que se encuentra, por esto influye en la percepción que el o los clientes pueden tener.
              ul.lista-ul--color.px-3
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Aprender a moverse con naturalidad y moderadamente. 
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Tener una postura recta y a la vez armoniosa.
 
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Las manos deben usarse con movimientos moderados reforzando el contenido del mensaje.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Cada gesto o movimiento debe apoyar el significado de lo que se está comunicando, guardar concordancia entre lo que se expresa y lo que hace el cuerpo.   
            
            
            
            
            .col-md-4.col-9.d-none.d-lg-block.col-lg-3
              figure
                img(src='@/assets/curso/Tema3/ico3.png', alt='Texto que describa la imagen')
        .py-4.py-md-6(titulo="Gestos faciales" :icono="require('@/assets/curso/Tema3/ico4.svg')")
          .row.justify-content-center.mb-5
            .col-md-12.mb-4.mb-md-0.col-lg-8
              p Los gestos faciales generan gran impacto al momento de comunicar, se debe aprender a apoyar el mensaje con la expresión facial de la siguiente manera:
              ul.lista-ul--color.px-3
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Mostrar una expresión cordial.

                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Controlar gestos negativos como inseguridad o nerviosismo.

                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Ser moderados con la expresividad.

                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Es importante sonreír, de lo contrario el cliente puede percibir hostilidad.

                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Evitar fingir porque se puede mostrar con el lenguaje no verbal y perderá credibilidad.

                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p.mb-0 Se debe establecer contacto visual y la mirada debe reflejar convicción y entusiasmo. 

            .col-md-4.col-9.d-none.d-lg-block.col-lg-3
              figure
                img(src='@/assets/curso/Tema3/ico4.png', alt='Texto que describa la imagen')

        











































































</template>

<script>
export default {
  name: 'Tema3',
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
