import React, {Component} from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import 'leaflet-routing-machine';
import './map.css'


const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;
//DEFAULT_ICON_CYCLOTRON
const iconParcoursDuCyclotron = L.icon({
    iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize:[25, 41],
    iconAnchor:[12.5, 41],
    popupAnchor: [0, -41],
});

const iconParcoursDesSciences = L.icon({
    iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    iconSize:[25, 41],
    iconAnchor:[12.5, 41],
    popupAnchor: [0, -41],
});

const iconParcoursDuLac = L.icon({
    iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize:[25, 41],
    iconAnchor:[12.5, 41],
    popupAnchor: [0, -41],
});

const iconParcoursDuJardinBotanique = L.icon({
    iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize:[25, 41],
    iconAnchor:[12.5, 41],
    popupAnchor: [0, -41],
});

const iconParcoursDuMoulinsart = L.icon({
    iconUrl:'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    iconSize:[25, 41],
    iconAnchor:[12.5, 41],
    popupAnchor: [0, -41],
});

export default class Map extends Component {

    state = {
        pointsBios : [],
        parcours : [],
        sciences : [],
        cyclotron : [],
        lac : [],
        jb : [],
        parcM : []
    }

    getRoute = (item) => {
        return this.state.parcours[item-1].nom;
    };



    async componentDidMount() {

        //--------------------------------------- APPEL API -----------------------------------------------------------------//
        const urlPoint = 'http://10.0.1.82:8000/api/pointBiodiversite/?format=json';
        const response = await fetch(urlPoint);
        const dataPoint = await response.json();

        const urlRoute = 'http://10.0.1.82:8000/api/parcours/?format=json';
        const responseRoute = await fetch(urlRoute)
        const dataRoute = await responseRoute.json();

        this.state.pointsBios = dataPoint;
        this.state.parcours = dataRoute;


        //--------------------------------------- INITIALISATION DE LA MAP -----------------------------------------------------------------//
        this.map = L.map('map').setView([50.665662, 4.609721],15);

        const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
        mainLayer.addTo(this.map)
        const OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        });
        const Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });

        //--------------------------------------- AJOUT DES POINTS SUR LA CARTE -----------------------------------------------------------------//


        this.state.pointsBios.map(item => (

            item.lat != null ?
            (item.parcours_id ===1 ?

                this.state.sciences.push(L.marker([item.lat, item.lng], {icon: iconParcoursDesSciences})
                    .bindPopup("<a  href="+`/pointBio/${item.id}`+" > " + item.id +") "+ item.nomSc + "</a> <br /> Parcours : "+ this.getRoute(item.parcours_id))
                    .addTo(this.map)) :

                (item.parcours_id === 2 ?

                        this.state.cyclotron.push(L.marker([item.lat, item.lng], {icon: iconParcoursDuCyclotron})
                            .bindPopup("<a  href="+`/pointBio/${item.id}`+" > " + item.id +") "+ item.nomSc + "</a> <br /> Parcours : "+ this.getRoute(item.parcours_id))
                            .addTo(this.map)) :

                    (item.parcours_id === 3 ?

                            this.state.lac.push(L.marker([item.lat, item.lng], {icon: iconParcoursDuLac})
                                .bindPopup("<a  href="+`/pointBio/${item.id}`+" > " + item.id +") "+ item.nomSc + "</a> <br /> Parcours : "+ this.getRoute(item.parcours_id))
                                .addTo(this.map)):

                        (item.parcours_id === 4 ?

                                this.state.jb.push(L.marker([item.lat, item.lng], {icon: iconParcoursDuJardinBotanique})
                                    .bindPopup("<a  href="+`/pointBio/${item.id}`+" > " + item.id +") "+ item.nomSc + "</a> <br /> Parcours : "+ this.getRoute(item.parcours_id))
                                    .addTo(this.map)) :

                                this.state.parcM.push(L.marker([item.lat, item.lng], {icon: iconParcoursDuMoulinsart})
                                    .bindPopup("<a  href="+`/pointBio/${item.id}`+" > " + item.id +") "+ item.nomSc + "</a> <br /> Parcours : "+ this.getRoute(item.parcours_id))
                                    .addTo(this.map)))))) : null
        ))


        //--------------------------------------- AJOUT DES PARCOURS SUR LA CARTE  -----------------------------------------------------------------//
        const latlngsSc = [];
        const latlngsCy = [];
        const latlngsLac = [];
        const latlngsJB = [];
        const latlngsPM = [];


            this.state.sciences.map(item => {
                latlngsSc.push(item._latlng)
            })
            this.state.cyclotron.map(item => {
                latlngsCy.push(item._latlng)
            })
            this.state.lac.map(item => {
                latlngsLac.push(item._latlng)
            })
            this.state.jb.map(item => {
                latlngsJB.push(item._latlng)
            })
            this.state.parcM.map(item => {
                latlngsPM.push(item._latlng)
            })

        let polygonSc = L.polygon(latlngsSc, {color: 'yellow'})
        let polygonCy = L.polygon(latlngsCy, {color: 'red'})
        let polygonLac = L.polygon(latlngsLac, {color: 'blue'})
        let polygonJb = L.polygon(latlngsJB, {color: 'green'})
        let polygonPM = L.polygon(latlngsPM, {color: 'violet'})

        //---------------------------------------  AJOUT DU LAYER SUR LA CARTE -----------------------------------------------------------------//

        L.control.layers({
            'Principal': mainLayer,
            'Satellite' : Esri_WorldImagery,
            'autre': OpenStreetMap_HOT
        },{
            'Parcours des Sciences': polygonSc,
            'Parcours du cyclotron': polygonCy,
            'Parcours du lac': polygonLac,
            'Parcours du jardin botanique': polygonJb,
            'Parcours du parc de Moulinsart': polygonPM,
        }).addTo(this.map)

        //---------------------------------------  NOTRE LOCALISATION SUR LA CARTE -----------------------------------------------------------------//


/*
        this.map.locate({
            setView: true,
            maxZoom: 120
        }).on("locationfound", e => {
            var radius = e.accuracy / 2;
            L.marker([e.latitude, e.longitude], {icon :iconParcoursDuMoulinsart}).addTo(this.map)
                .bindPopup("Vous êtes ici! à " + radius + " m près :/ ").openPopup();
            L.circle(e.latlng, radius).addTo(this.map);
        }).on("locationerror", error => {
            console.log("lokasyon bulunamadi");
        });
*/




        const geolocationButton = L.control({position: 'topleft'});
        geolocationButton.onAdd = (mapRef) => {
            const button = L.DomUtil.create('button', 'geolocalisatio-button')
            button.innerHTML = 'Locate';
            button.onClick = () => {
                console.log("test")
            }
            return button;
        }
        geolocationButton.addTo(this.map);


        /*
        mapRef.locate();
                button.disabled = true;
                mapRef.on('locationfound', (locEvent) => {
                    var radius = locEvent.accuracy * 5
                    var point = locEvent.latlng
                    mapRef.setView(point, 16)
                    button.disabled = false;
                    L.circle(point, radius).addTo(mapRef).bindPopup("Vous êtes ici").openPopup()
                })
                mapRef.on('locationerror', (err) => {
                    button.disabled = false;
                })
         */
    }

    render() {
        return (
            <div className="carte">
                <Wrapper height="90vh" id="map"/>
            </div>

        )
    }
}
/*

    const geolocationButton = L.control({position: 'topleft'});
        geolocationButton.onAdd = (mapRef) => {
            var button = L.DomUtil.create('button', 'geolocalisatio-button')
            button.innerHTML = 'Locate';
            button.onClick = () => {
                mapRef.locate();
                button.disabled = true;
                mapRef.on('locationfound', (locEvent) => {
                    var radius = locEvent.accuracy * 5
                    var point = locEvent.latlng
                    mapRef.setView(point, 16)
                    button.disabled = false;
                    L.circle(point, radius).addTo(mapRef).bindPopup("Vous êtes ici").openPopup()
                })
                mapRef.on('locationerror', (err) => {
                    button.disabled = false;
                })
            }
            return button;
        }
        geolocationButton.addTo(this.map);
    */