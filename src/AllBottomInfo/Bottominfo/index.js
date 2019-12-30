import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';

import { Link } from "react-router-dom"
import styled from "styled-components"
import "./style.scss";

const Bottominfo = (props) => {
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
    transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
    svg{
    display: block;
    height: 100%;
    width: 100%;
    }
  `

    return (
        <Container fluid={false} className="bottom-container">
            <div className="question-wrap">
                <div className="head-q">
                    <h2>Frågor och svar</h2>
                    <p>Här har vi har samlat några av svaren på de vanligaste frågorna. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                </div>
                <Row className="q-box" >
                    <Col xs="12" m="12" lg="6" sm="12" >

                        <Col className="single-q" >
                            <div   >
                                <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >☘</span> <span >Vad är en casinobonus?</span> <StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                <Collapse isOpen={q1}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p>Casinobonus även kallade välkomstbonusar är ett erbjudande casinot erbjuder spelaren. Den vanligaste casinobonusen är att man får ett visst antal procent i insättningsbonus. Casinoniz listar aktuella casinobonusar från svenska licensierade casinon. Tänk på att läsa villkoren och kolla upp eventuella omsättningskrav på bonusar</p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>

                        <Col className="single-q">
                            <div   >
                                <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >🎮 </span>
                                    <span >Bettingsidor för esportbetting CSGO?</span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                <Collapse isOpen={q2}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p>Casinoniz listar även bettingsidor för esportsbetting, där du kan spela på spel som CSGO, Dota2, OverWatch, LoL(Leauge of Legends) och fler! Navigera dig in på vår esportsektion för att se casinon som erbjuder esportbetting. </p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>

                        <Col className="single-q">
                            <div  >
                                <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >❓</span>
                                    <span >Betalar man skatt på svenska casinon?</span> <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                <Collapse isOpen={q3}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p>Nej, Om ett casino har svensk spellicens innebär det <i>helt skattefria vinster för alla spelare.</i>Spelar man på diverse casinon utan svensk spellicens så får man vara beredd på att skatta på sina vinster oavsett hur det såg ut innan den svenska spellicensen. </p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>


                        <Col className="single-q">
                            <div  >
                                <Button onClick={() => { setQ4(!q4) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >✅</span>
                                    <span >Svenska casinon med licens?</span>
                                    <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                <Collapse isOpen={q4}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div >Lagen trädde i kraft den 1/1 2019.
          Att spela på ett casino med svensk spellicens ger dig som spelare ett större konsumentskydd. Med konsumentskydd handlar det om<ul><li>säkrare transaktioner</li><li>lättare att införa spelgränser</li> <li>Smidigare att stänga av sig från all spel </li><li>Casinot måste förhålla sig till lagar och regler</li><li>Personuppgifter hanteras korrekt</li><li>Skattefria vinster</li></ul>  Vi listar endast casinon med svensk spellicens.</div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>

                    </Col>

                    <Col xs="12" m="12" lg="6" sm="12"  >

                        <Col className="single-q">
                            <div   >
                                <Button onClick={() => { setQ5(!q5) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >✨</span>
                                    <span >Minsta insättningen hos ett casino?</span>
                                    <StyledSpan rotate={q5 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                <Collapse isOpen={q5}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p>Det varierar beroende på casino. Hos vissa bolag som <Link to="/recension/snabbare">Snabbare</Link>, <Link to="/recension/Hajper">Hajper</Link> och <Link to="/recension/Speedycasino">SpeedyCasino</Link>  så är minsta insättningen 50kr. Vanligtvis brukar standarden vara minst 100kr för en insättning. Finns även casinon som <Link to="/recension/Storspelare">Storspelare</Link> där minsta insättningen är 25 SEK.</p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>


                        <Col className="single-q">
                            <div  >
                                <Button onClick={() => { setQ6(!q6) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >⭐</span>
                                    <span >Vilket casino är det bästa?</span><StyledSpan rotate={q6 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                <Collapse isOpen={q6}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p> Vi listar flera casinon som är bland de bästa i branschen. Varje casino har sin egna design och du kan gärna läsa våra recensioner. Det finns ett flertal casinon att välja mellan. Beroende på personlig smak så ska det nog finnas något för varje spelare.</p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>

                        <Col className="single-q">
                            <div   >
                                <Button onClick={() => { setQ7(!q7) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >↻ </span>
                                    <span >Omsättningsfria bonusar hos casinon? </span> <StyledSpan rotate={q7 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                <Collapse isOpen={q7}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p> Omsättningsfria bonusar är när casinon är generösa. Du får ett bonuserbjudande av ett casino, det kan vara insättningsbonus eller freespins. Allt som
                                du vinner under bonusen får du behålla och behöver inte omsätta
                                något alls. Det vill säga att om du vinner 2000kr så kan du ta ut
          vinsten utan att behöva spela mer.</p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>


                        <Col className="single-q">
                            <div   >
                                <Button onClick={() => { setQ8(!q8) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-labelledby="icon" >💰</span>
                                    <span >Spela casino på faktura?</span> <StyledSpan rotate={q8 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                <Collapse isOpen={q8}>
                                    <Card>
                                        <CardBody ><div className="msg" xs="6"  ><div ><p> Att spela casino på faktura är väldigt smidigt och enkelt. Med dagens moderna teknik så går det väldigt snabbt och enkelt. Med några  få knapptryck så har du fått in pengar på ditt spelkonto. Tänk på att aldrig spela för mer än vad du har råd med. Navigera dig runt till vår <Link to="/faktura-casino">faktura sektion </Link> för att hitta casinon som erbjuder insättning med faktura. </p></div>
                                        </div></CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>



            <div className="info-bottom-box">
                <h3>18+ på spel</h3>
                <p>
                    Är du under 18 år? För att få spela på onlinecasinon i Sverige så måste man vara över 18 år gammal. Är du under 18 år så måste vi tyvärr be dig att lämna vår hemsida nu!

          </p>
            </div>

            <div className="info-bottom-box">
                <h3>Freespins utan insättning</h3>
                <p>
                    Att få freespins för att prova på att spela slotar är ett stort plus för spelaren. Spelaren får prova på att spela på olika casinon för att hitta det spel eller casino som faller en i smaken. När lagen om svensk spellicens trädde i kraft den 1 januari 2019 så försvann de flesta freespins utan insättningar från de flesta casinon.
          </p>
            </div>



            <div className="info-bottom-box">
                <h3>Spela på casino utan svensk spellicens</h3>
                <p>Det är inte olagligt för dig som spelare att spela på ett casino utan svenskt spellicens. Man har mindre skydd som spelare och på diverse casinon utan svenskt spellicens när det gäller spel/insättningsgränser.
               Om du som spelare väljer att spela på ett casino utan svensk spellicens så får du vara beredd på att skatta 30% på din vinst. Det finns även en risk att det blir förbjudet för svenska banker att tillåta transaktioner mellan svenska spelare och casino utan svensk spellicens.
          </p>
            </div>


            <div className="info-bottom-box">
                <h3>Vad är ett omsättningskrav?</h3>
                <p>
                    Ibland så är det omsättningskrav på bonusar. Om du får 100kr extra i
                    bonus av casinot att spela för och casinot sätter ett
                    omsättningskrav på 35x. Då måste du omsätta 100kr som du fick av
                    casinot. 100kr * 35 = 3500kr. Du måste alltså ha spelat för minst
                    3500kr och allt över 3500kr kan du ta ut i vinst.
          </p>
            </div>




            <div className="info-bottom-box">
                <h3>Insättningsbonus</h3>
                <p>
                    insättningsbonusar är när ett casino erbjuder att plussa på ett visst antal procent på din insättning.
<i className="example">Exempel: Om du väljer att sätta in 100kr att spel för och casinot erbjuder insättningsbonus på 100%, då får du 100kr i casinobonus och totalt 200kr att spela för.</i>
                </p>
            </div>

            <div className="info-bottom-box">
                <h3>Casinobonusar svensk spellicens</h3>
                <p>
                    Lagen anger att ett online casino endast får erbjuda en enda insättningsbonus per ny spelare.
          </p>
            </div>

            <div className="info-bottom-box">
                <h3>Casinobonusar i iPhone/iPad</h3>
                <p>
                    De flesta casinon är mobilanpassade så det finns inga hinder att ta emot en casinobonus med mobilen eller paddan.
          </p>
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


        </Container>
    );
}


export default Bottominfo;
