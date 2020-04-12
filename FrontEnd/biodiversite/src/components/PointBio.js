import React from "react";

const PointBio = (props) => {
    if(props.nomFr){
        return(
            <div className="pointBio" style={ {backgroundColor: 'pink', width:'400px', padding:'10px', margin:'5px auto'} }>
                <p>Nom Scientique: { props.children } </p>
                <p>Nom Français: {props.nomFr }</p>
                <p>Famille: </p>
            </div>
        );
    }else{
        return(
            <div className="pointBio" style={ {backgroundColor: 'pink', width:'400px', padding:'10px', margin:'5px auto'} }>
                <p>Nom Scientique: { props.children } </p>
                <p>Nom Français: Inconnu</p>
                <p>Famille: </p>
            </div>
        );
    }

}

export default PointBio;