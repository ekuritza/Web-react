import './filme.css';

const filmes = [{
    "nome": "Vingadores - Guerra infinita",
    "duracao": "2H15",
    "ano": 2017,
    "foto": "vingadores.JPG",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel",
    "nota": 5
  },
  {
    "nome": "Spiderman - Far from home",
    "duracao": "2H20",
    "ano": 2021,
    "foto": "spiderman.jpg",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel",
    "nota": 8
  },
  {
    "nome": "Shrek",
    "duracao": "2H30",
    "ano": 2001,
    "foto": "shrek.jpg",
    "genero": "Animação",
    "descricao": "Filme da DreamWorks",
    "nota": 10
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
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <a
                  href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} target="_blank"
                >
                  <div className="btn btn-primary">
                    Trailer
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


