import { useState } from "react";


const UserInfoForm = () => {
    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");

    const handleSubmit = (event) =>{
        event.preventDefault();

        //integração com API para banco de dados
        //mas vamos ver só no log por enquanto
        alert(`Olá: ${name}, esse é seu e-mail: ${email}`);
        //console.log("Nome:", name,"|", "Email:", email);
    }
  return (
    <form onSubmit={handleSubmit} className="d=flex flex-column align-items-center gap-2 mt-3">
        <div className="form-group w-auto mb-2">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" className="form-control"/>
        </div>
        <div className="form-group w-auto mb-2">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" className="form-control" />
        </div>
        <button type="submit" className='btn btn-light shadow-intence mt-2'>Enviar</button>
    </form>
  )
}

export default UserInfoForm