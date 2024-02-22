<template>
  <div>
    <div v-show="carrito.length === 0">
      <div>
        <h1 class="pseudoTitulo"></h1>
        <p class="fst-italic">Agregue productos a su carrito :)</p>
        <b-img class="mb-5" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
      </div>
      <router-link class="text-decoration-none" to="/productos">
        <b-button class="text-white border p-3 overflow-hidden bg-dark">Redirigirse a Productos</b-button>
      </router-link>
    </div>

    <div  v-show="carrito.length !== 0">
      <h1 class="pseudoTitulo2"></h1>
    </div>

    <div class="m-2 row row-cols-1 row-cols-md-2 g-4">
      <div>
        <div class="m-2 p-2">
          <b-card
              v-for="product in carrito" :key="product.id"
              no-body
              class="overflow-hidden m-2 p-2"
          >
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="product.imagenProducto" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title=product.titulo>
                  <b-card-text>
                    {{ product.descripcion }}
                  </b-card-text>

<!--                  <div class="quantity-toggle text-center">-->
<!--                    <button class="h3 m-2 p-3 text-center">-->
<!--                      <b-icon icon="trash" @click="eliminarCarrito(product)"></b-icon>-->
<!--                    </button>-->
<!--                  </div>-->

                  <b-card-text class="text-center p-2 fw-bold mt-3">
                    {{ product.subdescipcion }}
                  </b-card-text>
                </b-card-body>

              </b-col>
            </b-row>

          </b-card>
        </div>

      </div>
      <div v-if="carrito.length">
        <div

            class="m-2 p-3"

        >
          <b-card
              class="fw-bold"
              header="DELICATESSEN"
              header-tag="header"
              title="Resumen de Compra"
          >
            <b-card-text class="text-decoration-underline">Productos:</b-card-text>
            <b-card-text class="fst-italic" v-for="product in carrito" :key="product.id"> - {{ product.titulo }} <br>
              ${{ product.precio }}
            </b-card-text>

            <!--            <b-card-text class="text-decoration-underline">{{-->
            <!--                `El total de tus compras es`-->
            <!--              }}-->
            <!--            </b-card-text>-->
            <!--            <b-card-text v-for="product in carrito" :key="product.id" @click="sumaTotales()">{{-->
            <!--                product.precio-->
            <!--              }}-->
            <!--            </b-card-text>-->

            <!--          Modal -->
                              <div class="quantity-toggle text-center d-inline">
                                <button class="h3 m-2 p-3 text-center border" title="Borrar Todo">
                                  <b-icon icon="trash" @click="eliminarCarrito(product)"></b-icon>
                                </button>

                              </div>
            <b-button v-model="modalShow" @click="modalShow = !modalShow" href="#" variant="danger">Pagar</b-button>
            <b-modal v-model="modalShow">Muchas Gracias por su compra! Vuelva prontos!</b-modal>

          </b-card>
        </div>
      </div>

    </div>
    <InfoCarrito></InfoCarrito>
  </div>

</template>

<script>
import InfoCarrito from "@/components/InfoCarrito";

export default {
  name: "Carrito",
  components: {
    InfoCarrito
  },
  props: {
    carrito: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      quantity: 1,
      modalShow: false,
    }
  },
  methods: {
    eliminarCarrito(id) {
      this.$emit("elimino", id)
      console.log("eliminarCarrito")
    },

  }

}
</script>

<style scoped>

h1 {
  color: #918696;
  font-family: 'Raleway', monospace;
  font-weight: 600;
}

section {
  font-family: 'Open Sans', monospace;
  font-weight: 600;
}

.pseudoTitulo {
  margin-top: 10px;
  padding: 10px;
  border: 4px dashed #d0d0d0;
}

.pseudoTitulo::before {
  content: 'Carrito ';
  color: #020024;
}

.pseudoTitulo::after {
  content: 'Vacio';
  color: #d0d0d0;
}


.pseudoTitulo2 {
  margin-top: 10px;
  padding: 10px;
  border: 4px dashed #d0d0d0;
}

.pseudoTitulo2::before {
  content: 'Tu ';
  color: #020024;
  font-weight: 600;

}

.pseudoTitulo2::after {
  content: 'Carrito';
  color: #d0d0d0;
  font-weight: 600;

}


input {
  border: 0;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  width: 2.5rem;
  text-align: center;
  padding: 0.5rem;
}

button {
  border: 2px solid #ddd;
  padding: .5rem;
  background: #f5f5f5;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
}


</style>
