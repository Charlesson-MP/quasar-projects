<template>
  <div class="q-pa-md row q-gutter-md">
    <q-card
    v-for="c in cards" :key="c"
      style="max-width: 300px; width: 200px"
    >
      <q-skeleton height="200px" square />
      <q-item>
        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'SkeletonCard',
  props: {
    cards: {
      type: Number,
      default: 3,
      required: false
    }
  }
}
</script>
