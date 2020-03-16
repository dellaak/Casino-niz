import React from "react";
import {NavLink, Link } from "react-router-dom";
import {Button} from 'reactstrap'
import styled from "styled-components"



const StyledNavlink = styled(NavLink)`
color:white;

color:#000;
font-size:10px;
font-family: 'Manjari', sans-serif;
line-height:4;
text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style:normal;
  padding-top: 0.1em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.2);
`

const ButtonRecBox = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
`

const NewWrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
border:1px solid lightgray;
padding-bottom:10px;
.small-new-text{
  font-size:10px;
}
`

const NewCasinos =(props)=> {
  let newCasino = [...props.start.Casinon]
  newCasino.reverse()

    return (
      <aside className="new-casinos">
        <div className="title-box">
          <h5 className="latest-title">Senast tillagda casino bonusar 2020</h5>
        </div>

        {newCasino.slice(0, 5).map(casino => (
          <NewWrapper  key={casino.id + casino.color}>
          <div className="box1">
            <Link
              target={props.isBlocked ? '' : "_blank"}
              rel="noopener noreferrer nofollow "
              to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
              <img
                alt="new-casino-logo"
                className="logonewcasino"
                src={casino.caslogo}
              />
            </Link>
            <div className="new-cas-box">
              <p className="newcas-text">{casino.depositbonus}</p>
            </div>

            <ButtonRecBox>
            <Link
              target={props.isBlocked ? '' : "_blank"}
              rel="noopener noreferrer nofollow "
              to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
            
              <Button className="newcas-botton">Hämta bonus</Button>
            </Link>

            <StyledNavlink 
               to={{ pathname: `/recension/${casino.title.toLowerCase()}`, match: `${casino.title.toLowerCase()}` }} > 
         Recension
             
        </StyledNavlink>
             
        </ButtonRecBox>
            </div>
            <small className="small-new-text"> 18+ | {casino.casinospecialterms}  <a href={casino.rules}>Regler & villkor gäller </a> | {" "}
            <a href="https://www.stodlinjen.se/#!/">www.stodlinjen.se </a></small>
            </NewWrapper>
        ))}
           
      </aside>
    );
  
}
export default NewCasinos;
