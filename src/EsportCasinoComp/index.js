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
            to={{pathname: `/Recension/${casinoInfo.title}` }} >
         Recension
   
        </StyledNavlink>
            <div className="depositbonus">
              <h3 className="divtitle">CASINO BONUS FÖR ESPORT BETTING JUST NU</h3>
              <p className="deposittext">{casinoInfo.depositbonus}</p>
              
            </div>
            <div className="wager">
              <p className="divtitle">OMSÄTTNINGSKRAV</p>
              <b>
                <p className="wagerinfo">{casinoInfo.sportswager}x</p>
              </b>
            </div>
          </div>

          <div />

          <div className="buttonbox">
          <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${casinoInfo.title}`, match: `${casinoInfo.title}` }}>
               <Button className="to-botton">Hämta bonus</Button>
            </Link>

            {casinoInfo.bankid === true ? (
              <p className="bankid-text" >
                <span className="checkmark">✓</span> Bankidentifiering
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <p className="spel">
            <span className="checkmark">✓</span> {esport.spel}
          </p>
        </div>
        {casinoInfo.extratext ? (
          <div className="extra-text">
            <span>{casinoInfo.extratext}</span>
          </div>
        ) : (
          ""
        )}

        <div className="spela-lagom">
          <span>
            18+ &#8226; Spela Ansvarfullt &#8226;{" "}
            <a
              target="_blank noopener noreferrer nofollow"
              href={casinoInfo.rules}
            >
              Regler & villkor gäller
            </a>{" "}
            &#8226; <a href="https://www.stodlinjen.se">www.stodlinjen.se</a>
            &#8226;{" "}
          </span>
        </div>
      </div>
    );
  }

export default EsportCasinoComp;
