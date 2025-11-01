import {useState, useEffect} from 'react'

const Timer = () => {
    const [segundos, setSegundos] = useState (0);

    // setInterval, setTimeout
    useEffect (() =>{
        const intervalId = setInterval(() =>{
            setSegundos((prevSegundos) => prevSegundos +1);
        }, 1000);

        // limpaza do estado
        return() => clearInterval(intervalId);
    }, []); // array dependencias vazio
  return (
    <div>
      <p>Timer: {segundos} segundos</p>
      <button className='btn btn-outline-dark' onClick={() => setSegundos(segundos )}>Pare o timer!</button>
    </div>
    
  )
}

export default Timer