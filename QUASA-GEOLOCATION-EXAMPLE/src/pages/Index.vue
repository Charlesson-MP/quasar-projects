<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-6">
        <img
          alt="Quasar logo"
          src="~assets/map-monochromatic.svg"
        >
      </div>
    </div>
    <div
     class="row justify-center"
    >
    <div
      class="col-10 text-center"
    >
      <p>Latitude: {{ this.latitude }}</p>
      <p>Longitude: {{ this.longitude }}</p>
    </div>
    </div>
    <div class="row justify-center q-mt-lg">
        <q-btn
          class="col-5"
          label="Minha localização"
          color="purple"
          push
          size="lg"
          @click="getGeolocation"
        />
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      latitude: '',
      longitude: ''
    }
  },
  methods: {
    getGeolocation () {
      if (navigator.geolocation) {
        this.$q.loading.show()
        navigator.geolocation.getCurrentPosition(this.setPosition, this.errorPosition)
      } else {
        this.errorPosition()
      }
    },
    setPosition (position) {
      const coords = position.coords
      this.latitude = coords.latitude
      this.longitude = coords.longitude
      this.$q.loading.hide()
      this.sucessNotify()
    },
    errorPosition () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'negative',
        textColor: 'white',
        actions: [{ icon: 'close', color: 'white' }],
        message: 'Posição não recuperada!'
      })
      this.$q.loading.hide()
    },
    sucessNotify () {
      this.$q.notify({
        position: 'bottom',
        timeout: 3000,
        color: 'positive',
        textColor: 'white',
        actions: [{ icon: 'check', color: 'white' }],
        message: 'Posição recuperada com sucesso!'
      })
    }
  }
}
</script>
