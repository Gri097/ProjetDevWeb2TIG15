import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';

function TestApi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/api/pointBiodiversite/?format=json',
            );

            setData(result.data);
            console.log("updated");
        };
        fetchData();
        console.log("mounted");
    }, [])
    console.log(data);


    return(
      <Fragment>
              {data.map(item => (
                      <div key={item.id}>
                          <p>Nom Scientifique: {item.nomSc}</p>
                            {
                                item.nomFr == "" ?(
                                     <p>Nom Français: Inconnu</p>):
                                     <p>Nom Français: {item.nomFr}</p>
                            }
                          {
                              item.famille ?(
                                      <p>Famille: {item.famille}</p>):
                                  <p>Famille: {item.famille_id}</p>
                          }
                        <br/>

                      </div>
              ))}
      </Fragment>
    );
}

export default TestApi;