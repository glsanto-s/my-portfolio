import React from 'react';
import "./header.css";

function header() {
  return (
  <>
    <div id='header'>
        <div className="content-header">
            <div>
                <h4> <span>{"<"}</span> Gyo Lima <span>{">"}</span> </h4>
            </div>
            <div id='side2'>
              <ul><a href="#sobremim">Sobre mim</a></ul>
              <ul><a href="#skills">Skills</a></ul>
              <ul><a href="#projetos">Projetos</a></ul>
              <ul><a href="#contato">Contato</a></ul>
            </div>
        </div>
    </div>
  </>
  );
}

export default header;