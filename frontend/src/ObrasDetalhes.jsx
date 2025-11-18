import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header.jsx";

import "./App.css";
import "./ObrasDetalhes.css";
import LivroCardHeader from "./components/CardDetalhes.jsx";
import Sinopse from "./components/Sinopse.jsx";
import AvaliacaoRapidaCard from "./components/AvaliacaoRapida.jsx";
import AvaliacaoDetalhadaCard from "./components/AvaliacaoDetalhada.jsx";


import capa from "./assets/img/minhavida1.jpg";




function ObrasDetalhes() {
  return (
    <main>
      <Header />
      <section className="livroobrassection">
        <LivroCardHeader
          capa={capa}
          titulo="Minha vida fora de série – 1ª temporada"
          autor="Paula Pimenta"
          genero="Romance / Jovem adulto"
          editora="Gutenberg"
          ano="2011"
          rating={4}  // muda a quantidade de estrelas

        />

        <Sinopse
          texto="Priscila, com 13 anos, se muda para Belo Horizonte com a mãe. Ela sente falta da vida antiga e da família e tenta se adaptar à nova cidade, a nova escola e aos novos amigos, percebendo que precisa encontrar a si mesma durante a mudança."
        />

        <div className="container mt-5">
          <div className="row g-5">

            <div className="col-md-6 mb-5">
              <AvaliacaoRapidaCard
                nome="Ana Clara Rivas"
                data="21/09/25"
                foto={capa}
                texto="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
              />
            </div>

            <div className="col-md-6 mb-5">
              <AvaliacaoRapidaCard
                nome="Ana Clara Rivas"
                data="21/09/25"
                foto={capa}
                texto="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
              />
            </div>

          </div>
          <AvaliacaoDetalhadaCard
            nome="Gabriely Santos"
            data="03/09/25"
            foto={capa}
            texto="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
            emocao="Me adotou emocionalmente"
            criterios={{
              enredo: 9,
              personagens: 8,
              fluidez: 10,
              ambientacao: 9,
              originalidade: 7
            }}
            veredito="Culpada de ser incrível"
          />
        </div>
      </section>
    </main>
  );
}

export default ObrasDetalhes;
