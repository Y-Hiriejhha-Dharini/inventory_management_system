import { useEffect, useState } from "react";

const Fetch = (url) => {
        
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        useEffect(()=>{
            getdata(url);
            // .then(res => {
            //     if(!res.ok)
            //     {
            //         throw Error("Could not fetch the data for this resource");
            //     }
            //     return res.json();
            //     })
            // .then(data=>{
            //     setData(data)
            //     setError(null);
            //     })
            // .catch(err =>{
            //     if(err.name == 'AbortError')
            //     {
            //         console.log("Abort Error");
            //     }else{
            //         setError(err.message);
            //     }
            // })
        },[]);
        async function getdata(url)
        {

            let result = await fetch(url);
            result = await result.json();
            setData(result);
            console.log(data);
        }
        console.warn(data)
        return {data, error}
}
 
export default Fetch;