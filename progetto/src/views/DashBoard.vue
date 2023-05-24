<script setup lang="ts">import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/counter';
const store = useUserStore();
const { getName,getIdprofile,getToken} = storeToRefs(store)


</script>

<template>

    <div style="width: 100%;height: 100vh; display: flex; flex-direction: column;">
            <h1>{{ getName }}</h1>
            <h1>{{ getIdprofile }}</h1>
            <h1>{{ getToken }}</h1>

    </div>
</template>
<style>

#app{
    flex-direction: column;
    
}

.logo{
    margin: 20px;
}

</style>