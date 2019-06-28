import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <nav id="nav">
        <ul className="Header">
          <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
          <li><NavLink activeClassName="active" to="/video">VIDÉO</NavLink></li>
          <li><NavLink activeClassName="active" to="/quizz">QUIZZ</NavLink></li>
          <li><NavLink activeClassName="active" to="/resultats">RÉSULTATS</NavLink></li>
        </ul>
      </nav>
  </div>
  );
}

export default withRouter(Navbar) ;
