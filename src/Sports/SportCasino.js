import React, { useState, useEffect } from "react";
import { Button, Collapse } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components"
import star from "../images/fullstar.svg"
import SnabbFakta from "../Snabbfakta"

const StyledNavlink = styled(NavLink)`
color:white;
display:flex;
align-items:center;
color:#000;
font-size:18px;
font-family: 'Roboto', sans-serif;
line-height:4;
text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style:normal;
  padding-top: 0.1em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);

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

const SportCasino = (props) => {
    const [showStar, setStar] = useState(false)
    const [snabbFakta, setSnabbFakta] = useState(false);

    useEffect(() => {
        let fullstar = props.casinon.recension[0]

        if (fullstar) {
            if (fullstar.gamebar === 100 && fullstar.experience === 100 && fullstar.support === 100) {
                setStar(true)
            }
        }
    }, [props.casinon.recension]);



    const qToggle = () => {
        setSnabbFakta(!snabbFakta)
    }



    return (

        <div
            className="full-box">
            <div className=" casinowrap">{" "}
                <Link target={props.isBlocked ? '' : "_blank"} to={{ pathname: "/Redirect", search: `${props.casinon.title}` }} >
                    <img className="casino-logo"
                        alt={props.casinon.title}
                        src={props.casinon.caslogo} />

                </Link>
                <div className="info-wrap">
                    <StyledNavlink
                        to={{ pathname: `/recension/${props.casinon.title}`, match: `${props.casinon.title}` }} >
                        Recension
         {showStar ? (<img src={star} className="top-star" alt="star" />) : ''}
                    </StyledNavlink>

                    {" "}
                    {/* <div className="nodepositbonus">
              <p className="divtitle">BONUS UTAN REGISTRERING</p>
              <p className="nodeposittext">{props.casinon.nodeposit}</p>
            </div> */}

                    <div className="depositbonus">
                        <h3 className="divtitleone">ODDS BONUS SOM ERBJUDS JUST NU</h3>
                        <p className="deposittext"> {props.casinon.sportsbonus}</p>
                        {props.casinon.depositpercentsports > 0 ? (<p><b>INSÄTTNINGSBONUS:</b> {props.casinon.depositpercentsports}%</p>) : ''}
                    </div>



                    <div className="wager">
                        <p className="divtitle">OMSÄTTNINGSKRAV</p>
                        <b>
                            <p className="wagerinfo"> {props.casinon.sportswager}x</p>
                        </b>
                    </div>
                    <Link target={props.isBlocked ? '' : "_blank"}
                        rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${props.casinon.title}`, match: `${props.casinon.title}` }} >
                        <Button className="to-botton">Hämta bonus</Button>
                    </Link>
                </div>
                <div />

            </div>

            {props.casinon.casinospecialterms ? <div className="extra-text"><span>{props.casinon.casinospecialterms}</span></div> : ''}

            <div className="spela-lagom">

                18+ | Spela Ansvarfullt | <a href="https://www.stodlinjen.se/#!/">Stödlinjen.se</a> |
<a
                    target="_blank noopener noreferrer nofollow"
                    href={props.casinon.rules}
                >
                    Regler & villkor gäller </a>{" "}
                |
{props.casinon.bankid === true ? (
                    <span className="bankid-text">
                        Bankidentifiering
</span>
                ) : (
                        ""
                    )}

            </div>
            <Button onClick={qToggle} xs="6" className="question-head-preview col-sm" ><span >Snabbfakta om {props.casinon.title}</span> <StyledSpan rotate={snabbFakta ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

            <StyledCollapse isOpen={snabbFakta} >

                <SnabbFakta className="msg-preview" xs="6" casino={props.casinon} isBlocked={props.isBlocked} />
            </StyledCollapse>
            <p className="freespins-text">{props.casinon.freefromwager ? 'Omsättningsfria freespins' : ''}</p>
        </div>

    );
}

export default SportCasino;