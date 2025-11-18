import React, { useState } from "react"; //permite criar variáveis que mudam dinamicamente


function Botoes() {
  const [ativo, setAtivo] = useState(1); // começa com o 1 ativo

  return (
    <div className="navegacao my-4">
        <a href="#" className={`naveg ${ativo === 1 ? "active" : ""}`} onClick={() => setAtivo(1)}>1</a>
        <a href="#" className={`naveg ${ativo === 2 ? "active" : ""}`} onClick={() => setAtivo(2)}>2</a>
        <a href="#" className={`naveg ${ativo === 3 ? "active" : ""}`} onClick={() => setAtivo(3)}>3</a>
        {/* <a href="#" className={`naveg ${ativo === 4 ? "active" : ""}`} onClick={() => setAtivo(4)}>4</a> */}
    </div>
  );
}

export default Botoes;