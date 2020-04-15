import React, { Component } from "react";
import {Link} from "react-router-dom";


class PointBio extends Component {

    state = {
        show: false
    }


    montrerPoint = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>

                <h4>
                    <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none', color:'black'}}>
                        {this.props.nomSc}&nbsp;
                    </Link>


                    <button onClick={this.montrerPoint} className="pointBioButton">
                    </button>
                </h4>
                {this.state.show ?(
                    <ul className="list-group">
                        <li className="list-group-item">
                            Nom français: {this.props.nomFr}
                        </li>
                        <li className="list-group-item">
                            Famille: {this.props.family}
                        </li>
                    </ul>
                ) : null }

            </div>
        );
    }
}

export default PointBio;