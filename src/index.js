import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Bemvindo from './components/bemvindo';
import SobreMim from './components/sobremim';
import Skills from './components/skills';
import Projetos from './components/projetos';
import Rodape from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Bemvindo/>
    <SobreMim/>
    <Skills/>
    <Projetos/>
    <Rodape/>
  </React.StrictMode>
);
