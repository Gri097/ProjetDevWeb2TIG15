import React, { Component, Fragment } from "react";
import {Link} from "react-router-dom";
import './PointBio.css';

class PointBio extends Component {

    render() {
        return (
            <Fragment>
                {this.props.parcours === 1 ?
                    (this.props.remarquable ?
                        (<div id="phoneButton" className="laptopButton">
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>
                        </div>) :

                        (<div id="phoneButton" className="laptopButton" style={{backgroundColor:'#8B0000'}}>
                        <Link to={`/pointBio/${this.props.id}`} >
                            <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                        </Link>

                    </div>)
                    )
                 :
                (this.props.parcours === 2 ?
                (this.props.remarquable ?
                        (<div id="phoneButton" className="laptopButton">
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>
                        </div>) :

                        (<div id="phoneButton" className="laptopButton" style={{backgroundColor:'#8B0000'}}>
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>

                        </div>)
                ) :
                (this.props.parcours === 3 ?
                (this.props.remarquable ?
                        (<div id="phoneButton" className="laptopButton">
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>
                        </div>) :

                        (<div id="phoneButton" className="laptopButton" style={{backgroundColor:'#8B0000'}}>
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>

                        </div>)
                ) :
                (this.props.parcours === 4 ?
                (this.props.remarquable ?
                        (<div id="phoneButton" className="laptopButton">
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>
                        </div>) :

                        (<div id="phoneButton" className="laptopButton" style={{backgroundColor:'#8B0000'}}>
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>

                        </div>)
                ) :
                (this.props.remarquable ?
                        (<div id="phoneButton" className="laptopButton">
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>
                        </div>) :

                        (<div id="phoneButton" className="laptopButton" style={{backgroundColor:'#8B0000'}}>
                            <Link to={`/pointBio/${this.props.id}`} >
                                <p className="buttonVert">{this.props.nomScien.substr(0,13) + "..."}</p>
                            </Link>

                        </div>)
                ))))}
            </Fragment>
        );
    }
}

export default PointBio;