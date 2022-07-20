import React,{useEffect,useState} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import {get1studentRoute} from "../utils/API";
import "./studentView1.css"

function StudentView1()
{
    const getstudentRoute=get1studentRoute;
    const [student,setstudent]=useState("");
    const params=useParams();

    useEffect(()=>{

        async function get1student()
        {
        const {data} =await axios.get(`${getstudentRoute}/${params.id}`);
        console.log(data)
        setstudent(data);
        }
        get1student();
        
      },[]);

return(
    <div className="studentview1">
        <div className="label" >Student Name :<span className="data"> {student.name}</span></div>
        <div className="label" >Subject:<span className="data"> {student.subject}</span></div>
        <div className="label" >Contact: <span className="data">{student.contact}</span></div>
        <div className="label" >age : <span className="data">{student.age}</span></div>
        <Link to={`/studentview`} className="btn" type="button">OK</Link>
    </div>
)
}
export default StudentView1;