import { apiClient, checkResponse, setHeader } from "./intercetor"
import {type AxiosError} from "axios"

//secure api

export const getMenu= async()=>{
    try {
        setHeader(apiClient);
        return (await apiClient.get<{name:string}[]>("/api/component/menu"))
    } catch (exceptions) {
        console.log(exceptions);
        const exception=exceptions as {
            response: {
                status: number;
            };
        }
        checkResponse(exception)
    }
}