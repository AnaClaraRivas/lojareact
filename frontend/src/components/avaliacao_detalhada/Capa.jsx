import React, { useState } from "react";
import Rating from '@mui/material/Rating'; // importar as estrelinhas
import Box from '@mui/material/Box'; //ajuda a estilizar as estrelinhas 

//img
import capaPrincipe from "../../assets/img/capa-pequeno-principe.jpg";

function Capa() {
  const capaa = capaPrincipe; // imagem
  const [resposta, setResposta] = useState(""); //pro banco depois - forms
  const formsSubmit = (e) => { //função pra quando o form é enviado
    e.preventDefault(); }; //nao atualiza a pag depois que a pessoa envia a escolha dela
  
  const estrela = { // serve pra quando a pessoa colocar a quantidade de estrela aparecer a mensagem do lado
    0.5: 'Desastre total!',
    1: 'Péssimo!',
    1.5: '“Dava pra piorar…',
    2: 'Tentei gostar… tentei.',
    2.5: 'Definitivamente foi alguma coisa.',
    3: 'Na média.',
    3.5: 'É bom, mais nem tanto.',
    4: 'Valeu a pipoca!',
    4.5: 'Quase perfeito...',
    5: 'Obra-prima!',
  };  

  const [value, setValue] = useState(null); //variável “value” guarda o valor da avaliação (quantidade de estrelas)
                                              //o número entre parenteses é pra quando a pessoa entrar na avaliação ter uma quant de estrelas marcadas
  const [hover, setHover] = useState(-1);  //variável “hover” guarda o valor quando o mouse passa por cima
                                                 // o -1 é pra basicamente dizer que não tem mouse passando por cima da estrela 
    
    
  return ( 
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
       
        {/* Capa */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={capaPrincipe}
            alt="Capa do Pequeno Príncipe"
            className="img-fluid rounded shadow capa_detalhada"
          />
        </div>

{/*------------------------------------------------------------------------------------------------- */}

        
        <div className="col-md-6">
        <h3 className="fw-bold mb-3 titulo_av">O Pequeno Príncipe</h3>

        {/*Estrelas*/}

        <div className="estrelas">
          <Rating
            name="estrela-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => setValue(newValue)}
            onChangeActive={(event, newHover) => setHover(newHover)}
          />
        </div>

        <Box className="texto_estrela">
          {estrela[hover !== -1 ? hover : value] || ""}
        </Box>



{/* Formulário De valer a pena*/}
          <form onSubmit={formsSubmit}> 
            <p className="fw-semibold mb-3">Valeu a pena ler esse livro?</p>

            <div className="form-check mb-2 ">
              <input 
                className="form-check-input "
                type="radio"
                name="avaliacao"
                id="sim"
                value="Sim"
                onChange={(e) => setResposta(e.target.value)} //atualiza a resposta de acordo com a resp do querido
                required //obriga a escolher 
              />
              <label className="form-check-label" htmlFor="sim">
                👍 Sim
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="avaliacao"
                id="nao"
                value="Não"
                onChange={(e) => setResposta(e.target.value)}
              />
              <label className="form-check-label" htmlFor="nao"> {/*conecta a label ao input.*/}
                👎 Não
              </label>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="avaliacao"
                id="maisomenos"
                value="Mais ou menos"
                onChange={(e) => setResposta(e.target.value)}
              />
              <label className="form-check-label" htmlFor="maisomenos">
                💬 Mais ou menos
              </label>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Capa;
