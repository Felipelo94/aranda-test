import axios, { RawAxiosRequestConfig } from "axios"

export const get = async (url: string, config?: RawAxiosRequestConfig)=>{
    return await axios.get(url, config)     
} 