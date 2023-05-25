<script setup lang="ts">
  import  { defineProps, defineEmits, computed  } from 'vue'


  const props=defineProps<{
    label: string
    type:string,
   
    required:boolean
  }>();
  const emit=defineEmits(["update:modelValue"]);
  const updateValue = (e: Event) => {
    
  emit('update:modelValue', (e.target as HTMLInputElement).value)

};



</script>

<template>
    <div style="display: flex;justify-content:center; align-items: center;
    flex-direction: column ; padding: 20px;
    ">
      <label v-if="label"  class="font-bold block" style="color:#333;padding: 20px; font-weight: 500; font-size: 1.0rem;" >

        {{ label }}
      </label>
      <input
        :id="label"
        :type="type"
        :required=required
   
        @input="updateValue"
  
      />


    </div>
  </template>
  

<style scoped>


</style>
