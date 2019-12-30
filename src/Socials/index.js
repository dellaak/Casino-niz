import React from "react";
import fbicon from "../images/fbicon.svg"
import twittericon from "../images/twittericon.svg"
import "./style.scss";


const Socials = () => {

    return (
        <div className="socials-box">
            <a href="https://www.facebook.com/Casinoniz/">
                <img className="social-icons" src={fbicon} alt="facebook-icon" />
            </a>


            <a href="https://twitter.com/CasinoNiz">
                <img className="social-icons" src={twittericon} alt="twitter-icon" />
            </a>
        </div>
    );
}


export default Socials;
