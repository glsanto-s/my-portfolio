import React from 'react';
import "./footer.css";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

// import { Container } from './styles';

function footer() {
  return (
    <>
        <div id="contato">
            <div className="container-footer">
                <h6 id="footer-title"><span>{"<"}</span> Gyo Lima <span>{">"}</span></h6>
                <div id='redes-contato'>
                    <a href="https://www.linkedin.com/in/gyovannalimadossantos/" target={"_blank"}> <BsLinkedin/></a>
                    <a href="https://github.com/glsanto-s" target={"_blank"}> <BsGithub/></a>
                    <a href="mailto:gyovannalima01@gmail.com" target={"_blank"}> <SiGmail/></a>
                </div>

            </div>
        </div>
    </>
  );
}

export default footer;