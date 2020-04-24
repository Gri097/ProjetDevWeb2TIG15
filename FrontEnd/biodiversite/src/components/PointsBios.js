import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';
import PointBio from "./PointBio";

function PointsBios(){
    const [pointsBios, setPointsBios] = useState([]);
    const [familles, setFamilles] = useState([]);
    const [parcours, setParcours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const pointsBiosAPI = await axios('http://localhost:8000/api/pointBiodiversite/?format=json');
            const famillesAPI = await axios('http://localhost:8000/api/famille/?format=json');
            const parcoursAPI = await axios('http://localhost:8000/api/parcours/?format=json');

            setPointsBios(pointsBiosAPI.data);
            setFamilles(famillesAPI.data);
            setParcours(parcoursAPI.data);
            console.log(famillesAPI.data)
            console.log(parcoursAPI.data);
            console.log(pointsBiosAPI.data)
        };
        fetchData();
    }, [])


return(

    <Fragment>
        <h1 style={{textAlign:"center"}}>Points Biodiversités disponibles</h1>

        {pointsBios.map(item => (
            <PointBio
                id={item.id}
                key={item.id}
                nomFr={item.nomFr}
                nomSc={item.nomSc}
                {{}}
                famille={item.family}
            />
        ))}
    </Fragment>
);
}

export default PointsBios;