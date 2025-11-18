
// importa coiso especifico do react
import React, { useState, useEffect } from "react";

// componente mobilenav
import MobileNav from "./MobileNav";

// css
import "./Header.css";

// o componente em si e seu nome 
function Header() {

    // controla se o menu mobile está aberto ou fechado
  const [menuActive, setMenuActive] = useState(false);

    // detecta se a página foi rolada mais de 50px para aplicar uma classe visual
  const [scrolled, setScrolled] = useState(false);

    // alterna o estado do menu mobile entre aberto e fechado  
  const toggleMenu = () => setMenuActive(!menuActive);

    // verifica se teve um scroll de mais de 50px   
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // 
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <nav className="nav-container">
        <a href="#" className="logo">Lumière</a>
        <ul className="nav-links">
          <li><a href="/inicial#divobras">Obras</a></li>
          <li><a href="#">Estantes</a></li>
          <li><a href="#">Cadastrar obras</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>

        {/* A classe active é adicionada se menuActive for true. */}
        <div className={`menu-mobile ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>
      <MobileNav active={menuActive} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
