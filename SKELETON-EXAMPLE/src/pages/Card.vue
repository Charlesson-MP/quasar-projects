<template>
  <div
    class=" q-pa-md row items-start"
  >
    <skeleton-card
      v-if="load"
    />
    <div
      class="col-12 row q-col-gutter-md"
      v-else
    >
      <div
      v-for="c in 4" :key="c"
      class="col-4"
      >
        <q-card
        class="my-card"
        >
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardPage',
  components: {
    SkeletonCard: () => import('components/skeletons/SkeletonCard')
  },
  data () {
    return {
      load: true,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  mounted () {
    setTimeout(() => {
      this.load = false
    }, 3000)
  }
}
</script>
