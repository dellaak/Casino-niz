import React, { useState } from "react";
import "./style.scss";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { withRouter, NavLink } from "react-router-dom";
import logocas from "../images/casinonizlogo.svg";
import styled from "styled-components"

const StyledDownMenu = styled(DropdownMenu)`
background-color: #214467 !important;
color:white !important;
`

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
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret >
                                Kampanjer
                        </DropdownToggle>
                            <StyledDownMenu right>
                                <DropdownItem className="drop-nav">
                                    <NavLink
                                        className="nav-link"
                                        to="/Kampanjer-casino-2020"

                                    >

                                        Alla Kampanjer
                </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="drop-nav">
                                    <NavLink
                                        className="nav-link"
                                        to="/minsta-insattning-casino"

                                    >

                                        Minsta insättning casino
                </NavLink>
                                </DropdownItem>

                                <DropdownItem className="drop-nav">
                                    <NavLink
                                        className="nav-link"
                                        to="/5-basta-casinon-2020"

                                    >

                                        Bästa Casinon 2020
                </NavLink>
                                </DropdownItem>


                            </StyledDownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );

}

export default withRouter(NavBarApp);
