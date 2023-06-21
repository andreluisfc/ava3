<template>
  <v-sheet class="text-center mt-10">
    <v-btn v-if="store.user.email === ''" prepend-icon="mdi-google" color="red" @click="store.login()">Login</v-btn>
    <v-btn v-else prepend-icon="mdi-door" color="blue" @click="store.logout()">Logoff</v-btn>
  </v-sheet>
</template>

<script setup>
import {useAppStore} from '@/store/app';

const store = useAppStore();
</script>
