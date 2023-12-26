<template>
  <q-page padding>
    <form-dados-pessoais/>
    <form-endereco/>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components: {
    FormDadosPessoais: () => import('components/FormDadosPessoais.vue'),
    FormEndereco: () => import('components/FormDadosEndereco.vue')
  }
}
</script>
