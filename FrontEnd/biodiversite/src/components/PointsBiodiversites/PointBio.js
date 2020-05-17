import React, { Component, Fragment } from "react";
import {Link} from "react-router-dom";
import logoVert from '../../images/logo-vert.png';
import './PointBio.css';

class PointBio extends Component {

    render() {

        return (
            <Fragment>
                {this.props.parcours === 1 ?
                (<div className="science">
                <img src={logoVert} alt="Logo-vert" style={{width:'30px'}}/>
                <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none',color:'black', fontSize:'18px', margin:'5px 5px 5px 5px'}}>
                    {this.props.nomScien}
                </Link>
            </div>) :
                (this.props.parcours === 2 ?
                (<div className="cyclotron">
                <img src={logoVert} alt="Logo-vert" style={{width:'30px'}}/>
                <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none',color:'black', fontSize:'18px', margin:'5px 5px 5px 5px'}}>
                    {this.props.nomScien}
                </Link>
            </div>) :
                (this.props.parcours === 3 ?
                (<div className="lac">
                <img src={logoVert} alt="Logo-vert" style={{width:'30px'}}/>
                <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none',color:'black', fontSize:'18px', margin:'5px 5px 5px 5px'}}>
                    {this.props.nomScien}
                </Link>
            </div>) :
                (this.props.parcours === 4 ?
                (<div className="jb">
                <img src={logoVert} alt="Logo-vert" style={{width:'30px'}}/>
                <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none',color:'black', fontSize:'18px', margin:'5px 5px 5px 5px'}}>
                    {this.props.nomScien}
                </Link>
            </div>) :
                (<div className="parcM">
                <img src={logoVert} alt="Logo-vert" style={{width:'30px'}}/>
                <Link to={`/pointBio/${this.props.id}`} style={{textDecoration:'none',color:'black', fontSize:'18px', margin:'5px 5px 5px 5px'}}>
                    {this.props.nomScien}
                </Link>
            </div>))))}
            </Fragment>
        );
    }
}

export default PointBio;