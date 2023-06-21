<template>
  <v-app-bar>
    <v-row class="mr-5 ml-5">
      <v-col cols="2">
        <v-app-bar-title text="Avaliação 3 FDS"/>
      </v-col>

      <v-col cols="2">
        <router-link to="/">
        <v-btn
          color="black"
          prepend-icon="mdi-home"
          text="HOME"
          />
        </router-link>
      </v-col>
      <v-col cols="2">
        <router-link to="/crud">
        <v-btn
          color="black"
          prepend-icon="mdi-table"
          text="CRUD"
        />
        </router-link>
      </v-col>

      <v-col cols="6" class="text-right">
        <v-card
          flat
          rounded="0"
        >
          <v-row class="mr-3">
            <v-col cols="11">
            <v-list-item
              :title="store.getUser.name"
              :subtitle="store.getUser.email"
            />
            </v-col>
            <v-col cols="1">
              <v-avatar
                color="grey"
                rounded="5"
              >
                <v-img :src="store.getUser.photo"></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import {useAppStore} from '@/store/app';

const store = useAppStore();
</script>
