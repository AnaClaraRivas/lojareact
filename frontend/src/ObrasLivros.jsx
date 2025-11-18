import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import LivroCard from "./components/LivroCard";
import "./ObrasLivros.css";

function ObrasLivros() {
  // guarda a lista de obras armazena os objetos recebidos do back)
  const [obras, setObras] = useState([]);

  // guarda o texto da pesquisa 
  const [pesquisa, setPesquisa] = useState("");

  // carrega as obras ao abrir a página (useEffect sem dependencias roda so uma vez ao montar o componente)
  useEffect(() => {
    // define uma função para buscar os dados do backend
    const carregarObras = async () => {
      try {
        // faz a requisição que retorna a lista de obras
        const resposta = await fetch("http://localhost/backlumiere/obras/listar.php");
        // converte a resposta para JSON 
        const dados = await resposta.json();
        // atualiza o estado obras com os dados recebidos
        setObras(dados);
      } catch (erro) {
        // trata erro 
        console.log("Erro ao carregar obras:", erro);
      }
    };

    // chama a funcaoo que faz o select 
    carregarObras();
  }, []); 

  // filtra as obras volta apenas com as obras que título contém o texto da pesquisa
  const obrasFiltradas = obras.filter((obra) =>
    // para cada obra pega o título transforma em minúsculas e verifica se inclui a pesquisa em minúsculas
    obra.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );


  return (
    <>
      <Header />

      <main>
        <h1 className="titulo-pagina">LIVROS</h1>

        <section id="sec-destaques">
          <h2>Destaques</h2>

          <CardContainer />

          <div className="pesquisa-container">
            <p className="texto-pesquisa">
              Pesquise uma obra para avaliar <br /> ou ver as avaliações feitas!
            </p>

            <div className="linha"></div>

            <div className="campo-pesquisa">
              <input
                type="text"
                placeholder="Pesquisar"
                className="input-pesquisa"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)} // toda vez que o usuario digita o texto digitado entra no estado pesquisa que e usado para filtrar os livros
              />
              <button className="botao-pesquisa">
                <span className="material-icons">search</span>
              </button>
            </div>
          </div>

          <div className="banner-cadastro">
            <div className="banner-textos">
              <p className="banner-frase">
                Sentiu falta de alguma obra? <br />
                Cadastre ela no nosso sistema!
              </p>

              <button
                className="banner-botao"
                onClick={() => (window.location.href = "")}
              >
                Cadastrar uma nova obra!
              </button>
            </div>
          </div>

          <div className="filtros-container">
            <select className="filtro-select">
              <option>Filtro 1</option>
            </select>

            <select className="filtro-select">
              <option>Filtro 2</option>
            </select>

            <select className="filtro-select">
              <option>Filtro 3</option>
            </select>
          </div>



          {obrasFiltradas.map((obra) => (
            <LivroCard
              key={obra.id_obras}
              capa={`http://localhost/backlumiere/uploads/${obra.capa}`}
              titulo={obra.titulo}
              estrelas={4}
              autor={obra.autor}
              editora="-"
              ano={obra.ano_lancamento.substring(0, 4)}
              anoBrasil="-"
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default ObrasLivros;
