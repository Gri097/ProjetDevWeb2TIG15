import React, { useEffect, useState} from 'react';
import Parcours from "./components/Parcours";
import Acceuil from "./components/Acceuil";
import Navigation from "./components/Nav";
import MonCompte from "./components/monCompte";
import PointsBios from "./components/PointsBios";
import PointBioDetail from "./components/pointBioDetail";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'leaflet/dist/leaflet.css';
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css'

function App(){

    const [pointsBios, setPointsBios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const pointsBiosAPI = await axios('http://localhost:8000/api/pointBiodiversite/?format=json');
            setPointsBios(pointsBiosAPI.data);
        };
        fetchData();
    },[])




    return (
        <div className="App">
            <Router>

                <div className="outer">
                    <Navigation/>

                    <div className="inner">
                        <Route path="/" exact component={Acceuil}/>
                        <Route path="/parcours" exact component={Parcours}/>
                        <Route path="/pointBio" exact component={PointsBios}/>

                        {pointsBios.map(item => (
                            <Route path={`/pointBio/${item.id}`} exact component={PointBioDetail}
                                   id={item.id}
                                   key={item.id}
                                   nomFranc={item.nomFr}
                                   nomScien={item.nomSc}
                                   famille={item.famille_id}
                                   parcours={item.parcours_id}
                                   numParcours={item.numeroParcours}
                                   remarquable={item.ecorceRemarquable}
                                   lat={item.lat}
                                   lng={item.lng}
                            />
                        ))}

                        <Route path="/compte" exact component={MonCompte}/>
                    </div>
                </div>

            </Router>


        </div>
    );

}

export default App;