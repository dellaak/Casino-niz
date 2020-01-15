import React, { useEffect } from "react";
import { Container } from "reactstrap"
import "./style.scss";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Policy = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });



  let StyledUl = styled.ul`
  padding: 0px 20px;
`;

  let StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  :first-child {
    border-top: none;
  }
  `;


  return (
    <Container className="policy-wrap">
      <Helmet>
        <title>Integritetspolicy | Casinoniz</title>

        <meta
          name="description"
          content="Casinoniz integritetspolicy. Utöver våra casinobonusar så vill vi förklara hur vår sida fungerar."
        />
        <meta
          name="keywords"
          content="Casino, Casinobonusar, 2019,2020, insättningsbonus,esport,csgo.dota2.starcraft, leauge of legends, lol, free spins, esports,betting"
        />
      </Helmet>

      <h3>Integritetspolicy</h3>
      <div className="text-body">
        <p>
          Casinoniz.se samlar eller sparar inte in några personuppgifter som
          kan kopplas till fysiska personer. Vi delar ingen information till
          en tredje part.
          </p>
        <p>
          Casinoniz.se använder sig av en extern mejlservice. Vi använder
          Outlook och utgår att informationen du mejlar oss är säker hos
          Outlook. Mejlen kan raderas enkelt, ifall personen som skickat in
          det vill att det ska raderas.
          </p>
        <p>
          För att registrera statistik så använder Casinoniz.se sig av Google
            Analytics. Google Analytics använder sig utav cookies.{" "}
          <a
            href="https://policies.google.com/technologies/types?hl=sv"
            alt="google-analytics"
          >
            Klicka här
            </a>{" "}
          ifall ni vill läsa mer om Googles Analytics Cookies. Google
          Analytics sparar ingen personlig data.
          </p>
        <p>
          För att ge dig som användare en så bra upplevelse som möjlight så
          vill vi på Casinoniz med hjälp av Google Analytics ta reda på.
          </p>
        <StyledUl>
          <StyledLi>Hur du som besökare hittade vår webbsida.</StyledLi>
          <StyledLi>Exempelvis vilka länkar du som besökare klickar på och hur länge du som besökare stannar på respektive sida.</StyledLi>
        </StyledUl>
      </div>
    </Container>
  );
}


export default Policy;
