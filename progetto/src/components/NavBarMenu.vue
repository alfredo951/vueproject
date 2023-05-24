<script setup lang="ts">import { onMounted, reactive, ref } from 'vue';

import { apiClient } from '../Api/intercetor';
import DropDown from "./DropDown.vue"



const props=defineProps<{
    menuItems:{name:string,links:{name:string, link:string}[]
              
              }[]
  }>();




</script>
<template>
    <div class="navbar">
  
    <div v-if="$route.fullPath.includes('dashboard')">
      <div class="nav">
        <nav>
      <div className='logo'>
          <img  alt='logo' src="@/assets/logo.svg" style="width:100px"/>
      </div>
      <div>
        <ul  className='listMenuItem'>
         <li v-for="{name,links} of menuItems" :key="name"><DropDown  :text="name" :links="links" /></li>
   

      </ul>
      



 
      </div>
    </nav>



    </div>
  </div>   
</div>
</template>
<style>

.nav{
  position:sticky; top:0 ;width:100% ;background:#FFF;
    box-shadow:5px 5px 15px 5px rgba(0,0,0,0.38);padding:25px 0px;z-index:12
}

.navbar{
  width: 100%;

}

</style>