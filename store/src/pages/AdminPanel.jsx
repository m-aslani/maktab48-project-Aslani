import React,{useState,useEffect} from 'react';
import {findAdminPanelTitle} from "./../utils/auth"
import { useParams } from "react-router-dom";

 const AdminPanel = () => {
     const {title} = useParams();
     let i =  findAdminPanelTitle(title);
     const [option, setOption] = useState(i);

     useEffect(() => {
         setOption(i)
     }, [i])

    return (
        <div>
            {option}
        </div>
    )
}
export default AdminPanel;