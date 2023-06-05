<template>
  <q-page class="row">
    <div class="col-12 q-pa-lg">

      <div class="text-h6">Página de Auth com Google</div>

      <div class="">

        <q-btn
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

export default defineComponent({
  name: 'ProfilePage',
  setup () {

     return {

         startGoogleAuth () {

             const provider = new GoogleAuthProvider();

             signInWithPopup(auth, provider)
                 .then((result) => {
                     // This gives you a Google Access Token. You can use it to access the Google API.
                     const credential = GoogleAuthProvider.credentialFromResult(result);
                     const token = credential.accessToken;
                     // The signed-in user info.
                     const user = result.user;

                     console.log('user auth: ', user)

                     // IdP data available using getAdditionalUserInfo(result)
                     // ...
                 }).catch((error) => {
                     // Handle Errors here.
                     const errorCode = error.code;
                     const errorMessage = error.message;
                     // The email of the user's account used.
                     const email = error.customData.email;
                     // The AuthCredential type that was used.
                     const credential = GoogleAuthProvider.credentialFromError(error);

                     console.error('Ocorreu um erro: ', error)

                 });


         }

     }

  }
})
</script>
