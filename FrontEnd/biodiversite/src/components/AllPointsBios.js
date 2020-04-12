import React, { Component } from "react";
import PointBio from "./PointBio";

class AllPointsBios extends Component{

    noCopy = () => {
        alert('Merci de ne pas copier le text');
    }

    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>

                <p onCopy={this.noCopy}>Lorem ipsum</p>

                <PointBio nomFr='Roses'>Arcadia</PointBio>
                <PointBio>Caliptusas</PointBio>
                <PointBio nomFr='Blanche'>Quentum</PointBio>
            </div>
        )
    }
}

export default AllPointsBios;