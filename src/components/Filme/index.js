import './filme.css';

const filmes = [{
    "nome": "Vingadores - Guerra infinita",
    "duracao": "2H15",
    "foto": "vingadores.JPG",
  },
  {
    "nome": "Spiderman - Far from home",
    "duracao": "2H20",
    "foto": "spiderman.jpg",
  },
  {
    "nome": "Shrek",
    "duracao": "2H30",
    "foto": "shrek.jpg",
  },
]

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome}</h5>
                <p>{filme.duracao}</p>
                  <a href={`/detalhes/${filme.nome}`}>
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


