import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {getteacherRoute,deleteteacherRoute} from "../utils/API";
import "./teacherView.css";

function TeacherView() {

    
    const navigate=useNavigate();
    const User=JSON.parse(localStorage.getItem("quiz"));
    const [newData,setNewData]=useState([]);
    const delete1teacherRoute=deleteteacherRoute;

    async function getTeacher()
    {
        const teacherView=await axios.get(getteacherRoute);
        setNewData(teacherView.data);
    }
    useEffect(()=>{
        getTeacher();
    },[])  

    async function deletestudent(id)
    {
        if(window.confirm('Are you sure to delete this record?'))
        { 
        await axios.delete(`${delete1teacherRoute}/${id}`);
        navigate('/teacherview');
        getTeacher();
        };
        getTeacher();        

    }

    return(
           

<div className="teacherview">
<div className="linkdiv">
    
<Link to={`/home`} class="homeLink" type="button">Home</Link>
<h4 className="viewHead homeLink">TEACHER DETAILS</h4>
<Link to={`/teacher`} class="homeLink" type="button">Add</Link></div>

<table className="table">
    <thead className="tablehead">
        <tr className="tableheadrow">
        
            <th className="tableTH">Name</th>
            <th className="tableTH">Contact</th>
            <th className="tableTH">Qualification</th>
            <th className="tableTH">Subject</th>
            <th className="actionhead">Action</th>
            
    </tr>
    </thead>
    
    <tbody className="tablebody">
     
        {
                                                        
           newData.map((e)=>
            {
                
                return(
                    
            <tr className="tableTR">
            <td className="tabledata">{e.teacherName}</td>
            <td className="tabledata">{e.contact}</td>
            <td className="tabledata">{e.Qualification}</td>
            <td className="tabledata">{e.Subject}</td> 
            <td>
            <div className="tableLink">
            <Link to={`/teacherview1/${e._id}`} className="action" type="button">View</Link>
            <Link to={`/teacherEdit/${e._id}`} className="action" type="button">Edit</Link>
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

export default TeacherView;