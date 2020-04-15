import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import PointBio from "./PointBio";

function PointsBios() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/api/pointBiodiversite/?format=json',
            );

            setData(result.data);
        };
        fetchData();
    }, [])

    return(

        <Fragment>
            <h1 style={{textAlign:"center"}}>Points Biodiversités disponible</h1>

            {data.map(item => (
                <PointBio
                    id={item.id}
                    key={item.id}
                    nomFr={item.nomFr}
                    nomSc={item.nomSc}
                    famille={item.family}
                />
            ))}
        </Fragment>
    );
}

export default PointsBios;