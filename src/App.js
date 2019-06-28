import React from 'react';
import Quizz from './Quizz';
import Navbar from './Navbar';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Quizz />
       <Footer />
    </div>
  );
}

export default App;
