<script setup lang="ts">import {  reactive, ref } from 'vue';
import RowComponent from './RowComponent.vue';
import InputComponents from './InputComponents.vue';
// @ts-ignore
import {isEqual} from 'lodash'
 const props=defineProps<{
    title: string

    data:any[],
    
  
  }>();
const select=ref<any[]>([]);


  const updateValue = () => {
   show.value=!show.value;
  
  };
  const show= ref<boolean>(false);

  const onUsername = (e: { target: { checked: boolean} }) => {
    if(e.target.checked){
        console.log(e.target.checked)
    select.value= props.data;
    console.log(select.value)
    }else{
        console.log("ciao2")
        select.value= []
    }
   console.log( select.value.find((item)=>isEqual(item, select.value[0])))
};

const onUsernames = (index:number) => {
    console.log(select.value)

    if(!select.value.find((item)=>isEqual(item, props.data[index])))
    {
   select.value=[...select.value,props.data[index]]}
   else{
   select.value=select.value.filter((item)=>!isEqual(item, props.data[index]))
   }
   console.log(select.value)
};


</script>
<template>
<div>
<!-- HEADER -->
<table>
  <thead>
    <tr>
      <th> <InputComponents :checked="data.length===select.length" label="" @Input="onUsername" :required="false" type="checkbox" /> </th>  
      <th v-for="key of Object.keys(data[0]) " :key="key">  {{key}}</th>
   
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data" :key="index">
        <td> <InputComponents :checked="select.find((item)=>isEqual(item, data[index]) )!==undefined" label="" :index="index" @click="()=>onUsernames(index)" :required="false" type="checkbox" /> </td>
      <td v-for="(itemJ, index) in Object.keys(item)" :key="index">{{ item[`${itemJ}`]?item[`${itemJ}`]:"NA" }}</td>
    </tr>
  </tbody>
</table>

</div>

</template>
<style>
th,td{
    color:#333;
    border: 1px solid #333;
    padding: 10px;
    border-radius: 5px;
    width: 100px ;
    text-align: center;

}
tr{
    border: 1px solid #333;
}


</style>