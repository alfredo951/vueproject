<script setup lang="ts">
import { ref } from 'vue';
import Select2Component from '../components/Select2Component.vue';
import DataTableComponent from '../components/DataTableComponent.vue';

const optionsS=[{title:"ciao", subtitles:"Ciaone"},{title:"hello", subtitles:"hellone"}, {title:"Hola", subtitles:"cosa"}]
const value=ref<string>("-");

const data=ref<{}[]>([
  {
    "nome": "Mario",
    "cognome": "Rossi",
    "età": 30,
    "indirizzo": "Via Roma 123",
    "email": "mario.rossi@example.com"
  },
  {
    "nome": "Laura",
    "cognome": "Verdi",
    "età": 25,
    "indirizzo": "Via Verdi 45",
    "email": "laura.verdi@example.com"
  },
  {
    "nome": "Luigi",
    "cognome": "Bianchi",
    "età": 40,
    "indirizzo": "Via Bianchi 78",
    "email": "luigi.bianchi@example.com"
  }
]);

    const handleEventoClic = (dati: string): void => {
      console.log(dati)
    value.value = dati;
    };

</script>

<template>
    <div>
        <Select2Component titleO="Title" subtitleO="subtitle" @update:valueClick="handleEventoClic" :value="value" title="esempio" :options="optionsS"  />
        {{value  }}

        <DataTableComponent title="wafercard" :data="data"/>
    </div>
</template>

<style></style>