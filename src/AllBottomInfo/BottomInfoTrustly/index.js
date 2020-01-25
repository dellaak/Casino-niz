import React, { useState } from 'react';
import { Container, Col, Button, Card, CardBody, Row, Collapse } from 'reactstrap';
import styled from "styled-components"

const BottomInfoTrustly = (props) => {
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);


    const StyledSpan = styled.span`
    display: inline-block;
    height: 24px;
    line-height: 24px;
    position: relative;
    width: 24px;
    position:absolute;
    right:0;
    transition: all 0.3s ease-out;
    transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
    svg{
    display: block;
    height: 100%;
    width: 100%;
    }
  `

    return (
        <Container fluid={false}>
            <div className="bottom-container">
                <div className="question-wrap">
                    <div className="head-q">

                        <h2>Trustly Casino- Frågor och svar </h2>
                        <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande betaltjänsten Trustly i Casino. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                    </div>
                    <Row className="q-box" >
                        <Col xs="12" m="12" lg="6" sm="12" >

                            <Col className="single-q" >
                                <div   >
                                    <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span> <span >Vad är Trustly?</span> <StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q1}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Trustly är en väldigt populär betalningsmetod online. Trustly grundades 2008 och är i grunden ett svenskt IT-företag. Trustly används runt om i världen och har över 9 miljoner betalningar i månaden.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span>
                                        <span >Hur använder man Trustly?</span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q2}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Med hjälp av en e-legitimation och Trustly så kan du göra en betalning på nolltid. Du väljer en bank där du har ett konto och pengar på. Sedan så verifierar du dig med din e-legitimation och så är betalning gjord. En väldigt smidig betaltjänst. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✨</span>
                                        <span >Krävs det bankid för att använda Trustly?</span> <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q3}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Nej, Du kan verifiera dig med hjälp av bankdosa eller mobilt bankid. Någon sorts av e-legitimation. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>



                        </Col>

                        <Col xs="12" m="12" lg="6" sm="12"  >

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ4(!q4) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span>
                                        <span >Är det säkert att använda Trustly för spel i casino?</span>
                                        <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q4}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div >Ja, det är säkert att använda Trustly som en insättningsmetod på casinon. Trustly har en europeisk licens för betaltjänstleverantörer och varje överföring sker under en avancerad krypterings teknik.</div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ5(!q5) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✅</span>
                                        <span >Insättningar och uttag med Trustly?</span>
                                        <StyledSpan rotate={q5 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q5}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>När man använder Trustly på ett casino så går insättningar samt uttag väldigt snabbt. Oftast inom några minuter!</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ6(!q6) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span>
                                        <span >Vilka svenska banker är anslutna till Trustly?</span><StyledSpan rotate={q6 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q6}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Just nu är de flesta stora banker anslutna till Trustly. I skrivandets stund är det <b>Swedbank, Nordea, Handelsbanken, Alla Sparbanker, SEB ,Danske Bank, Skandia, Länsförsäkringar, ICA, Forex</b> som är ansluta till Trustly.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>
                        </Col>
                    </Row>
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
