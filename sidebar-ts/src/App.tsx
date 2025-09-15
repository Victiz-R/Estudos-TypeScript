import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Redes from './pages/Redes';
import Contact from './pages/Contatos'

const App: React.FC = () => {

  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
      </div>
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Redes' element={<Redes/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
