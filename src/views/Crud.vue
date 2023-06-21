<template>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Usuário</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Nome"
                    v-model="frmPessoa.nome"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Email"
                    v-model="frmPessoa.email"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red"
              variant="text"
              @click="onCancel"
              prepend-icon="mdi-close"
            >
              Fechar
            </v-btn>
            <v-btn
              color="green"
              variant="text"
              @click="onSave"
              prepend-icon="mdi-content-save"
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>


  <v-sheet class="mt-10 ml-10">
    <v-card title="Cadastro de pessoas" subtitle="um crud curioso">
      <v-btn text="Incluir" prepend-icon="mdi-plus" flat color="transparent" @click="dialog = true"/>
    </v-card>
    <v-row class="mt-5">
      <v-col v-for="p in pessoas" :key="p.id" cols="4">
        <v-card>
          <v-card-title>{{ p.nome }}</v-card-title>
          <v-card-subtitle>{{ p.email }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text @click="onEdit(p.id)" color="primary" prepend-icon="mdi-pencil">Editar</v-btn>
            <v-btn text @click="onDelete(p.id)" color="red" prepend-icon="mdi-trash-can">Excluir</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>

</template>
<script setup>

import {onMounted, ref} from "vue";
import { getDatabase, ref as refs, onValue, push, update, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();
const dialog = ref(false);

const pessoas = ref([]);

const frmPessoa = ref({id:'', nome: '', email: ''});

const onSave = () => {

  if(frmPessoa.value.id){
    update(refs(db, `pessoas/${frmPessoa.value.id}`), {
      nome: frmPessoa.value.nome,
      email: frmPessoa.value.email,
    });
  } else {
    push(refs(db, 'pessoas/'), {
      nome: frmPessoa.value.nome,
      email: frmPessoa.value.email,
    });
  }

  frmPessoa.value = {};
  dialog.value = false;
}

const onCancel = () => {
  frmPessoa.value = {};
  dialog.value = false;
}

const onDelete = (id) => {
  remove(refs(db, `pessoas/${id}`));
}

const onEdit = (id) => {
  frmPessoa.value = pessoas.value.find(p => p.id === id);
  dialog.value = true;
}

onMounted(() => {
  const pessoasRef = refs(db, 'pessoas/');
  onValue(pessoasRef, (snapshot) => {
    pessoas.value = [];
    for(let key in snapshot.val()){
      pessoas.value.push({
        id: key,
        nome: snapshot.val()[key].nome,
        email: snapshot.val()[key].email,
      })
    }
  });
})

</script>
