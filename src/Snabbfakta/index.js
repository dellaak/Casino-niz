import React from "react"
import { Link } from "react-router-dom";
import "./style.scss"


const Snabbfakta = (props) => {
    let nc = false
    if (props.casino.title === 'NoAccountcasino') {
        nc = true
    }

    let recension = props.casino.recension[0]
    return (<React.Fragment>
        <h4 className="snabb-title-preview">
            Snabbfakta om {props.casino.title}
        </h4>
        <div className="fakta-box-preview">

            <div className="Snabbfakta-preview">
                {nc ? (<p>Sportsbetting: Se     <Link
                    to={{ pathname: "/Recension/NoAccountBet", match: "NoAccountBet" }}>
                    NoAccountBet

        </Link> </p>) : <p>Sportsbetting:  {props.casino.sports ? "✅" : "❌"}</p>}

                <p>Freespins: {props.casino.freespins > 1 ? `${props.casino.freespins}` : "❌"}</p>

                <p>Bonusprocent: {props.casino.depositpercent}%</p>

                <p>Omsättningsfria spins:{" "}{props.casino.freefromwager ? "✅" : "❌"}
                </p>
            </div>

            <div className="Snabbfakta-preview">
                <p>Spel med Faktura: {props.casino.faktura ? "✅" : "❌"}</p>
                <p>Minsta insättning: {recension.mindeposit} SEK</p>
                <p> Minsta uttag: {recension.minout} SEK</p>
                <p> Bankid: {props.casino.bankid ? "✅" : "❌"}</p>

            </div>
            <div className="Snabbfakta-preview">

                <p>Livechat: {recension.livechat ? "✅" : "❌"}{" "}</p>
                <p>Swish: {recension.swish ? "✅" : "❌"}</p>
                <div>
                    <p>Insättningsmetoder: {recension.deposittypes}</p>
                </div>

            </div>
        </div>
        <Link className="button-preview"
            target="_blank"
            rel="noopener noreferrer nofollow "
            to={{ pathname: `/Redirect/${props.casino.title}`, match: `${props.casino.title}` }}>
            Gå till {props.casino.title}

        </Link>

    </React.Fragment>)

}

export default Snabbfakta;