import { Route, Routes } from 'react-router-dom';
import './css/index.css'
import './css/signup.css'
import './css/login.css'
import './css/home.css'
import './css/Tables.css'
import'./css/Questions.css'
import EmployerLogin from './forms/LoginForms/EmployerLogin';
import EmployerSignUp from './forms/SignUpForms/EmployerSignUp';
import StudentLogin from './forms/LoginForms/StudentLogin';
import AlumniLogin from './forms/LoginForms/AlumniLogin';
import AdminLogin from './forms/LoginForms/AdminLogin';
import Home from './UIs/Home';
import StudentUI from './UIs/StudentUI';
import AlumniUI from './UIs/AlumniUI';
import EmployerUI from './UIs/EmployerUI';
import ParentUI from './UIs/ParentUI';
import AdminUI from './UIs/AdminUI';
import DashBoard from './components/adminpagecompo/DashBoard';
import Logs from './components/adminpagecompo/Logs';
import UserManagement from './components/adminpagecompo/Questions';
import AluminiSignUp from './forms/SignUpForms/AluminiSignUp';
import Parent from './forms/LoginForms/PhoneAuth';
import loginform from './pages/loginform';
import Loginform from './pages/loginform';
import StudentTable from './components/dashboardcomp/StudentTable';
import AluminiTable from './components/dashboardcomp/AluminiTable';
import EmployerTable from './components/dashboardcomp/EmployerTable';
import ParentsTabel from './components/dashboardcomp/ParentsTabel';
import Questions from './components/adminpagecompo/Questions';
import AddQuestionPage from './components/adminpagecompo/AddQuestionPage';
import UpdateQuestion from './components/adminpagecompo/UpdateQuestion';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element = {<Loginform />} />
        <Route path="/employersignup" element={<EmployerSignUp />} />
        <Route path="/employerlogin" element={<EmployerLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path='/parentslogin' element={<Parent />} />
        <Route path="/alumnisignup" element={<AluminiSignUp />} />
        <Route path="/studentUI" element={<StudentUI />} />
        <Route path="/alumniUI" element={<AlumniUI />} />
        <Route path="/employerUI" element={<EmployerUI />} />
        <Route path="/parentsUI" element={<ParentUI />} />

        {/* Admin page sub routing */}
        <Route path="/admin" element={<AdminUI />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="logs" element={<Logs />} />
          <Route path="questionPage" element={<Questions />} />
          <Route path="studentUI" element={<StudentUI />} />
          <Route path="alumniUI" element={<AlumniUI />} />
          <Route path="employerUI" element={<EmployerUI />} />
          <Route path="parentsUI" element={<ParentUI />} />
          <Route path='studentTable' element={<StudentTable/>}/>
          <Route path='aluminiTable' element={<AluminiTable/>} />
          <Route path='employerTable' element={<EmployerTable/>} />
          <Route path='parentTable' element={<ParentsTabel/>} />
          <Route path='addQuestion' element={<AddQuestionPage />} />
          <Route path='updateQuestion' element={<UpdateQuestion/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
