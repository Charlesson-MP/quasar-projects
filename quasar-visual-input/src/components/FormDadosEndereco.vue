<template>
  <div class="row q-gutter-y-sm q-pt-sm">
    <q-input
      v-model="text"
      label="Rua"
      class="col-12"
      v-bind="{...$visualInput}"
    />
    <q-input
      v-model="text"
      label="Complemento"
      class="col-12"
      v-bind="{...$visualInput}"
    />
  </div>
</template>

<script>
export default {
  name: 'FormDadosPessoais',
  data () {
    return {
      text: ''
    }
  }
}
</script>
