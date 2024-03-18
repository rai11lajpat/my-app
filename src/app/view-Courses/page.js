"use client";
import { getCourse } from "@/service/getCourseService";
import { httpAxios } from "../helper/httpHelper";
import { useEffect, useState } from "react";
import Course from "@/service/course";

export default  function viewCourse(){
    const [course,seCourse]=useState([]);

    async function get(){
        const result= await getCourse();
        console.log(result);
        seCourse(result)
    }

    useEffect(()=>{
        get();
    },[]);
   

    return(
        <div>
            <h2>list of all courses are felllow</h2>
            <div>
                {
                    course.length>0? course.map((c)=>
                        <div className="p-2">
                        <Course course={c}/>
                        </div>
                    ):"No courses"
                }
            </div>
        </div>
    );
}