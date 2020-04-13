import React, { Component } from "react";



class PointBio extends Component {

    state = {
        show: true
    }


    montrerPoint = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {

        return (
            <div className="card card-body mb-3">
                <h4>
                    {this.props.nomSc}&nbsp;

                    <button onClick={this.montrerPoint} style={{cursor: 'pointer', color: 'red'}}></button>
                </h4>
                {this.state.show ?(
                    <ul className="list-group">
                        <li className="list-group-item">
                            Nom français: {this.props.nomFr}
                        </li>
                        <li className="list-group-item">
                            Famille: {this.props.famille}
                        </li>
                    </ul>
                ) : null }

            </div>
        );
    }
}

export default PointBio;