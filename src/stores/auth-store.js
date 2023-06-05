import { defineStore } from 'pinia';

import {
  auth,
  provider,
  SDKGoogleAuthProvider,
  handleSignInWithPopup,
  handleCreateUserWithEmailAndPassword,
  handleSignInWithEmailAndPassword,
  handleOnAuthStateChanged,
  handleSignOut,
} from "boot/firebase";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userAuth: null,
  }),
  getters: {

    getUserAuth: (state) => state.userAuth,

  },
  actions: {

    setUserAuth (user) {

        this.userAuth = user

    },


    userAuthStateChange ($router) {

        console.log('userAuthStateChange()...')
      // TODO: Quando estiver a processar a autenticacao, mostrar algum loading...
      handleOnAuthStateChanged(auth, (user) => {

        if (user) {

          this.userAuth = user

          // ...
        } else {

          this.userAuth = null

        }

      });
    },


    async googleSignIn() {

        // console.log('provider: ', provider)
        // return
      return handleSignInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = SDKGoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;

          this.userAuth = user

          console.log('Autenticado com sucesso...')

          return user


        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = SDKGoogleAuthProvider.credentialFromError(error);

            console.error('Ocorreu um erro autenticando com Google', error)

          return null

      });


    },

    autoCreateUser() {

      const email = 'teste@gmail.com'
      const password = '123456'

      handleCreateUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          // Signed in
          const user = userCredential.user;


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;


        });


    },

    logotUser() {

        return handleSignOut(auth)
          .then(() => {



          })
          .catch((error) => {

              const errorCode = error.code;
              const errorMessage = error.message;

              return false
          });


    },

    autoSignInTheUser() {

      const email = 'teste@gmail.com'
      const password = '123456'

      handleSignInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          // Signed in
          const user = userCredential.user;

        })
        .catch((error) => {

          const errorCode = error.code;
          const errorMessage = error.message;


        });


    }

  },
});
