import React, { useState } from "react";
import "./style.scss";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from "reactstrap";
import { withRouter, NavLink } from "react-router-dom";
import logocas from "../images/casinonizlogo.svg";


const NavBarApp = (props) => {
    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <Navbar className={window.location.href.includes('Redirect') ? 'hide-div' : 'navbar'} dark expand="lg">
                <NavbarBrand className="brand" href="/">

                    <img src={logocas} alt="brand-casinoniz" />
                </NavbarBrand>

                <NavbarToggler onClick={toggle} aria-label="Togglebutton" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                className="nav-link firstnavitem"
                                exact
                                to="/"
                                activeClassName="activenav"
                            >
                                Start
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link"
                                to="/esportbetting"
                                activeClassName="activenav"
                            >

                                Esport Betting
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link"
                                to="/faktura-casino"
                                activeClassName="activenav"
                            >

                                Casinon med faktura
                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="nav-link"
                                to="/odds"
                                activeClassName="activenav"
                            >

                                Odds & Sportsbetting
                </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );

}

export default withRouter(NavBarApp);
