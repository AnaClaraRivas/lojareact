// Importa o React e o hook useState, que permite armazenar e alterar dados no componente.
import React, { useState } from "react";

import capaPrincipe from "../../assets/img/capa-pequeno-principe.jpg";

function CapaTemporadas() {
  // Guarda o caminho da imagem na variável "capaa"
  const capaa = capaPrincipe;

  // Cria um estado para armazenar as respostas das temporadas.
  // Aqui usamos um OBJETO, onde a chave (1, 2, 3, 4...) é o número da temporada
  // e o valor é a resposta ("Sim", "Não" ou "Mais ou menos").
  const [respostas, setRespostas] = useState({
    1: "",
    2: "",
    3: "",
  });

  // 🔄 Esta função é chamada toda vez que o usuário marca uma opção.
  // Ela recebe o número da temporada e o valor da resposta.
  const handleChange = (temporada, valor) => {
    // Atualiza o estado 'respostas' mantendo as respostas antigas (...prev)
    // e alterando apenas a temporada clicada.
    setRespostas((prev) => ({
      ...prev,
      [temporada]: valor,
    }));
  };

  // ⚙️ Esta função será chamada quando o usuário clicar em "Publicar".
  // É aqui que no futuro faremos a integração com o backend PHP.
  const formsSubmit = (e) => {
    e.preventDefault(); // impede o reload automático da página

    // Mostra no console as respostas atuais
    console.log("Respostas enviadas:", respostas);

    // Exibe um alerta apenas para feedback visual (pode ser substituído por uma notificação estilizada no futuro)
    alert("Avaliação enviada!");

    // 💬 Aqui vai o ponto de integração com o backend (PHP ou API REST)
    /*
      fetch("https://teu-servidor.com/api/avaliacoes.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(respostas), // envia as respostas em formato JSON
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Resposta do servidor:", data);
          // Aqui pode mostrar uma mensagem de sucesso, limpar formulário etc.
        })
        .catch((error) => {
          console.error("Erro ao enviar:", error);
        });
    */
  };

  return (
    // container principal do conteúdo
    <div className="row align-items-center justify-content-center">

      {/* --- TÍTULO DO LIVRO --- */}
      <h3 className="fw-bold mb-3 titulo_av text-center">
        O Pequeno Príncipe
      </h3>

      {/* --- CAPA DO LIVRO --- */}
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <img
          src={capaa}
          alt="Capa do Pequeno Príncipe"
          // remove a borda branca usando CSS:
          // basta adicionar no CSS algo como:
          // .capa_detalhada_temp { border: none; background: none; box-shadow: none; }
          className="img-fluid rounded shadow capa_detalhada_temp"
        />
      </div>

      {/* --- FORMULÁRIO DE AVALIAÇÃO --- */}
      <p className="fw-semibold mb-3 texto_ava">AVALIE POR TEMPORADAS:</p>

      <div className="container text-center av_temp">
        {/* Ao enviar o formulário, executa formsSubmit */}
        <form onSubmit={formsSubmit}>
          <div className="row">
            {/* Gera automaticamente as temporadas usando map.
                Assim, se quiser adicionar mais no futuro, basta mudar o array abaixo. */}
            {[1, 2, 3].map((num) => (
              <div className="col" key={num}>
                <p className="fw-semibold mb-3 text_temp">
                  Temporada {num}:
                </p>

                {/* Caixa que agrupa as opções de cada temporada */}
                <div className="container_cor">

                  {/* 👍 Opção: SIM */}
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input trequinho_emocao"
                      type="radio"
                      name={`avaliacao-${num}`}
                      id={`sim-${num}`}
                      value="Sim"
                      checked={respostas[num] === "Sim"}
                      onChange={(e) => handleChange(num, e.target.value)}
                    />
                    <label
                      className="form-check-label texto_emocao"
                      htmlFor={`sim-${num}`}
                    >
                      👍 Sim
                    </label>
                  </div>

                  {/* 👎 Opção: NÃO */}
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input trequinho_emocao"
                      type="radio"
                      name={`avaliacao-${num}`}
                      id={`nao-${num}`}
                      value="Não"
                      checked={respostas[num] === "Não"}
                      onChange={(e) => handleChange(num, e.target.value)}
                    />
                    <label
                      className="form-check-label texto_emocao"
                      htmlFor={`nao-${num}`}
                    >
                      👎 Não
                    </label>
                  </div>

                  {/* 💬 Opção: MAIS OU MENOS */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input trequinho_emocao"
                      type="radio"
                      name={`avaliacao-${num}`}
                      id={`maisomenos-${num}`}
                      value="Mais ou menos"
                      checked={respostas[num] === "Mais ou menos"}
                      onChange={(e) => handleChange(num, e.target.value)}
                    />
                    <label
                      className="form-check-label texto_emocao"
                      htmlFor={`maisomenos-${num}`}
                      // 💡 CSS pode ajudar a deixar "Mais ou menos" em uma só linha:
                      // .texto_emocao { white-space: nowrap; }
                    >
                      💬 Mais ou menos
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- BOTÃO DE ENVIO --- */}
          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary botao_valeu_a_pena" >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CapaTemporadas;
