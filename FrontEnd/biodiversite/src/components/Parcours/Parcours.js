import React, {Fragment} from "react";
import './Parcours.css';


function Parcours() {

    return(
        <Fragment>
            <h1 className="title">Voici les Différents parcours : </h1>

            <ul>
                <li>Parcours des Sciences</li>
                <li>Parcours du Cyclotron</li>
                <li>Parcours du Lac</li>
                <li>Parcours du jardin Botanique</li>
                <li>Parcours du parc de Moulinsart</li>
            </ul>

            <p className="contenu">En cours de développement ..</p>
        </Fragment>
    )
}

export default Parcours;