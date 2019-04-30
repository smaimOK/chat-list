<template>
  <v-flex md12 lg8 offset-lg2>
     <panel title="Добавить свой чат">
       <v-toolbar flat dense class="while">
         <v-icon large v-show="!$vuetify.breakpoint.xs">stars</v-icon>
          <v-spacer v-show="!$vuetify.breakpoint.xs"></v-spacer>
          <v-subheader v-show="!$vuetify.breakpoint.xs">Укажите адресс чата</v-subheader>
          <v-toolbar-title>
            <v-text-field
              label="Ваш url чата"
              placeholder="demo.august4u.ru"
              v-model="chatUrl"
              prefix="http://"
            ></v-text-field>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn flat block round dark class="green" @click="addChat">
            <v-icon>add</v-icon>
            Добавить
          </v-btn>
        </v-toolbar>
     </panel>
  </v-flex>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      chatUrlDef: 'demo.august4u.ru',
      chatUrl: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    addChat () {
      if (this.chatUrl === this.chatUrlDef || this.chatUrl === '') return

      this.chatUrl = this.chatUrl.replace(/^.*:\/\//i, '')
      this.chatUrl = 'http://' + this.chatUrl + (this.chatUrl[this.chatUrl.length - 1] !== '/' ? '/' : '')

      this.$store.dispatch('addChat', {chat_url: this.chatUrl})
      console.log(this.chatUrl)
      this.chatUrl = ''
    }
  },
  mounted () {
    this.$store.dispatch('updateListChat')
    setInterval(() => {
      console.log('update')
      this.$store.dispatch('updateListChat')
    }, 1000 * 60 * 5)
  }
}
</script>
