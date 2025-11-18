import React from 'react';
import EstanteLivros from "./components/EstanteLivros.jsx";
import Header from "./components/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estantes.css';
import './App.css';

import livro1 from "./assets/img/minhavida1.jpg";
import livro2 from "./assets/img/minhavida2.jpg";
import livro3 from "./assets/img/minhavida3.jpg";
import livro4 from "./assets/img/minhavida4.jpg";
import livro5 from "./assets/img/minhavida5.jpg";



function Estantes() {

  // VARIÁVEIS PARA SEREM ENVIADAS PARA O COMPONENTE
  const livrosSaga1 = [
    { id: 1, imagem: livro1, titulo: "Minha Vida - 1ª temporada" },
    { id: 2, imagem: livro2, titulo: "Minha Vida - 2ª temporada" },
    { id: 3, imagem: livro3, titulo: "Minha Vida - 3ª temporada" },
    { id: 4, imagem: livro4, titulo: "Minha Vida - 4ª temporada" },
    { id: 5, imagem: livro5, titulo: "Minha Vida - 5ª temporada" },
  ];

  const obrasSaga1 = [
    {
      id: 1,
      titulo: "Minha Vida Fora de Série - 1ª temporada",
      autor: "Paula Pimenta",
      editora: "Gutenberg",
      publicacao: 2011,
      imagem: livro1,
      rating: 5
    },
    {
      id: 2,
      titulo: "Minha Vida Fora de Série - 2ª temporada",
      autor: "Paula Pimenta",
      editora: "Gutenberg",
      publicacao: 2013,
      imagem: livro2,
      rating: 4
    },
    {
      id: 3,
      titulo: "Minha Vida Fora de Série - 3ª temporada",
      autor: "Paula Pimenta",
      editora: "Gutenberg",
      publicacao: 2013,
      imagem: livro3,
      rating: 4
    },
    {
      id: 4,
      titulo: "Minha Vida Fora de Série - 4ª temporada",
      autor: "Paula Pimenta",
      editora: "Gutenberg",
      publicacao: 2013,
      imagem: livro4,
      rating: 4
    },
    {
      id: 5,
      titulo: "Minha Vida Fora de Série - 5ª temporada",
      autor: "Paula Pimenta",
      editora: "Gutenberg",
      publicacao: 2013,
      imagem: livro5,
      rating: 4
    },

  ];

  return (
    <div className="EstanteTeste">
      <Header />
      <h2 className="text-center my-4 estante-titulo">ESTANTES</h2>

      {/*  Chamada passando variáveis */}
      <EstanteLivros
        tituloSaga="Minha Vida Fora de Série"
        livrosCarrossel={livrosSaga1}
        obrasDetalhe={obrasSaga1}
      />
    </div>
  );
}

export default Estantes;

