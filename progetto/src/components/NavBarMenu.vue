<script setup lang="ts">import { onMounted, reactive, ref } from 'vue';

import { apiClient } from '../Api/intercetor';
import DropDown from "./DropDown.vue"
import { type MenuItems } from '../models/menuItem';



const props=defineProps<{
    menuItems:MenuItems[]
              
              
  }>();




</script>
<template>
    <div class="navbar">
  
    <div v-if="$route.fullPath.includes('dashboard')">
      <div class="nav">
        <nav>
      <div className='logo'>
        <h1 >SICM@</h1>
         <!--<img  alt='logo' src="@/assets/logo.svg" style="width:100px"/>--> 
      </div>
      <div>
        <ul  className='listMenuItem'>
         <li v-for="{title, links, link} of menuItems" :key="title">
          
          <DropDown v-if="links" :title="title" :links="links" />
          <div class="navLink" v-if="link"><RouterLink   :to="link">{{title}}</RouterLink></div>
        </li>
         
   

      </ul>
      



 
      </div>
    </nav>



    </div>
  </div>   
</div>
</template>
<style>

.nav{
  position:sticky; top:0 ;width:100% ;background:aliceblue;
   padding:25px 0px;z-index:12
}

.navbar{
  width: 100%;

  background-color: rgba(72, 98, 248, 0.601)
}


.logo{
  color:#333;font-size:2rem;
  font-weight: 800;
}

.navLink{
    color: #333;
    font-size: 1.3rem;
    background-color: #fff;
    box-shadow:1px 1px 5px 1px rgba(0,0,0,0.38);padding:25px 0px;
    padding: 2px 0px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  
}

</style>