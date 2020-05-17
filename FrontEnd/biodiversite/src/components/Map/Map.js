import React, {Component} from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import 'leaflet-routing-machine';


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

const iconParcoursDuLac = L.icon({
    iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize:[25, 41],
    iconAnchor:[12.5, 41],
    popupAnchor: [0, -41],
});
export default class Map extends Component {


    componentDidMount() {
        this.map = L.map('map', {
            center: [50.665662, 4.609721],
            zoom : 15
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        L.marker([50.669303,4.620818], {icon:iconParcoursDuLac}).addTo(this.map).bindPopup('A pretty CSS3 popup. <br> Easily customizable.');
        L.marker( [50.660592, 4.607940], {icon:iconParcoursDuLac}).addTo(this.map).bindPopup('A pretty CSS3 popup. <br> Easily customizable.');

        L.Routing.control({
            waypoint: [
                L.latLng(50.669303,4.620818),
                L.latLng(50.660592, 4.607940)
            ],
            routeWhileDragging: true
        }).addTo(this.map)

    }

    render() {
        return (
            <Wrapper height="730px" id="map"/>
        )
    }
}