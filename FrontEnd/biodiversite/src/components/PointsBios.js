import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';
import PointBio from "./PointBio";

function PointsBios(){
    const [pointsBios, setPointsBios] = useState([]);
    const [familles, setFamilles] = useState([]);
    const [parcours, setParcours] = useState([]);

    const [showSc, setShowSc] = useState(false);
    const [showCy, setShowCy] = useState(false);
    const [showL, setShowL] = useState(false);
    const [showJ, setShowJ] = useState(false);
    const [showM, setShowM] = useState(false);

    const montrerSc = () => {
        setShowSc(!showSc)
    }
    const montrerCy = () => {
        setShowCy(!showCy)
    }
    const montrerL = () => {
        setShowL(!showL)
    }
    const montrerJ = () => {
        setShowJ(!showJ)
    }
    const montrerM = () => {
        setShowM(!showM)
    }

    useEffect(() => {
        const fetchData = async () => {
            const pointsBiosAPI = await axios('http://10.0.1.82:8000/api/pointBiodiversite/?format=json');
            const famillesAPI = await axios('http://10.0.1.82:8000/api/famille/?format=json');
            const parcoursAPI = await axios('http://10.0.1.82:8000/api/parcours/?format=json');

            setPointsBios(pointsBiosAPI.data);
            setFamilles(famillesAPI.data);
            setParcours(parcoursAPI.data);
        };
        fetchData();
    }, [])

return(

    <Fragment>
        <h2 style={{textAlign:"center"}}>Points Biodiversités disponibles</h2><br/>



        <h4 onClick={montrerSc} className="pointBioButton"> Parcours des Sciences : </h4>
        {showSc ? (<div>{pointsBios.map(item => (
            item.parcours_id === 1 ?(<PointBio
                id={item.id}
                key={item.id}
                nomFranc={item.nomFr}
                nomScien={item.nomSc}
                famille={item.famille_id}
                parcours={item.parcours_id}
                numParcours={item.numeroParcours}
                remarquable={item.ecorceRemarquable}
                allFamilles={[familles, setFamilles][0]}
                allParcours={[parcours, setParcours][0]}
            />) : (null)

        ))}</div>) : <p style={{textAlign:'center'}}>...</p>}


        <h4 onClick={montrerCy} className="pointBioButton"> Parcours du cyclotron </h4>
        {showCy ? (<div>{pointsBios.map(item => (
            item.parcours_id === 2 ?(<PointBio
                id={item.id}
                key={item.id}
                nomFranc={item.nomFr}
                nomScien={item.nomSc}
                famille={item.famille_id}
                parcours={item.parcours_id}
                numParcours={item.numeroParcours}
                remarquable={item.ecorceRemarquable}
                allFamilles={[familles, setFamilles][0]}
                allParcours={[parcours, setParcours][0]}
            />) : (null)

        ))}</div>) : <p style={{textAlign:'center'}}>...</p>}

        <h4 onClick={montrerL} className="pointBioButton"> Parcours du lac </h4>
        {showL ? (<div>{pointsBios.map(item => (
            item.parcours_id === 3 ?(<PointBio
                id={item.id}
                key={item.id}
                nomFranc={item.nomFr}
                nomScien={item.nomSc}
                famille={item.famille_id}
                parcours={item.parcours_id}
                numParcours={item.numeroParcours}
                remarquable={item.ecorceRemarquable}
                allFamilles={[familles, setFamilles][0]}
                allParcours={[parcours, setParcours][0]}
            />) : (null)

        ))}</div>) : <p style={{textAlign:'center'}}>...</p>}
        <h4 onClick={montrerJ} className="pointBioButton"> Parcours du jardin botanique </h4>
        {showJ ? (<div>{pointsBios.map(item => (
            item.parcours_id === 4 ?(<PointBio
                id={item.id}
                key={item.id}
                nomFranc={item.nomFr}
                nomScien={item.nomSc}
                famille={item.famille_id}
                parcours={item.parcours_id}
                numParcours={item.numeroParcours}
                remarquable={item.ecorceRemarquable}
                allFamilles={[familles, setFamilles][0]}
                allParcours={[parcours, setParcours][0]}
            />) : (null)

        ))}</div>) : <p style={{textAlign:'center'}}>...</p>}
        <h4 onClick={montrerM} className="pointBioButton"> Parcours du parc de Moulinsart </h4>
        {showM ? (<div>{pointsBios.map(item => (
            item.parcours_id === 5 ?(<PointBio
                id={item.id}
                key={item.id}
                nomFranc={item.nomFr}
                nomScien={item.nomSc}
                famille={item.famille_id}
                parcours={item.parcours_id}
                numParcours={item.numeroParcours}
                remarquable={item.ecorceRemarquable}
                allFamilles={[familles, setFamilles][0]}
                allParcours={[parcours, setParcours][0]}
            />) : (null)

        ))}</div>) : <p style={{textAlign:'center'}}>...</p>}

        <br/>

    </Fragment>
);
}

export default PointsBios;