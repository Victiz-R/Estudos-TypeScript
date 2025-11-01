import { useState } from "react"

const Counter = () => {
    const [count, setCount]= useState (0);
  return (
    <div>
        <button className="btn btn-dark" onClick={() => setCount(count +1)}>Clique</button>
        <p>Você clicou: {count} </p>
    </div>
    
  )
}

export default Counter