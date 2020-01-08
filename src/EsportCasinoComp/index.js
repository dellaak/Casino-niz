import React, { useState, useEffect } from "react";
import "./style.scss";
import { Button, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import { StyledNavlink } from "../Casinon/"
import star from "../images/fullstar.svg"
import SnabbFakta from "../Snabbfakta"
import styled from "styled-components"


const StyledSpan = styled.span`
    display: inline-block;
    height: 24px;
    line-height: 24px;
    width: 24px;
    transition: all 0.3s ease-out;
    transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
    svg{
    display: block;
    height: 100%;
    width: 100%;
    }
  `



const StyledCollapse = styled(Collapse)`
overflow:hidden !important;

`

const EsportCasinoComp = (props) => {

  let casinoInfo = props.casino
  let esport = props.casino.esportinfo[0]

  const [showStar, setStar] = useState(false)
  const [snabbFakta, setSnabbFakta] = useState(false);

  useEffect(() => {

    let fullstar = props.casino.recension[0]

    if (fullstar) {
      if (fullstar.gamebar === 100 && fullstar.experience === 100 && fullstar.support === 100) {
        setStar(true)
      }
    }
  }, []);


  const qToggle = () => {
    setSnabbFakta(!snabbFakta)
  }


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

      <Button onClick={qToggle} xs="6" className="question-head-preview col-sm" ><span >Snabbfakta om {props.casino.title}</span> <StyledSpan rotate={snabbFakta ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

      <StyledCollapse isOpen={snabbFakta} >

        <SnabbFakta className="msg-preview" xs="6" casino={props.casino} isBlocked={props.isBlocked} />
      </StyledCollapse>
    </div>
  );
}

export default EsportCasinoComp;
