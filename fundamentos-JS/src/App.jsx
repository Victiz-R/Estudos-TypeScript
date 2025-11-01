import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Descricao from './components/Descricao';
import Welcome from './components/Welcome';
import Irmao from './components/Irmao';
import Idioma from './components/Idioma';
import Count from './components/Count';
import UserInfoForm from './components/UserInfoForm';
import PaiFunction from './components/PaiFunction';
import Form from './components/Form';
import LoginButton from './components/LoginButton';
import Greeting from './components/Exercicios/Greeting';
import Counter from './components/Exercicios/Counter';
import TaskList from './components/Exercicios/TaskList';

function App() {


  return (
    <>
     <div className="d-flex justify-content-center align-items-center vh100">
      <div className='p-5 bg-secondary bg-gradient rounded-3 shadow-intence text-center'>
      <Welcome /><br/>
      <Descricao />
      <Irmao irmao='Pablo'/>
      <Idioma idiomairmao='inglês'/><br/>
      <Count /> <br />
      <UserInfoForm />
      <PaiFunction />
      <Form />
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>
      <Greeting name='Victor'/>
      <Counter />
      <TaskList tarefas={["bater o ponto", "verificar rota", "colocar na rota O.S novas"]}/>
      </div>
</div>

    </>
  )
}

export default App
