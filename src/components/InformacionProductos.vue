<template>
  <div class="bg-light vh-320">
    <h1 class="pseudoTitulo">Productos</h1>
    <div class="container col-12 ">
      <b-row>
        <b-col sm="12" xs="12" lg="4" v-for="producto in productos" :key="producto.id" >
          <b-card
              :title=producto.tituloProducto
              :img-src=producto.imgProducto
              img-top
              tag="article"
              style=""
              class="m-3 shadow"
          >
            <b-card-text style="overflow: hidden">
              {{ producto.descripcionProducto }}
            </b-card-text>

            <b-card-text>
              Precio: ${{ producto.precio }}
            </b-card-text>

            <b-button class="botonComprar" href="#" variant="dark" @click="enviarCarrito(producto.id)" title="Agregar al Carrito">COMPRAR</b-button>
          </b-card>
        </b-col>
      </b-row>

    </div>
    <SectionInformacion></SectionInformacion>


  </div>
</template>

<script>
import SectionInformacion from "@/components/SectionInformacion";
export default {
  name: "InformacionProductos",
  props: {
    // arrayProductos: {
    //   type: Array,
    //   default: () => []
    // },
  },
  components: {
    SectionInformacion
  },
  created() {
    this.$store.dispatch('getProducts')

  },
  data() {
    return {

    }
  },

  methods: {
    enviarCarrito(id) {
      const nuevo = {
        titulo: this.productos[id].tituloProducto,
        descripcion: this.productos[id].descripcionProducto,
        precio: this.productos[id].precio,
        imagenProducto: this.productos[id].imgProducto,
        subdescipcion: this.productos[id].subdescipcion
      }
      this.$emit("nuevo", nuevo)
    }
  },
  computed: {
    productos(){
      return this.$store.state.productos
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500;1,600&family=Raleway:ital,wght@0,300;1,500;1,600&display=swap');

h1 {
  color: #918696;
  font-family: 'Raleway', monospace;
  font-weight: 600;
}

section {
  font-family: 'Open Sans', monospace;
  font-weight: normal;
}


.pseudoTitulo {
  margin-top: 10px;
  padding: 10px;
  border: 4px dashed #d0d0d0;
}

.pseudoTitulo::before {
  content: 'Los Mejores ';
  color: #020024;
}

.pseudoTitulo::after {
  content: ' Los Encuentras Aqui!';
  color: #d0d0d0;

}

.botonComprar:hover {
  background-color: #B23A48;
}


/*h1::before {*/
/*  content: '';*/
/*  animation: flip 6s linear infinite;*/
/*}*/

/*@keyframes flip {*/
/*  from { content: 'Los Mejores Productos ...'; }*/
/*  to { content: 'Los Encuentras Aqui'; }*/
/*}*/

</style>
