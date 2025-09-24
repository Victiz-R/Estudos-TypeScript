import React, { useEffect, useRef } from 'react'
import './home.css'

import Hill1 from '../../imgs/hill1.png'
import Hill2 from '../../imgs/hill2.png'
import Hill3 from '../../imgs/hill3.png'
import Hill4 from '../../imgs/hill4.png'
import Hill5 from '../../imgs/hill5.png'
import Leaf from '../../imgs/leaf.png'
import Plant from '../../imgs/plant.png'
import Tree from '../../imgs/tree.png'

const Home: React.FC= () => {
    const textRef = useRef<HTMLHeadingElement | null>(null);
    const leafRef = useRef<HTMLImageElement | null>(null);
    const hill5Ref = useRef<HTMLImageElement | null>(null);

    useEffect(() =>{
      const handleScroll = () => {
        const value: number = window.scrollY;
          
        if (textRef.current){
          textRef.current.style.marginTop = value * 2.5 + 'px';
        }

        if (leafRef.current){
          leafRef.current.style.marginTop = value * 1.5 + 'px'
          leafRef.current.style.marginLeft = value * 1.2 + 'px'
        }

        if (hill5Ref.current){
          hill5Ref.current.style.marginLeft = value * 1.2 + 'px'
          hill5Ref.current.style.marginTop = value * 0.8 + 'px'
        }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className='mt-70'>
   <div className="parallax-section">
  {/* As imagens de fundo, que devem continuar posicionadas de forma absoluta */}
  <img src={Hill1} alt="hill1" className="position-absolute top-0 start-0 w-100 pe-none" />
  <img src={Hill2} alt="hill2" className='position-absolute top-0 start-0 w-100 pe-none' />
  <img src={Hill3} alt="hill3" className='position-absolute top-0 start-0 w-100 pe-none' />
  <img src={Hill4} alt="hill4" className='position-absolute top-0 start-0 w-100 pe-none' />
  <img ref={ hill5Ref } id='hill5' src={Hill5} alt="hill5" className='position-absolute top-0 start-0 w-100 pe-none' /> 
  <img src={Tree} alt="tree" className='position-absolute top-0 start-0 w-100 pe-none' />
     <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
    <h1 ref={ textRef } id='leaf' className='text-white display-1 big-title text-shadow'>Bem Vindo</h1>
    </div> 
  <img ref={ leafRef} id='leaf' src={Leaf} alt="leaf" className='position-absolute mt-2px start-0 w-100 pe-none' />
 
    
 

  <img src={Plant} alt="plant" className='position-absolute top-0 start-0 w-100 pe-none' />
</div>
<div className='content-section'>
    <div className='container py-5'>
      <h2>Texto para Parallax</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut architecto similique aspernatur, deserunt distinctio corrupti provident et harum ipsa nulla suscipit adipisci in vel, odio ratione. Dolores ad libero ullam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque error fuga, tempora harum incidunt et quisquam officia veritatis voluptatibus dolores totam in culpa assumenda! Deleniti error numquam quae veritatis expedita.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quas natus aut illo, facilis cumque reiciendis. Cupiditate, libero, dolore deserunt quis molestiae, iure iusto consequuntur natus officiis porro sunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus ex pariatur perferendis, facere assumenda animi quos quod dolores itaque, impedit eligendi nemo, consectetur maiores magnam veritatis. Adipisci, assumenda ab.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolore molestias, alias nesciunt, nisi autem soluta quibusdam excepturi ipsum adipisci expedita officiis provident quas illo officia nemo facere recusandae accusantium?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut architecto similique aspernatur, deserunt distinctio corrupti provident et harum ipsa nulla suscipit adipisci in vel, odio ratione. Dolores ad libero ullam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque error fuga, tempora harum incidunt et quisquam officia veritatis voluptatibus dolores totam in culpa assumenda! Deleniti error numquam quae veritatis expedita.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quas natus aut illo, facilis cumque reiciendis. Cupiditate, libero, dolore deserunt quis molestiae, iure iusto consequuntur natus officiis porro sunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus ex pariatur perferendis, facere assumenda animi quos quod dolores itaque, impedit eligendi nemo, consectetur maiores magnam veritatis. Adipisci, assumenda ab.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut architecto similique aspernatur, deserunt distinctio corrupti provident et harum ipsa nulla suscipit adipisci in vel, odio ratione. Dolores ad libero ullam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque error fuga, tempora harum incidunt et quisquam officia veritatis voluptatibus dolores totam in culpa assumenda! Deleniti error numquam quae veritatis expedita.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quas natus aut illo, facilis cumque reiciendis. Cupiditate, libero, dolore deserunt quis molestiae, iure iusto consequuntur natus officiis porro sunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus ex pariatur perferendis, facere assumenda animi quos quod dolores itaque, impedit eligendi nemo, consectetur maiores magnam veritatis. Adipisci, assumenda ab.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut architecto similique aspernatur, deserunt distinctio corrupti provident et harum ipsa nulla suscipit adipisci in vel, odio ratione. Dolores ad libero ullam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque error fuga, tempora harum incidunt et quisquam officia veritatis voluptatibus dolores totam in culpa assumenda! Deleniti error numquam quae veritatis expedita.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae quas natus aut illo, facilis cumque reiciendis. Cupiditate, libero, dolore deserunt quis molestiae, iure iusto consequuntur natus officiis porro sunt?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus ex pariatur perferendis, facere assumenda animi quos quod dolores itaque, impedit eligendi nemo, consectetur maiores magnam veritatis. Adipisci, assumenda ab.

      </p>
    </div>
    </div>
    </div>
  )
}

export default Home