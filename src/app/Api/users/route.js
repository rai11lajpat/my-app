import { NextResponse } from "next/server"

export function GET(request){
    const users=[{
        name:'sdada',
        id:'98',
    },
    {
        name:'syuyu',
        id:'23',
    },
    {
        name:'sasaa',
        id:'78',
    }]

    console.log("server ....")
    
    //    get();
    
    return NextResponse.json(users);
}

// function get(){
//     axios.get(`http://192.168.100.27:8080/courses`).then(
//         (response) => {
//             console.log(response.data);
            
            
//         },
//         (error) => {
//             console.log(error);
            
//         }
//     )
// }