import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Botoes from "./components/avaliacao_detalhada/Botoes.jsx";
import Capa from "./components/avaliacao_detalhada/Capa.jsx";
import Comentario from "./components/avaliacao_detalhada/Comentario.jsx";

import "./App.css";
import "./Detalhada.css";

function Detalhada() {
  return (
    <main>
      <Header />
      <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
      <section id="sec-destaques">
        <h2 className="subtitulo">Modo Detalhado</h2>
        <Botoes />
      </section>
      
      <section>
        <Capa />
      </section>

      <section className="section_comentario">
        <Comentario />
      </section> 

    </main>
  );
}

export default Detalhada;
