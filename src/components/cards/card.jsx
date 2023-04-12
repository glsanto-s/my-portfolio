import React from 'react';

// import { Container } from './styles';

function card({imagem, titulo}) {
  return (
    <>
        <div id="card-img">
            <div className='container-card'>
                <img src={imagem} id='imgCard'/>
                <h3>{titulo}</h3>
            </div>
        </div>
    </>
  );
}

export default card;