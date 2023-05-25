<script setup lang="ts">import {  ref } from 'vue';

 const props=defineProps<{
    title: string

    links:{name:string, link:string}[],
    
  
  }>();



  const updateValue = () => {
   show.value=!show.value;
  
  };
  const show= ref<boolean>(false);




</script>
<template>
    <div  >
        <div style="cursor: pointer;" class="navLink" @click="updateValue">{{title}}<span style="margin: 10px; font-weight: 500; font-size: 1.5rem;">v</span></div>
        <div class="dropmenu navLink" :style="show ? 'height:100%':'height:0px'">
            <ul><li v-for="item of links" :key="item.name">
                <RouterLink :to="item.link">{{item.name}}</RouterLink>
            </li>
            </ul>
        </div>
    </div>
</template>
<style>
.navLink{
    color: #333;
    font-size: 1.3rem;
    background-color: aliceblue;
    box-shadow:1px 1px 5px 1px rgba(0,0,0,0.38);padding:25px 0px;
    padding: 2px 0px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 0 10px;
  
}


.dropmenu{
    overflow: hidden;
    transition: .5s ease-in-out;

}

.dropmenu ul{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}


</style>