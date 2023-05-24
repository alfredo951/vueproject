import axios,{type InternalAxiosRequestConfig,type AxiosInstance} from "axios"
import { useUserStore } from "../stores/counter";
import { storeToRefs } from 'pinia'



export const apiClient=axios.create({
    baseURL:import.meta.env.VITE_SOME_KEY,
  
});



export const setHeader=(apiClient: AxiosInstance)=>{
    
apiClient.interceptors.request.use((config:InternalAxiosRequestConfig)=>{

           const token= localStorage.getItem("st")
       if(token){
            
            config.headers.Authorization=`Bearer ${token}`;
            return config;
       }else
       return Promise.reject();


      
    },(error)=>{
        return Promise.reject(error);

    });}


   export const checkResponse=(exception:{response:{status:number}})=>{
        const responseCode=exception?.response?.status;
        if(responseCode){
           
            responseCode===401 || responseCode===403;
        }

    }



    const logOut=()=>{

    }
  