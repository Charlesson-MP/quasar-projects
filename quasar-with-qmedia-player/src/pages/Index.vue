<template>
  <q-page padding >
    <q-card
      class="my-card bg-blue-3 q-mb-md">
      <q-card-section>
        <div class="text-center q-my-md">
          <p class="text-h5">Player de audio</p>
          <q-media-player
            type="audio"
            :sources="sourcesAudio"
          />
        </div>
      </q-card-section>
    </q-card>

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
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      sourcesAudio: [
        {
          src: 'https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/public/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3',
          type: 'audio/mp3'
        }
      ],
      sourcesVideo: [
        {
          src: 'http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4',
          type: 'audio/mp4'
        }
      ],
      forms: {
        nome: ''
      }
    }
  }
}
</script>
