import React,{useEffect,useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import {updatequestionRoute,get1questionRoute} from "../utils/API";
import "./questionEdit.css";

function QuestionEdit() {

    
    const navigate=useNavigate();
    const params=useParams();
    const [Question,setquestion]=useState("");
    const [newData,setNewData]=useState("");
    const getquestionRoute=get1questionRoute;
    const updatequestionRoute1=updatequestionRoute;
        
    function change(e)
    {
        setquestion({...Question,[e.target.name]:e.target.value});
    }
    
useEffect(()=>{

    async function get1question()
    {
    const {data} =await axios.get(`${getquestionRoute}/${params.id}`);
    console.log(data)
    setquestion(data);
    }
    get1question();
    
  },[]);

    async function submitOnClick(e)
    {
            e.preventDefault();
            console.log(Question) ;
            const {question,option1,option2,option3,answer}=Question;
            
            try {
                    const {data} = await axios.put(`${updatequestionRoute1}/${params.id}`,{question,option1,option2,option3,answer});
                    console.log(data);
                    setNewData(data);
                    navigate('/questionview')
                                                     
            }  
            catch (error) {
                console.log(error)
            }
                   
    }

    
  return (
    <div className="questionedit">

        <h1 className="editHeading">Edit question Details</h1>
        <form className="editform" onSubmit={(e)=>submitOnClick(e)}>
        <input type="text" className="questioneditInput" name="question" onChange={(e)=>change(e)} value={Question.question}  /> 
        <input type="text" className="questioneditInput" name="option1" onChange={(e)=>change(e)} value={Question.option1} /> 
        <input type="text" className="questioneditInput" name="option2" onChange={(e)=>change(e)} value={Question.option2} /> 
        <input type="text" className="questioneditInput" name="option3" onChange={(e)=>change(e)} value={Question.option3} /> 
        <input type="text" className="questioneditInput" name="answer" onChange={(e)=>change(e)} value={Question.answer} />

        <button type="submit" className="editbtn" >Edit</button>
        {newData? <div>question Details Edited successfully</div>:""}
        </form>
    </div>
  )
}

export default QuestionEdit;