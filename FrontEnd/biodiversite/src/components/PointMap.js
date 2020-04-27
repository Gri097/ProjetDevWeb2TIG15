import React, {Component} from "react";
import {Marker, Popup} from "react-leaflet";

class PointMap extends Component {

    render() {

        console.log()
        return(

            this.props.lat ?
                    (<Marker position={[this.props.lat, this.props.lng]} icon={this.props.icon}>
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