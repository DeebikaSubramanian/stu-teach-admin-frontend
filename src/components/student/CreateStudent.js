import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {addstudentRoute} from "../utils/API";
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./createStudent.css";

function Student() {

    
    const navigate=useNavigate();
    const [student,setstudent]=useState({name:"",subject:"",contact:"",age:""});
    const [newData,setNewData]=useState("");
       
    const toastOptions={
        position:"bottom-right",
        autoClose:3000,
        pauseOnHover:true,
        theme:"light"
    }

    function Validation()
    {
        const {name,subject,contact,age}=student;
        if(name===""){
            toast.error("Fill the Name",toastOptions);
            return false;
            }
            else if(subject===""){
                toast.error("Fill the Subject",toastOptions);
                return false;
            }
            else if(contact===""){
                toast.error("Fill the Contact",toastOptions);
                return false;
            }
            
            else if(age==="")
            {
                toast.error("Fill the age",toastOptions);
                return false;
            }
            else
            {
                return true;
            }
    }

    function change(e)
    {
        setstudent({...student,[e.target.name]:e.target.value});
    }
    
useEffect(()=>{

},[]);
    async function submitOnClick(e)
    {
            e.preventDefault();
             
            const {name,subject,contact,age}=student;
            if(Validation())
         {
            try {
                    const {data} = await axios.post(addstudentRoute,{name,subject,contact,age});
                    console.log(data);
                    setNewData(data);
                    navigate('/studentview');
                                                   
            }  
            catch (error) {
                console.log(error)
            }
       };           
    }


  return (
    <div className="student">
        <div className="studentFormDiv">
        <h1 className="FormHeading">Please Fill the Form to Add student Details</h1>
        <div className="link"><Link to={`/home`} class="homeLink" type="button">Home</Link>
        <Link to={`/studentview`} class="homeLink" type="button">View Student Details</Link></div>
        <form className="studentform" onSubmit={(e)=>submitOnClick(e)}>
        <input type="text" className="formInput" name="name" onChange={(e)=>change(e)} placeholder="Name" /> 
        <input type="text" className="formInput" name="subject" onChange={(e)=>change(e)} placeholder="Subject" /> 
        <input type="text" className="formInput" name="contact" onChange={(e)=>change(e)} placeholder="Contact" /> 
        <input type="text" className="formInput" name="age" onChange={(e)=>change(e)} placeholder="Age" /> 
        <button type="submit" className="formBtn">ADD</button>
        {newData? <div>student Created successfully</div>:""}
        </form>
        <ToastContainer/>
        </div>
    </div>
  )
}

export default Student;