import React, { useState } from 'react';
import { Container, Col, Button, Card, CardBody, Row, Collapse } from 'reactstrap';
import styled from "styled-components"
import present from "../../images/bonusicon.svg"

const BottomInfoCasinobonus = (props) => {
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


    const StyledimgSpan = styled.span`
display:flex;
align-items:center;
margin:20px 0 ;
@media (max-width: 730px) {
      flex-direction: column;
    }
img{
    margin-right:10px;
    height:30px;
}
`

    return (
        <Container fluid={false}>
            <div className="bottom-container">
                <div className="question-wrap">
                    <div className="head-q">

                        <h2>Casino bonus - Frågor och svar </h2>
                        <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande casino bonusar hos casinon. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                    </div>
                    <Row className="q-box" >
                        <Col xs="12" m="12" lg="6" sm="12" >

                            <Col className="single-q" >
                                <div   >
                                    <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span> <span >Vad är en casino bonus?</span> <StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q1}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Casino bonus även känt som välkomstbonus är ett erbjudande från casinon till spelaren. Casinon väljer att ge spelaren lite extra kronor att spela för. Tänk på att casinots regler och villkor gäller för bonusen. Casino bonusen brukar oftast bestå av en insättningsbonus mellan 100% - 500%. Vissa även casinon som erbjuder freespins som en välkomst bonus. Du hittar alla casino bonusar på vår sida.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span>
                                        <span >Måste man ta emot en casino bonus?</span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q2}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Nej det måste man inte. Att ta emot en casino bonus är frivilligt. Tänk på att du endast kan ta emot en bonus hos ett enskilt casino bolag. Läs igenom regler och villkor för varje bonus. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✨</span>
                                        <span >Casino bonus och omsättningskrav?</span> <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q3}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Oftast när man tar emot en casino bonus så brukar ett omsättningskrav gälla. Storleken på omsättningskravet varierar från casino. Omsättningskrav är ett krav där du som spelare måste spela för en viss summa innan du kan ta ut dina eventuella vinster. Du kan filtrera på omsättningskrav med vår filterfunktion. </p></div>
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
                                        <span >Skillnaden på cash spins och free spins?</span>
                                        <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q4}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div >Cash spins brukar vara omsättningsfria spins på videoslots. Freespins brukar oftast ha ett omsättningskrav. Läs igenom villkoren för cash spins eventuellt freespins hos casinot du väljer ta emot bonusen från. Där står det vad som gäller.</div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ5(!q5) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >🚫</span>
                                        <span >Casino bonusar och ogilitiga insättningsmetoder?</span>
                                        <StyledSpan rotate={q5 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q5}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>När man vill ta emot en casino bonus så får man tänka på vilken insättningsmetod man använder. Oftast så gäller inte PaysafeCard, Skrill eller Neteller som en insättningsmetod för att ta emot en casino bonus. Det står i villkoren för varje bonus vilka metoder som inte gäller. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ6(!q6) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✅</span>
                                        <span >Kan jag avbryta en aktiv casino bonus?</span><StyledSpan rotate={q6 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q6}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Hos dem flesta casinon kan du avbryta en pågående casino bonus. Kontakta supporten på casinot för att få hjälp med att avbryta casino bonusen. Ta även reda på vad som gäller när du avbryter bonusen.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>



                <div className="info-bottom-box">
                    <h3>Är det värt att ta emot en casino bonus?</h3>
                    <p>Det kan det vara. Vill man spela lite extra så är det alltid bra att ta emot en casino bonus. Det viktigtaste när man väljer en casino bonus är omsättningskraven och villkoren.  </p>
                    <p>Omsättningskrav och villkor varierar <b>kraftigt</b> mellan varje casino och casino bonus. Vissa casinon har väldigt höga omsättningskrav medans andra har väldigt låga omsättningskrav med generösa villkor.</p>


                    <p>Olika typer av casino bonusar</p>
                    <StyledimgSpan><img src={present} alt="casinobonus-icon" /> <b>Insättningsbonus</b> &nbsp;Lägger till extra kronor på din insättning med en viss procent. Oftast mellan 100-500 procent .</StyledimgSpan>
                    <StyledimgSpan><img src={present} alt="casinobonus-icon" /> <b>Freespins</b> &nbsp;Casinot ger dig gratis spins på utvalda slots oftast med omsättningskrav.</StyledimgSpan>

                    <StyledimgSpan><img src={present} alt="casinobonus-icon" /> <b>Cashspins</b> &nbsp;Casinot ger dig gratis spins på utvalda slots oftast utan omsättningskrav .</StyledimgSpan>


                </div>


                <div className="info-bottom-box">
                    <h3>Att tänka på när man väljer en casino bonus </h3>
                    <p>Det kan vara lockande att ta emot en casino bonus som erbjuder väldigt hög insättningsbonus eller x antal freespins. Med det finns flera viktiga saker att tänka på när du väljer din bonus</p>
                    <p>Casino bonusar - viktiga punkter</p>
                    <ul>
                        <li>Ibland så finns det ett vinsttak på freespins och bonusar. Så kolla vad som gäller vid vinster.</li>
                        <li>Lägsta insättningen för att ta emot en casino bonus och hur högt omsättningskrav som gäller .</li>
                        <li>Vilka insättningsmetoder som är giltiga och inte giltiga för att ta emot casino bonusen.</li>
                        <li>Hur många dagar bonusen gäller samt vilka spel som omfattas av omsättningskravet.</li>
                    </ul>

                    <p>Tänker man på ovanstående punkter så hjälper det dig att hitta en bra bonus samt slippa oväntade överraskningar. Det lättaste sättet att ta reda på vad som gäller är faktiskt att läsa villkoren och regler för respektive casino bonus.</p>
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


export default BottomInfoCasinobonus;
