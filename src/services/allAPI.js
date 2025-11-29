import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

// Book resort api 
export const bookResortAPI = async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/bookresort`,reqBody)
}

// Get all bookings api
export const getAllBookingsAPI = async()=>{
    return await commonAPI('GET',`${SERVER_URL}/getresorts`)
}
