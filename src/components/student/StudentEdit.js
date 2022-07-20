import React,{useEffect,useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import {updatestudentRoute,get1studentRoute} from "../utils/API";
import "./studentEdit.css";

function StudentEdit() {

    
    const navigate=useNavigate();
    const params=useParams();
    const [student,setstudent]=useState("");
    const [newData,setNewData]=useState("");
    const getstudentRoute=get1studentRoute;
    const updatestudentRoute1=updatestudentRoute;
        
    function change(e)
    {
        setstudent({...student,[e.target.name]:e.target.value});
    }
    
useEffect(()=>{

    async function get1student()
    {
    const {data} =await axios.get(`${getstudentRoute}/${params.id}`);
    console.log(data)
    setstudent(data);
    }
    get1student();
    
  },[]);

    async function submitOnClick(e)
    {
            e.preventDefault();
             const {name,subject,contact,age}=student;
            
            try {
                    const {data} = await axios.put(`${updatestudentRoute1}/${params.id}`,{name,subject,contact,age});
                    console.log(data);
                    setNewData(data);
                    navigate('/studentview')
                                                     
            }  
            catch (error) {
                console.log(error)
            }
                   
    }

    
  return (
    <div className="studentedit">

        <h1 className="editHeading">Edit student Details</h1>
        <form className="editform" onSubmit={(e)=>submitOnClick(e)}>
        <input type="text" className="studenteditInput" name="name" onChange={(e)=>change(e)} value={student.name}  /> 
        <input type="text" className="studenteditInput" name="subject" onChange={(e)=>change(e)} value={student.subject} /> 
        <input type="text" className="studenteditInput" name="contact" onChange={(e)=>change(e)} value={student.contact} /> 
        <input type="text" className="studenteditInput" name="age" onChange={(e)=>change(e)} value={student.age} /> 
       
        <button type="submit" className="editbtn" >Edit</button>
        {newData? <div>student Details Edited successfully</div>:""}
        </form>
    </div>
  )
}

export default StudentEdit;