import { useState } from 'react';

const Form = () => {
    const [nome, setNome] = useState();
    const [dataNascimento, setDataNascimento] = useState();

    const calcularIdade = () =>{
      if (!dataNascimento) return 0;

      const nascimento = new Date(dataNascimento);
      const hoje = new Date();

      let idade = hoje.getFullYear() - nascimento.getFullYear();
      const mesAtual = hoje.getMonth();
      const mesNascimento = nascimento.getMonth();

      // se ainda não fez aniversario esse ano
      if (
        mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate)
      ) {
        idade--;
      }
      return idade;
    };

    const  handleSubit = (event) =>{
      event.preventDefault();
      const idade = calcularIdade();

      alert(`Seu nome é ${nome} e você tem ${idade} anos!`);
      console.log(`Você nasceu em: ${dataNascimento}`)
    }
  return (
    <form onSubmit={handleSubit}>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite seu nome' />
        <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
        <button type='submit' className='btn btn-outline-light'>Enviar</button>
    </form>
  )
}

export default Form