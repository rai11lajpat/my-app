"use client";
import { getCourse } from "@/service/getCourseService";
import { httpAxios } from "../helper/httpHelper";

export default  function viewCourse(){
    async function get(){
    const result= await getCourse();
    console.log(result);
    }
   get();

    return(
        <div>

        </div>
    );
}