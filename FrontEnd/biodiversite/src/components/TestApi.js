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
          <ul>
              {data.map(item => (
                  <li key={item.id}>
                      <p>{item.nomSc}</p>
                  </li>
              ))}
          </ul>
      </Fragment>
    );
}

export default TestApi;