import React, { useState, useEffect } from "react";
import "./style.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { StyledNavlink } from "../Casinon/"
import star from "../images/fullstar.svg"

const EsportCasinoComp = (props) => {

  let casinoInfo = props.casino
  let esport = props.casino.esportinfo[0]

  const [showStar, setStar] = useState(false)


  useEffect(() => {

    let fullstar = props.casino.recension[0]

    if (fullstar) {
      if (fullstar.gamebar === 100 && fullstar.experience === 100 && fullstar.support === 100) {
        setStar(true)
      }
    }
  }, []);

  return (
    <div className="esport-box">
      <div className=" ecasinowrap">
        <Link target={props.isBlocked ? '' : "_blank"}
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
         {showStar ? (<img src={star} className="top-star" alt="star" />) : ''}
          </StyledNavlink>
          <div className="depositbonus">
            <h3 className="divtitle">CASINO BONUS FÖR ESPORT BETTING JUST NU</h3>
            <p className="deposittext">{casinoInfo.sportsbonus}</p>
            {casinoInfo.depositpercentsports > 0 ? (<p className="deposit-title">INSÄTTNINGSBONUS: <b>{casinoInfo.depositpercentsports}%</b></p>) : ''}
          </div>
          <div className="wager">
            <p className="divtitle">OMSÄTTNINGSKRAV</p>
            <b>
              <p className="wagerinfo">{casinoInfo.sportswager}x</p>
            </b>
          </div>
          <Link target={props.isBlocked ? '' : "_blank"}
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
