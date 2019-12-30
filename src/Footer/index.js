import React from "react";
import "./style.scss";
import { withRouter, NavLink } from "react-router-dom";
import Socials from "../Socials/index";


const Footer = () => {

    return (
        <div>
            <div
                className={window.location.href.includes("Redirect") ? "hide-div" : "footer"
                }
            >
                <div className="responsible-box">
                    <a href="https://www.stodlinjen.se">
                        <img className="stodlinje-logo" src="/images/stodlinjenlogo.svg" alt="stodlinjen-logo" /></a>
                    <a href="https://www.stodlinjen.se"><img className="arrtonplusicon" alt="18+icon" src="/images/18plus.svg" /></a>
                </div>
                <div className="socials">

                </div>
                <Socials />
                <div className="terms-policy">
                    <NavLink
                        className="footer-link"
                        to="/Terms"
                        activeClassName="active"
                    >
                        Allmänna villkor
            </NavLink>
                    <NavLink
                        className="footer-link"
                        to="/Policy"
                        activeClassName="active"
                    >
                        Intergritetspolicy
            </NavLink>

                </div>

                <div className="footer-braveta">
                    <p>
                        <b>Tänk på</b>
                    </p>
                    <p>
                        Casinon som tredje part kan komma att ändra på sin casinobonus som
                        vi annonserat och Casinoniz kan ej hållas ansvarig.
                        Läs alltid igenom regler och villkor innan du gör en insättning.
            </p>
                </div>

            </div>

            <div className={window.location.href.includes("Redirect") ? "hide-div" : "copy-bot"
            }>
                <p> Kontakta oss: <a className="email-link" href="mailto: contact@Casinoniz.se">contact@Casinoniz.se</a></p>

                <p className="copyright"> &#9400; Casinoniz 2019</p><a href="https://delshadkogi.se" style={{ display: 'none' }}> </a>
            </div>
        </div>
    );
}


export default withRouter(Footer);
