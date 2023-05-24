import { apiClient } from "./intercetor"
import {type AxiosError} from "axios"


export const login= async(names:string, passwords:string)=>{
    try {
        return (await apiClient<{name:string, idprofile:string, token:string}>({method:"post",url:"/api/auth/login",data:{name:names,password:passwords}})).data
    } catch (exceptions) {
        
        type GeneralError=typeof exceptions;
        const exception=exceptions as AxiosError<{code:string}>
        return {
   
            error:true,
            code:exception
        }
    }
}


