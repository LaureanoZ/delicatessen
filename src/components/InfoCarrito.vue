<template>
  <div class="container shadow">
    <div class="m-4">
      <b-card-group class="m-2 p-3">
        <b-card
            class="m-4 border rounded-3 shadow "
            border-variant="default"
            header-bg-variant="default"
            header-text-variant="black"
            align="center"
        >
          <b-icon icon="credit-card2-front" aria-hidden="true"></b-icon>
          <b-card-text class="fw-bold">Como Pagar</b-card-text>
          <b-card-text class="fst-italic">Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas.</b-card-text>
        </b-card>

        <b-card
            class="m-4 border rounded-3 shadow"
            border-variant="default"
            header-bg-variant="default"
            header-text-variant="black"
            align="center"

        >
          <b-icon icon="check-square" aria-hidden="true"></b-icon>
          <b-card-text class="fw-bold">No pierdas tiempo</b-card-text>
          <b-card-text class="fst-italic">No hagas filas. Gana tiempo comprando por nuestra Web App.</b-card-text>
        </b-card>

        <b-card
            class="m-4 border rounded-3 shadow"
            border-variant="default"
            header-bg-variant="default"
            header-text-variant="black"
            align="center"
        >
          <b-icon icon="shield-exclamation" aria-hidden="true"></b-icon>
          <b-card-text class="fw-bold">Retiro</b-card-text>
          <b-card-text class="fst-italic">Para retirar tu producto deberas dirigirte a la caja con tu DNI en mano.</b-card-text>
        </b-card>

      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCarrito"
}
</script>

<style scoped>

</style>
