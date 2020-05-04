import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';
import PointMap from './PointMap';
import { Map, TileLayer } from 'react-leaflet';
import './Acceuil.css';


function Acceuil() {

    const [pointsBios, setPointsBios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const pointsBiosAPI = await axios('http://10.0.1.82:8000/api/pointBiodiversite/?format=json');
            setPointsBios(pointsBiosAPI.data);
        };
        fetchData();
    },[])

    const base = {
        lat: 50.665662,
        lng: 4.609721,
        zoom: 15,
    }
    const position = [base.lat, base.lng]

    const pointMap = pointsBios.map(item => (
                        <PointMap
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
                            position={position}
                        />
                     ))

            return (
                <Fragment>
                    <Map className="map" center={position} zoom={base.zoom}>
                        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                        {pointMap}

                    </Map>
                </Fragment>
            )
}
export default Acceuil;