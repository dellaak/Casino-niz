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
const NewCasinos =(props)=> {
  let newCasino = [...props.start.Casinon]
  newCasino.reverse()

    return (
      <aside className="new-casinos">
        <div className="title-box">
          <h5 className="latest-title">Senast tillagda casino bonusar 2020</h5>
        </div>

        {newCasino.slice(0,5).map(casino => (
          <div className="box1" key={casino.id + casino.color}>
            <Link
              target="_blank"
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
              target="_blank"
              rel="noopener noreferrer nofollow "
              to={{ pathname: `/Redirect/${casino.title}`, match: `${casino.title}` }}>
            
              <Button className="newcas-botton">Hämta bonus</Button>
            </Link>

            <StyledNavlink 
               to={{ pathname: `/Recension/${casino.title}`, match: `${casino.title}` }} > 
         Recension
      
        </StyledNavlink>
        </ButtonRecBox>
          </div>
        ))}
        <div className="small-text-new">
          <small>
            18+ | Regler & villkor gäller |{" "}
            <a href="https://www.stodlinjen.se/#!/">www.stodlinjen.se </a>
          </small>
        </div>
      </aside>
    );
  
}
export default NewCasinos;
