import React,{useEffect,useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import {updateteacherRoute,get1teacherRoute} from "../utils/API";
import "./teacherEdit.css";
function Teacher() {

    
    const navigate=useNavigate();
    const params=useParams();
    const [teacher,setteacher]=useState("");
    const User=JSON.parse(localStorage.getItem("quiz"));
    const [newData,setNewData]=useState("");
    const getteacherRoute=get1teacherRoute;
    const updateteacherRoute1=updateteacherRoute;
        
    function change(e)
    {
        setteacher({...teacher,[e.target.name]:e.target.value});
    }
    
useEffect(()=>{

    async function get1teacher()
    {
    const {data} =await axios.get(`${getteacherRoute}/${params.id}`);
    console.log(data)
    setteacher(data);
    }
    get1teacher();
    
  },[]);

    async function submitOnClick(e)
    {
            e.preventDefault();
            console.log(teacher) ;
            const {teacherName,contact,Qualification,Subject}=teacher;
            
            try {
                    const {data} = await axios.put(`${updateteacherRoute1}/${params.id}`,{teacherName,contact,Qualification,Subject});
                    console.log(data);
                    setNewData(data);
                    navigate('/teacherview')
                                                     
            }  
            catch (error) {
                console.log(error)
            }
                   
    }

    
  return (
    <div className="teacheredit">

        <h1 className="editHeading">Edit Teacher Details</h1>
        <form className="editform" onSubmit={(e)=>submitOnClick(e)}>
        <input type="text" className="teachereditInput" name="teacherName" onChange={(e)=>change(e)} value={teacher.teacherName}  /> 
        <input type="text" className="teachereditInput" name="contact" onChange={(e)=>change(e)} value={teacher.contact} /> 
        <input type="text" className="teachereditInput" name="Qualification" onChange={(e)=>change(e)} value={teacher.Qualification} /> 
        <input type="text" className="teachereditInput" name="Subject" onChange={(e)=>change(e)} value={teacher.Subject} /> 
        <button type="submit" className="editbtn" >Edit</button>
        {newData? <div>Teacher Details Edited successfully</div>:""}
        </form>
    </div>
  )
}

export default Teacher;