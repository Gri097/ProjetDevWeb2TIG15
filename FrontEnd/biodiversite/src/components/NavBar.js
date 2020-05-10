import React, {Component, Fragment} from "react";
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from "react-router-dom";
//style={{backgroundColor:'#28a745'}}
class NavBar extends Component {
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <ReactBootStrap.Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="/">Biodiversite LLN</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                            <Link to="/">
                                <ReactBootStrap.Nav.Link href="/">Acceuil</ReactBootStrap.Nav.Link>
                            </Link>
                            <Link to="/parcours">
                                <ReactBootStrap.Nav.Link  href="/parcours">Parcours</ReactBootStrap.Nav.Link>
                            </Link>
                            <Link to="/pointBio">
                                <ReactBootStrap.Nav.Link className="mr-auto" href="/pointBio">Points Biodiversités</ReactBootStrap.Nav.Link>
                            </Link>

                         </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <Link to="/compte">
                                <ReactBootStrap.Nav.Link   href="/compte">Mon Compte</ReactBootStrap.Nav.Link>
                            </Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </Fragment>
        )
    }
}

export default NavBar;











