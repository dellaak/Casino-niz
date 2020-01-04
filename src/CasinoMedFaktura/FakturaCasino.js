import React from "react";
import { Button } from "reactstrap";
import { NavLink , Link} from "react-router-dom";
import styled from "styled-components"

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
  text-shadow: 0.07em 0.07em 0 #000;
`


const FakturaCasino =(props)=> {

    return (

      <div
        className="full-box " >
      
        <div className=" casinowrap">{" "}
       
        <Link target="_blank" to={{ pathname: `/Redirect/${props.casino.title}`, match: `${props.casino.title}` }}>
        <img  className="casino-logo"
              alt={props.casino.title}
              src={props.casino.caslogo}/>
        </Link>
          <div className="info-wrap">
          <StyledNavlink 
               to={{ pathname: `/Recension/${props.casino.title}`, match: `${props.casino.title}` }} > 
         Recension
   
        </StyledNavlink>
      
        {" "}
            {/* <div className="nodepositbonus">
              <p className="divtitle">BONUS UTAN REGISTRERING</p>
              <p className="nodeposittext">{props.casino.nodeposit}</p>
            </div> */}
            
            <div className="depositbonus">
              <h3 className="divtitle">CASINO BONUS SOM ERBJUDS JUST NU</h3>
              <p className="deposittext"> {props.casino.depositbonus}</p>
            </div>
            
            <div className="wager">
              <p className="divtitle">OMSÄTTNINGSKRAV</p>
              <b>
                <p className="wagerinfo"> {props.casino.wager}x</p>
              </b>
            </div>
            <Link target="_blank"
              rel="noopener noreferrer nofollow " to={{ pathname: `/Redirect/${props.casino.title}`, match: `${props.casino.title}` }}>
               <Button className="to-botton">Hämta bonus</Button>
              </Link>
           
          </div>
          <div />

         
         

            
           
        
        </div>
        <div className="spel-box">
          <p className="spel">
            <span className="checkmark">✓</span> {props.casino.fakturatype.join(' - ')}
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

export default FakturaCasino;
