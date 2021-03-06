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

const NewsSection = (props) => {
  const Kampanj = (props) => {
    let { text, bild, publicerad, link, title, alttxt } = props;
    return (
      <section className="kampanj">
        <NavLink to={{ pathname: `/nyheter/${link}`, match: `${link}` }}>
          <img
            srcSet={`${bild} 300w,${bild} 200w`}
            sizes="(max-width: 500px) 200px,400px"
            src={bild}
            alt={alttxt}
          />
        </NavLink>
        <h5>{title}</h5>
        <p>{text}...</p>

        <NavLink
          className="readmore-blogg"
          to={{
            pathname: `/nyheter/${link}`,
            match: `${link}`,
          }}
        >
          Läs mer
        </NavLink>

        <small>{publicerad}</small>
      </section>
    );
  };

  return (
    <Container>
      <Helmet>
        <title>
          Casino Nyheter 2021 » Nyheter Inom Svenska Casinobranschen | Casinoniz
        </title>
        <link rel="canonical" href="https://www.casinoniz.se/casino-nyheter" />
        <meta
          name="description"
          content="Senaste svenska casino nyheter 2020 ➼ Här lägger vi på Casinoniz ut några nyheter om vad som sker inom casinobranschen. Vill du hålla dig uppdaterad om vilka casinon som t.ex. blir av med sin svenska spellicens eller liknande så hittar du det här."
        />
        <meta
          name="keywords"
          content="Casino, Casinobonusar, kasino, kasinobonusar,välkomstbonus, 2019,2020, casinonyheter,nyheter om casino, casinoblogg, kasinonyheter,casinonews"
        />

        <meta property="og:title" content="Nyheter om casinobranschen 2021. " />
        <meta
          property="og:description"
          content="Vill du hålla dig uppdaterad om vilka casinon som t.ex. blir av med sin svenska spellicens eller liknande så hittar du det här."
        />
        <meta
          property="og:image"
          content="https://www.casinoniz.se/images/ninja-min.png"
        />
        <meta property="og:url" content="https://www.casinoniz.se/nyheter" />
      </Helmet>

      <section className="blogg">
        <h2 className="banners">Casino nyheter 2021 </h2>
        <p>
          Vill du hålla dig uppdaterad om nyheter inom casinobranschen ? Här har
          vi en liten nyhetssida där vi släpper intressanta nyheter om vad som
          händer inom casinobranschen. Hoppas att det vi skriver ut här får dig
          som läsare att finna det intressant :){" "}
        </p>

        <h2>Casino Nyheter 2021</h2>
        <BloggSection>
          <Kampanj
            title="Genesis Global Limited etablerar sig på den svenska marknaden"
            text="Gensis global har sitt huvudsäte i Malta och startades 2014 av ett gäng från spelbranschen. Visionen är att skapa den ultimate upplevelsen för spelare."
            bild="/images/genesis.png"
            publicerad="1 April 2021"
            link="genesis-sverige-2021"
            alttxt="genesis-svensk-license"
          />
          <Kampanj
            title="Reactoonz 2 ute på marknaden"
            text="Första spelet blev en succé. Nu har tillverkarna släppt en uppföljare nämligen Reactoonz 2. Spelet finns på dem flesta svenska spelsidor där man erbjuder spel från Play N Go. "
            bild="/images/reactoonz-2.jpg"
            publicerad="14 Oktober 2020"
            link="reactoonz-2-2020"
            alttxt="reactoonz-2"
          />
          <Kampanj
            title="Casinon som stänger i Sverige"
            text="Flera svenska välkända casinon har valt att stänga ner sin verksamhet i Sverige. Dem har valt att inte ansöka om svensk spellicens för närvarande och stänger därmed registreringen för svenska spelare"
            bild="/images/closed.png"
            publicerad="1 Juni 2020"
            link="flera-casino-stanger"
            alttxt="svenskacasinostanger"
          />

          <Kampanj
            title="Highroller - Casinot stänger verksamhet i Sverige"
            text="Zecure Gaming Limited är bolaget som driver Highroller. Bolaget har valt att stänga ner Highroller för svenska spelare och hänvisar istället till deras systercasino som är Casinoroom.se"
            bild="/images/highrollerclose.png"
            publicerad="16 februari 2020"
            link="highroller-stanger"
            alttxt="highrollerclose"
          />

          <Kampanj
            title="Nytt casino lanseras 2020 - förhoppningsvis under februari"
            text="Nu är det dags för ett nytt casino 2020. Casinot är SlotV.com. Casinot grundades 2017 och är aktiva i över 20 länder just nu. Bolaget bakom casinot är Avento MT Limited."
            bild="/images/slotvimg.png"
            publicerad="1 februari 2020"
            link="slotv-nyttcasino"
            alttxt="slotvlogo"
          />

          <Kampanj
            title="Slotsons stänger ner sin verksamhet"
            text="Viral Interactive Limited har beslutat att stänga ner onlinecasinot Slotsons.com. Från och med 1 februari 2020 så stänger man registreringar hos casinot. Alla aktiva spelare kommer tillåtas att ta ut sitt saldo under en period"
            bild="/images/slotson.png"
            publicerad="31 januari 2020"
            link="slotsons-laggerner"
            alttxt="slotsonlogo"
          />

          <Kampanj
            title="Ninja casino kommer tillbaka?"
            text="Det kanske har märkts att det varit ganska tyst från det populära onlinecasinot Ninjacasino.se. Casinot blev av med sin svenska spellicens den 17 juni 2019 sedan spelinspektionen upptäckt allvarliga brister gällande arbetet mot penningtvätt och spelansvar"
            bild="/images/mininja.png"
            publicerad="29 januari 2020"
            link="ninjacasino-aterkomst"
            alttxt="ninjacasinologo"
          />
        </BloggSection>
      </section>
    </Container>
  );
};

export default NewsSection;
