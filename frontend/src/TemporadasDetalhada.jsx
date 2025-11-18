import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Botoes from "./components/avaliacao_detalhada/Botoes.jsx";
import CapaTemporadas from "./components/avaliacao_detalhada/CapaTemporadas.jsx"

import "./App.css";
import "./Detalhada.css";

function Temporadas(){

    return(
        <main>
            <Header />
            <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
            <section id="sec-destaques">
                <h2 className="subtitulo">Modo Detalhado</h2>
                <Botoes />
            </section>
            <section>
                <CapaTemporadas />
            </section>
        </main>  
    );


}

export default Temporadas;