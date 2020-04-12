import React from "react";
import {Link} from "react-router-dom";

function Navigation() {

    return(
        <div>
            <h1>Louvain-La-Neuve Biodiversité</h1>
            <ul style={{display: 'flex'}}>
                <Link to="/">
                    <li style={{marginLeft: 10, listStyle: 'none'}}>Acceuil</li>
                </Link>
                <Link to="/parcours">
                    <li style={{marginLeft: 10, listStyle: 'none'}}>Parcous</li>
                </Link>
                <Link to="/pointBio">
                    <li style={{marginLeft: 10, listStyle: 'none'}}>Points Biodiversités</li>
                </Link>
                <Link to="/compte">
                    <li style={{marginLeft: 10, listStyle: 'none'}}>Mon compte</li>
                </Link>
            </ul>
        </div>

    )

}

export default Navigation;