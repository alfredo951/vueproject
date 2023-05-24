import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', () => {
  const name = ref("")
  const idprofile = ref("")
  const token = ref("")
  const getName = computed(() => name.value)
  const getIdprofile = computed(() => idprofile.value)
  const getToken = computed(() => token.value)
  function setUser(namem:string, idprofilem:string, tokenm:string) {
    name.value=namem;
    idprofile.value=idprofilem;
    token.value=tokenm


  }

  function removeUser() {
    name.value="";
    idprofile.value="";
    token.value=""


  }




  return { getName, getIdprofile, getToken, setUser, removeUser}
})
