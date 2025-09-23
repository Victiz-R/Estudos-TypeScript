import React from 'react'
import './home.css'
import Hill1 from '../../imgs/hill1.png'
import Hill2 from '../../imgs/hill2.png'
import Hill3 from '../../imgs/hill3.png'
import Hill4 from '../../imgs/hill4.png'
import Hill5 from '../../imgs/hill5.png'
import Leaf from '../../imgs/leaf.png'
import Plant from '../../imgs/plant.png'
import Tree from '../../imgs/tree.png'

const home = () => {
  return (
   <div className="container-fluid p-0">
  {/* As imagens de fundo, que devem continuar posicionadas de forma absoluta */}
  <img src={Hill1} alt="hill1" className="position-absolute top-0 start-0 w-100 pe-none" />
  <img src={Hill2} alt="hill2" className='position-absolute top-0 start-0 w-100 pe-none' />
  <img src={Hill3} alt="hill3" className='position-absolute top-0 start-0 w-100 pe-none' />
  <img src={Hill4} alt="hill4" className='position-absolute top-0 start-0 w-100 pe-none' />
  <img src={Hill5} alt="hill5" className='position-absolute top-0 start-0 w-100 pe-none' />  
  <img src={Leaf} alt="leaf" className='position-absolute mt-2px start-0 w-100 pe-none' />
  <img src={Tree} alt="tree" className='position-absolute top-0 start-0 w-100 pe-none' />
    
    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <h1 className='text-white display-1 big-title text-shadow'>Bem Vindo</h1>
    </div>

  <img src={Plant} alt="plant" className='position-absolute top-0 start-0 w-100 pe-none' />
  
</div>
  )
}

export default home