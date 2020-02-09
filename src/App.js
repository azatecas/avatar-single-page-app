import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Particles from 'react-particles-js';

import Header from "./components/Header";
import Home from './components/Home';
// import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";




function App() {
  return (
    <div className="App">
    
    <Router>
        <Header />    
        <Route path="/" exact component={Home} />
        <Route path="/characters" exact component={CharacterList} />  
    </Router>  
    </div>
  );
}

export default App;
