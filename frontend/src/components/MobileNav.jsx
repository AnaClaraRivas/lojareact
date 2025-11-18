import React from "react";

function MobileNav({ active, toggleMenu }) {
  return (
    <div className={`mobile-nav ${active ? "active" : ""}`}>
      <a href="#" onClick={toggleMenu}>Obras</a>
      <a href="#" onClick={toggleMenu}>Estantes</a>
      <a href="#" onClick={toggleMenu}>Cadastrar obras</a>
      <a href="#" onClick={toggleMenu}>Perfil</a>
    </div>
  );
}

export default MobileNav;