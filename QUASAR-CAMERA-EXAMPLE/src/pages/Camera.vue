<template>
  <q-page padding>
    <div class="col">
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <p class="text-h6 text-center" text-color="white">Câmera</p>
          <div class="col-12 text-center">
            <video
              autoplay
              width="450rem"
              ref="videoplay"
            ></video>
          </div>
          <div class="col-12 text-center q-mt-lg">
            <q-btn
              v-if="!cameraStart"
              label="Acessar câmera"
              color="purple"
              icon="camera"
              :disable="!enableCamera"
              @click="useCamera"
            />
            <q-btn
              v-else
              label="TIRAR FOTO"
              color="positive"
              icon="camera"
              @click="takePhoto"
            />
          </div>
          <div class="col-12 text-center q-mt-lg">
            <img src="" ref="imgTakePhoto" width="250rem" />
          </div>
        </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageCamera',
  data () {
    return {
      enableCamera: false,
      cameraStart: false,
      imageCapture: null,
      track: null
    }
  },
  mounted () {
    if (navigator.mediaDevices.getUserMedia) {
      this.enableCamera = true
    }
  },
  methods: {
    useCamera () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.cameraStart = true
          this.$refs.videoplay.srcObject = mediaStream
          this.track = mediaStream.getVideoTracks()[0]
          this.imageCapture = new ImageCapture(this.track)
        })
    },
    takePhoto () {
      this.imageCapture.takePhoto()
        .then(blob => {
          createImageBitmap(blob)
          const reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onloadend = () => {
            this.$refs.imgTakePhoto.src = reader.result
            console.log(reader.result)
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
