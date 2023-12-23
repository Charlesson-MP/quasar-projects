<template>
  <div>
    <q-card
      class="my-card bg-red-3 q-mb-md">
      <q-card-section>
        <div class="text-center q-my-md">
          <p class="text-h5">Player de vídeo</p>
          <q-media-player
            type="video"
            :sources="sourcesVideo"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'PlayerVideoPage',
  data () {
    return {
      sourcesVideo: [
        {
          src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
          type: 'audio/mp4'
        }
      ]
    }
  }
}
</script>
