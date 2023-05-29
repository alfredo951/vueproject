import axios,{type InternalAxiosRequestConfig,type AxiosInstance} from "axios"
import { useUserStore } from "../stores/counter";
import router from '../router';



export const apiClient=axios.create({
    baseURL:import.meta.env.VITE_SOME_KEY,
  
});



export const setHeader=(apiClient: AxiosInstance)=>{
    const token= localStorage.getItem("st")
    if(token){
apiClient.interceptors.request.use((config:InternalAxiosRequestConfig)=>{

       
            
            config.headers.Authorization=`Bearer ${token}`;
            return config;
      


      
    },(error)=>{
        return Promise.reject(error);

    });
}else
return { errore:"not have a token"}


}


   export const checkResponse=(exception:{response:{status:number}})=>{
        const responseCode=exception?.response?.status;
        if(responseCode){
           
           if( responseCode===401 || responseCode===403)
           logOut();
        }

    }



  export  const logOut=()=>{
        const UserStore = useUserStore()
        UserStore.removeUser();
        localStorage.removeItem("st")
        router.push('/')
    }
  