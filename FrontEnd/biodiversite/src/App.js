import React, { Component } from 'react';
import AllPointsBios from "./components/AllPointsBios";
import Parcours from "./components/Parcours";
import Acceuil from "./components/Acceuil";
import Navigation from "./components/Nav";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component{

    state = {
        titre : 'Louvain-La-Neuve Biodiversité'
    }

  render() {
    return (
        <div className="App">
            <Router>
                <Navigation/>

                <Route path="/" exact component={Acceuil}/>
                <Route path="/parcours" exact component={Parcours}/>
                <Route path="/pointBio" exact component={AllPointsBios}/>

            </Router>


        </div>
    );
  }
}

export default App;
// <AllPointsBios title={this.state.titre}/>