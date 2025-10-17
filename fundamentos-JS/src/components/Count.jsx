import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const [multiply, setMultiply] = useState(2);
  return (
    <div>
      <p>Soma + 1 = {count}</p> <br />
      <p>Multiplicador par = {multiply}</p>
      <div className='btns d-flex justify-content-around'>
        <button onClick={() => setCount(count+1)} type='button' className='btn btn-light shadow-intence'>Somar +1</button>
        <button onClick={() => setMultiply(multiply*2)} className='btn btn-light shadow-intence'>Mult *2 </button>
</div>
    </div>
    
  )
}

export default Count