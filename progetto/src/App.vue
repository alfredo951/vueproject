<script setup lang="ts">
import {  RouterView } from 'vue-router'
import {  onMounted, reactive, ref } from 'vue'
import { getMenu } from './Api/component';
import NavBarMenu from './components/NavBarMenu.vue'
import type { MenuItems } from './models/menuItem';





const dataM= reactive<{result:MenuItems[]}>({
  result:[]
})


onMounted(async()=>{
   
   const data= await getMenu();
   console.log(data) 
   if(data && data.data){
  dataM.result=data.data as MenuItems[]
  console.log(dataM.result);
   }else{
console.log(data);
   }

})



</script>

<template>

    <div style="width: 100%;" v-if="$route.fullPath.includes('dashboard')">

      <NavBarMenu
      :menuItems="dataM.result"
      />


  </div>

  <div v-else style="display: none;">

</div>


  <RouterView />
</template>

<style >



body{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

#app{
  width: 100%!important;
  display: flex;
  justify-content: center;
  max-width:100%!important;
  margin: 0;
  padding: 0;
  height: 100%;
}

.listMenuItem{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
 
  align-items: center;
 
  list-style: none;

}

.listMenuItem li a{

  font-weight: bold;
  list-style: none;
  transition: .5s ease-in-out;
}

.listMenuItem li {
  max-width: 150px;
 
  font-weight: bold;
  list-style: none;
  transition: 1s ease-in-out;
  color: #333;
    font-size: 1.3rem;
    background-color: aliceblue;
    
    padding: 2px 0px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 0 10px;
}



.listMenuItem li a:hover{

  
  border-bottom:2px solid #333;
}

a{
  color: #333;

}

a:hover{
  color: #333;
  background: transparent;
}

.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
}

.listMenuItem li a {
  text-decoration: none;
}
</style>
