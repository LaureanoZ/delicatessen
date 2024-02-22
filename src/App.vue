<template>
  <div id="app">
    <Navbar v-if="showNavbar"></Navbar>
    <router-view :arrayProductos="productos" :carrito="arrayCarrito" @nuevo="nuevo" @elimino="elimino"/>
    <Footer></Footer>
    <!--    <probando></probando>-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer";

// import probando from "@/components/probando";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
    // probando
  },
  mounted() {
    console.log(this.$router)
    console.log(this.$route)
  },
  data() {
    return {
      productos: this.$store.state.productos,
      arrayCarrito: [],
    }
  },

  computed: {
    showNavbar() {
      const notNavbar = ['Register', 'Login'];
      return !notNavbar.includes(this.$route.name)
    }
  },

  methods: {
    nuevo(param) {
      this.arrayCarrito.push(param)
      console.log(this.arrayCarrito);
    },

    elimino(param) {
      debugger
      this.arrayCarrito.splice(param)
      console.log(this.arrayCarrito);
      // window.location.reload()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


