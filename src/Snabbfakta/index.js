import React from "react"
import { Link } from "react-router-dom";
import { Card } from "reactstrap"
import "./style.scss"


const Snabbfakta = (props) => {

    let nc = false
    if (props.casino.title === 'NoAccountcasino') {
        nc = true
    }

    let recension = props.casino.recension[0]
    return (<Card>
        <h4 className="snabb-title-preview">
            Snabbfakta om {props.casino.title}
        </h4>
        <div className="fakta-box-preview">
            <div className="Snabbfakta-preview">
               <p><b>Bonuskrav:</b></p> 
                <p> Omsättningskrav Casino<b>: {props.casino.wager}x</b></p>
                {props.casino.sports === true && props.casino.sportswager >= 0 ? <p>Omsättningskrav Sport: <b>{props.casino.sportswager}x</b></p> : ''}
                {props.casino.sports === true && props.casino.sportswager >= 0 && props.casino.minodds !== 0 ? <p>Minsta odds: <b> {props.casino.minodds} </b></p>  : ' '}


            </div>
    
            <div className="Snabbfakta-preview">
                    {nc ? (<p>Sportsbetting: Se     <Link
                        to={{ pathname: "/recension/NoAccountBet", match: "NoAccountBet" }}>
                        NoAccountBet
    
        </Link> </p>) : <p>Sportsbetting:  {props.casino.sports ? "✅" : "❌"}</p>}

                    <p>Freespins: {props.casino.freespins > 1 ? <b>{props.casino.freespins} </b> : "❌"}</p>

                    <p>Bonusprocent: <b>{props.casino.depositpercent}%</b></p>

                    <p>Omsättningsfria spins:{" "}{props.casino.freefromwager ? "✅" : "❌"}
                    </p>
                </div>

                <div className="Snabbfakta-preview">
                    <p>Spel med Faktura: {props.casino.faktura ? "✅" : "❌"}</p>
                    <p>Minsta insättning: <b>{recension.mindeposit} SEK</b></p>
                    <p> Minsta uttag: <b>{recension.minout} SEK</b></p>
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
                target={props.isBlocked ? '' : "_blank"}
                rel="noopener noreferrer nofollow "
                to={{ pathname: `/Redirect/${props.casino.title}`, match: `${props.casino.title}` }}>
                Gå till {props.casino.title}

            </Link>

    </Card>)
    
    }
    
export default Snabbfakta;