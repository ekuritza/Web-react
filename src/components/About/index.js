import React from 'react';
import logo from './logo.avif'
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 style={{ color: "#3C3C3C", textAlign: "center" }}>Sobre a nossa empresa de streaming</h1>
        <p>Nós somos uma empresa de streaming que oferece conteúdo de alta qualidade para nossos usuários. Nosso catálogo inclui filmes, séries, documentários e muito mais, tudo disponível em diferentes idiomas e com legendas. Nosso objetivo é proporcionar a melhor experiência de streaming para nossos usuários em todo o mundo.</p>
        <h2 style={{ color: "#ADD8E6", textAlign: "center" }}>Nossa equipe</h2>
        <p>Nossa equipe é composta por profissionais apaixonados pelo entretenimento e pela tecnologia. Estamos sempre em busca de novas formas de melhorar a experiência de nossos usuários e tornar o nosso serviço ainda mais completo.</p>
        <h2 style={{ color: "#ADD8E6", textAlign: "center" }}>Entre em contato</h2>
        <p>Se você tiver alguma dúvida ou sugestão, por favor, entre em contato conosco por meio do nosso formulário de contato ou envie um e-mail para support@minhaempresa.com.</p>
      </div>
      <div className="about-image">
        <img src={logo} alt="Empresa de streaming" />
      </div>
    </div>
  );
};

export default About;
