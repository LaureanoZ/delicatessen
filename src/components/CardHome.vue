<template>
  <div>
    <b-card
        class="bg-dark"
        overlay
        img-src="https://picsum.photos/1000/1000/?image=1080"
        img-alt="Card Image"
        text-variant="white"
        sub-title="HOME"
    >
      <div class="small  blockquote">
        <b-card-text class="p-3  fst-italic">
          <h1 class="tituloHome">Delicatessen</h1>
          <!--          <h3 class="">Bienvenidos a Nuestra Web App Oficial</h3>-->
          <p>
            Amantes del buen gusto y sabores exoticos </p>
          A través de la merienda creamos nuestro propio universo <br> y elegimos con quién compartirlo.
          <br> Cada receta es un nexo <br> que conecta personas  con <br> sensaciones, momentos, rituales y lugares.
        </b-card-text>

        <router-link to="/productos">
          <b-button class="m-2 p-2 btnHome">Productos</b-button>
        </router-link>

        <router-link to="/locales">
          <b-button class="m-2 p-2 text-white btnHome">Locales</b-button>
        </router-link>

      </div>
    </b-card>
  </div>

</template>

<script>
export default {
  name: "CardHome"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500;1,600&family=Raleway:ital,wght@0,700;0,800;1,600;1,700;1,800&display=swap');

.tituloHome {
  font-size: 90px;
  font-family: 'Raleway', monospace;
  font-weight: 400;
  /*font-style: oblique;*/
}

.btnHome {
  background-color: #A93744;
  font-weight: bold;
  font-style: oblique;
}

.btnHome:hover {
  background-color: #4D191F;

}
</style>
