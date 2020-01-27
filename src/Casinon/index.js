import React, { useState, useEffect } from "react";
import { Button, Collapse } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
import styled from "styled-components"
import star from "../images/fullstar.svg"
import SnabbFakta from "../Snabbfakta/index"



export const StyledNavlink = styled(NavLink)`
color:white;
display:flex;
align-items:center;
color:#000;
font-size:18px;
font-family: "Roboto", sans-serif;
line-height:4;
text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style:normal;
  padding-top: 0.1em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.2);
  
`
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

const Casinon = (props) => {
  const [showStar, setShowStar] = useState(false);
  const [snabbFakta, setSnabbFakta] = useState(false);



  useEffect(() => {
    let fullstar = props.casino.recension[0]

    if (fullstar) {
      if (fullstar.gamebar === 100 && fullstar.experience === 100 && fullstar.support === 100) {
        setShowStar(true)
      }
    }




  }, [props.casino.recension]);



  const qToggle = () => {
    setSnabbFakta(!snabbFakta)
  }

  return (

    <div
      className="full-box" >
      <div className=" casinowrap">{" "}


        <Link target={props.isBlocked ? '' : "_blank"} to={{ pathname: `/Redirect/${props.casino.title}`, match: `${props.casino.title}` }}>
          <img className="casino-logo"
            alt={props.casino.title}
            src={props.casino.caslogo}
          />

        </Link>

        <div className="info-wrap">
          <StyledNavlink
            to={{
              pathname: `/recension/${props.casino.title
                .toLowerCase()}`, match: `${props.casino.title.toLowerCase()}`
            }} >
            Recension
{showStar ? (<img src={star} className="top-star" alt="star" />) : ''}
          </StyledNavlink>

          <div className="depositbonus">
            <h3 className="divtitleone">CASINO BONUS SOM ERBJUDS JUST NU</h3>
            <p className="deposittext"> {props.casino.depositbonus}</p>
          </div>

          <div className="wager">
            <p className="divtitle" >OMSÄTTNINGSKRAV</p>
            <b>
              <p className="wagerinfo"> {props.casino.wager}x</p>
            </b>
          </div>
          <Link target={props.isBlocked ? '' : "_blank"}
            rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${props.casino.title}`, match: `${props.casino.title}` }}>
            <Button className="to-botton">Hämta bonus</Button>
          </Link>


        </div>
        <div />


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


      <p className="freespins-text">{props.casino.freefromwager ? 'Omsättningsfri bonus/freespins' : ''}</p>
      <Button onClick={qToggle} xs="6" className="question-head-preview col-sm" ><span >Snabbfakta om {props.casino.title}</span> <StyledSpan rotate={snabbFakta ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

      <StyledCollapse isOpen={snabbFakta} >

        <SnabbFakta className="msg-preview" xs="6" casino={props.casino} isBlocked={props.isBlocked} />
      </StyledCollapse>



    </div >

  );
}


export default Casinon