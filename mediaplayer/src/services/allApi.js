import { commonApi } from "./commonApi"
import {serverUrl} from "./serverUrl"

 
//api to add videos
export const addVideoApi = async(reqbody)=>{
    return await commonApi('POST', `${serverUrl}/videos`,reqbody)
}

//api to get all videos

export const getVideoApi = async() =>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}