import React from "react";

function Navigation() {

    return(
        <div>
            <h1>Louvain-La-Neuve Biodiversité</h1>
            <ul style={{display: 'flex'}}>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Acceuil</li>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Parcous</li>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Points Biodiversités</li>
                <li style={{marginLeft: 10, listStyle: 'none'}}>Mon compte</li>
            </ul>
        </div>

    )

}

export default Navigation;