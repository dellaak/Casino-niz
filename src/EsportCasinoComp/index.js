import React from "react";
import "./style.scss";
import { Button } from "reactstrap";
import { Link} from "react-router-dom";
import {StyledNavlink} from "../Casinon/"

const EsportCasinoComp =(props)=> {

let casinoInfo = props.casino
let esport = props.casino.esportinfo[0]

    return (
      <div className="esport-box">
        <div className=" ecasinowrap">
        <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casinoInfo.title}`, match: `${casinoInfo.title}` }}>
            <img
              className="casino-logo"
              alt={casinoInfo.title}
              src={casinoInfo.caslogo}
          
            />
          </Link>
          <div className="info-wrap">
          <StyledNavlink 
               to={{ pathname: `/Recension/${casinoInfo.title}`, match: `${casinoInfo.title}` }} > 
         Recension
   
        </StyledNavlink>
            <div className="depositbonus">
              <h3 className="divtitle">CASINO BONUS FÖR ESPORT BETTING JUST NU</h3>
              <p className="deposittext">{casinoInfo.sportsbonus}</p>
              {casinoInfo.depositpercentsports > 0 ? (<p><b>INSÄTTNINGSBONUS:</b> {casinoInfo.depositpercentsports}%</p>) : ''}
            </div>
            <div className="wager">
              <p className="divtitle">OMSÄTTNINGSKRAV</p>
              <b>
                <p className="wagerinfo">{casinoInfo.sportswager}x</p>
              </b>
            </div>
            <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casinoInfo.title}`, match: `${casinoInfo.title}` }}>
               <Button className="to-botton">Hämta bonus</Button>
            </Link>
          </div>

          <div />

         
       

         
  
        </div>
        <div>
          <p className="spel">
            <span className="checkmark">✓</span> {esport.spel}
          </p>
        </div>
        {props.casino.casinospecialterms ? <div className="extra-text"><span>{props.casino.casinospecialterms}</span></div> : ''}




<div className="spela-lagom">

  18+ | Spela Ansvarfullt | <a href="https://www.stodlinjen.se/#!/">Stödlinjen.se</a> |
  <a
    target="_blank noopener noreferrer nofollow"
    href={props.casino.rules}
  >
    Regler & villkor gäller </a>{" "}
  |
  {props.casino.bankid === true ? (
    <span className="bankid-text">
      Bankidentifiering
</span>
  ) : (
      ""
    )}

</div>
      </div>
    );
  }

export default EsportCasinoComp;
