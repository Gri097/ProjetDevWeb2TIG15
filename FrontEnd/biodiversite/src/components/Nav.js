import React from "react";
import {Link} from "react-router-dom";

function Navigation() {

    return(
        <div className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
            <h1 className="">Louvain-La-Neuve Biodiversité</h1>


                    <ul style={{float:""}} className="navbar-nav mr-auto">
                        
                        <Link to="/" className="navbar-brand">
                            <li style={{marginLeft: 10, listStyle: 'none'}}>Acceuil</li>
                        </Link>
                        <Link to="/parcours" className="navbar-brand">
                            <li style={{marginLeft: 10, listStyle: 'none'}}>Parcous</li>
                        </Link>
                        <Link to="/pointBio" className="navbar-brand">
                            <li style={{marginLeft: 10, listStyle: 'none'}}>Points Biodiversités</li>
                        </Link>
                        <Link to="/compte" className="navbar-brand">
                            <li style={{marginLeft: 10, listStyle: 'none'}}>Mon compte</li>
                        </Link>
                    </ul>





        </div>

    )

}

export default Navigation;