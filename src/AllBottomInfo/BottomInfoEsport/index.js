import React, { useState } from 'react';
import "./style.scss";
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from "react-router-dom"
import styled from "styled-components"

const BottominfoEsport = (props) => {
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);
    const [q7, setQ7] = useState(false);
    const [q8, setQ8] = useState(false);


    const StyledSpan = styled.span`
    display: inline-block;
    height: 24px;
    line-height: 24px;
    position: relative;
    width: 24px;
    position:absolute;
    right:0;
    transition: all 0.3s ease-out;
    transform: ${props => (props.rotate ? `rotate(180deg)` : ``)};
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
                        <h2>Esportbetting - Frågor och svar </h2>
                        <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande esportbetting. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                    </div>
                    <Row className="q-box" >
                        <Col xs="12" m="12" lg="6" sm="12" >

                            <Col className="single-q" >
                                <div  >
                                    <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >🎮</span><span >Har ni CSGO Betting?
                    </span><StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q1}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div><p> Ja, Casinoniz listar bettingsidor där man kan betta på csgo. Vi. Csgo är ett av världens största och kändaste spel. Counter-strike har funnits i många olika versioner men det är Counter-Strike Global Offensive som har tagit esport världen med storm.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div >
                                    <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >🎮</span><span > Esportbetting - vilka spel kan jag oddsa på?
                    </span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q2}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p>Vi listar casinon som erbjuder dessa spel. Tänk på att det kan variera på varje casino.</p>
                                                <ul>
                                                    <li>CSGO Betting</li>
                                                    <li>DOTA2 Betting</li>
                                                    <li>League of Legends Betting</li>
                                                    <li>Overwatch Betting</li>
                                                    <li>Starcraft 2 Betting</li>
                                                    <li>Även andra spel som t.ex. heartstone. </li>
                                                </ul></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div >
                                    <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span><span>
                                        Kan man använda en bonus på esportbetting?</span>   <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q3}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p>Ja det kan man. Sportbonus erbjuds av vissa casinon. Casinoniz listar bonusar för sports och det är den bonusen som gäller även för esportbetting. Läs villkoren och kom ihåg att aldrig spela för mer än du har råd för! </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                            <Col className="single-q">
                                <div >
                                    <Button onClick={() => { setQ4(!q4) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span><span >
                                        Hur gammal måsta jag vara för att spela på esport?</span> <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q4}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div >Du måste enligt svensk lag vara minst 18 år gammal för att spela på ett onlinecasino samt sportsbetting online. Är du inte det så kan du inte spela på esportbetting eller onlinecasino.</div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                        </Col>

                        <Col xs="12" m="12" lg="6" sm="12"  >

                            <Col className="single-q">
                                <div >
                                    <Button onClick={() => { setQ5(!q5) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span><span >
                                        Vilket esportspel är det enklast att betta på?</span><StyledSpan rotate={q5 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q5}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p>Vi rekommenderar att om man ska spela på esportbetting,
                    borde man va något insatt i spelets regler samt vilket esportslag som gäller.Esportsbetting är precis som sportsbetting.</p>  </div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ6(!q6) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span><span > Spelet jag vill betta på finns inte?</span><StyledSpan rotate={q6 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q6}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p> Casinoniz listar esport spel där casinon har erbjudit esportbetting på diverse spel. Finns inte spelet som du vill spela på kan man fråga casinot ifall dem kan börja sätta odds på spelet som du önskar. Casinoniz tillhandahåller endast en jämförelsetjänst och sätter inga bonusar eller liknande.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ7(!q7) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✨</span><span > Esportbetting i mobilen eller paddan?</span><StyledSpan rotate={q7 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q7}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" >
                                                <div ><p> Dagens casinon är mobilanpassade, så att betta på esport i mobilen eller ipad är alltså inga problem. </p>
                                                </div>
                                            </div>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ8(!q8) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >💰</span><span >
                                        Esportbetting på faktura ?
                  </span> <StyledSpan rotate={q8 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>



                                    <Collapse isOpen={q8}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p> Esportbetting med faktura är möjligt via vissa casinon. Med några knapptryck så har du fått in pengar på ditt spelkonto. Tänk på att aldrig spela för mer än vad du har råd med. Navigera dig runt på vår sida för att hitta <Link to="/faktura-casino">casinon som har insättning med faktura</Link></p>    </div>
                                            </div>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                        </Col>
                    </Row>
                </div>



                <div className="info-bottom-box">
                    <h2>Counter-Strike Global Offensive</h2>
                    <div className="info-bottom-box">
                        <h3>CSGO Betting (Counter-Strike: Global Offensive)</h3>
                        <p>
                            Csgo är ett av världens bästa och kändaste spel. Counter-strike har
                            funnits i många olika versioner men det är Counter-Strike: Global
                            Offensive som har tagit esport världen med storm. CSGO betting bara
                            växer. Scenen får fler tittare och turneringar.
          </p>
                    </div>

                    <div className="info-bottom-box">
                        <h3>CSGO Betting med de bästa lagen</h3>
                        <p>
                            Top10 lagen just nu inom CS:GO (Enligt hltv) </p>
                        <ol>
                            <li>Team Liquid</li>
                            <li> Vitality</li>{" "}
                            <li>Ence </li>
                            <li>Astrails</li>
                            <li>NRG</li>
                            <li>Natus Vincere </li>
                            <li>G2 </li>
                            <li>FaZe </li>
                            <li>mousesports </li>
                            <li>Furia </li>
                        </ol>

                    </div>

                    <div className="info-bottom-box">
                        <h3>Kända CS:GO turneringar</h3>
                        <p>
                            Det finns otroligt många cs:go turneringar som man kan spela på. Men bästa turneringarna
            är  </p>

                        <ul>
                            <li> iBUYPOWER Masters</li>
                            <li> Katowice Major</li>{" "}
                            <li>World Electronic Sports Games </li>
                            <li>StarSeries & i-League CS:GO</li>
                            <li>IEM Season</li>
                            <li>DreamHack Masters </li>
                            <li>ESL One </li>
                        </ul>

                    </div>

                    <h2>Dota2</h2>
                    <div className="info-bottom-box">
                        <h3>Dota2 betting online</h3>
                        <p>
                            Dota2 är ett av världens största MOBA spel. Dota är ett spel där man
                            spelar 5v5. Man väljer sin hjälte och målet är att sammarbeta med
                            sina lagkamrater för att förstöra motståndarnas bas. Dota2 har några
                            av världens största turneringar med en av de största prispottarna.
                            Så för att oddsa på dota2 så oddsar du på det laget du tror kommer
                            vinna.
          </p>
                    </div>
                    <div className="info-bottom-box">
                        <h3>Kända Dota2 turneringar</h3>
                        <p>
                            Dota2 turneringar är kända för sina enorma prispottar! Med prispottar upp till $34,330,068(332 243 613 svenska kronor!!!).
                            Kollar man på final på t.ex. The Internationl, så garanterar vi att pulsen ökar lite.
                            Här lista vi de bästa turneringarna för Dota2.
           </p>
                        <ul>
                            <li>The International</li>
                            <li>EPICENTER Major</li>{" "}
                            <li> DreamLeague Seasons</li>
                            <li> World Electronic Sports Games</li>
                            <li>The Chongqing Major</li>
                            <li>ESL One </li>
                            <li>Starladder </li>
                        </ul>

                    </div>

                    <h3>Esport Betting</h3>
                    <p>
                        Esport betting är något som är relativt nytt. Esport scenen växer
                        väldigt fort och börjar att erkännas som en sport. Det är inte
                        konstigt att spelbolagen hänger på och låter oss spela på vårt
                        favoritlag inom esport.
          </p>
                </div>



                <div className="info-bottom-box">
                    <h3>Esport betting svensk spellicens</h3>
                    <p>
                        Lagen trädde i kraft den 1/1 2019. Att spela på ett casino med
                        svensk spellicens ger dig som spelare ett större konsumentskydd. Med
                        konsumentskydd handlar det om
          </p>{" "}
                    <ul>
                        <li>säkrare transaktioner</li>
                        <li>lättare att införa spelgränser</li>{" "}
                        <li>Smidigare att stänga av sig från all spel </li>
                        <li>Casinot måste förhålla sig till lagar och regler</li>
                        <li>Personuppgifter hanteras korrekt</li>
                        <li>Skattefria vinster</li>
                    </ul>
                </div>

                <div className="info-bottom-box">
                    <h3>Starcraft Betting</h3>
                    <p>
                        Starcraft är ett spel där det krävs extrem skicklighet och snabbhet
                        med fingrarna. Scenen är relativt stor.
          </p>
                </div>



                <div className="info-bottom-box">
                    <h3>LoL Betting - (League of Legends)</h3>
                    <p>
                        League of Legends är nog världens största MOBA spela. Spelet är likt
                        Dota2 men är väldigt nybörjarvänligt. League of Legends betting är i
                        princip samma som som dota2 betting. Du bettar på det lag som du
                        tror kommer att vinna matchen.
          </p>
                </div>

                <div className="info-bottom-box">
                    <h3>Fortnite Betting</h3>
                    <p>
                        Fortnite är just nu ett av världens kändaste spel. Med flera kända namn inom esportvärlden. Fornite är ett så kallat battle royal spel. Spelet har just nu fått en ny uppdatering på sin karta och har även lagt till några funktioner. Läs mer på Fornite hemsida.
          </p>
                </div>


                <div className="info-bottom-box">
                    <h3>Spelproblem - Har jag det?</h3>
                    <p>
                        Ibland så kan man känna att man spelar lite för mycket och förlorar
                        mer än vad man har råd med. Vi rekommenderar att så fort man inte
                        kan kontrollera sitt spelande så ska man söka hjälp. Här får du
            några länkar som erbjuder hjälp.{" "}
                    </p>
                    <ul>
                        <li>
                            <a href="https://www.stodlinjen.se/#!/">Stödlinjen</a>
                        </li>
                        <li>
                            <a href="https://spelberoende.se/">
                                Spelberoendes Riksförbund
              </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container >
    );
}


export default BottominfoEsport;
