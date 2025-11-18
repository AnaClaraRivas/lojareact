import "./LivroCard.css";

export default function LivroCard({ capa, titulo, estrelas, autor, editora, ano, anoBrasil }) {
  return (
    <div className="livro-card">
      <img src={capa} alt={titulo} className="livro-capa" />

      <div className="livro-info">
        <h2 className="livro-titulo">{titulo}</h2>

        <div className="livro-estrelas">
          {"★".repeat(estrelas)}
        </div>

        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Editora:</strong> {editora}</p>
        <p><strong>Ano de publicação:</strong> {ano} (original) / {anoBrasil} (Brasil)</p>

        <button className="livro-btn">
          Quero avaliar esse livro!
          <span className="material-icons">search</span>
        </button>
      </div>
    </div>
  );
}


