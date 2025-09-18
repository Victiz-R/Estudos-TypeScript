import React, { useState } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';


const App: React.FC = () => {
 const [collapsed, setCollapsed] = useState(false);
  return (
    <Router>
      <div className='d-flex'>
        <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />
        <div className='content p-4' style={{ flex: 1}}>
          <Routes>
            <Route path='/' element={<h1>Home</h1>}/>
            <Route path='/Redes' element={<h1>Redes Sociais</h1>}/>
            <Route path='/Contatos' element={<h1>Contatos</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
