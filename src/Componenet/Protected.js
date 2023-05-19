import { useEffect } from "react";
import { useNavigate } from "react-router";

const Protected = (props) => {
    const Page = props.Page
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user_info'))
        {
            navigate('/login')
        }
    },[]);

    return ( 
        <Page/>
     );
}
 
export default Protected;