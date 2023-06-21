// Utilities
import { defineStore } from 'pinia'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getApp } from "firebase/app";

  let defaultUser = {
    name: "",
    email: "",
    photo: 'https://cdn-icons-png.flaticon.com/512/63/63699.png',
  }

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {...defaultUser},
    snackbarMessage: '',
    showSnackbar: false,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    login() {
      const firebase = getApp()
      const auth = getAuth(firebase)

      signInWithPopup(auth, new GoogleAuthProvider()).
        then((result) => {
          const user = result.user
          this.setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        }).catch((error) => {
          console.log(error)
        })
    },
    logout() {
      const firebase = getApp()
      const auth = getAuth(firebase)
      auth.signOut().then(() => {
        this.setUser({...defaultUser})
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    getUser() {
      return this.user
    },
  },
})
