async function takeTime(){
    await new Promise((resolve)=>{
        throw Error;
        setTimeout(resolve,3000)
    });
}

export default async function about(){
    await takeTime();
    return(
        <div>
            <h2>this is about page</h2>
        </div>
    );
}