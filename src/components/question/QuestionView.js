import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {getquestionRoute,deletequestionRoute} from "../utils/API";
import "./questionView.css";

function QuestionView() {

    
    const navigate=useNavigate();
    const [newData,setNewData]=useState([]);
    const delete1questionRoute=deletequestionRoute;

    async function getquestion()
    {
        const questionView=await axios.get(getquestionRoute);
        setNewData(questionView.data);
    }
    useEffect(()=>{
        getquestion();
    },[])  

    async function deletestudent(id)
    {
        if(window.confirm('Are you sure to delete this record?'))
        { 
        await axios.delete(`${delete1questionRoute}/${id}`);
        navigate('/questionview');
        getquestion();
        };
        getquestion();        

    }

    return(
           

<div className="questionview">
<div className="linkdiv">
    
<Link to={`/home`} class="homeLink" type="button">Home</Link>
<h4 className="viewHead homeLink">QUESTION DETAILS</h4>
<Link to={`/createquestion`} class="homeLink" type="button">Add</Link></div>

<table className="table">
    <thead className="tablehead">
        <tr className="tableheadrow">
        
            <th className="tableTH">Name</th>
            <th className="tableTH">Option1</th>
            <th className="tableTH">Option2</th>
            <th className="tableTH">Option3</th>
            <th className="tableTH">Answer</th>
            <th className="actionhead">Action</th>
            
    </tr>
    </thead>
    
    <tbody className="tablebody">
     
        {
                                                        
           newData.map((e)=>
            {
                
                return(
                    
            <tr className="tableTR">
            <td className="tabledata">{e.question}</td>
            <td className="tabledata">{e.option1}</td>
            <td className="tabledata">{e.option2}</td>
            <td className="tabledata">{e.option3}</td> 
            <td className="tabledata">{e.answer}</td> 
            <td>
            <div className="tableLink">
            <Link to={`/questionview1/${e._id}`} className="action" type="button">View</Link>
            <Link to={`/questionEdit/${e._id}`} className="action" type="button">Edit</Link>
            <button class="deletebtn" type="button" onClick={()=>deletestudent(e._id)}>Delete</button>
            
            </div></td>
            
        </tr>
                );
            })
        }
        

</tbody>
</table>
</div>


    )
    
    }

export default QuestionView;