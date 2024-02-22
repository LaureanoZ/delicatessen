<template>
  <div class="bg-light p-3">
    <b-list-group class="m-5" v-for="(producto) in productos" :key="producto.id">
      <b-list-group-item >
        {{ producto.tituloProducto }}
      </b-list-group-item>
      <b-list-group-item >
        {{ producto.precio }}
      </b-list-group-item>
      <b-list-group-item >
        {{ producto.descripcionProducto }}
      </b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Listado",
  data() {
    return {
      productos: this.$store.state.productos,
    }
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  methods: {}
}
</script>

<style scoped>

</style>