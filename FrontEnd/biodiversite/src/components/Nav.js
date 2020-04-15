import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Nav.css"

function Navigation() {

    return(
        <div className="header">
            <h1 className="headerTitle">Louvain-La-Neuve Biodiversité</h1>

                <ul className="allList">
                    <Link to="/" className="link">
                        <li className="list">Acceuil</li>
                    </Link>
                    <Link to="/parcours" className="link">
                        <li className="list">Parcous</li>
                    </Link>
                    <Link to="/pointBio" className="link">
                        <li className="list">Points Biodiversités</li>
                    </Link>
                    <Link to="/compte" className="link">
                        <li className="list">Mon compte</li>
                    </Link>
                </ul>

        </div>

    )

}

export default Navigation;