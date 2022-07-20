import React,{useEffect,useState} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import {get1questionRoute} from "../utils/API";
import "./questionView1.css"

function QuestionView1()
{
    const getquestionRoute=get1questionRoute;
    const [question,setquestion]=useState("");
    const params=useParams();

    useEffect(()=>{

        async function get1question()
        {
        const {data} =await axios.get(`${getquestionRoute}/${params.id}`);
        console.log(data)
        setquestion(data);
        }
        get1question();
        
      },[]);

return(
    <div className="questionview1">
        <div className="label" >Question :<span className="data"> {question.question}</span></div>
        <div className="label" >Option1:<span className="data"> {question.option1}</span></div>
        <div className="label" >Option2: <span className="data">{question.option2}</span></div>
        <div className="label" >Option3 : <span className="data">{question.option3}</span></div>
        <div className="label" >Answer : <span className="data">{question.answer}</span></div>
        <Link to={`/questionview`} className="btn" type="button">OK</Link>
    </div>
)
}
export default QuestionView1;