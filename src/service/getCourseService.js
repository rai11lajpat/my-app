import { httpAxios } from "@/app/helper/httpHelper";
export async function getCourse(){
    const result=await httpAxios
    .get('/courses')
    .then((response)=>response.data);
    return result;
}