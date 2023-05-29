<script setup lang="ts">
import { computed, ref } from "vue";
import {type Select2I} from "./../models/Select2"

const props=defineProps<Select2I>();
    const emit = defineEmits<{
    (e: 'update:value', user:string): void
    (e: 'update:valueClick', user:string): void
  }>()

  const onRemoveUserClick = (user:string) => {
    console.log(user)
    emit('update:value', user)
  } 

  const emitEvent=(element:string)=>{
    emit("update:valueClick",element)
  }

  const show=ref<boolean>(false)




  const updateValueOp = (e: Event) => {
    
        filterData.value=filterOption((e.target as HTMLInputElement).value);
        filter.value=(e.target as HTMLInputElement).value
  };

  const filter=ref("")
  const filterData=ref<{ title: string; subtitles: string; }[] | undefined>(props.options)

  const filterOption=(filter:string)=>{
    
    if(!filter){
        return props.options;
    }
    const optionsFiltered=props.options.filter((item)=>filterString(item.title,filter))
    if(optionsFiltered.length>0){
    return optionsFiltered
    }else {    
        const optionsFilteredBySubtitle=props.options.filter((item)=>filterString(item.subtitles,filter))
        if(optionsFilteredBySubtitle.length>0){
            return optionsFilteredBySubtitle;
        }
    }
  }

  const filterString=(text:string, filter:string)=>{
        text=text.toLocaleUpperCase()
       return text.startsWith(filter.toLocaleUpperCase())
  }



</script>


<template>
            <h5>{{ props.title }}</h5>
                <div @click="()=>{show=!show}"  style="display: flex;justify-content: center;align-items: center; height: 30px;border: 1px solid #333;width: 150px;">
        <div style="display: flex;justify-content: space-between;align-items: center;width: 80%;">
            <h5> {{ props.value }}</h5>
            <h5>v</h5>
        </div>       
                </div>
    <div  :class="show?'show':'hide'" style="width: 150px;">
        <div style="position: relative; border: 1px solid #333; width: 150px; border-radius: 5px;"  >
        <input type="text" :value="filter"  @input="updateValueOp" style="position:sticky; top:0">
        <div>
        <div class="option" v-for="{title, subtitles} of filterData" :key="title" :value="title"  @click="()=>{emitEvent(title);show=!show}" >
            <h4><span>{{ props.titleO }}:</span> {{ title }}</h4>
            <h5><span>{{ props.subtitleO }}:</span>  {{ subtitles }}</h5>
        </div>
    </div>
</div>


            
    </div>
</template>

<style>


.option:hover{
    background-color: cornflowerblue;
 
}


.option:hover h4, .option:hover h5 ,.option:hover span{
    color: #fff;
}


.show{
    overflow:scroll;
    height: 100px;
}
.hide{
    overflow: hidden;
    height: 0;
}




h5,h4, span{
    color: #333;
}


</style>