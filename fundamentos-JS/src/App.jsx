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

function App() {


  return (
    <>
     <div class="d-flex justify-content-center align-items-center vh100">
      <div className='p-5 bg-secondary bg-gradient rounded-3 shadow-intence text-center'>
      <Welcome /><br/>
      <Descricao />
      <Irmao irmao='Pablo'/>
      <Idioma idiomairmao='inglês'/><br/>
      <Count /> <br />
      <UserInfoForm />
      <PaiFunction />
      </div>
</div>

    </>
  )
}

export default App
