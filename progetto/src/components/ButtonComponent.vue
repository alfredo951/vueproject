<script setup lang="ts">




import  { defineProps  } from 'vue'


const props=defineProps<{
genericFunction: ()=>void
color:string,
backgroundColor:string
}>();






</script>
<template>
    
<div :style="'color:'+{color}+';background:'+{backgroundColor}+'    display: flex;justify-content: center;;flex-direction: column;align-items: center;text-align: center;'">
<button class="button" @click="()=>genericFunction()" >Login</button>
</div>




</template>


<style>


.button{
padding: 15px 20px;
box-shadow:1px 1px 5px 1px rgba(0,0,0,0.38);
border-radius: 20px;
cursor:pointer;
}



</style>