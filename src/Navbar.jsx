import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <nav id="nav">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
          <li><NavLink activeClassName="active" to="/laisser-un-avis">VIDÉO</NavLink></li>
          <li><NavLink activeClassName="active" to="/compteentreprise">QUIZZ</NavLink></li>
          <li><NavLink activeClassName="active" to="/contacteznous">RÉSULTATS</NavLink></li>
        </ul>
      </nav>
  </div>
  );
}

export default Navbar;
