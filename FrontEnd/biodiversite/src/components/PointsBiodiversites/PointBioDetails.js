import React, {Component, Fragment} from "react";
import './PointBioDetails.css';

class PointBioDetails extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <h2 className='title' >Détail sur : {this.props.nomScien}</h2>
                <ul>
                    {this.props.nomFr === "" ?
                        (<li>Nom Français :                   {this.props.nomFranc}</li>) :
                        (<li>Nom Français inconnu </li>)}
                    <li>Id_famille :            {this.props.famille}</li>
                    <li>Id_parcours :           {this.props.parcours}</li>
                    <li>Numéro du parcours :    {this.props.numParcours}</li>
                    <li>latitude :              {this.props.lat}</li>
                    <li>longitude :             {this.props.lng}</li>
                </ul>

                <p className="contenu">En cours de développement ..</p>
            </Fragment>
        )
    }
}

export default PointBioDetails;