import React from "react";
import InfoPerfil from "./components/InfoPerfil";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComentarioPerfil from "./components/ComentarioPerfil";
import { Link } from "react-router-dom";


import "./perfil.css";

// Lista de comentários
const comentarios = [
  {
    nome: "Gabriely Santos",
    livro: "O Pequeno Príncipe",
    estrelas: 5,
    texto:
      "É uma obra simples e encantadora, mas cheia de significados profundos. A narrativa leve e poética..."
  },
  {
    nome: "Gabriely Santos",
    livro: "O Pequeno Príncipe",
    estrelas: 4,
    texto:
      "Uma história tocante que ensina sobre amor, amizade e essência das pessoas..."
  },
  {
    nome: "Gabriely Santos",
    livro: "O Pequeno Príncipe",
    estrelas: 5,
    texto:
      "Leitura leve, linda e marcante para crianças e adultos..."
  },
  {
    nome: "Gabriely Santos",
    livro: "O Pequeno Príncipe",
    estrelas: 5,
    texto:
      "Um clássico que todos deveriam ler..."
  },
  {
    nome: "Gabriely Santos",
    livro: "O Pequeno Príncipe",
    estrelas: 4,
    texto:
      "Reflexivo e emocionante..."
  },
  {
    nome: "Gabriely Santos",
    livro: "O Pequeno Príncipe",
    estrelas: 5,
    texto:
      "A melhor leitura que já fiz..."
  },
];

export default function Perfil() {
  return (
    <>
      <Header />

      <h1 className="titulo-pagina">PERFIL</h1>

      <div className="perfil-container">
        <div className="perfil-content">
          <div className="perfil-left">
            <div className="perfil-avatar"></div>

            <InfoPerfil
              nome="Gabriely Santos"
              avaliacoes={13}
              dataEntrada="20/10/2025"
            />
          </div>

          <Link className="perfil-btn" to="/editarperfil">
            Editar perfil
          </Link>

        </div>
      </div>

      <div className="comentarios-grid">
        {comentarios.map((item, index) => (
          <ComentarioPerfil
            key={index}
            nome={item.nome}
            livro={item.livro}
            estrelas={item.estrelas}
            texto={item.texto}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
