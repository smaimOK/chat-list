<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <toolbar />
          <v-alert
            v-model="success"
            dismissible
            type="success">
            {{$store.state.alerts.success.text}}
          </v-alert>
          <v-alert
            v-model="error"
            dismissible
            color="warning"
            icon="warning">
            {{$store.state.alerts.error.text}}
          </v-alert>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  data () {
    return {
    }
  },
  computed: {
    success: {
      get () {
        return this.$store.state.alerts.success.s
      },
      set () {
        this.$store.dispatch('showAlert', {type: -2})
      }
    },
    error: {
      get () {
        return this.$store.state.alerts.error.s
      },
      set () {
        this.$store.dispatch('showAlert', {type: -2})
      }
    }
  },
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
