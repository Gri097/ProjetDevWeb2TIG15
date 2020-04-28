import React, {Component, Fragment} from "react";


class PointBioDetails extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <h2>Détail sur : {this.props.nomScien}</h2>
                <ul>
                    <li>Nom :                   {this.props.nomFranc}</li>
                    <li>Id_famille :            {this.props.famille}</li>
                    <li>Id_parcours :           {this.props.parcours}</li>
                    <li>Numéro du parcours :    {this.props.numParcours}</li>
                    <li>latitude :              {this.props.lat}</li>
                    <li>longitude :             {this.props.lng}</li>
                </ul>
            </Fragment>
        )
    }
}

export default PointBioDetails;