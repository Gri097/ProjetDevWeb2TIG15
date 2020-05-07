import React, {Component} from "react";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";


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

class PointMap extends Component {

    render() {

        const parcours = (this.props.parcours === 1 ?
                (iconParcoursDesSciences):
                (this.props.parcours === 2 ?
                        (iconParcoursDuCyclotron) :
                        (this.props.parcours === 3 ?
                                (iconParcoursDuLac):
                                (this.props.parcours === 4 ?
                                        (iconParcoursDuJardinBotanique):
                                        (iconParcoursDuMoulinsart)
                                )
                        )
                )
        )




        return(

            this.props.lat ?
                    (<Marker position={[this.props.lat, this.props.lng]} icon={parcours}>
                        <Popup>
                            <a href={`/pointBio/${this.props.id}`} style={{textDecoration:'none', color:'black'}}>Nom Scientifique : {this.props.nomScien}</a>
                            <br /> Id : {this.props.id}.
                        </Popup>
                    </Marker>) :
                    null
        )
    }
}

export default PointMap;

