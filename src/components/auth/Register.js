import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from '../utils/API';
import "./register.css";

function Register() {

    const navigate=useNavigate();

    const [values,setValues]=useState({username:"",email:"",password:"",confirmPassword:""})
    
    const toastOptions={
        position:"bottom-right",
        autoClose:3000,
        pauseOnHover:true,
        theme:"light"
    }


    function Change(e)
    {
        setValues({...values,[e.target.name]:e.target.value});
        console.log(values)
    }

    function Validation()
    {
        const {password,confirmPassword,username,email}=values;
        if(password!==confirmPassword){
            toast.error("Password and ConfirmPassword are mismatch also cannot be empty",toastOptions);
            return false;
            }
            else if(username.length<3){
                toast.error("Username should not be empty and should be more than 3 characters",toastOptions);
                return false;
            }
            else if(password.length<8){
                toast.error("Password cannot be empty and should be equal to or more than 8 characters",toastOptions);
                return false;
            }
            else if(email==="")
            {
                toast.error("Email required",toastOptions);
                return false;
            }
    }

    async function submitOnClick(e)
    {
        e.preventDefault();
       if(Validation())
       {
           const {password,username,email}=values;
           const {data}=await axios.post(registerRoute,{username,email,password});
           console.log(data.msg)
           if(data.status===false)
           {
               toast.error(data.msg,toastOptions)
           }
           if(data.status===true)
           {
               localStorage.setItem("quiz",JSON.stringify(data.user));
               navigate('/');
           }
       };
    }

    useEffect(()=>{
        // if(localStorage.getItem("quiz"))
        // {
        //     alert("Already Logged In, If You Want to LogIn Pls Logout First")
        //     navigate('/home')
        // }
    },[])


  return (
    <div className="register">
            <form onSubmit={(e)=>submitOnClick(e)} className="registerForm">
                                         
            <input type="text" className="registerInput" placeholder="UserName" name="username" onChange={(e)=>Change(e)}/>
            <input type="email" className="registerInput" placeholder="Email" name="email" onChange={(e)=>Change(e)}/>
            <input type="password" className="registerInput" placeholder="Password" name="password" onChange={(e)=>Change(e)}/>
            <input type="password" className="registerInput" placeholder="Confirm Password" name="confirmPassword" onChange={(e)=>Change(e)}/>
            <button type="submit" className="registerBtn" >Register</button>
            <span>Already Have an account?<Link to="/" className="loginclass">Login</Link></span>
        </form>
        
        <ToastContainer/>
        </div>
  )
}

export default Register;