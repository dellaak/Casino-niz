import React, { useState } from 'react';
import { Container, Col, Button, Card, CardBody, Row, Collapse } from 'reactstrap';
import styled from "styled-components"
import { Link } from "react-router-dom";


const BottomInfoSwish = (props) => {
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

                        <h2>Swish Casino - Frågor och svar </h2>
                        <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande Casino Swish. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>

                    </div>
                    <Row className="q-box" >
                        <Col xs="12" m="12" lg="6" sm="12" >

                            <Col className="single-q" >
                                <div   >
                                    <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >📱</span> <span >Vad är Swish?</span> <StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q1}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Swish är resultatet av ett samarbete mellan sex av dem största bankerna i Sverige. Det är en mobilapplikation där man på några få sekunder gör en betalning online eller skickar pengar mellan personer. Just nu är det över 7 miljoner svenskar som är anslutna till Swish.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span>
                                        <span >Hur använder man Swish på casino?</span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q2}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>För att använda Swish på ett online casino så väljer du Swish som betalningsmetod. Du skriver in casinots nummer i Swish appen eller scannar QR-koden. Sedan skriver du in beloppet du vill sätta in. Du godkänner överföring med ditt bankid och så är det klart! </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✨</span>
                                        <span >Krävs det bankid för att använda Swish?</span> <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q3}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Ja, det krävs ett mobilt bankid för att göra insättningar med Swish. Det krävs dock inte ett bankid om du endast vill ta emot pengar via Swish. </p></div>
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
                                        <span >Är det säkert att använda Swish för spel i casino?</span>
                                        <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q4}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div >Ja, Swish är ett av dem säkraste insättningsmetoderna du kan använda på ett casino. För att kunna verifiera en betalning måste man mata in sin privata kod hos bankid som endast du har tillgång till.</div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ5(!q5) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✅</span>
                                        <span > Insättningar och uttag med Swish?</span>
                                        <StyledSpan rotate={q5 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q5}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Insättningarna går oftast väldigt snabbt med Swish på casino. Oftast inom någon minut! Att göra ett uttag med hjälp av Swish går dock inte men du kan ta ut vinsten via Trustly.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ6(!q6) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span>
                                        <span >Hur ansluter jag till Swish?</span><StyledSpan rotate={q6 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q6}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>För att ansluta dig till Swish måste du logga in på din bank. Navigera dig fram till mobila tjänser (Swish) och skriv in ditt mobilnummer. Ladda sedan ner Swish appen. Klart!</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>


                <div className="info-bottom-box">
                    <h3>Hur skaffar jag Swish för casino? Steg för steg.</h3>
                    <p>
                        För att kunna betala med swish på casino så måste tillgång till en smartphone och följa stegen nedanför. </p>
                    <ol>
                        <li>Du loggar in på din internet bank. Navigera dig fram till Swish och koppla ihop ditt bankkonto med ditt mobilnummer. </li>
                        <li>Ladda ner appen "Swish Betalning". </li>
                        <li>När du gjort följande steg ovanför så kan börja använda swish på casino </li>
                    </ol>

                </div>



                <div className="info-bottom-box">
                    <h3>Är swish på casino säkert?</h3>
                    <p>
                        Ja, Swish är lika säkert som användning av internetbanken och bank appen i din mobil. Ditt mobilnummer är kopplad till ditt bankkonto. Man kan endast ha ett mobilnummer kopplat till ett bankkonto. Varje betalning eller inloggning på Swish sker via e-legitimationen Mobilt BankId. Vi betalning visas mottagare. Vid inkommande betalningar syns också avsändaren.</p>
                </div>

                <div className="info-bottom-box">
                    <h3>Kan jag swisha när jag är utomlands?</h3>
                    <p>
                        Ja, Du kan swisha när du är utomlands. Det kan dock tillkoma viss kostnad för datortrafiken när du är utomlands .</p>
                </div>

                <div className="info-bottom-box">
                    <h3>Minsta insättningen på casino med Swish? </h3>
                    <p>
                        Minsta insättningen på ett casino kan vara så lågt som 10kr.  Men dem flesta casinon har en minsta insättning på 100kr. På vissa casinon med Swish så brukar det vara 50kr. Vi har en lista med dem minsta insättningarna på ett casino. Här är länken till vår filtrerade lista: <Link to="/minsta-insattning-casino">Minsta insättning casino</Link></p>
                </div>

                <div className="info-bottom-box">
                    <h3>Hur sätter jag in pengar på ett casino med swish?</h3>

                    <ol>
                        <li>Du klickar på insättning på casinot.</li>
                        <li>Väljer swish som betalningsmetod.</li>
                        <li>Skriver in beloppet du vill spela med. </li>
                        <li>Gå in på appen " Swish" och där kommer du se summan och mottagaren</li>
                        <li>Godkänn med bankId och så är det klar! </li>
                    </ol>
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


export default BottomInfoSwish;
