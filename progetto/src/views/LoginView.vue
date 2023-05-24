

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

import Input from './../components/InputComponents.vue'
import type { UserI } from '../models/user';
import { login } from '../Api/Auth';
import router from '../router';
import { useUserStore  } from '../stores/counter';
import {storeToRefs} from 'pinia'

const exampleStore = useUserStore()
const { getToken } = storeToRefs(exampleStore)
//This action is made up for the example
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
    <div class="row">
    <div class="column" style="background-color: aliceblue;">


  <img  alt='logo' src="@/assets/logo.svg" style="width:100px"/>

    </div>
  <div class="column">



<Input label="Username" type="text"  required  @Input="onUsername" />
<Input label="Password" type="text"  required  @Input="onPassword" />



<button @click="()=>loginAction(userM.name, userM.password )" >ciao</button>
</div>
</div>
</template>

<style>
@media (min-width: 1024px) {
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;

  }



  .column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 100%;

    
  }
}
</style>
