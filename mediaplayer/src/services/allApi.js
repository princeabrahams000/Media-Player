import { commonApi } from "./commonApi"
import {serverUrl} from "./serverUrl"



export const addVideoApi = async(reqbody)=>{
    return await commonApi('POST', `${serverUrl}/videos`,reqbody)
}