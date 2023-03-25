import {Link} from 'react-router-dom';
import tistreza from './tistreza.jpeg'

export const PageNotFound = () => {
  return ( 
    <><div>
      <Link to="/">Voltar</Link>
    </div>
    <div >
      <h1>Erro 404</h1>
      <p>Página não encontrada</p>
      <img src={tistreza} alt="Página não encontrada"></img>
    </div></>
  );
};

