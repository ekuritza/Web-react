import "./preco.css";

export default function Preco() {
  
  return (
    
    <div className="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Conheça nossos planos</h1>
        <p class="lead">Com a nossa plataforma de streaming, você terá acesso a um mundo de entretenimento em suas mãos. Leia mais para descobrir os planos que temos disponíveis e escolha aquele que melhor atende às suas necessidades.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Bronze</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">35,00 R$ <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>2 Telas compartilahdas</li>
                <li>Resolução HD</li>
                <li>Milhares de filmes!</li>
                <li>Suporte 24h!</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Comece seu mes grátis!</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Silver</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">70,00 R$ <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>4 Telas compartilahdas</li>
                <li>Resolução Full HD</li>
                <li>A maior diversidade de filmes do mercado!</li>
                <li>Suporte 24h!</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Garanta já!</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Gold</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">70,00 R$ <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>6 Telas compartilahdas</li>
                <li>Resolução 4K</li>
                <li>Filmes que acabaram de sair do cinema!</li>
                <li>Receba por whatsApp as últimas atualizações!</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Entre em contato!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}