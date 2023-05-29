<script setup lang="ts">
import { stringLiteral } from '@babel/types';

const props=defineProps<{
    backgroundColor:String,
    classNumber:string //il numero si riferisce a quante colonne puoi inserire in una riga massimo numero 5;
  
  }>();



</script>
<template>

<div class=" column" :style="'background-color:'+{backgroundColor}">
  <slot></slot> 
</div>


</template>
<style>
  .column {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    
  }


  .column1{
    width: 100%;
  }
  .column2{
    width: 50%;
  }
  .column3{
    width: 33%;
  }
  .column4{
    width: 25%;
  }
  .column5{
    width: 20%;
  }


</style>