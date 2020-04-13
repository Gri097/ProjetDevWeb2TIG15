import React, { Component } from "react";
import PointBio from "./PointBio";

class AllPointsBios extends Component{

    state ={
        pointBio: [
            {
                id: 1,
                nomSc: 'Salix alba cv. tristis',
                nomFr: 'Rose',
                famille: 'Salix'
            },
            {
                id: 2,
                nomSc: 'Acer pensylvanicum',
                nomFr: 'Blanche',
                famille: 'Acer'
            },
            {
                id: 3,
                nomSc: 'Cupressus Sempervirens',
                nomFr: 'Caliptus',
                famille: 'Quentum'
            }
        ]
    }

    render() {

        return (
            <div>
                <h1 > Points Biodiversités disponible </h1>

                {this.state.pointBio.map(pointBio =>(
                    <PointBio
                        key={pointBio.id}
                        nomFr={pointBio.nomFr}
                        nomSc={pointBio.nomSc}
                        famille={pointBio.famille}
                    />
                ))}

            </div>
        )
    }
}

export default AllPointsBios;