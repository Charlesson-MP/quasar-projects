<template>
  <div>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-right"
            v-for="c in colunas" :key="c"
          >
            <q-skeleton animation="fade" type="text" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="l in linhas" :key="l">
          <td class="text-left"
            v-for="c in colunas" :key="c"
          >
            <q-skeleton animation="pulse" type="text" width="85px" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
export default {
  name: 'SkeletonTable',
  props: {
    colunas: {
      type: Number,
      default: 3,
      required: false
    },
    linhas: {
      type: Number,
      default: 3,
      required: false
    }
  }
}
</script>
