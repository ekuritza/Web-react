import './filme.css';

const filmes = [
  {
    "nome": "Vingadores - Guerra infinita",
    "ano": 2017,
    "foto": "Vingadores.JPG",
    "genero": "Ação/Nerd",
    "descrição": "Filme da Marvel",
    "nota": 5
  },
  {
    "nome": "Spiderman = Far from home",
    "ano": 2021,
    "foto": "spiderman.jpg",
    "genero": "Ação/Nerd",
    "descrição": "Filme da Marvel",
    "nota": 8
  },
  {
    "nome": "Shrek",
    "ano": 2001,
    "foto": "shrek.jpg",
    "genero": "Animação",
    "descrição": "Filme da DreamWorks",
    "nota": 10
  },
]

function Filme() {
  return (
    <div className='container-fluid-text-center'>
      <div class="row">
        {filmes.map((filme, i) =>
        <div class='col-md-4'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{filme.nome}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Filme;
