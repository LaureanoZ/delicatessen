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
          <b-card-text class="fw-bold">Como pagar</b-card-text>
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
          <b-card-text class="fw-bold">La mejor calidad</b-card-text>
          <b-card-text class="fst-italic">Excelente calidad y variedad de sus productos a través del tiempo.</b-card-text>
        </b-card>

        <b-card
            class="m-4 border rounded-3 shadow"
            border-variant="default"
            header-bg-variant="default"
            header-text-variant="black"
            align="center"
        >
          <b-icon icon="shield-exclamation" aria-hidden="true"></b-icon>
          <b-card-text class="fw-bold">Seguridad</b-card-text>
          <b-card-text class="fst-italic">¿No te gusta? ¡Devolvelo! No hay nada que no puedas hacer, porque estás siempre protegido.</b-card-text>
        </b-card>

      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionInformacion"
}
</script>

<style scoped>

</style>
