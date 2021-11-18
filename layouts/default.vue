<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-img
          max-width="150"
          src="/logo.png"
        />
      </v-toolbar-title>
      <v-spacer />
      <template v-if="account">
        <v-btn
          color="white"
          class="black--text"
          @click="removeAccount"
        >
          Logout
        </v-btn>
      </template>
      <template v-else>
        <v-btn
          color="white"
          class="black--text"
          @click="getWalletAccounts"
        >
          Login
          <v-img
            max-width="40"
            src="/metamask.png"
          />
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Lore aprobado',
          to: '/lore-aprobado'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Lore pendiente',
          to: '/lore-pendiente'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Cómo publicar',
          to: '/como-publicar'
        }
      ],
    }
  },

  computed: {
    account() {
      return this.getAccount()
    }
  },

  methods: {
    getWalletAccounts() {
      // check if metamask is istalled
      if (typeof window.ethereum === 'undefined') {
        return
      }

      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          this.setAccount(accounts[0])
        })
    },

    ...mapActions({
      setAccount: 'user/setAccount'
    }),

    ...mapMutations({
      removeAccount: 'user/removeAccount'
    }),

    ...mapGetters({
      getAccount: 'user/getAccount'
    }),
  }
}
</script>
