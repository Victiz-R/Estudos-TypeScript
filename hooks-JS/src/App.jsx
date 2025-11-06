import './App.css'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'

function App() {
  return (
    <>
      <ExemploUseEffect />
      <Timer /> 
      <Contador />
      <DisplayWindowSize />
    </>
  )
}

export default App
