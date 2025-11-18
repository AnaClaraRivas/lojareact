import React, { useState, useRef } from 'react';

// import dos componentes do bootstrap já prontos
import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';


// componente da estrela 
const StarIcon = ({ color, size = 14 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}     // pega a cor que vem de fora
    width={size}
    height={size}
  >
    {/* desenho da estrela */}
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.416 3.967 1.48-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);


// componente que mostra 5 estrelas
const Estrelas = ({ rating = 5 }) => (
  <div className="d-flex align-items-center mb-1">
    {/* cria 5 estrelas e pinta só as que forem chamadas */}
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} size={14} />
    ))}
  </div>
);


// componente que mostra cada obra dentro do accordion
const ItemObra = ({ obra }) => (
  // linha 
  <Row className="obra-item py-3 align-items-center border-bottom border-light">

    {/* coluna com a imagem do livro */}
    <Col xs={4} sm={2} className="d-flex justify-content-center">
      <img
        src={obra.imagem}
        alt={obra.titulo}
        className="img-fluid rounded"
        style={{ maxWidth: '80px' }} 
      />
    </Col>

    {/* coluna com as infos da obra */}
    <Col xs={8} sm={10}>
      <h5 className="mb-1 fw-bold">{obra.titulo}</h5>

      {/* estrelas*/}
      <Estrelas rating={obra.rating} />

      {/* infos do livro */}
      <p className="mb-1 small">
        Autora: <b>{obra.autor}</b> | Editora: <b>{obra.editora}</b> | Publicação: <b>{obra.publicacao}</b>
      </p>

      {/* botões */}
      <div className="mt-2">
        <Button className="btn-editar-estante me-2" size="sm">Avaliar</Button>
        <Button className="btn-editar-estante" size="sm">Excluir</Button>
      </div>
    </Col>
  </Row>
);


// componente principal
const EstanteLivros = ({ tituloSaga, livrosCarrossel, obrasDetalhe }) => {

  // controla se o accordion ta aberto ou fechado
  const [open, setOpen] = useState(false);

  //  para mover o carrosel
  const sliderRef = useRef(null);

  //   move o carrossel para o lado
  const scrollSlider = (direction) => {
    const value = direction === "left" ? -230 : 230;
    sliderRef.current?.scrollBy({ left: value, behavior: "smooth" });
  };


  return (
    <Container fluid className="estante-container p-0">

      {/* carrossel*/}
      <div className="carousel-wrapper">

        {/*  move para a esquerda */}
        <button className="carousel-nav-btn left" onClick={() => scrollSlider("left")}>
          &#9664;
        </button>

        {/* área dos livros*/}
        <div
          className="slider-container d-flex flex-nowrap overflow-auto p-3 hide-scrollbar"
          ref={sliderRef} // referência usada para animar o scroll
        >
          {/* mostra cada livro*/}
          {livrosCarrossel.map((livro) => (
            <div key={livro.id} className="livro-item p-2">
              <Card className="livro-card border-0 bg-transparent">
                <Card.Img src={livro.imagem} alt={livro.titulo} className="img-fluid" />
              </Card>
            </div>
          ))}
        </div>

        {/* move para a direita */}
        <button className="carousel-nav-btn right" onClick={() => scrollSlider("right")}>
          &#9654;
        </button>
      </div>


      {/* accordion */}
      <div
        className="d-flex justify-content-between align-items-center saga-header p-3 mt-3"
        onClick={() => setOpen(!open)} // abre e fecha
        style={{ cursor: "pointer", backgroundColor: "#f5f0e3" }}
      >
        <h3 className="m-0 fw-bold ms-5 mb-2">{tituloSaga}</h3>

        {/* troca o texto do botão vendo se ta aberto ou não */}
        <Button className="btn-editar-estante me-5" variant="outline-dark">
          {open ? "OCULTAR" : "EDITAR ESTANTE"}
        </Button>
      </div>


      {/* accordion que mostra as obras */}
      <Collapse in={open}>
        <div className="card-obras">
          <h4 className="mb-4 mt-2 ms-5 fw-bold">Obras:</h4>

          {/* mostra cada obra  */}
          {obrasDetalhe.map((obra) => (
            <ItemObra key={obra.id} obra={obra} />
          ))}

          {/* botão de salvar alterações */}
          <div className="text-center my-4">
            <Button className="btn-editar-estante">Salvar Alterações</Button>
          </div>
        </div>
      </Collapse>
    </Container>
  );
};

export default EstanteLivros;
