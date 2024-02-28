import { httpAxios } from "@/app/helper/httpHelper";

export async function addCourse(course){
    const result=await httpAxios
    .post('/courses',course)
    .then((response)=>response.data);
    return result;
}