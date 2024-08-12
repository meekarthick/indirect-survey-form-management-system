import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import SideBar from './components/SideBar'
import FormFillingpage from './formpages/FormFillingpage';
import Header from './components/Header';

function App() {

  return (
    <div>
      <FormFillingpage />
      {/* <Header /> */}
    </div>
  )
}

export default App
