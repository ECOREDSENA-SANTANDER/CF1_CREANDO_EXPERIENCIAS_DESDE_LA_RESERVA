<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Apropiación de conocimientos básicos dentro de un establecimiento de alojamiento


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/img01.png")
            p.bg11.py-2.w-card-text Los establecimientos de alojamiento primariamente proveen y facilitan alojamiento para el público en general con servicios complementarios de alimentación, bebidas, conserjería, botones, lavandería, teléfono y recreación entre otros. 

    p.mb-4 Para afianzar el conocimiento se invita a ir al siguiente video:

    .row.justify-content-center.align-items-center.mb-5
       .col-lg-10  
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/fAg0gdOyEt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Establecimientos de alojamiento y hospedaje.

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Tipos de alojamiento y hospedajes

    p.mb-4 La Ley 300 de 1996 (ley general de turismo) modificada por la Ley 1558 de 2012 y la Ley 1101 de 2006, contempla los siguientes tipos de alojamiento: 
    
    .row.fondotema4.mb-4.justify-content-center
      .col-lg-11.mt-4
        .row.justify-content-center
          .col.lg-12
            .row.justify-content-center.align-items-center.mb-1
              .col-lg-9.mb-4
                TabsA.color-acento-contenido(data-aos="fade-down")
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Hotel")
                    p Un hotel es un establecimiento que se dedica al alojamiento de huéspedes o viajeros. El término proviene del vocablo francés hotel, que hace referencia a una “casa adosada”.
                    p De acuerdo con la legislación colombiana, un hotel es aquel establecimiento en que se presta el servicio de alojamiento en habitaciones. Dispone como mínimo del servicio de recepción y del servicio del lobby para recibir a los huéspedes. Los demás servicios que pueda ofrecer un hotel son servicios complementarios como, por ejemplo, servicios de alimentos y bebidas, servicio de conserjería, de recreación, de bienestar, entre otros.   
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Posadas turísticas")
                    p Viviendas familiares preferiblemente de arquitectura autóctona cuyo principal propósito es promover la generación de empleo e ingresos a las familias residentes. Estas posadas se caracterizan por compartir una sola cocina para los huéspedes, igualmente por compartir los baños. 
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Albergue – refugio – hostal")
                    p Establecimiento en que se presta el servicio de alojamiento preferiblemente en habitaciones semiprivadas o comunes, al igual que sus baños, y que puede disponer, además, de un recinto común equipado adecuadamente para que los huéspedes se preparen sus propios alimentos, sin perjuicio de proporcionar otros servicios complementarios.   
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Apartahotel")
                    p Son apartamentos independientes, de un edificio que integran una unidad de administración y explotación, pudiendo ofrecer otros servicios complementarios. Cada apartamento cuenta con dormitorio, baño privado, sala de estar, cocina equipada y comedor como mínimo. 
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Apartamentos turísticos")
                    p Unidad habitacional destinada a brindar facilidades de alojamiento y permanencia de manera ocasional a una o más personas, según su capacidad, que puede contar con servicio de limpieza y como mínimo con los siguientes recintos: dormitorio, sala-comedor, cocina, y baño.  
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Alojamiento rural ")
                    p Establecimiento en que se presta el servicio de alojamiento en unidades habitacionales privadas, ubicado en áreas rurales y cuyo principal propósito es el desarrollo de actividades asociadas a su entorno natural y cultural. Ofrecen además como mínimo, servicios de alimentación bajo la modalidad de pensión completa, sin perjuicio de proporcionar otros servicios complementarios.  
                  .tarjeta.color-acento-botones--borde.p-4(titulo="Recinto de campamento o <i>camping</i>")
                    p Establecimiento en que se presta el servicio de alojamiento en un terreno debidamente delimitado, asignándole un sitio a cada persona o grupo de personas que hacen vida al aire libre y que utilicen carpas, casas rodantes u otras instalaciones similares para pernoctar. 
              .col-lg-3.col-md-5.col-6
                img(src='@/assets/curso/Tema2/img02.png', alt='')


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Categorización de los hoteles 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row
          .col-lg-2
            img(src='@/assets/curso/Tema2/img04.png', alt='').mb-3
          .col-lg-10
            p Existen diversas categorías de hoteles de acuerdo a las comodidades, servicios y de infraestructura que brindan al viajero. La más usual está compuesta por estrellas: un hotel de cinco estrellas es el que ofrece el máximo nivel de confort. Al otro extremo, los hoteles de una estrella sólo brindan un servicio básico. 
        p.bg1.p-4 Normalmente se utilizan las estrellas para poder categorizar a un hotel en lo que respecta a sus prestaciones, servicios e instalaciones. No obstante, no podemos pasar por alto que en otros países del mundo esa citada categorización se realiza utilizando letras e incluso diamantes. En Colombia la categorización se realiza por estrellas. 
      .col-lg-5
        img(src='@/assets/curso/Tema2/img03.png', alt='')

    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Norma Técnica Sectorial Colombiana NTSH 006 de 2009
                p.mb-0 Lo invitamos a visitar el siguiente PDF, donde podrá conocer la clasificación de establecimientos de alojamiento y hospedaje y las características de calidad en los servicios ofrecidos y de infraestructura, que deben cumplir los hoteles para obtener su certificado de categorización por estrellas.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx" target="_blank")
                  span Descargar 
                  i.fas.fa-file-download


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Tipos de habitaciones y acomodación

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema2/img05.png")
            p.bg13.py-2.w-card-text Los establecimientos de alojamiento y hospedaje organizan las habitaciones para el servicio según el tipo de habitación y acomodación. Que pueden ir desde acomodar una persona en una sola habitación hasta un grupo familiar o de amigos. 

    p.mb-4 De acuerdo con lo anterior los tipos de habitación y acomodaciones serían los siguientes: 

    .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-lg-3.col-8.col-md-5
          img.mb-3(src='@/assets/curso/Tema2/img06.png', alt='')
        .col-lg-9 
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="Habitación sencilla")
              .col-md-11.mb-4.mb-md-0
                p Una habitación asignada a una persona. Las medidas de las camas individuales pueden ser: 90 centímetros de ancho por 190 cm de largo. Acomodación: puede tener una o más camas, pero solo es ocupada por una persona.
            .row.justify-content-center(titulo="Habitación doble")
              .col-md-11.mb-4.mb-md-0
                p Una habitación asignada a dos personas. Acomodación: puede tener una cama doble de 140 centímetros de ancho por 190 centímetros de largo o dos camas sencillas de 90 centímetros de ancho por 190 centímetros de largo. La habitación doble que cuente con dos camas sencillas también se le conoce como habitación twin. 
            
            .row.justify-content-center(titulo="Habitación triple")
              .col-md-11.mb-4.mb-md-0
                p Una habitación asignada a tres personas. Acomodación: puede tener una cama doble de 140 centímetros de ancho por 190 centímetros de largo y una cama sencilla de 90 centímetros de ancho por 190 centímetros de largo, o puede tener tres camas sencillas de 90 centímetros de ancho por 190 centímetros de largo, o puede tener un camarote sencillo con una cama sencilla con medidas de 90 centímetros de ancho por 190 centímetros de largo.
                   
            .row.justify-content-center(titulo="Habitación cuádruple")
              .col-md-11.mb-4.mb-md-0
                p Son habitaciones para alojar 4 personas. Acomodación: pueden estar organizadas de la siguiente forma: dos camas dobles, o una cama doble y dos camas sencillas, o cuatro camas sencillas, o un camarote y dos camas sencillas. 
               
            .row.justify-content-center(titulo="Habitación quíntuple")
              .col-md-11.mb-4.mb-md-0
                p Es una habitación para alojar 5 personas. Acomodación: pueden estar organizadas de la siguiente forma: dos camas dobles con una cama sencilla, o una cama doble con tres camas sencillas, o un camarote con tres camas sencillas o cinco camas sencillas. 

    .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-9 
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="Habitación familiar")
              .col-md-11.mb-4.mb-md-0
                p Es una habitación para alojar entre 6 a 7 personas. Acomodación: pueden estar organizadas con camas dobles, camas sencillas y/o camarotes. 
            .row.justify-content-center(titulo="Habitación matrimonial")
              .col-md-11.mb-4.mb-md-0
                p Habitación para pareja. Acomodación: este tipo de habitación ofrece una cama Queen Size con medidas de 160 centímetros de ancho por 190 centímetros de largo.  
            
            .row.justify-content-center(titulo="Habitación <i>suite</i>")
              .col-md-11.mb-4.mb-md-0
                p Unidad de alojamiento. Acomodación: compuesta por dos habitaciones, un salón con área de recibo y comedor y dos baños; su capacidad máxima debe ser de seis personas. 
                   
            .row.justify-content-center(titulo="Habitación <i>junior suite</i>")
              .col-md-11.mb-4.mb-md-0
                p Unidad de alojamiento. Acomodación: compuesta por una habitación estándar y un salón independiente en el que se pueden alojar más personas en camas adicionales o sofá camas. 
        .col-lg-3.col-8.col-md-5
          img.mb-3(src='@/assets/curso/Tema2/img07.png', alt='')


































































</template>

<script>
export default {
  name: 'Tema2',
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
