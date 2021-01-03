import React, { useEffect } from "react";
import { Container } from "reactstrap";
import "./style.scss";
import { Helmet } from "react-helmet";

const Terms = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  return (
    <Container className="terms-wrap">
      <Helmet>
        <title>Allmänna Villkor | Casinoniz</title>
        <meta
          name="description"
          content="Casinoniz allmäna vilkor. Vi har casinobonusar men läs gärna igenom våra villkor."
        />
        <meta
          name="keywords"
          content="Casino,faktura casino, casino faktura, svensk casino , svenska casinon, Casinobonusar, 2019,2020,insättningsbonus,esport,csgo.dota2.starcraft, leauge of legends, lol, free spins, esports,betting"
        />
      </Helmet>

      <h3>Allmänna Villkor</h3>
      <div className="text-body">
        <p>
          Casinoniz.se är en fristående sida och vi uppmuntrar inte till spel.
          Vi tillhandahåller endast en tjänst som listar casinon eller casino
          bonusar.
        </p>
        <p>
          För att besöka casinoniz.se så måste man vara över 18 år gammal och
          inte vara registrerad hos spelpaus.se . Denna sida är endast till för
          marknadsföring av casinon och diverse casino bonus.
        </p>
        <p>
          Våra besökare ska vara införstådda om att spel med pengar inte
          garanterar några vinster och att de riskerar att förlora pengar när de
          spelar hos spelbolag online. Casinoniz.se står inte för förlorade
          pengar och allt spel sker på eget ansvar hos dig som besökare eller
          privatperson. För att registrera sig eller spela hos ett spelbolag
          måste man vara 18 år gammal.
        </p>
        <h3>Spelproblem</h3>
        Spel med pengar ska vara kul, men det kan lätt gå överstyr och ifall du
        som besökare känner att du spelar för mycket och för mer pengar än du
        har råd med så finns hjälp att få hos{" "}
        <a href="https://spelberoende.se/" alt="Spelberoende">
          Spelberoende.se
        </a>
        <p>
          Du kan även spärra dig från ALLT spel hos spelbolag som innehar svensk
          spellicense hos{" "}
          <a href="https://www.spelpaus.se/" alt="spelpause">
            Spelpaus.se
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Terms;
