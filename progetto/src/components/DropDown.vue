<script setup lang="ts">import {  ref } from 'vue';

 const props=defineProps<{
    text: string

    links:{name:string, link:string}[],
    
  
  }>();



  const updateValue = () => {
   show.value=!show.value;
  
  };
  const show= ref<boolean>(false);




</script>
<template>
    <div  >
        <div style="cursor: pointer;" @click="updateValue">{{text}}</div>
        <div  :class="show ? 'active':'noactive'">
            <ul><li v-for="item of links" :key="item.name">
                <RouterLink :to="item.link">{{item.name}}</RouterLink>
            </li>
            </ul>
        </div>
    </div>
</template>
<style></style>