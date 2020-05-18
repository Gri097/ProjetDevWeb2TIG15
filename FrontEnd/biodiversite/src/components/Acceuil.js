import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';
import PointMap from './PointMap';
import { Map, TileLayer } from 'react-leaflet';
import './Acceuil.css';
import 'leaflet-routing-machine';
import MyMap from './Map/Map'

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
            lat={item.lat}
            lng={item.lng}
            nomScien={item.nomSc}
            parcours={item.parcours_id}
            position={position}
        />
    ))



    const map = (<Map className="map" center={position} zoom={base.zoom} >
                    <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    {pointMap}

                </Map>)
    /*
    const test = L.Routing.control({
            waypoint: [
                L.latLng(50.669303, 4.620818),
                L.latLng(50.669199, 4.620844)
            ]
        })
    */


            return (
                <Fragment>
                    {MyMap}
                </Fragment>
            )
}
export default Acceuil;