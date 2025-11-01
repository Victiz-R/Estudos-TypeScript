const LoginButton = ({loggedIn}) => {
  // Entrar -> Deslogado
  // Sair -> Logado
  return (
    <div>{loggedIn ? <button className="btn">Logout</button> : <button className="btn btn-outline-dark">Login</button> }</div>
  )
}

export default LoginButton