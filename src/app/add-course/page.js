"use client";

import { addCourse } from "@/service/courseService";
import { useState } from "react";
export default function AddCourse(){
    const [course,setcourse]=useState({});

    const  handleForm=async(e)=>{
        console.log(course);
        e.preventDefault();
       
        try {
            const result=await addCourse(course);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
    
    return(
        <div className="grid-cols-12">
            <div>
            <h2 className="text-center my-3">
                Add course here
            </h2>
            <div className=" col-span-6 col-start-4">
            <form onSubmit={handleForm} className="bg-slate-500">
                
                    <label for="userId" className="text-white">Course id</label>
                    <input type="text" className="block flex-1 border-2 bg-slate-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter here" id="user-id"
                     onChange={(e)=>{
                        setcourse({...course,id:e.target.value})
                    }}/>
                
                    <label for="title">Course title</label>
                    <input type="test" className="block flex-1 border-2 bg-slate-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter title here" id="title" onChange={(e)=>{
                        setcourse({...course,title:e.target.value})
                    }}/>

                    <label for="disc">Discription</label>
                    <input type="textarea" className="block flex-1 border-2 bg-slate-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter Discription here" id="disc" style={{height:150}} onChange={(e)=>{
                        setcourse({...course,discription:e.target.value})
                    }}/>
                
                <div className="text-center flex justify-around">
                    <button type="submit" color="success">Add</button>
                    <button type="reset" color="warning m-2">Clear</button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}