import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {teacherRoute,getteacherRoute} from "../utils/API";
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./teacher.css";

function Teacher() {

    
    const navigate=useNavigate();
    const [teacher,setteacher]=useState({teacherName:"",contact:"",Qualification:"",Subject:""});
    const User=JSON.parse(localStorage.getItem("quiz"));
    const [newData,setNewData]=useState("");
       
    const toastOptions={
        position:"bottom-right",
        autoClose:3000,
        pauseOnHover:true,
        theme:"light"
    }

    function Validation()
    {
        const {teacherName,contact,Qualification,Subject}=teacher;
        if(teacherName===""){
            toast.error("Teacher Name cannot be empty",toastOptions);
            return false;
            }
            else if(contact===""){
                toast.error("Fill the Moble Details",toastOptions);
                return false;
            }
            else if(Qualification===""){
                toast.error("Fill the Qualification",toastOptions);
                return false;
            }
            else if(Subject==="")
            {
                toast.error("Subject required",toastOptions);
                return false;
            }
            else
            {
                return true;
            }
    }

    function change(e)
    {
        setteacher({...teacher,[e.target.name]:e.target.value});
    }
    
useEffect(()=>{

},[]);
    async function submitOnClick(e)
    {
            e.preventDefault();
            console.log(teacher)  
            const {teacherName,contact,Qualification,Subject}=teacher;
            if(Validation())
         {
            try {
                    const {data} = await axios.post(teacherRoute,{teacherName,contact,Qualification,Subject});
                    console.log(data);
                    setNewData(data);
                    navigate('/teacherview');
                                                   
            }  
            catch (error) {
                console.log(error)
            }
       };           
    }


  return (
    <div className="teacher">
        <div className="teacherFormDiv">
        <h1 className="FormHeading">Please Fill the Form to Add Teacher Details</h1>
        <div className="link"><Link to={`/home`} class="homeLink" type="button">Home</Link>
        <Link to={`/studentview`} class="homeLink" type="button">View Student Details</Link>
        </div>
        <form className="teacherform" onSubmit={(e)=>submitOnClick(e)}>
        <input type="text" className="formInput" name="teacherName" onChange={(e)=>change(e)} placeholder="Teacher Name:" /> 
        <input type="text" className="formInput" name="contact" onChange={(e)=>change(e)} placeholder="Mobile:" /> 
        <input type="text" className="formInput" name="Qualification" onChange={(e)=>change(e)} placeholder="Qualification:" /> 
        <input type="text" className="formInput" name="Subject" onChange={(e)=>change(e)} placeholder="Subject:" /> 
        <button type="submit" className="formBtn">ADD</button>
        {newData? <div>Teacher Created successfully</div>:""}
        </form>
        <ToastContainer/>
        </div>
    </div>
  )
}

export default Teacher;