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
                    <a href="//www.dmca.com/Protection/Status.aspx?ID=fce88a77-1d46-4edf-a331-775f8656d6ae" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/DMCA_badge_trn_100w.png?ID=fce88a77-1d46-4edf-a331-775f8656d6ae" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                </div>
                <div className="socials">
                    <div className="links-niz">

                        <NavLink
                            className="footer-link"
                            to="/casino-swish"
                            activeClassName="active"
                        >
                            Casino Swish
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/faktura-casino"
                            activeClassName="active"
                        >
                            Casino Faktura
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/casino-trustly"
                            activeClassName="active"
                        >
                            Casino Trustly
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/casino-paysafecard"
                            activeClassName="active"
                        >
                            Casino Paysafecard
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/nya-casino-2020"
                            activeClassName="active"
                        >
                            Nya Casino 2020
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/esportbetting"
                            activeClassName="active"
                        >
                            Esportbetting
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/minsta-insattning-casino"
                            activeClassName="active"
                        >
                            Minsta insättning casino 2020
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/nya-slots-2020"
                            activeClassName="active"
                        >
                            Nya slots 2020
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/odds"
                            activeClassName="active"
                        >
                            Odds & Sports betting
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/casino-bonus"
                            activeClassName="active"
                        > Casino bonusar
            </NavLink>
                        <NavLink
                            className="footer-link"
                            to="/casino-nyheter"
                            activeClassName="active"
                        >
                            Casino Nyheter
            </NavLink>
                    </div>
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

                <p className="copyright"> &#9400; Casinoniz 2020</p><a href="https://delshadkogi.se" style={{ display: 'none' }}> </a>
            </div>
        </div>
    );
}


export default withRouter(Footer);
