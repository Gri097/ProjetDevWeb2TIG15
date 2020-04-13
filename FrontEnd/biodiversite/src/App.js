import React, { Component } from 'react';
import AllPointsBios from "./components/AllPointsBios";
import Parcours from "./components/Parcours";
import Acceuil from "./components/Acceuil";
import Navigation from "./components/Nav";
import MonCompte from "./components/monCompte";
import TestApi from "./components/TestApi"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{

    state = {
        titre : 'Louvain-La-Neuve Biodiversité'
    }

  render() {
    return (
        <div className="App">


            <TestApi></TestApi>

        </div>
    );
  }
}

export default App;
// <AllPointsBios title={this.state.titre}/>
/*
*
<Router>
                <Navigation/>

                <Route path="/" exact component={Acceuil}/>
                <Route path="/parcours" exact component={Parcours}/>
                <Route path="/pointBio" exact component={AllPointsBios}/>
                <Route path="/compte" exact component={MonCompte}/>

            </Router>
*
* */