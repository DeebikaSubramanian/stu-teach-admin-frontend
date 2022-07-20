import React,{useEffect,useState} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import {get1teacherRoute} from "../utils/API";
import "./teacherView1.css"

function TeacherView1()
{
    const getteacherRoute=get1teacherRoute;
    const [teacher,setteacher]=useState("");
    const params=useParams();

    useEffect(()=>{

        async function get1teacher()
        {
        const {data} =await axios.get(`${getteacherRoute}/${params.id}`);
        console.log(data)
        setteacher(data);
        }
        get1teacher();
        
      },[]);

return(
    <div className="teacherview1">
        <div className="label" >Teacher Name :<span className="data"> {teacher.teacherName}</span></div>
        <div className="label" >Mobile :<span className="data"> {teacher.contact}</span></div>
        <div className="label" >Qualification: <span className="data">{teacher.Qualification}</span></div>
        <div className="label" >Subject : <span className="data">{teacher.Subject}</span></div>
        <Link to={`/teacherview`} className="btn" type="button">OK</Link>
    </div>
)
}
export default TeacherView1;