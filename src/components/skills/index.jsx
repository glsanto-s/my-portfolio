import React from "react";
import "./skills.css";
import Card from "../cards/card";
import ImgCss from "../../images/css.png";
import ImgHtml from "../../images/html.png";
import ImgJs from "../../images/js.png";
import ImgJava from "../../images/java.png";
import ImgPhp from "../../images/php.png";
import ImgMysql from "../../images/mysql.png";
import ImgReact from "../../images/react.png";
import ImgNode from "../../images/nodejs.png";
// import { Container } from './styles';

function skills() {
  return (
    <>
      <div id="skills">
        <h2 id="skills-title">Skills</h2>

        <div className="container-skills">
          <div className="card-skills">
            <Card imagem={ImgHtml} titulo={"HTML"} />
            <Card imagem={ImgCss} titulo={"CSS"} />
            <Card imagem={ImgJs} titulo={"JavaScript"} />
            <Card imagem={ImgReact} titulo={"ReactJs"} />
          </div>
          <br/>
          <div className="card-skills">
            <Card imagem={ImgNode} titulo={"NodeJs"} />
            <Card imagem={ImgPhp} titulo={"PHP"} />
            <Card imagem={ImgJava} titulo={"Java"} />
            <Card imagem={ImgMysql} titulo={"MySQL"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default skills;
