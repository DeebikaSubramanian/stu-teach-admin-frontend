import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {getquestionRoute} from "../utils/API";
import "./quiz.css";

function Quiz()
{

    const navigate=useNavigate();
    const [total,setTotal]=useState(0);
    const [Answer,setAnswer]=useState("");
    const [newData,setNewData]=useState([]);
    const [index,setIndex]=useState(0);
    
    
    useEffect(()=>{
        async function getquestion()
    {
        const questionView=await axios.get(getquestionRoute);
        setNewData(questionView?.data);
        
    }
        getquestion();
    },[])  

   

    const OptionClick=(option)=>{
        console.log("hi")
        setAnswer(option);
        }

    const NextOnClick=(answer)=>{
        console.log(Answer)
        setIndex(index+1);
       
        if(answer===Answer)
        {
            
            setTotal(total+1);
            console.log(total); 
        }
    
    
    }

    function tryagain()
    {
        setIndex(0);
        setTotal(0);
    }

    return(
        <div className="quiz" >

            <div className='quizcontainer'>

            <h2 className="ReportHeading">Choose the answer</h2>
              
                {  
                
                newData[index]?
                <> 
                <table className="quiztable">
                    
                    <tr><th className="quizquestion">{newData[index]?.question}</th></tr>
                    
                    <tr className="optionrow">
                        <td className="quizoptions" onClick={()=>OptionClick(newData[index]?.option1)}>
                        <input type="radio" value={newData[index]?.option1} name="option" /> {newData[index]?.option1}
                        </td>
                        </tr>

                        <tr className="optionrow">
                        <td className="quizoptions" onClick={()=>OptionClick(newData[index]?.option2)}>
                        <input type="radio" value={newData[index]?.option2} name="option" /> {newData[index]?.option2}
                        </td>
                        </tr>

                        <tr className="optionrow">
                        <td className="quizoptions" onClick={()=>OptionClick(newData[index]?.option3)}>
                        <input type="radio" value={newData[index]?.option3} name="option" /> {newData[index]?.option3}
                        </td>
                        </tr>

                        <tr className="optionrow btnrow">
                        <td className="quizoptions nextbtn">
                        {/* <button className="nextbutton"   onClick={(()=>setIndex(index-1))}> Previous </button> */}
                        <button className="nextbutton"   onClick={()=>NextOnClick(newData[index]?.answer)}> Next </button>
                        <button className="nextbutton"   onClick={()=>navigate('/home')}> Cancel </button>
                        </td>
                        </tr>
                        
                </table>
                </> : <><h2 className="ReportHeading">Report</h2>
                <p className="congrts"> CONGRATULATIONS!!! <span className="score">You Have Scored </span> <span className="scoretotal">{total}</span> / <span className="totallength"> {newData.length}</span></p>
                <p className="tryagain" onClick={tryagain}>Try again</p>
                <div className="link"><Link to={`/home`} class="homeLink" type="button">Home</Link></div> 
                </>}
                </div>
        </div>
    )
}
export default Quiz;