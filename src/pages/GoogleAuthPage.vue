<template>
  <q-page class="row">
    <div class="col-12 q-pa-lg">

      <div class="text-h6">Página de Auth com Google</div>


      <div class="">

        <div v-if="authStore.userAuth" class="text-h6 text-positive q-mt-md">
          Parabéns, você está autenticado como: <b>{{  authStore.userAuth.displayName }}</b>
        </div>

        <q-btn
          v-else
          @click="startGoogleAuth()"
          label="Google Auth"
          class="q-mt-xl"
          color="red-9"
          size="2em"
        />

      </div>

    </div>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue'
import { auth } from "../boot/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthStore } from "../stores/auth-store";

export default defineComponent({
  name: 'ProfilePage',
  setup () {

      const authStore = useAuthStore()

     return {
         authStore,

         startGoogleAuth () {

             authStore.googleSignIn()


         }

     }

  }
})
</script>
