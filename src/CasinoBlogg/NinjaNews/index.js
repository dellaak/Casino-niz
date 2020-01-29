import React from "react";
import styled from "styled-components"
import { Container } from "reactstrap"
import { Helmet } from "react-helmet";
require('typeface-muli')
// import "./style.scss"

const NinjaNews = (props) => {






    const StyledWrapper = styled(Container)`
    font-family: 'Muli', sans-serif;
    display:flex;
    background-color:white;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin:0 auto;
    margin-top:10px;
    margin-bottom:10px;

    h1{
        padding:20px 0 ;
    }
    img{
        max-width:100%;
    }
   
    .news-section{
        padding:10px;
        padding-top:20px;
        font-size:18px;
        
    }

    small{
        display:flex;
        flex-direction:column;
        padding:5px;
        font-size:14px;
        a{
            font-size:14px;
            margin:10px;
        }
    }
    
    `



    return (<StyledWrapper>
        <Helmet>
            <title>Kommer Ninja Casino Återlanseras? » Läs Casino Nyheter | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/ninjacasino-aterkomst" />
            <meta
                name="description"
                content="Kommer Ninja Casino att återlanseras? ✅ ➼ Kommer avtalet med plattformsleverantören Finnplay hjälpa eller kommer den juridiska processen gå hela vägen?. Oavsett vad ser det ut som en comeback för Ninja Casino snart. "
            />
            <meta
                name="keywords"
                content="ninja casino , ninjacaisno, återlansering, samarbete, svensk spellicens,tillbaka,2020,artikel, finnplay, globalgaming555,licens,tillbaka,senaste,nytt,casino,nytt"
            />

        </Helmet>



        <h1 >Ninja Casino återvänder till den Svenska spelmarknaden? </h1>
        <img src="/images/ninja-min.png" alt="ninjacasino" />
        <small> Publicerad: 29 Januari 2020</small>
        <section className="news-section">
            <h2>Ninja Casino kanske kommer tillbaka</h2>
            <p>Det kanske har märkts att det varit ganska tyst från det populära onlinecasinot Ninjacasino.se. Casinot blev av med sin svenska spellicens den 17 juni 2019 sedan spelinspektionen upptäckt allvarliga brister gällande arbetet mot penningtvätt och spelansvar. Ninjacasino.se drivs av bolaget Safenet som är ett dotterbolag åt  Global Gaming 555.</p>
            <p> Beslutet från spelinspektionen överklagades till förvaltningsrätten som avslog överklagandet. Global Gaming 555 överklagade beslutet från förvaltningsrätten till Kammarrätten som meddelade prövningstillstånd den 8 januari 2020. Att Kammarrätten beslutade prövningstillstånd innebär att fallet ska tas upp på nytt och det är Kammarrättens beslut som kommer att gälla. </p>

            <p>Förutom den juridiska processen så tecknade Global Gaming 555 ett avtal med plattformsleverantören Finnplay förra året. Finnplay har svensk spellicens via dotter bolaget Viral Interactive Limited, vilket innebär en eventuell återkomst för Ninjacasino.se med en spellicens från Viral Interactive Limited. </p>

            <p>Vi på Casinoniz.se tror att <a href="https://www.ninjacasino.se">Ninjacasino.se</a> kommer att öppna portarna igen under året eller början på nästa år. Det verkar iallafall som att Ninjacasino räknar med det ifall man går in på deras sida. Då möts man av en text där det står <b>COMING SOON</b>. Vad som egentligen händer med ninjacasino.se återstår att se.</p>


        </section>



        <small>Källor:   <a href="https://www.di.se/live/kammarratten-ger-provningstillstand-till-spelbolaget-global-gaming/">Di.se prövningstillstånd</a>
            <a href="https://www.di.se/live/global-gaming-tecknar-avtal-med-leverantor-med-svensk-spellicens/">DI.se Finnplay</a>
        </small>

    </StyledWrapper>)
}

export default NinjaNews