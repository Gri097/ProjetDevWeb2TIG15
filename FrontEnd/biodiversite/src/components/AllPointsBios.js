import React, { Component } from "react";
import PointBio from "./PointBio";

class AllPointsBios extends Component{
    render() {
        return (
            <div>
                <h1>Voici tout les points de Biodiversité </h1>
                <PointBio></PointBio>
            </div>
        )
    }
}

export default AllPointsBios;