<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      max-width="336">
      <v-card>
        <v-card-title class="headline">Авторизация<v-subheader>{{this.$store.state.dialogAuth.url}}</v-subheader></v-card-title>
        <v-card-text>
          <form name=login method=post :action="this.$store.state.dialogAuth.url">
            <input type=hidden name=sess>
            <v-text-field
              v-model="chatUrl"
              name="nick"
              prefix="Ник:"
            ></v-text-field>
            <v-text-field
              v-model="chatUrl"
              type="password"
              name="pass"
              prefix="Пароль:"
            ></v-text-field>
            <v-btn type="submit" block color="green">
              OK
            </v-btn>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false">
            Отмена
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  computed: {
    dialog: {
      get () {
        document.querySelectorAll('.scriptREM').forEach(function (e, i) {
          e.remove()
        })
        var script = document.createElement('script')
        script.classList.add('scriptREM')
        script.src = this.$store.state.dialogAuth.url + 'js/login.jsa'
        document.getElementsByTagName('head')[0].appendChild(script)

        script = document.createElement('script')
        script.classList.add('scriptREM')
        script.src = this.$store.state.dialogAuth.url + 'js/md5.js'
        document.getElementsByTagName('head')[0].appendChild(script)

        return this.$store.state.dialogAuth.s
      },
      set (s) {
        this.$store.dispatch('showDialog', {s: s, url: ''})
      }
    }
  }
}
</script>
