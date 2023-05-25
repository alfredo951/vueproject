

<script setup lang="ts">
import {  ref } from 'vue'

import Input from './../components/InputComponents.vue'
import type { UserI } from '../models/User';
import { login } from '../Api/Auth';
import router from '../router';
import { useUserStore  } from '../stores/counter';

import ButtonComponent from '../components/ButtonComponent.vue';
import ColumnComponent from '../components/ColumnComponent.vue';
import RowComponent from '../components/RowComponent.vue';

const exampleStore = useUserStore()


const { setUser } = exampleStore

const userM =ref<UserI>({
  name:"",
  password:"",
  idprofile:""

})
 
// output value key by key
const onUsername = (e: { target: { value: string } }) => {
  userM.value.name= e.target.value;
};
const onPassword = (e: { target: { value: string } }) => {
  userM.value.password= e.target.value;
};


const loginAction=async(name:string,password:string)=>{
    console.log(name);
    console.log(password)
  var data =await login(name,password)
  const data1= data as {name:string,token:string,idprofile:string}
  console.log(data)
  if(data1.name){

  setUser(data1.name, data1.idprofile, data1.token);
   localStorage.setItem("st",data1.token)
  

  console.log(name)
  router.push('/dashboard').catch(e=>{console.log(e)})}
else{
  data=data as {error:boolean, code:any | undefined}
  console.log(data.code)
  router.push('/')}

 
}


</script>





<template>
  <RowComponent>
    <ColumnComponent classNumber="2" backgroundColor="aliceblue">


 <h1 style="font-size: 2.5rem; font-weight: 800;color: #333;">SICM@</h1>

</ColumnComponent>

<ColumnComponent classNumber="2" backgroundColor="rgba(255,255,255,0.5)">


<Input label="Username" type="text"  required  @Input="onUsername" />
<Input label="Password" type="text"  required  @Input="onPassword" />


<ButtonComponent color="#333" backgroundColor="#eee" :genericFunction="()=>loginAction(userM.name, userM.password )"></ButtonComponent>


</ColumnComponent>
</RowComponent>
</template>

<style>

</style>
