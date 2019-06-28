import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Quizz from './Quizz';
import Navbar from './Navbar';
import Footer from './Footer';
import Video from './Video';

import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/video" component={Video} />
       {/* <Route path="/quizz" component={Quizz} /> */}
       <Route path="/resultats" component={Results} />
       </Switch>
       <Footer />
    </div>
  );
}

export default App;
