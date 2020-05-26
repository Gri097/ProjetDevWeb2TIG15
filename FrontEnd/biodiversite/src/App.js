import React, { useEffect, useState} from 'react';
import Parcours from "./components/Parcours/Parcours";
import Compte from "./components/Compte/Compte";
import PointsBios from "./components/PointsBiodiversites/PointsBios";
import PointBioDetail from "./components/PointsBiodiversites/PointBioDetails";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import map from './components/Map/Map';
import UserForm from './components/Formulaire/UserFrom';

function App(){

    const [pointsBios, setPointsBios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const pointsBiosAPI = await axios('http://10.0.1.82:8000/api/pointBiodiversite/?format=json');
            setPointsBios(pointsBiosAPI.data);
        };
        fetchData();
    },[])



//className="App"
    return (
        <div className="App">
            <Router>

                <div className="outer">
                    <NavBar/>

                    <div className="inner">
                        <Route path="/" exact component={map}/>
                        <Route path="/parcours" exact component={Parcours}/>
                        <Route path="/pointBio" exact component={PointsBios}/>

                        {pointsBios.map(item => (
                            <Route path={`/pointBio/${item.id}`}
                                   exact component={(props) => <PointBioDetail {...props}
                                                                               id={item.id}
                                                                               nomFranc={item.nomFr}
                                                                               nomScien={item.nomSc}
                                                                               famille={item.famille_id}
                                                                               parcours={item.parcours_id}
                                                                               numParcours={item.numeroParcours}
                                                                               remarquable={item.ecorceRemarquable}
                                                                               lat={item.lat}
                                                                               lng={item.lng}
                            />}
                                   key={item.id}
                            />
                        ))}

                        <Route path="/compte" exact component={Compte}/>
                        <Route path="/inscription" exact component={UserForm}/>
                    </div>
                </div>

            </Router>
        </div>
    );

}

export default App;
/*

<Router>

                <div className="outer">
                    <Navigation/>

                    <div className="inner">
                        <Route path="/" exact component={Acceuil}/>
                        <Route path="/parcours" exact component={Parcours}/>
                        <Route path="/pointBio" exact component={PointsBios}/>

                        {pointsBios.map(item => (
                            <Route path={`/pointBio/${item.id}`}
                                   exact component={(props) => <PointBioDetail {...props}
                                                                               id={item.id}
                                                                               nomFranc={item.nomFr}
                                                                               nomScien={item.nomSc}
                                                                               famille={item.famille_id}
                                                                               parcours={item.parcours_id}
                                                                               numParcours={item.numeroParcours}
                                                                               remarquable={item.ecorceRemarquable}
                                                                               lat={item.lat}
                                                                               lng={item.lng}
                                                                />}
                                   key={item.id}
                            />
                        ))}

                        <Route path="/compte" exact component={MonCompte}/>
                    </div>
                </div>

            </Router>
* */