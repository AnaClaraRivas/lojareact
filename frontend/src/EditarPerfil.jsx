import React, { useState } from "react";
import "./EditarPerfil.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function EditarPerfil() {
  const [nome, setNome] = useState("Gabriely Santos");

  const handleSalvar = () => {
    alert("Alterações salvas!");
  };

  return (
    <>

      <Header />

      <h1 className="titulo-pagina">EDITAR PERFIL</h1>


      <div className="editar-container">
        <div className="editar-foto"></div>

        <p className="editar-texto">Alterar foto</p>

        <input
          type="text"
          className="editar-input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <p className="email-texto">Gabrielysantos@gmail.com</p>

        <button className="editar-btn" onClick={handleSalvar}>
          Trocar senha senha
        </button>

        <button className="editar-btn" onClick={handleSalvar}>
          Salvar alterações
        </button>

        <button className="sair-btn" onClick={handleSalvar}>
          Sair da conta
        </button>
        
      </div>
      <Footer/>
    </>
  );
}
