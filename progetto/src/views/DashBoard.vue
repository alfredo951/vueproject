<script setup lang="ts">import { storeToRefs } from 'pinia';

import { useUserStore } from '../stores/counter';
import { onMounted, reactive } from 'vue';
import type { MenuItems } from '../models/MenuItem';
import { getMenu } from '../Api/component';
import NavBarMenu from '../components/NavBarMenu.vue';
const store = useUserStore();
const { getName,getIdprofile,getToken} = storeToRefs(store)

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


<NavBarMenu
      :menuItems="dataM.result"
      />



    <div style="width: 100%;height: 100vh; display: flex; flex-direction: column;">
            <h1>{{ getName }}</h1>
            <h1>{{ getIdprofile }}</h1>
            <h1>{{ getToken }}</h1>

    </div>

<Select2>

</Select2>

    
</template>
<style>

#app{
    flex-direction: column;
    
}

.logo{
    margin: 20px;
}

</style>