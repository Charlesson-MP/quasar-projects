<template>
  <div class="row q-gutter-y-sm">
    <q-input
      v-model="text"
      label="Nome"
      class="col-12"
      v-bind="{...$visualInput}"
    />
    <q-input
      v-model="text"
      label="E-mail"
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
