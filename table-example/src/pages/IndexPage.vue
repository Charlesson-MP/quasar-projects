<template>
  <q-page>
    <div class="row">
      <q-table
        title="Tabela"
        :rows="posts"
        dark
        dense
        :columns="columns"
        row-key="id"
        class="col"
        separator="cell"
        selection="single"
        v-model:selected="selected"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              icon="edit"
              color="primary"
              size="sm"
              dense
              class="q-mr-md"
              @click="editPost(props.row)"
            />
            <q-btn
              icon="delete"
              color="negative"
              size="sm"
              dense
              @click="deletePost(props.row)"
            />
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'IndexPage',
  data () {
    return {
      columns: [
        {
          name: 'id',
          label: 'Id',
          align: 'left',
          field: 'id',
          sortable: true
        },
        {
          name: 'title',
          label: 'Título',
          align: 'left',
          field: 'title',
          sortable: true
        },
        {
          name: 'action',
          label: 'Action',
          field: 'action',
          align: 'center',
          sortable: true
        }
      ],
      posts: [],
      selected: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      axios.get(url)
        .then(res => {
          this.posts = res.data
        })
        .catch(err => {
          console.error('Erro: ', err)
        })
    },
    editPost (idPost) {
      console.log(idPost)
    },
    deletePost (idPost) {
      console.log(idPost)
    }
  }
}
</script>
