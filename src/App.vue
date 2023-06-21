<template>
  <v-snackbar color="error" v-model="store.showSnackbar">
    <v-icon icon="mdi-alert-circle"/>
    {{store.snackbarMessage}}

    <template v-slot:actions>
      <v-btn text="FECHAR" @click=" () => store.showSnackbar = false"/>
    </template>
  </v-snackbar>
  <router-view />
</template>

<script setup>
import {useAppStore} from '@/store/app';

const store = useAppStore();
</script>
