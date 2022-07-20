import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import {getstudentRoute,getteacherRoute,getquestionRoute} from "../utils/API";
import './home.css';

function Home() {

    
    
    // const [newData,setNewData]=useState([]);
    const [totalStu,setTotalStu]=useState(0);
    const [totalteacher,setTotalteacher]=useState(0);
    const [totalquestion,setTotalQuestion]=useState(0);

    async function getstudent()
    {
        const studentView=await axios.get(getstudentRoute);
        const teacherView=await axios.get(getteacherRoute);
        const questionView=await axios.get(getquestionRoute);
        setTotalStu(studentView.data.length);
        setTotalteacher(teacherView.data.length);
        setTotalQuestion(questionView.data.length);
    }
    useEffect(()=>{
        getstudent();
    },[])  

    return(
        <div className="dashboard1">
        <Navbar></Navbar>
        <div className="dashboard">

        <div className='studiv'>
        <p className="stu">No.of. Students  </p>
        <p className="stu-no">{totalStu}</p>
        </div>

        <div className='teachdiv'>
        <p className="teach">No.of.Teachers  </p>
        <p className="teach-no">{totalteacher}</p>
        </div>

        <div className='quesdiv'>
        <p className="ques">Quiz Questions  </p>
        <p className="ques-no">{totalquestion}</p>
        </div>

        </div>
        </div>
    )
}
export default Home;