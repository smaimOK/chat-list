<template>
  <v-layout column>
    <v-flex  xs12 mb-2>
      <chat-add />
    </v-flex>
    <v-flex  xs12>
      <chat-list />
    </v-flex>
  </v-layout>
</template>

<script>
import ChatList from '@/components/ChatList'
import ChatAdd from '@/components/ChatAdd'

export default {
  components: {
    ChatList,
    ChatAdd
  }
}
</script>

<style scoped>

</style>
