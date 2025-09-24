//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/navbar";

import Home from "./pages/home/home";
import Redes from "./pages/redes/redes";
import Contatos from "./pages/contatos/contatos";
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container-fluid p-0'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/redes" element={<Redes/>} />
          <Route path="/contatos" element={<Contatos/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
