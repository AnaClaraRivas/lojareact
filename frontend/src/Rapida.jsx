import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Capa from "./components/avaliacao_detalhada/Capa.jsx";
import ComentarioRapida from "./components/ComentarioRapida.jsx";

import "./App.css";
import "./Detalhada.css";

function Rapida() {
  return (
    <main>
        <Header />
        <h1 className="titulo-pagina ">AVALIAÇÕES</h1>
        <section id="sec-destaques">
            <h2 className="subtitulo">Modo Rápido</h2>
        </section>
        
        <section>
            <Capa />
        </section>

        <section className="section_comentario">
            <ComentarioRapida />
        </section> 
        <Footer />
    </main>
  );
}

export default Rapida;