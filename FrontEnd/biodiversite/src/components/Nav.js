import React from "react";
import {Link} from "react-router-dom";

function Navigation() {

    return(
        <div className="header">
            <h1 className="navTitle">Louvain-La-Neuve Biodiversité</h1>


            <ul className="allList">

                <Link to="/" className="">
                    <li className="list">Acceuil</li>
                </Link>
                <Link to="/parcours" className="">
                    <li className="list">Parcous</li>
                </Link>
                <Link to="/pointBio" className="">
                    <li className="list">Points Biodiversités</li>
                </Link>
                <Link to="/compte" className="">
                    <li className="list">Mon compte</li>
                </Link>
            </ul>





        </div>

    )

}

export default Navigation;

/*

* */