<template>
  <v-flex md12 lg8 offset-lg2>
    <dialog-auth />
    <panel title="Лучшие чаты">
      <v-btn
        slot="action"
        fab
        class="grey lighten-2"
        light
        absolute
        right
        middle
        @click="refreshList">
        <v-icon>refresh</v-icon>
      </v-btn>
      <transition-group name="flip-list" tag="div" v-if="$store.state.chatList.length > 0">
      <div v-for="chat in $store.state.chatList" :key="chat.id" class="elevation-1 mb-4 mt-5 flat dense">
          <v-toolbar flat dense class="while">
            <v-progress-circular
             :size="50"
             :width="5"
             color="primary"
             indeterminate
             absolute left
             v-if="$store.state.isUpdate"
             @click="chat.aa = !chat.aa"></v-progress-circular>
            <v-btn  v-if="!$store.state.isUpdate" @click="chat.aa = !chat.aa" class="col-online grey lighten-3 display-2 color-cornflowerblue" absolute left fab>{{chat.online}}</v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title><img :src="chat.url+'favicon.ico'" class="mr-2"/>{{chat.url}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat class="lighten-3 grey" @click="cc(chat.url)">
              Открыть
            </v-btn>
          </v-toolbar>
      </div>
      </transition-group>
    </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'
import DialogAuth from '@/components/DialogAuth'

export default {
  data () {
    return {
      chats: [
        {
          id: 1,
          url: 'http://j-love.ru/',
          online: 15,
          aa: false
        },
        {
          id: 2,
          url: 'http://j-love.ru/',
          online: 18,
          aa: false
        },
        {
          id: 3,
          url: 'http://j-love.ru/',
          online: 10,
          aa: false
        }
      ]
    }
  },
  methods: {
    cc (url) {
      this.$store.dispatch('showDialog', {s: true, url: url})
    },
    refreshList () {
      this.$store.dispatch('updateListChat')
    }
  },
  components: {
    Panel,
    DialogAuth
  }
}
</script>

<style scoped>
  .col-online {
    text-align: center;
    width: 70px;
    height: 70px;
  }
  .flip-list-move {
    transition: transform 1s;
  }
</style>
