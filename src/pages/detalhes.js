import { useParams } from 'react-router-dom';

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

export default function Detalhes() {
    const { filme } = useParams()
    return (
        <div >
            <p>Filme escolhido: {filme}</p>
            
            {(() => {
              if(filme === 'Vingadores - Guerra infinita'){
                return (
                  <div>
                    <p>Sinopse: {filmes[0].descricao}</p>
                    <p>Gênero: {filmes[0].genero}</p>
                    <p>Nota: {filmes[0].nota}</p>
                    <p>Ano: {filmes[0].ano}</p>
                  </div>
                )
              }
          })()}
        </div>
    )
}