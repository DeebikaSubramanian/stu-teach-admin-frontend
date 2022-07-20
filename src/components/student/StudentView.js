import React,{useEffect,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {getstudentRoute,deletestudentRoute} from "../utils/API";
import "./studentView.css";

function StudentView() {

    
    const navigate=useNavigate();
    const [newData,setNewData]=useState([]);
    const delete1studentRoute=deletestudentRoute;

    async function getstudent()
    {
        const studentView=await axios.get(getstudentRoute);
        setNewData(studentView.data);
    }
    useEffect(()=>{
        getstudent();
    },[])  

    async function deletestudent(id)
    {
        if(window.confirm('Are you sure to delete this record?'))
        { 
        await axios.delete(`${delete1studentRoute}/${id}`);
        navigate('/studentview');
        getstudent();
        };
        getstudent();        

    }

    return(
           

<div className="studentview">
<div className="linkdiv">
    
<Link to={`/home`} class="homeLink" type="button">Home</Link>
<h4 className="viewHead homeLink">STUDENT DETAILS</h4>
<Link to={`/createstudent`} class="homeLink" type="button">Add</Link></div>

<table className="table">
    <thead className="tablehead">
        <tr className="tableheadrow">
        
            <th className="tableTH">Name</th>
            <th className="tableTH">Subject</th>
            <th className="tableTH">Contact</th>
            <th className="tableTH">Age</th>
            <th className="actionhead">Action</th>
            
    </tr>
    </thead>
    
    <tbody className="tablebody">
     
        {
                                                        
           newData.map((e)=>
            {
                
                return(
                    
            <tr className="tableTR">
            <td className="tabledata">{e.name}</td>
            <td className="tabledata">{e.subject}</td>
            <td className="tabledata">{e.contact}</td>
            <td className="tabledata">{e.age}</td> 
            <td>
            <div className="tableLink">
            <Link to={`/studentview1/${e._id}`} className="action" type="button">View</Link>
            <Link to={`/studentEdit/${e._id}`} className="action" type="button">Edit</Link>
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

export default StudentView;