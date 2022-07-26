<template>
  <v-app>
    <v-navigation-drawer
      permanent
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <img class="menu-logo" src="~/assets/robot.png" />
            <v-list-item-title class="text-h6"> Synker </v-list-item-title>
            <v-list-item-subtitle>
              Welcome {{ this.$auth.$state.user.firstName }}!
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          active-class="active"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="logout" block color="primary"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-music-box',
          title: 'Spotify',
          to: '/spotify',
        },
        {
          icon: 'mdi-music-box-multiple',
          title: 'Apple Music',
          to: '/apple-music',
        },
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Synker',
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()

      this.$router.push('/login')
    },
  },
}
</script>

<style>
html {
  font-family: 'Oxygen';
}
.menu-logo {
  width: 5px;
  margin-bottom: 20px !important;
}
.active {
  left: 20px;
}
</style>
