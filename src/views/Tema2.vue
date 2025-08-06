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
            p.bg11.py-2.w-card-text Los establecimientos de alojamiento primariamente proveen y facilitan alojamiento para el público en general con servicios complementarios de alimentación, bebidas, conserjería, botones, lavandería, teléfono y recreación, entre otros. 

    p.mb-4 Para afianzar el conocimiento se invita a ir al siguiente video:

    .row.justify-content-center.align-items-center.mb-5
       .col-lg-10  
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/eIWawvhzjH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Establecimiento de alojamiento y hospedajes.

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
                    p Un hotel es un establecimiento que se dedica al alojamiento de huéspedes o viajeros. El término proviene del vocablo francés #[em hotel], que hace referencia a una “casa adosada”.
                    p De acuerdo con la legislación colombiana, un hotel es aquel establecimiento en que se presta el servicio de alojamiento en habitaciones. Dispone como mínimo del servicio de recepción y del servicio del #[em lobby] para recibir a los huéspedes. Los demás servicios que pueda ofrecer un hotel son servicios complementarios como, por ejemplo, servicios de alimentos y bebidas, servicio de conserjería, de recreación, de bienestar, entre otros.   
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
          .col-lg-2.col-3.col-md-2.d-none.d-lg-block
            img(src='@/assets/curso/Tema2/img04.png', alt='').mb-3
          .col-lg-10
            p Existen diversas categorías de hoteles de acuerdo a las comodidades, servicios y de infraestructura que brindan al viajero. La más usual está compuesta por estrellas: un hotel de cinco estrellas es el que ofrece el máximo nivel de confort. Al otro extremo, los hoteles de una estrella sólo brindan un servicio básico. 
        p.bg1.p-4 Normalmente, se utilizan las estrellas para poder categorizar a un hotel en lo que respecta a sus prestaciones, servicios e instalaciones. No obstante, no podemos pasar por alto que en otros países del mundo esa citada categorización se realiza utilizando letras e incluso diamantes. En Colombia la categorización se realiza por estrellas. 
      .col-lg-5.col-md-8.d-none.d-lg-block
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
                a.boton.color-acento-botones(href="https://fontur.com.co/sites/default/files/2020-11/NTSH006-09.pdf" target="_blank")
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
                p Una habitación asignada a dos personas. Acomodación: puede tener una cama doble de 140 centímetros de ancho por 190 centímetros de largo o dos camas sencillas de 90 centímetros de ancho por 190 centímetros de largo. La habitación doble que cuente con dos camas sencillas también se le conoce como habitación #[em twin.]
            
            .row.justify-content-center(titulo="Habitación triple")
              .col-md-11.mb-4.mb-md-0
                p Una habitación asignada a tres personas. Acomodación: puede tener una cama doble de 140 centímetros de ancho por 190 centímetros de largo y una cama sencilla de 90 centímetros de ancho por 190 centímetros de largo, o puede tener tres camas sencillas de 90 centímetros de ancho por 190 centímetros de largo, o puede tener un camarote sencillo con una cama sencilla con medidas de 90 centímetros de ancho por 190 centímetros de largo.
                   
            .row.justify-content-center(titulo="Habitación cuádruple")
              .col-md-11.mb-4.mb-md-0
                p Son habitaciones para alojar 4 personas. Acomodación: pueden estar organizadas de la siguiente forma: dos camas dobles, o una cama doble y dos camas sencillas, o cuatro camas sencillas, o un camarote y dos camas sencillas. 
               
            .row.justify-content-center(titulo="Habitación quíntuple")
              .col-md-11.mb-4.mb-md-0
                p Es una habitación para alojar 5 personas. Acomodación: pueden estar organizadas de la siguiente forma: dos camas dobles con una cama sencilla, o una cama doble con tres camas sencillas, o un camarote con tres camas sencillas o cinco camas sencillas. 

    .row.justify-content-center.mb-3(data-aos="fade-right")
        .col-lg-9 
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="Habitación familiar")
              .col-md-11.mb-4.mb-md-0
                p Es una habitación para alojar entre 6 a 7 personas. Acomodación: pueden estar organizadas con camas dobles, camas sencillas y/o camarotes. 
            .row.justify-content-center(titulo="Habitación matrimonial")
              .col-md-11.mb-4.mb-md-0
                p Habitación para pareja. Acomodación: este tipo de habitación ofrece una cama #[em Queen Size] con medidas de 160 centímetros de ancho por 190 centímetros de largo.  
            
            .row.justify-content-center(titulo="Habitación <i>suite</i>")
              .col-md-11.mb-4.mb-md-0
                p Unidad de alojamiento. Acomodación: compuesta por dos habitaciones, un salón con área de recibo y comedor y dos baños; su capacidad máxima debe ser de seis personas. 
                   
            .row.justify-content-center(titulo="Habitación <i>junior suite</i>")
              .col-md-11.mb-4.mb-md-0
                p Unidad de alojamiento. Acomodación: compuesta por una habitación estándar y un salón independiente en el que se pueden alojar más personas en camas adicionales o sofá camas. 
        .col-lg-3.col-8.col-md-5
          img.mb-3(src='@/assets/curso/Tema2/img07.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
            h3.bg7.py-2.w-card-text Otros tipos de habitaciones pueden incluir
    .py-2
    .row.justify-content-center.cursor-pointer.mb-5(data-aos="fade-down")
      .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/img08.png", alt="")
          .crd_hover_txt--body.text-center 
            h4.mb-3 Habitaciones comunicadas
            p.mb-0  Habitaciones con puertas de entrada individuales desde el exterior y una puerta de conexión entre ellas. Los huéspedes pueden moverse entre habitaciones sin pasar por el pasillo.
      
      .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/img09.png", alt="")
          .crd_hover_txt--body.text-center 
            h4.mb-3 Habitaciones contiguas
            p.mb-0 Habitaciones con una pared común, pero sin puerta de conexión.  

      .col-xl-4.col-lg-7.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema2/img10.png", alt="")
          .crd_hover_txt--body.text-center 
            h4.mb-3 Habitaciones adyacentes
            p.mb-0 Habitaciones cercanas, tal vez al otro lado del pasillo.


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Portafolio de servicios  

    p Es un #[em brochure] o un documento donde se encuentran los servicios que presta un establecimiento de alojamiento y hospedaje de acuerdo con los distintos departamentos que lo conforman.

    .row.justify-content-center.align-items-center.mb-3
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-12
              .bg23.mb-0
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-7(data-aos="fade-left")
                    .bg23.p-2.mb-3.px-3
                      .py-2
                      p.mb-0 Se trata de una lista detallada de los servicios que ofrece la empresa, su función es informar a los posibles clientes sobre las ventajas y beneficios de contratar a la empresa.
                      p Los portafolios de servicios funcionan como tarjetas de presentación para dar a conocer la empresa, pueden ser documentos físicos o digitales.

                  .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
                    .bg8.p-3
                      img.img-a.img-t(src='@/assets/curso/Tema2/img11.png', alt='')
        .col-lg-4.mt-5
          .row.align-items-end.mb-0
            .col-lg-3.col-3.col-md-2
              img.mb-3(src='@/assets/curso/Tema2/img12.png', alt='')
            .col-lg-12
              p El portafolio de servicios incluye diversos apartados, cada uno de estos suministra información sobre un aspecto de la empresa como nombre, años de trayectoria, socios, objetivos, misión y visión, proveedores, clientes, información de contacto, entre otros (Carvajal, 2016).  
    p.mb-4 Para afianzar el conocimiento se invita a ir al siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10  
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_1RZegHaCTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Definición del Portafolio

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-4
        .col-lg-12
          .bg13.mb-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
                .bg11
                  img.img-a.img-t(src='@/assets/curso/Tema2/img13.png', alt='')
              .col-lg-11.col-11(data-aos="fade-left")
                .bg13.mb-3
                  .py-2
                  p(data-aos="fade-right") Estos servicios complementarios permiten al viajero o huésped vivir una experiencia única dentro del establecimiento. 
                  p Los servicios complementarios que se ofrecen dentro de un establecimiento de alojamiento según el departamento son: 

    .tarjeta.fondoslyder.p-4.mb-4
      SlyderA(tipo="b").fondoblanco.p-4
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6.mt-3
            h4.mb-4 Departamento de alojamiento
            p Este se divide en tres subdepartamentos; #[b recepción, conserjería y pisos,] englobando así todo el aspecto relacionado con la estancia en términos de alojamiento de los huéspedes, ya que implica desde el momento en que el cliente efectúa su reserva hasta que se va del hotel, incluyendo esto, que la habitación en la que se va a hospedar esté siempre en perfectas condiciones.  
          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema2/img14.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6.mt-3
            h4.mb-4 Departamento de recepción
            p Este departamento ofrece los servicios relacionados con la llegada y salida de los clientes, además de controlar, coordinar, gestionar y brindar diferentes servicios durante la permanencia de los huéspedes dentro de la instalación. 
            p En la recepción, por tanto, donde afluyen las solicitudes, reclamaciones y quejas (oportunidades) directamente relacionadas con el servicio de la instalación.
            p Además, es la recepción donde se elabora y emite la información diaria, a los diferentes departamentos del hotel para garantizar un trabajo armónico y fluido, que a la vez asegura un servicio de calidad. 
            p Dentro de esta área se ofrecen los servicios de botones, de despertador, de conserjería. 


          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema2/img15.png', alt='Texto que describa la imagen')
        
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6.mt-3
            h4.mb-4 Departamento de alimentos y bebidas
            p El departamento de alimentos y bebidas es un departamento que da uno de los mayores ingresos al hotel de manera complementaria, es el área desde la cual se coordinan a diario, las operaciones del restaurante, la cocina, el departamento de banquetes, las barras, el servicio a habitaciones (#[em room service]) y utilería. 
          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema2/img16.png', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6.mt-3
            h4.mb-4 Departamento de #[em marketing]
            p Se encarga de organizar actividades de interés a los huéspedes como:
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Tours guiado a sitios de interés locales.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Actividades de senderismo.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Organización de eventos (reuniones sociales, de negocios, culturales, empresariales). 

          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema2/img17.png', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0.col-lg-6.mt-3
            h4.mb-4 Departamento de mantenimiento
            p Se encarga del funcionamiento óptimo de las instalaciones, asegurando que las instalaciones del establecimiento se mantengan en buen estado, realizando inspecciones periódicas, respondiendo rápidamente a solicitudes de reparación de los huéspedes y del personal, asegurando que todas las habitaciones, pisos y áreas comunes se encuentren en perfectas condiciones de funcionamiento.  
          .col-md-7.col-lg-5
            figure
              img(src='@/assets/curso/Tema2/img18.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-4
        .col-lg-12
          .bg13.mb-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
                .bg11
                  img.img-a.img-t(src='@/assets/curso/Tema2/img19.png', alt='')
              .col-lg-11.col-11(data-aos="fade-left")
                .bg13.mb-3
                  .py-2
                  p(data-aos="fade-right") Además de los departamentos mencionados, el establecimiento también cuenta con áreas específicas como lavandería, entretenimiento y otros servicios adicionales.

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-12
          TabsC
            .relleno.py-3.py-md-4(titulo="Área de lavandería").fondotabs
              .row.justify-content-center.p-4
                .col-md-6.col-lg-4.col-9
                  img(src='@/assets/curso/Tema2/img20.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  br
                  h4 Área de lavandería
                  p Esta área está encargada del lavado, desinfección y mantenimiento de la lencería del hotel como sabanas, fundas de almohadas, toallas y otros textiles utilizados en las habitaciones y áreas comunes del hotel. Ofrece el servicio de lavandería para huéspedes, lavado y planchado. 
            
            .relleno.py-3.py-md-4(titulo="Áreas de entretenimiento ").fondotabs
              .row.justify-content-center.p-4
                .col-md-6.col-lg-4.col-9
                  img(src='@/assets/curso/Tema2/img21.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  br
                  h4 Áreas de entretenimiento 
                  p Estas áreas sirven con fines de interacción social de entretenimiento y relajación, suelen estar presentes en la mayoría de los alojamientos. Los servicios que se pueden encontrar dentro de esta área para atención al huésped son los servicios de:
                  ul.lista-ul--color
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[em Spa.] 
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Jacuzzis.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Zonas húmedas (sauna, turco).
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Piscina.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Gimnasio.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Juegos de mesa.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Actividades al aire libre (canchas de tenis, voleibol y baloncesto).
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Discotecas.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Bar.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Espectáculos en vivo.
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Áreas de juego infantiles. 
    
            .relleno.py-3.py-md-4(titulo="Servicios adicionales ").fondotabs
              .row.justify-content-center.mb-0.p-4
                .col-md-6.col-lg-4.col-9
                  img(src='@/assets/curso/Tema2/img22.png', alt='')
                .col-md-10.col-lg-6.mb-md-0
                  br
                  h4 Servicios adicionales 
                  ul.lista-ul--color
                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Acceso de internet – wifi.

                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 #[em Coworking.]

                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Salón para fumadores.

                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Alquiler de equipos deportivos.

                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Espacios #[em pet friendly.]

                    li.d-flex.mb-0
                      i.fas.fa-circle-check
                      p.mb-0 Servicio de parqueadero.

            
    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Ejemplo 1 de portafolio de servicio
                p.mb-0 Lo invitamos a ver la siguiente información, donde podrá conocer los servicios en establecimiento de alojamiento.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://cotelcocaldas.com/Descargas/CotelcoPortafolio.pdf" target="_blank")
                  span Descargar 
                  i.fas.fa-file-download

    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/web.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2 Ejemplo 2 de portafolio de servicio
                p.mb-0 Lo invitamos a ver la siguiente información, donde podrá conocer los servicios en establecimiento de alojamiento. 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.hoteldongregorio.net/portafolio/" target="_blank")
                  span Ir al sitio
                  i.fas.fa-globe

    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Clientes – tipos de clientes – características

    p Un cliente es una persona natural o jurídica que recibe un servicio. Un cliente para un establecimiento de alojamiento es un huésped que se aloja por un periodo de tiempo con el propósito de solo pernoctar y alimentarse o de realizar diferentes actividades. 
    p.mb-4 En la comercialización de servicios dentro de un establecimiento de alojamiento, es importante conocer los tipos de clientes que existen con sus características para saber cómo tratarlos y lograr una venta efectiva. Algunos tipos de clientes comunes en un alojamiento son:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
            h3.bg7.py-2.w-card-text Tipos de clientes con sus características

    .fondo2.p-3.mb-5
      .row.justify-content-center.mb-0.p-2.mt-2
        .col-lg-4.bg111.p-4.mb-3
          .py-1
          ul.lista-ul--color
            li.bg10.p-2.d-flex
              i.fas.fa-circle-check
              p.mb-0 #[b Cliente turista:] son viajeros que se desplazan hacia otros destinos por razones de turismo. Buscan experiencias locales como actividades culturales y turísticas. 

            li.bg10.p-2.d-flex
              i.fas.fa-circle-check
              p.mb-0 #[b Viajeros de negocios:] buscan hospedaje por compromisos labores, valoran servicios como acceso a internet de alta velocidad, salas de reuniones y servicios de reunión. 

            li.bg10.p-2.d-flex
              i.fas.fa-circle-check
              p.mb-0 #[b Familias:] incluyen padres con niños, buscan comodidad, actividades para niños, menús infantiles. 

            li.bg10.p-2.d-flex
              i.fas.fa-circle-check
              p.mb-0 #[b Viajeros solitarios:] son personas que viajan solas buscando tranquilidad y comodidad.
            li.bg10.p-2.d-flex
              i.fas.fa-circle-check
              p.mb-0 #[b Aventureros:] amantes de la aventura, buscan excursiones, deportes y actividades al aire libre.
 
        .col-lg-4.bg111.p-4.mb-3
            .py-1
            ul.lista-ul--color
              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Luna de miel y parejas:]  parejas que buscan celebrar una fecha importante, valoran la privacidad, la elegancia y los detalles. 


              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Grupos y eventos:]  grupos turísticos, de conferencias o eventos especiales, buscan servicios de banquetes, salas de reuniones y capacidad para alojar un gran número de personas.


              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Clientes de negocios de larga estadía:]  viajeros de negocios que buscan alojamiento durante un periodo prolongado y tarifas especiales. 

              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Viajeros de última hora:]  clientes que hacen reservas a última hora, buscan disponibilidad inmediata, pueden estar dispuestos a pagar un poco más por la conveniencia.

            
        .col-lg-4.bg111.p-4.mb-3
            .py-1
            ul.lista-ul--color
              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Clientes leales:]  clientes que reservan en el hotel en múltiples ocasiones, ofrecer a estos clientes programas de beneficios es una buena estrategia para conservarlos.


              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Clientes con necesidades especiales:]  algunos huéspedes pueden tener necesidades especiales como movilidad reducida, alergias alimentarias o mascotas. Es importante atender estas necesidades de manera efectiva.


              li.bg10.p-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Clientes internacionales:]  son viajeros internacionales, pueden tener diferentes expectativas culturales y requerir servicios como adaptadores eléctricos, asistencia en varios idiomas y alimentos internacionales.  
        .col-lg-12.d-none.d-lg-block
          img.centrado(src="@/assets/curso/Tema2/img23.svg")
    
    separador
    #t_2_6.titulo-segundo.mb-5
      h2 2.6 Área de reservas 
           
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.col-md-9
        img(src='@/assets/curso/Tema2/img24.png', alt='')
      .col-lg-7
        .row
          .col-lg-2.col-3.col-md-2.d-none.d-lg-block

            img(src='@/assets/curso/Tema2/img04.png', alt='').mb-3
          .col-lg-10
            p El área o departamento de reservas tiene en la gran mayoría de los casos el primer contacto con los clientes que en un futuro inmediato visitarán el hotel; manteniendo contacto permanente con los diferentes tipos de clientes: agencias de viajes, empresas y particulares.
        p Este departamento se encarga de administrar de manera eficiente la disponibilidad de habitaciones, procurando siempre venderlas de la forma más conveniente y rentable para el hotel.
        p Las reservas pueden ser telefónicas, directas, virtuales, por grupos y a través de sistemas de reservaciones o Sistema de Distribución Global (por sus siglas en inglés GDS).
    

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
            h3.bg7.py-2.w-card-text Funciones  

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-4
        .col-lg-12.col-md-12.col-12
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/Tema2/img25.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              br
              p.mb-4 El personal que labore en reservas debe dar a conocer los servicios que ofrece el establecimiento con el propósito de lograr una venta efectiva con el cliente, igualmente debe poseer los conocimientos necesarios que implica el proceso de reservaciones.  
              br
              br
              p Tiene como principal función la recepción y control de las solicitudes de espacio para la reserva de habitaciones, tanto de las agencias de viajes, como de otras empresas y público en general, además cumple con una importante labor en el proceso de venta de habitaciones, manteniendo actualizada la recepción, respecto a la situación ocupacional del hotel, con el objetivo de captar la mayor cantidad de clientes. 
              br
              br

    p.mb-4 Es el primer contacto de los clientes con el hotel y debe proporcionar una imagen de amabilidad en el trato y eficiencia en la prestación de servicio.  

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema6/casa.png")
            h3.bg7.py-2.w-card-text Cualidades del personal de reservas 

    p.mb-4 Las cualidades que debe presentar el personal de reservas son:   


    .row.justify-content-center.align-items-center.fondo3.p-4
      .col-lg-11
        .row.justify-content-center.align-items-center
          .col-lg-3.col-7.mb-3.col-md-5
            img(src="@/assets/curso/Tema2/img26.png")
          .col-lg-9
            .row.justify-content-center.align-items-center
              .col-lg-12.col-12.col-md-12
                SlyderF(columnas="col-lg-3 col-xl-5 col-md-12")
                  .tarjeta.color-slyder.p-4
                    .row.justify-content-center
                      .col-12
                        img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema2/ico11.png' alt='AvatarTop')
                        .row.justify-content-center
                          .col-12.mb-2
                            h4.text-center.bg1.p-1 Presentación personal
                          .col-12.mb-4 
                            p.text-center.mb-0 Excelente presentación personal acorde a las normas de etiqueta y protocolo (aseo personal, portar adecuadamente el uniforme, buena postura).
                  
                  .tarjeta.color-slyder.p-4
                    .row.justify-content-center
                      .col-12
                        img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema2/ico2.png' alt='AvatarTop')
                        .row.justify-content-center
                          .col-9.mb-2
                            h4.text-center.bg1.p-1 Amabilidad
                          .col-12.mb-4 
                            p.text-center.mb-0 Amabilidad y cortesía, ser respetuoso de la necesidad de las personas, actuando con buena actitud y muy receptivo.


                  .tarjeta.color-slyder.p-4
                    .row.justify-content-center
                      .col-12
                        img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema2/ico3.png' alt='AvatarTop')
                        .row.justify-content-center
                          .col-12.mb-2
                            h4.text-center.bg1.p-1 Comunicación verbal
                          .col-12.mb-4 
                            p.text-center.mb-0 Comunicación verbal, vocabulario sencillo, comprensible y apropiado, hablar fluida y tranquilamente, evitando respuestas monosilábicas.

                  .tarjeta.color-slyder.p-4
                    .row.justify-content-center
                      .col-12
                        img.img-a.img-t.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/Tema2/ico4.png' alt='AvatarTop')
                        .row.justify-content-center
                          .col-12.mb-2
                            h4.text-center.bg1.p-1 Comunicación no verbal 
                          .col-12.mb-4 
                            p.text-center.mb-0 Comunicación no verbal, cuidar movimientos corporales, su expresión facial, comunicación visual y táctil. Manejar la distancia proxémica con el huésped. 













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
