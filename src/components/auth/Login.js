import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from '../utils/API';
import "./login.css";

function Login() {

    const navigate=useNavigate();

    const [values,setValues]=useState({email:"",password:""})
    
    const toastOptions={
        position:"bottom-right",
        autoClose:5000,
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
        const {password,email}=values;
        if(password===""){
            toast.error("Password cannot be empty",toastOptions);
            return false;
        }
            else if(email===""){
                toast.error("email cannot be empty",toastOptions);
                return false;
            }
           return true;
       }

    async function submitOnClick(e)
    {
        e.preventDefault();
       if(Validation());
       {
           const {password,email}=values;
           const {data}=await axios.post(loginRoute,{email,password});
           console.log(data.msg)
           if(data.status===false)
           {
               toast.error(data.msg,toastOptions)
           }
           if(data.status===true)
           {
               localStorage.setItem("quiz",JSON.stringify(data.user));
               navigate('/home')
           }
       };
    }

    useEffect(()=>{
        // if(localStorage.getItem("quiz"))
        // {
        //     alert("Already Logged In, If You Want to LogIn Pls Logout First")
        //     navigate('/')
        // }
    },[])

  return (
    <div className="login">
        <form className="loginForm" onSubmit={(e)=>submitOnClick(e)} >
                       
           
            <input type="email" className="loginInput" placeholder="email" name="email" onChange={(e)=>Change(e)}/>
            <input type="password" className="loginInput"  placeholder="Password" name="password" onChange={(e)=>Change(e)}/>
            <button type="submit"className="loginBtn" >Login</button>
            <span>Don't you have an account?<Link to="/register" className="registerclass">Register</Link></span>
        </form>
        <div className="sample">
          <p><u>Sample Crendentials</u></p>
          <p>UserName: karthish@gmail.com</p>
          <p>Password:12345678</p>
        </div>
        
        <ToastContainer/>
        </div>
  )
}

export default Login;
