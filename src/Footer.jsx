import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="Footer">
      <Link to="/mentions-legales">Mentions légales</Link>
      <Link to="/contact">Contact</Link>
    
    
      <a href="a">made with<span className="heart">&hearts;</span> by 6ber</a>
    
    </div>
  );
}

export default Footer;