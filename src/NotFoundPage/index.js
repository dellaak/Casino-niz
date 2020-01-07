import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import styled from "styled-components"



const Styled404Wrap = styled.div`
position:absolute;
left:0;
width:100vw;
height:100vh;
background-color:#214467;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
padding-top:100px;
`

const Styledh3 = styled.h3`
color:#fed100 !important;
display:flex;
flex-direction:column;
align-items:center;
letter-spacing: 0.1em;
  text-transform: uppercase;

  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.2);
`
const StyledLink = styled(Link)`
padding-top:30px;
color:white!important;
letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.2);
`
const StyledP = styled.p`
font-size:10rem;
color:white!important;
letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.2);
`


const NotFoundPage = () => {
  return <Styled404Wrap>  <Helmet>
    <title>
      404 - Sidan finns inte | Casinoniz
        </title>
    <meta
      name="description"
      content="404 page"
    />
    <meta
      name="keywords"
      content="Casino,faktura casino, casino faktura, svensk casino , svenska casinon, Casinobonusar, 2019,2020,bonus, spela, insättningsbonus, free spins, esports,betting,omsättningsfria bonusar"
    />
  </Helmet>
    <StyledP>404</StyledP>
    <Styledh3>
      Tyvärr så finns inte sidan du letar efter.
              <StyledLink to="/">Klicka här för att gå till start </StyledLink>
    </Styledh3>
  </Styled404Wrap>;
}

export default NotFoundPage;