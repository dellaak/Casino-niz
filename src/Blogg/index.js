import React from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "./style.scss";

const BloggSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const StyledKampanj = styled.section`
  justify-content: space-between;
  display: flex;
  max-width: 320px;
  flex-direction: column;
  margin: 50px 0;
  -webkit-box-shadow: 3px 0px 13px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 0px 13px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 0px 13px 0px rgba(0, 0, 0, 0.51);
  border: 1px solid grey;
  padding: 10px;

  img {
    max-width: 320px !important;
    width: 100%;
    max-height: 180px !important;
  }

  a {
    text-align: center;
    color: white;

    font-size: 16px;
    background-color: #214467;
  }
  .readmore-blogg {
    margin-bottom: 5px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
  }
  small {
    padding: 10px;
    border-top: 1px solid lightgrey;
  }
`;

const Top5 = (props) => {
  const Kampanj = (props) => {
    let { text, bild, publicerad, link } = props;
    return (
      <StyledKampanj>
        <NavLink to={link}>
          <img src={bild} alt="blogg-img" />
        </NavLink>
        <p>{text}...</p>
        <NavLink className="readmore-blogg" to={link}>
          Läs mer
        </NavLink>

        <small>{publicerad}</small>
      </StyledKampanj>
    );
  };

  return (
    <Container>
      <Helmet>
        <title>Casino Kampanjer & Tips 2021 | Casinoniz</title>
        <link
          rel="canonical"
          href="https://www.casinoniz.se/kampanjer-casino-2020"
        />
        <meta
          name="description"
          content="Kampanjer för casino 2020 ➼ Här lägger vi på Casinoniz ut våra kampanjer om casinon och de bästa casino bonusar för esport, sport/odds och casino!."
        />
        <meta
          name="keywords"
          content="Casino, Casinobonusar, kasino, kasinobonusar,välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, bästa casinon, bästa casinon 2020, top5 , top10 casino"
        />
      </Helmet>

      <section className="blogg">
        <h1 className="banners">Kampanjer casino 2020 </h1>
        <p>
          Välkomna till Casinoniz kampanjer/casinoblogg. Här skriver vi ut allt
          som har med casino bonus, betting, sports,esport, slots och massa
          annat. Typ allt som har med spel att göra.{" "}
        </p>

        <p>
          Hoppas att det vi skriver ut här får dig som läsare att finna det
          intressant :)
        </p>
        <h2>Våra kampanjer 2020</h2>
        <BloggSection>
          <Kampanj
            text="Hur roligt är det inte med nya och bra slots? Vi listar nya slots 2020. Listan är baserad på spel som vi tror man borde prova. Listan kommer uppdateras med nya slots under året 2020. Så håll utkik"
            bild="/images/newslots.svg"
            publicerad="22 Januari 2020"
            link="nya-slots-2020"
          />

          <Kampanj
            text="I år tror vi att casinon kommer att fokusera på tema och upplevelse.Här har du en lista på alla nya casino som lanserats under 2020. Listan kommer uppdateras med alla nya casino 2020 kontinuerligt. Så håll utkik"
            bild="/images/2020new.svg"
            publicerad="14 Januari 2020"
            link="nya-casino-2020"
          />

          <Kampanj
            text="Här ger vi dig en filtrerad lista på casino med minsta insättningen under 100 kr. Perfekt för dig som vill prova på ett nytt casino. Minsta insättningar från 10kr, 20kr och 50 kr."
            bild="/images/mindep.svg"
            publicerad="11 Januari 2020"
            link="minsta-insattning-casino"
          />

          <Kampanj
            text="Casinon vi listar här är några casinon som vi tycker sticker ut lite extra. Det vi har tänkt på när vi valde ut fem casinon är layouten, spelutbudet på slots, supporten och även"
            bild="/images/top5.png"
            publicerad="3 Januari 2020"
            link="5-basta-casinon-2020"
          />
        </BloggSection>
      </section>
    </Container>
  );
};

export default Top5;
