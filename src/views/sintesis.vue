<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La hotelería creada desde un principio para brindar hospitalidad a los viajeros que necesitan pernoctar y tener sus servicios básicos como alojamiento. 
    p Desde ahí se crea la necesidad de brindar atención, bienestar y confort a un turista que se traslada de un lugar a otro y busca un lugar seguro para descansar y atender sus necesidades primarias (higiene, descanso, alimentación). 
    p Con el paso del tiempo la legislación colombiana estableció leyes que rigen esta actividad de manera responsable, organizada y articulada con los demás sectores turísticos como agencias de viajes, cadenas de transporte y guías profesionales entre otros. 
    p En el siguiente mapa conceptual se puede identificar como primera línea la normativa de formalización con las leyes que regulan esta actividad, los conceptos básicos de los establecimientos de alojamiento y hospedaje, los tipos de alojamiento y hospedaje que están definidos en la norma, la clasificación que se les da en Colombia según su categoría; y los tipos de habitación que de acuerdo con la norma, puede establecer un establecimiento de alojamiento y hospedaje.
    p Como segunda línea del mapa conceptual se encuentran los servicios complementarios que ofrece el establecimiento de alojamiento según su categoría, los tipos de clientes que llegan a hospedarse, el área de reservas, cuya actividad principal es dar atención a todos los clientes que necesitan solicitar un servicio de hospedaje con el establecimiento y dar solución a las peticiones del cliente.
    p Como tercera línea del mapa conceptual se aprecia el tema de la comunicación como base fundamental para enlazar una conversación con el cliente clara, oportuna, respetuosa y cordial.
    p Luego se encuentra la línea de servicio al cliente donde se aprecia la importancia de brindar satisfacción al cliente utilizando técnicas, protocolos en el servicio al cliente y aplicando la ética en el servicio.
    p Encontramos en la quinta línea el sistema de información de alojamiento turístico que tiene como finalidad el registro de los datos del cliente.
    p Y por último en la sexta línea no menos importante que las demás se encuentran las estrategias que se pueden utilizar para ofrecer un producto y lograr una venta efectiva.  
 
  
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/SINTESIS.pdf')" target="_blank")
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
