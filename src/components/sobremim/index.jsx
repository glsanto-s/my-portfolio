import React from "react";
import "./sobre.css";
// import { Container } from './styles';

function sobremim() {
  return (
    <>
      <div id="sobremim">
        <div className="container-sobre">
          <div>
            <div className="bola1"></div>
            <div className="bola2"></div>
          </div>
          <div id="desc-me">
            <p>
              Há algum tempo, me interessei pela programação entrando em um
              curso técnico de{" "}
              <span>Análise e Desenvolvimento de Sistemas</span>. Logo após o
              término do curso, iniciei outro no <span>Instituto PROA</span> o
              curso de <span>Desenvolvedor Web Java</span>. Hoje estou em busca
              do meu primeiro emprego na áera e graduações.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default sobremim;
