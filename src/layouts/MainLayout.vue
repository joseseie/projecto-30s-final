<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!--<q-btn flat round dense icon="menu" class="q-mr-sm" />-->

        <q-toolbar-title>30s Auth</q-toolbar-title>

        <q-btn flat round dense>
          <q-avatar>
            <img
                v-if="authStore.userAuth"
                :src="authStore.userAuth.photoURL"
            >
            <img
                v-else
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            >
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 180px">

              <q-item to="/" exact clickable v-close-popup>
                <q-item-section>Página Inicial</q-item-section>
              </q-item>

              <q-item to="/google-auth" exact clickable v-close-popup>
                <q-item-section>Google Auth</q-item-section>
              </q-item>

              <q-item to="/profile" exact clickable v-close-popup>
                <q-item-section>Perfil</q-item-section>
              </q-item>
              <q-separator />

              <q-item @click="authStore.logotUser()" clickable exact v-close-popup class="text-negative">
                <q-item-section>Logout</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>


      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from 'stores/auth-store'

export default defineComponent({
  name: 'MainLayout',
  setup () {

    const router = useRouter()
    const authStore = useAuthStore()

    return {
      router,
      authStore,

      userStateChange (router) {
          authStore.userAuthStateChange(router)
      }
    }
  },
    mounted() {
        this.userStateChange(this.$router)
    },
})
</script>
