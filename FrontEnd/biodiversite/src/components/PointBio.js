import React, { Component } from "react";
import {Link} from "react-router-dom";


class PointBio extends Component {

    state = {
        show: true
    }


    montrerPoint = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {

     /*
         Ici on regarde si le state show est true ou false --> pour afficher le détail ou non
         Ensuite si il ne possède pas de nom français, cela est remplacé par "Inconnue"

         Idem pour les familles, s'il n'appartient à aucune famille alors famille = inconnue
         Sinon famille est = à sa famille attribué
      */

    const nomFrancais = this.props.nomFranc === "" ?
                    (<li className="list-group-item" >Nom français : Inconnue</li>) :
                    (<li className="list-group-item">Nom français : {this.props.nomFranc}</li>);

    const infoFamille = this.props.allFamilles[0] ?
                        (this.props.famille ?
                            (this.props.famille === 1 ?
                                (<li className="list-group-item">Famille : {this.props.allFamilles[0]["nom"]} </li>):
                            (this.props.famille === 2 ?
                                (<li className="list-group-item">Famille : {this.props.allFamilles[1]["nom"]} </li>) :
                                (<li className="list-group-item">Famille : {this.props.allFamilles[2]["nom"]} </li>))
                            ):
                                (<li className="list-group-item">Famille : Inconnue </li>)):
                        null

    const infoParcours = this.props.allParcours[0] ?
                                (this.props.parcours ?
                                    (this.props.parcours === 1 ?
                                         (<li className="list-group-item">Parcours : {this.props.allParcours[0]["nom"]} </li>):
                                         (this.props.parcours === 2 ?
                                            (<li className="list-group-item">Parcours : {this.props.allParcours[1]["nom"]} </li>) :
                                            (this.props.parcours === 3 ?
                                                (<li className="list-group-item">Parcours : {this.props.allParcours[2]["nom"]} </li>):
                                                (this.props.parcours === 4 ?
                                                    (<li className="list-group-item">Parcours : {this.props.allParcours[3]["nom"]} </li>):
                                                    (<li className="list-group-item">Parcours : {this.props.allParcours[4]["nom"]} </li>)
                                                )
                                            )
                                         )
                                    ):
                                        (<li className="list-group-item">Inconnue </li>)
                                ): null

        return (
            <div>
                <h4>
                    <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none', color:'black'}}>
                        {this.props.nomScien}&nbsp; {/* Permet de faire un espace */}
                    </Link>

                    <button onClick={this.montrerPoint} className="pointBioButton"> </button>
                </h4>

                <ul className="list-group">
                    {nomFrancais}
                    {infoFamille}
                    {infoParcours}
                    <li className="list-group-item" >Numéro du parcours: {this.props.numParcours}</li>
                </ul>



            </div>
        );
    }
}

export default PointBio;