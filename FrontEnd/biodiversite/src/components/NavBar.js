import React, {Component, Fragment} from "react";
import * as ReactBootStrap from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <ReactBootStrap.Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="/">Biodiversite LLN</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">

                                <ReactBootStrap.Nav.Link href="/">Acceuil</ReactBootStrap.Nav.Link>


                                <ReactBootStrap.Nav.Link  href="/parcours">Parcours</ReactBootStrap.Nav.Link>

                                <ReactBootStrap.Nav.Link className="mr-auto" href="/pointBio">Points Biodiversités</ReactBootStrap.Nav.Link>


                         </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>

                                <ReactBootStrap.Nav.Link   href="/compte">Mon Compte</ReactBootStrap.Nav.Link>

                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </Fragment>
        )
    }
}

export default NavBar;











