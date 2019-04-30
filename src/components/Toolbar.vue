<template>
  <v-toolbar
    app
    flat
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          max-height="55"
          @click="$vuetify.goTo(0)"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="ml-0 hidden-sm-and-down"
          flat
          @click="onClick($event, item)"
        >
          {{ link.text }}
        </v-btn>
        <v-spacer />
        <v-text-field
          append-icon="search"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          text: 'список чатов',
          to: '/'
        },
        {
          text: 'поиск',
          href: '#about'
        },
        {
          text: 'Обработка',
          href: '#oper'
        },
        {
          text: 'AUGUST4U.ORG',
          href: '#href'
        }
      ]
    }
  }
}
</script>
