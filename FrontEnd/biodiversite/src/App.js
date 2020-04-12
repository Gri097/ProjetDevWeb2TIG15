import React, { Component } from 'react';
import AllPointsBios from "./components/AllPointsBios";
import Parcours from "./components/Parcours";
import Acceuil from "./components/Acceuil";
import './App.css';
import Navigation from "./components/Nav";

class App extends Component{

    state = {
        titre : 'Louvain-La-Neuve Biodiversité'
    }

  render() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <AllPointsBios title={this.state.titre}/>
        </div>
    );
  }
}

export default App;
