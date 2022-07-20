import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {addquestionRoute} from "../utils/API";
import {toast,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./createQuestion.css";

function Question() {

    
    const navigate=useNavigate();
    const [Question,setquestion]=useState({question:"",option1:"",option2:"",option3:"",answer:""});
    const [newData,setNewData]=useState("");
       
    const toastOptions={
        position:"bottom-right",
        autoClose:3000,
        pauseOnHover:true,
        theme:"light"
    }

    function Validation()
    {
        const {question,option1,option2,option3,answer}=Question;
        if(question===""){
            toast.error("Fill the question",toastOptions);
            return false;
            }
            else if(option1===""){
                toast.error("Fill option1",toastOptions);
                return false;
            }
            else if(option2===""){
                toast.error("Fill option2",toastOptions);
                return false;
            }
            else if(option3==="")
            {
                toast.error("Fill option3",toastOptions);
                return false;
            }
            else if(answer==="")
            {
                toast.error("Fill the answer",toastOptions);
                return false;
            }
            else
            {
                return true;
            }
    }

    function change(e)
    {
        setquestion({...Question,[e.target.name]:e.target.value});
    }
    
useEffect(()=>{

},[]);
    async function submitOnClick(e)
    {
            e.preventDefault();
            console.log(Question)  
            const {question,option1,option2,option3,answer}=Question;
            if(Validation())
         {
            try {
                    const {data} = await axios.post(addquestionRoute,{question,option1,option2,option3,answer});
                    console.log(data);
                    setNewData(data);
                    navigate('/questionview');
                                                   
            }  
            catch (error) {
                console.log(error)
            }
       };           
    }


  return (
    <div className="question">
        <div className="questionFormDiv">
        <h1 className="FormHeading">Please Fill the Form to Add question Details</h1>
        <div className="link"><Link to={`/home`} class="homeLink" type="button">Home</Link>
        <Link to={`/questionview`} class="homeLink" type="button">View Question Details</Link></div>
        <form className="questionform" onSubmit={(e)=>submitOnClick(e)}>
        <input type="text" className="formInput" name="question" onChange={(e)=>change(e)} placeholder="Question" /> 
        <input type="text" className="formInput" name="option1" onChange={(e)=>change(e)} placeholder="Option1" /> 
        <input type="text" className="formInput" name="option2" onChange={(e)=>change(e)} placeholder="Option2" /> 
        <input type="text" className="formInput" name="option3" onChange={(e)=>change(e)} placeholder="Option3" /> 
        <input type="text" className="formInput" name="answer" onChange={(e)=>change(e)} placeholder="Answer" /> 
        <button type="submit" className="formBtn">ADD</button>
        {newData? <div>Question Created successfully</div>:""}
        </form>
        <ToastContainer/>
        </div>
    </div>
  )
}

export default Question;