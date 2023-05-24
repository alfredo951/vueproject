<script setup lang="ts">
import {  RouterView } from 'vue-router'
import { computed, defineAsyncComponent, onMounted, reactive, ref } from 'vue'
import { getMenu } from './Api/component';
import NavBarMenu from './components/NavBarMenu.vue'
import { apiClient } from './Api/intercetor';

const menuItemsM=ref<{name:string,links:{name:string,link:string}[]}[]>([]);
//const getMenuItems=computed(()=>menuItems)


const dataM= reactive<{result:{name:string,links:{name:string,link:string}[]}[]}>({
  result:[]
})


onMounted(async()=>{
   
   const data= await getMenu();
   console.log(data) 
   if(data && data.data){
  dataM.result=data.data as {name:string,links:{name:string,link:string}[]}[]
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
  background-color: #fff;
  list-style: none;

}

.listMenuItem li a{

  font-weight: bold;
  list-style: none;
  transition: 1s ease-in-out;
}

.listMenuItem li {
  max-width: 150px;
  height: 40px;
  padding: 10px;
  font-weight: bold;
  list-style: none;
  transition: 1s ease-in-out;
}



.listMenuItem li a:hover{


  border-bottom:2px solid #333;
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
