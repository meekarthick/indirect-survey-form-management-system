import { Route, Routes } from 'react-router-dom';
import './css/index.css'
import './css/signup.css'
import './css/login.css'
import './css/home.css'
import EmployerLogin from './LoginForms/EmployerLogin';
import EmployerSignUp from './SignUpForms/EmployerSignUp';
import StudentLogin from './LoginForms/StudentLogin';
import AlumniLogin from './LoginForms/AlumniLogin';
import AdminLogin from './LoginForms/AdminLogin';
import Home from './UIs/Home';
import StudentUI from './UIs/StudentUI';
import AlumniUI from './UIs/AlumniUI';
import EmployerUI from './UIs/EmployerUI';
import ParentUI from './UIs/ParentUI';
import AdminUI from './UIs/AdminUI';
import DashBoard from './components/adminpagecompo/DashBoard';
import Logs from './components/adminpagecompo/Logs';
import UserManagement from './components/adminpagecompo/UserManagement';
import AluminiSignUp from './SignUpForms/AluminiSignUp';
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employersignup" element={<EmployerSignUp />} />
        <Route path="/employerlogin" element={<EmployerLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/alumnisignup" element={<AluminiSignUp />} />
        <Route path="/studentUI" element={<StudentUI />} />
        <Route path="/alumniUI" element={<AlumniUI />} />
        <Route path="/employerUI" element={<EmployerUI />} />
        <Route path="/parentsUI" element={<ParentUI />} />

        {/* Admin page sub routing */}
        <Route path="/admin" element={<AdminUI />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="logs" element={<Logs />} />
          <Route path="manageusers" element={<UserManagement />} />
          <Route path="studentUI" element={<StudentUI />} />
          <Route path="alumniUI" element={<AlumniUI />} />
          <Route path="employerUI" element={<EmployerUI />} />
          <Route path="parentsUI" element={<ParentUI />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
