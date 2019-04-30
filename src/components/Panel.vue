<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="blue darken-4" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <slot name="action">
      </slot>
    </v-toolbar>

    <div class="pl-2 pr-2 pt-2 pb-2">
      <slot>
        Загрузка ...
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
