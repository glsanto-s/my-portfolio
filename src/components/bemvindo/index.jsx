import React from 'react';
import "./bemvindo.css"
import MyFoto from '../../images/my_photo.png';

function bemvindo() {
  return (
    <>
      <div id="bemvindo">
          <div className="container-bemvindo">
                <div id='side'>
                  <h1 id='me-title'>Gyovanna Lima</h1>
                  <h5 id='desc'>Full Stack Developer <span id='barra'>|</span></h5>
                </div>
                <div id='side2'>
                    <pre id='cod'>
                      {'const [btnCadastrar, setBtnCadastrar] = useState(true);'}<br/>
                      {'const [produtos, setProdutos] = useState([]);'}<br/>
                      {'const produto = {'}<br/>
                        {'  codigo : 0,'}<br/>
                        {'  nome : "",'}<br/>
                        {'  marca: ""'}<br/>
                      {'}'}<br/>
                      {'const [objProduto, setObjProduto] = useState(produto);'}<br/>
                      {'useEffect(()=>{'}<br/>
                        {'  fetch("http://localhost:8080/listar")'}<br/>
                        {'  .then(retorno => retorno.json())'}<br/>
                        {'  .then(retorno_convertido => setProdutos(retorno_convertido));'}
                      {'}, [] );'}<br/>
                      {'const aoDigitar = (e) =>{'}<br/>
                        {'  setObjProduto({...objProduto, [e.target.name]:e.target.value});'}<br/>
                        {'  // console.log(e.target.value);'}<br/>
                      {'}'}<br/>
                      {'const cadastrarProd = () => {'}<br/>
                        {"  fetch('http://localhost:8080/cadastrar', {"}<br/>
                          {"  method: 'POST',"}<br/>
                          {'  body: JSON.stringify(objProduto),'}<br/>
                          {'  headers:{'}<br/>
                            {"  'Content-type': 'application/json',"}<br/>
                            {"  'Accept':'application/json'"}<br/>
                          {'  }'}<br/>
                    </pre>
                    <div id="bolha1"></div>
                    <div id="bolha2"></div>
                    <div ><img id="bolha3" src={MyFoto}/></div>
                </div>
          </div>
      </div>
    </>
  );
}

export default bemvindo;