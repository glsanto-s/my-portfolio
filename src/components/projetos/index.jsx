import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardP from "../cards/card_projeto.jsx";
import "./projetos.css";

// videos
import videoSB from "../../videos/springboot.mp4";
import videoBC from "../../videos/buscacep.mp4";
import videoTE from "../../videos/temporizador.mp4";
import videoSE from "../../videos/senha.mp4";
import videoBO from "../../videos/book.mp4";
import imgAnimase from "../../images/logo_animase.png";
// import { Container } from './styles';

function projetos() {
  return (
    <>
      <div id="projetos">
        <div className="container-projetos">
          <h2 id="projetos-title">Projetos</h2>

            <div id="div-item">
            <CardP
                imagem={imgAnimase}
                titulo={"Anima-Se"}
                descricao={
                  "Uma plataforma que tem como objetivo facilitar a adoção de animais, fornecendo a ponte entre o doador a o adotante, além de proporcionar algumas funções para o planejamento da parte do tutor."
                }
                linguagem={"React, JavaScript, Spring Boot, Java "}
                GitHub={"https://github.com/Anima-Se/ProjetoDemoday.git"}
                Youtube={"https://www.youtube.com/watch?v=MB-lhDUeYB0&t=587s"}
                
              />
              <CardP
                video={videoSB}
                titulo={"Spring Boot"}
                descricao={
                  "Projeto CRUD em Spring Boot, onde consigo fazer as quatro operações básicas: Create (Criar), Read (Ler), Update (Editar) e Delete (Excluir), na intenção de aprender mais sobre a linguagem utilizada."
                }
                linguagem={"React, Java, Spring Boot"}
                GitHub={"https://github.com/glsanto-s/Projeto_SpringBoot.git"}
                LinkedIn={"https://www.linkedin.com/posts/gyovannalimadossantos_reactjs-mysql-springboot-activity-7019409842993807360-bjbd?utm_source=share&utm_medium=member_desktop"}
              />
              <CardP
                video={videoBC}
                titulo={"Busca Cep"}
                descricao={
                  "Projeto voltado para uma pesquisa de CEP retornando os dados do mesmo."
                }
                linguagem={"React, CSS, Api ViaCep"}
                GitHub={"https://github.com/glsanto-s/Buscador_Cep.git"}
                LinkedIn={"https://www.linkedin.com/posts/gyovannalimadossantos_reactjs-equipe02-proa-activity-6990413818262642688-Lcmw?utm_source=share&utm_medium=member_desktop"}
              />
            </div>
            <div id="div-item">
            <CardP
                video={videoTE}
                titulo={"Temporizador"}
                descricao={
                  "Projeto temporizador para aperfeiçoamente da linguagem JS."
                }
                linguagem={"HTML, CSS, JavaScript"}
                GitHub={"https://github.com/glsanto-s/Temporizador.git"}
                LinkedIn={"https://www.linkedin.com/posts/gyovannalimadossantos_css-html-js-activity-6989285962832863232-8MIK?utm_source=share&utm_medium=member_desktop"}
              />
              <CardP
                video={videoSE}
                titulo={"Gerador de Senhas"}
                descricao={
                  "Projeto que gera senhas da melhor forma automáticamente."
                }
                linguagem={"HTML, CSS, JavaScript"}
                GitHub={"https://github.com/glsanto-s/Gerador_Senhas.git"}
                LinkedIn={"https://www.linkedin.com/posts/gyovannalimadossantos_js-css-html-activity-6985388344767623168-u8qp?utm_source=share&utm_medium=member_desktop"}
                
              />
              <CardP
                titulo={"Slide Fotos"}
                descricao={
                  "Projeto que a partir de uma API, capta fotos do formulário do Google e gera um slide."
                }
                linguagem={"React, API SheetDB, CSS"}
                GitHub={"https://github.com/glsanto-s/stand_fotos.git"}
              />
            </div>
            <div id="div-item">
            <CardP
                video={videoBO}
                titulo={"Landing Page"}
                descricao={
                  "Landing page de uma loja de livros."
                }
                linguagem={"HTML, CSS, JavaScript, Boostrap"}
                GitHub={"https://github.com/glsanto-s/Projeto_BookShop.git"}
                LinkedIn={"https://www.linkedin.com/posts/gyovannalimadossantos_css-html-proa-activity-6983396650643820544-EeeY?utm_source=share&utm_medium=member_desktop"}
              />
            </div>
        </div>
      </div>
    </>
  );
}

export default projetos;
