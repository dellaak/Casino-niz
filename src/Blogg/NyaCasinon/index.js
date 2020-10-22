import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Casinon from "../../Casinon/index";
import { Helmet } from "react-helmet";
import RandomCasinos from "../../RandomCasinos";
import BottomInfoNyaCasino from "../../AllBottomInfo/BottomInfoNyaCasino";
// import "./style.scss"

const NyaCasino = (props) => {
  const topArr = ["luckyvegas", "spela", "yoyocasino", "jallacasino", "klirr"];
  const [topCasinon, setTopList] = useState([]);

  useEffect(() => {
    let list = [...props.list.Casinon];
    let top = [];

    list.filter((i) => {
      i.title = i.title.toLowerCase();
      if (topArr.includes(i.title)) {
        top.push(i);
      }
      return list;
    });

    top.sort(function (a, b) {
      return topArr.indexOf(a.title) - topArr.indexOf(b.title);
    });

    return setTopList(top);
  }, [props.list.Casinon]);

  const StyledWrapper = styled(Container)`
    display: flex;
    background-color: white;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0 auto;
  `;

  const StyledDiv = styled.div`
    padding: 0 20px;
    border-radius: 9px;
    flex-direction: column;
    margin: 40px 0;
    margin-bottom: 0px;
    position: relative;
    border: 1px solid lightgray;
    h2 {
      margin-top: 30px;
    }
  `;

  return (
    <StyledWrapper>
      <Helmet>
        <title>
          Nya Casino 2020 (På riktigt) » Alla med svensk licens | Casinoniz
        </title>
        <link rel="canonical" href="https://www.casinoniz.se/nya-casino-2020" />
        <meta
          name="description"
          content="Ny lista för nya casino 2020 ✅ ➼ Här hittar du nya lanserade casinon från 2020. Alla casinon är nya svenska casinon med licens. Vi kommer att uppdatera listan löpande. Så håll utkik!  "
        />
        <meta
          name="keywords"
          content="Casino, Casinobonusar, välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, bästa casinon,nya,publicerade,licenserade,svenska,casinon, bästa casinon 2020, top5 , top10 casino"
        />
        <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
          "@type": "Question",
          "name": "❓ Tänka på när man väljer nytt casino 2020?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Det släpps nya casinon till och från. Det viktigaste man ska tänka på när man väljer ett nytt casino är att casinot har svensk spellicens. Det ger dig som spelare en säkrare spelupplevelse och ett bättre skydd. Alla eventuella vinster är även skattefria."
          }
        }, {
          "@type": "Question",
           "name": "✨ Listar Casinoniz alla nya casinon 2020?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Ja, Casinoniz.se kommer endast lista alla nya casinon som lanseras eller registreras under 2020 med svensk spellicens."
          }
        }, {
          "@type": "Question",
          "name": "💰 Nyttja casino bonus som erbjuds av det nya casinot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Om du inte har nyttjat ett erbjudande från ett onlinecasino med samma spellicens. Då kan du ta emot eventuell välkomstbonus från det nya casinot."
          }
        }, {
          "@type": "Question",
          "name": "⭐ Vad förväntas man av dem nya casinon 2020?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eftersom konkurrensen är så tuff inom casinobranschen så förväntas dem nya casinon ha ett väldigt snyggt tema, bra säkerhet, grym support med livechatt, snabba insättningar samt uttag och ett bra spelutbud. Har casinot även ett grymt välkomsterbjudanden är det ännu bättre."
          }
        }]
      }
      `}</script>
      </Helmet>

      <h1 className="banners">Nya Casino 2020 </h1>
      <small> Publicerad: 14 Januari 2020</small>
      <p>Nya casino 2020</p>
      <p>
        Vi listar nya casinon för detta året. Denna sektionen kommer uppdateras
        kontinuerligt så håll koll på denna sidan. Vi på Casinoniz.se tror att
        detta året kommer bjuda oss på nya spännande casinon med väldigt
        spännande teman. Senaste tiden så har casinon satsat väldigt hårt på
        sina teman.{" "}
      </p>

      <p>
        Det tycker vi är bra, vilket ger spelaren en helt ny spelupplevelse. Vi
        kommer endast lista nya casinon här.
      </p>

      <StyledDiv>
        <h2>Nytt casino 2020 - Klirr</h2>
        {topCasinon.length > 0 ? (
          <div>
            <p>
              Klirr är ett nytt Pay N Play casino som lanserades under oktober.
              Casinot har över 600 slots och även Live Casino. Klirr har en
              väldigt snygg sida och sticker ut från andra casinon. Just nu får
              nya spelare 100 omsättningsfria kronor när de gör en insättning på
              minst 200kr. Läs igenom regler och villkor.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="casino-wrap">
          {topCasinon.slice(4, 5).map((casino) => (
            <Casinon
              key={casino.id + casino.title}
              casino={casino}
              isBlocked={props.isBlocked}
            />
          ))}
        </div>
      </StyledDiv>

      <StyledDiv>
        <h2>Nytt casino 2020- Yoyocasino</h2>
        {topCasinon.length > 0 ? (
          <div>
            <p>
              YoyoCasino är ett nytt casino för svenska spelare. Casinot har en
              väldigt snygg och användarvänlig sida med över 1000 casinospel.
              Ett grymt casino för alla som tycker om att spela på slots.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="casino-wrap">
          {topCasinon.slice(2, 3).map((casino) => (
            <Casinon
              key={casino.id + casino.title}
              casino={casino}
              isBlocked={props.isBlocked}
            />
          ))}
        </div>
      </StyledDiv>

      <StyledDiv>
        <h2>Nytt casino 2020 - JallaCasino</h2>
        {topCasinon.length > 0 ? (
          <div>
            <p>
              JallaCasino är ett nytt casino på den svenska marknaden. Med deras
              extremt snygga design så tror vi att dem kommer växa sig stora på
              marknaden. Erbjuder över 1200 casinospel. Du kan spela på Slots,
              Live Casino och bordsspel hos JallaCasino.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="casino-wrap">
          {topCasinon.slice(3, 4).map((casino) => (
            <Casinon
              key={casino.id + casino.title}
              casino={casino}
              isBlocked={props.isBlocked}
            />
          ))}
        </div>
      </StyledDiv>

      <StyledDiv>
        <h2>Nytt casino 2020- LuckyVegas</h2>
        {topCasinon.length > 0 ? (
          <div>
            <p>
              {" "}
              Bolaget som står bakom detta nya casinot är SkillOnNet som står
              bakom populära{" "}
              <Link to={{ pathname: `/recension/playojo`, match: `playojo` }}>
                PlayOJO
              </Link>
              . Casinot erbjuder en Las Vegas känsla på sin sida. LuckyVegas har
              svensk spellicens vilket innebär att alla vinster är skattefria.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="casino-wrap">
          {topCasinon.slice(0, 1).map((casino) => (
            <Casinon
              key={casino.id + casino.title}
              casino={casino}
              isBlocked={props.isBlocked}
            />
          ))}
        </div>
      </StyledDiv>

      <StyledDiv>
        <h2>Nytt casino 2020- Spela.com</h2>
        {topCasinon.length > 0 ? (
          <div>
            <p>
              Genesis Global Limited erbjuder nu officiellt registrering av
              svenska spelare på Spela.com. Casinot erbjuder ett väldigt stort
              spelutbud på över 1,200+ spel. Spela har svensk spellicens vilket
              innebär att alla vinster är skattefria.
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="casino-wrap">
          {topCasinon.slice(1, 2).map((casino) => (
            <Casinon
              key={casino.id + casino.title}
              casino={casino}
              isBlocked={props.isBlocked}
            />
          ))}
        </div>
      </StyledDiv>

      <RandomCasinos list={[...props.list.Casinon]} />

      <BottomInfoNyaCasino />
      <p className="update-text">Senast uppdaterad: 23 mars 2020</p>
    </StyledWrapper>
  );
};

export default NyaCasino;
