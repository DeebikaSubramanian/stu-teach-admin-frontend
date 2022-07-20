export const API="https://stu-teach-admin.herokuapp.com";

//auth Routes
export const registerRoute=`${API}/api/user/register`;
export const loginRoute=`${API}/api/user/login`;

//teacher Routes
export const teacherRoute=`${API}/api/teacher/addteacher`;
export const getteacherRoute=`${API}/api/teacher/getteacher`;
export const get1teacherRoute=`${API}/api/teacher/get1teacher`;
export const updateteacherRoute=`${API}/api/teacher/updateteacher`;
export const deleteteacherRoute=`${API}/api/teacher/deleteteacher`;

//question Routes
export const addquestionRoute=`${API}/api/question/addquestion`;
export const getquestionRoute=`${API}/api/question/getquestion`;
export const get1questionRoute=`${API}/api/question/get1question`;
export const updatequestionRoute=`${API}/api/question/updatequestion`;
export const deletequestionRoute=`${API}/api/question/deletequestion`;

//Student Routes
export const addstudentRoute=`${API}/api/student/addstudent`;
export const getstudentRoute=`${API}/api/student/getstudent`;
export const get1studentRoute=`${API}/api/student/get1student`;
export const updatestudentRoute=`${API}/api/student/updatestudent`;
export const deletestudentRoute=`${API}/api/student/deletestudent`;
