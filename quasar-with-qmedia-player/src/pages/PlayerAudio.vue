<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: 'PlayerAudioPage',
  data () {
    return {
      sourcesAudio: [
        {
          src: 'https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/public/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3',
          type: 'audio/mp3'
        }
      ]
    }
  }
}
</script>
