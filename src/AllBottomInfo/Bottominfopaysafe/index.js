import React from 'react';
import { Container } from 'reactstrap';
import psicon from "../../images/cardgreen.svg"
import styled from "styled-components"


const StyledSpan = styled.span`
display:flex;
align-items:center;
margin:20px 0 ;
img{
    margin-right:10px;
    height:30px;
}
`

const BottomInfoPaysafe = (props) => {


    return (
        <Container fluid={false}>
            <div className="bottom-container">

                <div className="info-bottom-box">
                    <h2>Casino PaysafeCard </h2>
                    <p>Här har vi har samlat lite allmän information om PaysafeCard. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>


                </div>


                <div className="info-bottom-box">
                    <h3>Är PaysafeCard säkert?</h3>
                    <p>
                        Ja, Det är ett av de säkraste insättningsmetoderna du kan använda på ett online casino. Både för din personliga integritet samt ditt privatliv. Du hanterar ditt PaysafeCard precis som kontanter, fast du betalar online. </p>

                    <p>PaysafeCard ger dig en bra överblick om hur mycket du spelar för. Det är lite jobbigare att skriva in 16-siffrig kod varje gång man ska göra en insättning, men det är säkrare än att du skriver in dina personuppgifter online. Om vi tar ett exempel där ett casino råkar ut för en hackerattack, då kan casinot bli av med alla kunduppgifter dom har lagrat. Som t.ex. ditt namn och ditt kortnummer.</p>
                </div>

                <div className="info-bottom-box">
                    <h3>PaysafeCard hos online casino </h3>
                    <p>
                        PaysafeCard är en väldigt säker betallösning för online casino. Du köper ett kort med en 16-siffrig pinkod och matar in koden hos casinot där du vill göra en insättning.</p>

                    <p>Skulle du mot förmodan tappa bort ditt PaysafeCard så kan du alltid gå in på PaysafeCard webbsida eller app för att spärra koden. Förutom återförsäljare så kan du även köpa PaysafeCard online på deras sajt.</p>


                </div>

                <div className="info-bottom-box">
                    <h3>Allmänt om PaysafeCard</h3>
                    <p>Det kan vara lite läskigt att prova nya insättningsmetoder från början. Men när man väl har provat så kanske man verkligen tycker om det. Här kommer lite allmän information om PaysafeCard.</p>
                    <StyledSpan><img src={psicon} alt="paysafecard-casino" />Du behöver inte alltid skriva in 16-siffrig pinkod. Vill du så kan du använda dig utav tjänsten MyPaysafecard. Istället för att skriva in pinkod så loggar du in med namn och lösenord och betalar från ditt saldo.</StyledSpan>

                    <StyledSpan><img src={psicon} alt="paysafecard-casino" />Paysafecard har ett grymt lojalitetsprogram när du betalar med myPaysafeCard online. Du samlar poäng som du kan lösa ut mot grymma erbjudanden.</StyledSpan>
                    <StyledSpan><img src={psicon} alt="paysafecard-casino" />Paysafecard har en grym applikation för mobilen. Med appen så slipper du skriva in koden utan kan skanna koden direkt med en inbyggda scanner i appen.</StyledSpan>

                </div>


                <div className="info-bottom-box">
                    <h3>18+ på spel</h3>
                    <p>
                        Är du under 18 år? För att få spela på onlinecasinon i Sverige så måste man vara över 18 år gammal. Är du under 18 år så måste vi tyvärr be dig att lämna vår hemsida nu!</p>
                </div>


                <div className="info-bottom-box">
                    <h3>Spelproblem - Har jag det?</h3>
                    <p>
                        Ibland så kan man känna att man spelar lite för mycket och förlorar mer än vad man har råd med. Vi rekommenderar att så fort man inte kan kontrollera sitt spelande så ska man söka hjälp. Här får du några länkar som erbjuder hjälp.  </p>
                    <ul>
                        <li><a href="https://www.stodlinjen.se/#!/">Stödlinjen</a></li>
                        <li><a href="https://spelberoende.se/">Spelberoendes Riksförbund</a></li>
                    </ul>

                </div>

            </div>
        </Container>
    );
}


export default BottomInfoPaysafe;
