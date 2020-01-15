import React from 'react';
import { Container } from 'reactstrap';

const BottomInfoTrustly = (props) => {



    return (
        <Container fluid={false}>
            <div className="bottom-container">

                <div className="info-bottom-box">
                    <h2>Trustly Casino- Frågor och svar </h2>
                    <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande betaltjänsten Trustly i Casino. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>


                </div>


                <div className="info-bottom-box">
                    <h3>Vad är Trustly?</h3>
                    <p>Bolaget bakom Trustly är ett svenskt bolag som grundades 2008. Företaget erbjuder betalningslösningar för e-handelsbranschen. </p>
                    <p>
                        Trustly är en väldigt säker betalmetod där man betalar direkt från sitt bankkonto. Överföringen går över en avancerad krypteringsteknik och är licensierade av Finansinspektionen. Trustly är en betalförmedlare mellan banken och casinot.  </p>



                    <p>Trustly är en extremt populär betalmetod hos casinon. Eftersom Trustly är gratis att använda för privatpersoner.</p>

                    <p>Fler fördelar med Trustly</p>
                    <ul>
                        <li>Betalning går väldigt snabbt</li>
                        <li>Tjänsten är gratis för privatpersoner. Det är företagen som betalar en avgift</li>
                        <li>Man kan göra ett uttag via Trustly där du får pengarna på kontot inom 24 timmar, oftast inom 15 minuter!</li>
                        <li>Trustly's tjänst är aktiv dygnet runt alla dagar </li>
                        <li>Väldigt användarvänligt - Godkänner via mobilt bankid eller säkerhetsdosa</li>

                    </ul>
                </div>

                <div className="info-bottom-box">
                    <h3>Hur gör jag en insättning på ett casino med Trustly?</h3>
                    <p>
                        För att kunna göra en insättning med Trustly så krävs det ett bankid eller en säkerhetsdosa. </p>
                    <ol>
                        <li>Du klickar på insättningar på ett casino </li>
                        <li>Du väljer Trustly som betalmetod </li>
                        <li>Du skriver in totala beloppet du vill sätta in </li>
                        <li>Du väljer vilket bankkonto du vill dra pengar ifrån, eventuellt skriver du in ditt personnummer beroende på casino</li>
                        <li>Du går sedan in på ditt Mobila BankId eller säkerhetsdosa där du godkänner betalningen, Klart!</li>
                    </ol>

                </div>



                <div className="info-bottom-box">
                    <h3>Casinobonus med Trustly </h3>
                    <p>
                        Insättningar på casino med Trustly är alltid berättigade till bonusen. (oftast så är inte insättningar med exempelvis Skrill & Neteller det.)</p>
                    <p>
                        Läs alltid villkoren på varje casino bonus. Villkoren är det som bestämmer hur bonusen får omsättas, hur mycket man kan ta ut vid eventuella vinster med bonuspengar, Omsättningskrav, Minsta insättning för att tillhandahålla bonusen m.m.
                    </p>
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


export default BottomInfoTrustly;
