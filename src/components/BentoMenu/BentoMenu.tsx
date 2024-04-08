import React, { useState } from 'react';
import "./BentoMenu.scss";

const FoodArray: string[] = ["onigiri", "nigiri", "tempura", "sake", "dango"];

const BentoMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className={`bentoMenu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
        <span className="square"></span>
      </div>
    <ul className={`menulist ${menuOpen ? 'open' : ''}`}>
        {FoodArray.map((food, index) => (
          <li className="menuitems"key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default BentoMenu;