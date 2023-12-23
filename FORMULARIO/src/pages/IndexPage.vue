<template>
  <q-page class="container q-mt-md">
    <p class="text-h4" style="text-align: center">Formulário</p>

    <q-form class="row q-gutter-y-sm q-mx-md"
      @submit="onSubmit"
      @reset="onReset"
      ref="myForm"
    >
      <!--Caixa de entrada para nome-->
      <q-input
        outlined
        v-model="form.nome"
        label="Nome"
        :rules="[
          val => val != '' || 'Campo obrigatório.'
        ]"
        class="col-xs-12
               col-sm-12
               col-md-12"
      >
        <template v-slot:prepend>
          <q-icon name="person"/>
        </template>
      </q-input>
      <!--Fim caixa de entrada do nome-->

      <!--Caixa de entrada para idade-->
      <q-input
        outlined
        type="number"
        v-model="form.idade"
        label="Idade"
        :rules="[
          val => val !== '' || 'Campo obrigatório.',
          val => val > 0 && val < 100 || 'Valor inválido.'
        ]"
        class="col-xs-12
               col-sm-12
               col-md-12"
      >
        <template v-slot:prepend>
          <q-icon name="person"/>
        </template>
      </q-input>
      <!--Fim da caixa de entrada para idade-->

      <!--Caixa de entrada para o email-->
      <q-input
        outlined
        v-model="form.email"
        label="E-mail"
        suffix="@gmail.com"
        :rules="[
          val => val.length > 0 || 'Campo obrigatório.'
        ]"
        class="col-xs-12
               col-sm-12
               col-md-12"
      >
        <template v-slot:prepend>
          <q-icon name="mail"/>
        </template>
      </q-input>
      <!--Fim da caixa de entrada do email-->

      <!--Caixa de entrada para telefone-->
      <q-input
        outlined
        v-model="form.telefone"
        label="Telefone"
        mask="(##)#####-####"
        unmasked-value
        :rules="[
          val => val !== null && val !== '' || 'Campo obrigatório.',
          val => val.length === 11 || 'Valor inválido.'
        ]"
        class="col-xs-12
               col-sm-12
               col-md-12"
      >
        <template v-slot:prepend>
          <q-icon name="phone"/>
        </template>
      </q-input>
      <!--Fim da caixa de entrada para telefone-->

      <!--Q-select component-->
      <q-select
        outlined
        v-model="form.tipoPessoa"
        label="Tipo de pessoa"
        :options="optionsTipoPessoa"
        emit-value
        map-options
        :rules="[
          val => val && val.length > 0 || 'Campo obrigatório.'
        ]"
        class="col-xs-12
               col-sm-12
               col-md-12"
      >
        <template v-slot:prepend>
          <q-icon name="person"/>
        </template>
      </q-select>
      <!--Fim q-select component-->

      <span class="text-bold">Sexo:</span>

      <!--Inicio radio button-->
      <q-option-group
        label="Sexo"
        :options="optionsSexo"
        type="radio"
        v-model="form.sexo"
        class="col-xs-2
               col-sm-2
               col-md-2
               q-mr-xl"
      />
      <!--Fim do radio button-->

      <span class="text-bold">Dificuldades:</span>

      <!--Inicio checkbox-->
      <q-option-group
        :options="optionsDificuldades"
        type="checkbox"
        v-model="form.dificuldades"
      />
      <!--Fim checkbox-->

      <!--Inicio toogle-->
      <q-toggle
        v-model="form.concordar"
        color="prymary"
        label="Receber notificações?"
        size="lg"
        icon="notifications"
        class="col-xs-12
               col-sm-12
               col-md-12
               q-my-lg"
      ></q-toggle>
      <!--Fim toogle-->

      <!--Botões-->
      <div class="col-12">
        <!--Botão reset-->
        <q-btn color="primary"
          type="submit"
          label="Submit"
          class="float-right"
        ></q-btn>
        <!--Fim do botão reset-->

        <!--Botão reset-->
        <q-btn color="default"
          type="reset"
          label="Reset"
          class="float-right text-grey-10 q-mr-md"
        ></q-btn>
        <!--Fim do botão reset-->
      </div>
      <!--Fim dos botões-->

    </q-form>

  </q-page>
</template>

<script lang="ts">

export default {
  name: 'IndexPage',

  data () {
    return {
      form: {
        nome: '',
        idade: null,
        email: '',
        telefone: '',
        tipoPessoa: '',
        sexo: 'NI',
        dificuldades: [],
        concordar: false
      },

      optionsTipoPessoa: [
        { label: 'Pessoa fisica', value: 'pf' },
        { label: 'Pessoa jurídica', value: 'pj' }
      ],

      optionsSexo: [
        { label: 'Masculino', value: 'M', color: 'blue' },
        { label: 'Feminino', value: 'F', color: 'pink' },
        { label: 'Não informar', value: 'NI', color: 'grey' }
      ],

      optionsDificuldades: [
        { label: 'Motora', value: 'motora', color: 'red' },
        { label: 'Visual', value: 'Visual', color: 'purple' },
        { label: 'Auditiva', value: 'auditiva', color: 'grey' }
      ]
    }
  },

  methods: {
    onSubmit () {
      this.$q.notify({
        message: 'Cadastro concluído',
        color: 'positive',
        icon: 'check_circle_outline'
      })
      this.onReset()
    },

    async onReset () {
      await this.resetForm()
      this.$refs.myForm.resetValidation()
    },

    async resetForm () {
      this.form = {
        nome: '',
        idade: null,
        email: '',
        telefone: '',
        tipoPessoa: '',
        sexo: 'NI',
        dificuldades: [],
        concordar: false
      }
    }
  }
}
</script>
