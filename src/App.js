import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home/Home';
import Teacher from './components/TeacherDetails/Teacher';
import TeacherEdit from './components/TeacherDetails/TeacherEdit';
import TeacherView from './components/TeacherDetails/TeacherView';
import TeacherView1 from './components/TeacherDetails/TeacherView1';
import CreateQuestion from './components/question/CreateQuestion';
import QuestionView from './components/question/QuestionView';
import QuestionView1 from './components/question/QuestionView1';
import QuestionEdit from './components/question/QuestionEdit';
import CreateStudent from './components/student/CreateStudent';
import StudentView from './components/student/StudentView';
import StudentView1 from './components/student/StudentView1';
import StudentEdit from './components/student/StudentEdit';
import Quiz from './components/question/Quiz';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {/* Auth Routes */}
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>

      {/* //Teacher Route */}
      <Route path="/home" element={<Home/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      <Route path="/teacheredit/:id" element={<TeacherEdit/>}/>
      <Route path="/teacherView" element={<TeacherView/>}/>
      <Route path="/teacherView1/:id" element={<TeacherView1/>}/>

      {/* Question Route */}
      <Route path="/createquestion" element={<CreateQuestion/>}/>
      <Route path="/questionview" element={<QuestionView/>}/>
      <Route path="/questionview1/:id" element={<QuestionView1/>}/>
      <Route path="/questionedit/:id" element={<QuestionEdit/>}/>
      <Route path="/quiz" element={<Quiz/>}/>

      {/* Student Route */}
      <Route path="/createstudent" element={<CreateStudent/>}/>
      <Route path="/studentview" element={<StudentView/>}/>
      <Route path="/studentview1/:id" element={<StudentView1/>}/>
      <Route path="/studentedit/:id" element={<StudentEdit/>}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
