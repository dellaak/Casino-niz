import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components"
import star from "../images/fullstar.svg"

export const StyledNavlink = styled(NavLink)`
color:white;
display:flex;
align-items:center;
color:#000;
font-size:18px;
font-family: 'Manjari', sans-serif;
line-height:4;
text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style:normal;
  padding-top: 0.1em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);

`

const SportCasino = (props) => {
    const [showStar, setStar] = useState(false)

    useEffect(() => {
        let fullstar = props.casinon.recension[0]

        if (fullstar) {
            if (fullstar.gamebar === 100 && fullstar.experience === 100 && fullstar.support === 100) {
                setStar(true)
            }
        }
    }, []);





    return (

        <div
            className="full-box">
            <div className=" casinowrap">{" "}
                <Link target="_blank" to={{ pathname: "/Redirect", search: `${props.casinon.title}` }} >
                    <img className="casino-logo"
                        alt={props.casinon.title}
                        src={props.casinon.caslogo} />

                </Link>
                <div className="info-wrap">
                    <StyledNavlink
                        to={{ pathname: `/Recension/${props.casinon.title}`, match: `${props.casinon.title}` }} >
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
                </div>
                <div />

                <div className="buttonbox">



                    <Link target="_blank"
                        rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${props.casinon.title}`, match: `${props.casinon.title}` }} >
                        <Button className="to-botton">Hämta bonus</Button>
                    </Link>


                    {props.casinon.bankid === true ? (
                        <p className="bankid-text">
                            <span className="checkmark">✓</span> Bankidentifiering
              </p>
                    ) : (
                            ""
                        )}
                </div>
            </div>

            {props.casinon.extratext ? (
                <div className="extra-text">

                    <span>{props.casinon.extratext}</span>
                </div>
            ) : (
                    ""
                )}

            <div className="spela-lagom">
                <span>
                    18+ &#8226; Spela Ansvarfullt &#8226;{" "}
                    <a
                        target="_blank noopener noreferrer nofollow"
                        href={props.casinon.rules}
                    >
                        Regler & villkor gäller
            </a>{" "}
                    &#8226; <a href="https://www.stodlinjen.se">www.stodlinjen.se</a>
                    &#8226;{" "}
                </span>
            </div>
            <p className="freespins-text">{props.casinon.freefromwager ? 'Omsättningsfria freespins' : ''}</p>
        </div>

    );
}

export default SportCasino;