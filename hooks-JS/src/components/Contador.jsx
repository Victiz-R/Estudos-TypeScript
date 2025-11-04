import {useReducer}from 'react'

// Definição de estado inicial

const estadoInicial = { contador: 0 };

// Função reducer que define como as ações atualizam o estado

function reducer(estado, acao){
    switch (acao.tipo) {
        case "incrementar":
        return { contador: estado.contador + 1};
        case "decrementar":
            return { contador: estado.contador - 1 };
        case "resetar":
            return { contador: 0 };
        case "incrementar+2":
            return { contador: estado.contador + 2 }
        default:
            throw new Error("Ação não encontrada");
    }

}

const Contador = () => {

    // Inicializar o useReducer com estado inicial e função modificadora
    const  [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div className='d-flex flex-column align-items-center gap-2'>
        <p>Contagem {estado.contador}</p>
        <button className='btn btn-primary' style={{ width: "130px"}} onClick={()=> dispatch({ tipo: "incrementar" })}>Incrementar</button>
        <button className='btn btn-primary' style={{ width: "130px" }} onClick={() => dispatch({ tipo: "decrementar"})}>Decrementar</button>
        <button className='btn btn-primary' style={{ width: "130px"}} onClick={() => dispatch({ tipo: "resetar"})}>Resetar</button>
        <button className='btn btn-warning' style={{ width: "130px"}} onClick={() => dispatch({tipo: "incrementar+2"})}>Incrementar + 2</button>

    </div>
  )
}

export default Contador