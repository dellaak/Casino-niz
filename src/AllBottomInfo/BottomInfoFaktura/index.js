import React, { useState } from 'react';
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from "styled-components"
import env from "../../images/env.svg"

const Bottominfo = (props) => {
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
                        <h2>Casinon faktura - Frågor och svar </h2>
                        <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande insättning med faktura. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                    </div>
                    <Row className="q-box" >
                        <Col xs="12" m="12" lg="6" sm="12" >

                            <Col className="single-q" >
                                <div  >
                                    <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >💰</span><span > Uttag när man spelar på casino faktura?</span> <StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>
                                    <Collapse isOpen={q1}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p> När man spelar hos ett casino på faktura så är det inga problem att ta ut uttagen när man vill det. Läs igenom villkoren för respektive tjänst du väljer att använda. Tänk på att aldrig spela för mer än du har råd med!</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span><span >Hur gör jag en insättning med fakturametoden Zimpler?</span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q2}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p>
                                                Zimpler är ett svensk bolag som grundades 2012. Sedan dess har dem vuxit explosionsartat. I skrivandets stund så har Zimpler över 112 000 användare. Zimpler är väldigt enkelt att använda. För att använda Zimpler så gör du följande:
         </p>
                                                <ul>
                                                    <li>Välj Zimpler som betalmetod</li>
                                                    <li>Skriv in ditt telefonnummer</li>{" "}
                                                    <li>Zimpler skickar tillbaka en unik kod </li>
                                                    <li>Färdigt!</li>

                                                </ul>
                                            </div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐ </span><span >Hur många fakturatjänser finns det?</span>  <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q3}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p>Just nu finns det tre stycken tjänster som casinon kan välja mellan. Oftast brukar det vara Zimpler dem använder för faktura. Kommer det fler tjänser så kommer Casinoniz att lista dem också!. De tre tjänsterna som erbjuds just nu är Zimpler, Siru Mobile och SMS-Voucher. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                        </Col>

                        <Col xs="12" m="12" lg="6" sm="12"  >

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ4(!q4) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span><span >
                                        Är det svårt och göra insättningar på casino med faktura? </span> <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q4}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div > Att spela casino på faktura är väldigt smidigt och enkelt. Med några få knapptryck så har du fått in pengar på ditt spelkonto. Du måste ha tillgång till en mobiltelefon. Tänk på att aldrig spela för mer än vad du har råd med.</div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>



                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ5(!q5) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✅</span> <span >Kan jag spela på casino med fakturatjänsten Klarna?</span><StyledSpan rotate={q5 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q5}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div ><p>Klarna är ett svenskt bolag som grundades 2005 och är nog Sveriges bästa och mest kända betalmetod. När man ser att man kan använda Klarna på ett casino så känner man sig väldigt trygg med det. Klarna erbjuder just nu insättningar på casinon men inte faktura. Börjar klarna erbjuda faktura på casino så kommer vi att uppdatera er med det. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ6(!q6) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✨</span><span >Betalar jag skatt när jag spelar casino på faktura?</span> <StyledSpan rotate={q6 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q6}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6" ><div >   <p>
                                                Om ett casino har svensk spellicens innebär det <i>helt skattefria vinster för alla spelare.</i> Även när man spelar på faktura. Spelar man på diverse casinon utan svensk spellicens på faktura så får man vara beredd på att skatta på sina vinster oavsett hur det såg ut innan den svenska spellicensen.
          </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                        </Col>
                    </Row>
                </div>




                <div className="info-bottom-box-img">
                    <h2>Casino Faktura</h2>
                    <div>
                        <div className="faktura-info">
                            <p >
                                <b>Casino med faktura</b> är ett väldigt smidigt och enkelt sätt att sätta in pengar på ett casino. Insättningarna går väldigt smidigt till och det är en väldigt säker betalmetod. Allt som krävs är en mobiltelefon.
                    </p>

                            <p>Ibland kan man vilja sätta sina egna spelgränser som endast du själv har koll på. Då kan man sätta en gräns hos bolaget som erbjuder insättning med faktura. Du kontaktar bolaget och ber dem sätta en gräns på X antal kronor. Detta är ett bra sätt att hålla koll på sitt spelande och spela ansvarsfullt. </p>

                            <h3>Faktura hos Svenska casinon</h3>
                            <p>Det finns väldigt många online casinon idag och vi väljer att endast lista svenska casinon med svensk spellicens. När man väljer att spela på faktura så vill man såklart att faktura aktören är en seriös aktör på marknaden. Seriösa aktörer får man på svenska casinon eftersom varje faktura tjänst som ska implementeras hos casinot måste godkännas av svenska myndigheter.</p>
                        </div>
                        <img src={env} alt="swishcasinoicon" />
                    </div>
                </div>




                <div className="info-bottom-box">
                    <h3>Fördelar med casino faktura?</h3>
                    <p>Casino på faktura är en väldigt bra betallösning för enskilde personen. Att betala med faktura är en säker insättningsmetod och du kan känna dig trygg. Oftast går det väldigt snabbt att spela med faktura på casino.
       </p>
                    <ul>
                        <li>Alla fakturatjänster som finns tillgängliga på sidor med svensk spellicens måste godkännas av svenska myndigheter. </li>
                        <li>Du har god koll på hur mycket du har förbrukat på onlincasinon i slutet av månaden. </li>
                        <li>Du har tid på dig att betala din faktura. Du väljer själv när du vill betala fakturan. </li>

                    </ul>

                </div>

                <div className="info-bottom-box">
                    <h3>Faktura casino - risker med casino på faktura?</h3>
                    <p>
                        När man spelar casino på faktura så måste man verkligen tänka på ifall man verkligen har råd med att spela casino på faktura. Eftersom det är en faktura tjänst så kan det tillkomma avgifter och räntor när du ska betala fakturan. Du betalar fakturan i efterhand så man måste verkligen hålla koll på eventuella räntor och kostnader som varje fakturametod har.
          </p>

                    <h3>Faktura och Casino bonusar</h3>
                    <p>När man har hittat en casino bonus som passar och vill utnyttja erbjudandet så måste man ta reda på villkor först. Oftast så får man inte ta del av casino bonusen ifall man gör insättning på casino via faktura. Alla villkor om vilka betalningsmetoder som gäller och inte gäller kan man läsa om på respektive casino sida. </p>


                </div>

                <div className="info-bottom-box">
                    <h3>Casino faktura med SMS-Voucher</h3>
                    <p>
                        SMS-Voucher startade sin verksamhet i stockholm och växer. Att göra insättningar med SMS-voucher går väldigt smidigt och snabbt. För att spela casino med SMS-Voucher måste du ha tillgång till en mobiltelefon.
                        För att göra en insättning på ett online casino måste du:
          </p>
                    <ul>
                        <li>Klicka på insättning och välj SMS-Voucher som insättninsmetod </li>
                        <li>Skriv in ditt mobilnummer. Du får tillbaka en kod som du ska mata in för att fortsätta. </li>
                        <li>Du verifierar och godkänner insättningen med mobilt bankID och din insättning är klar. </li>

                    </ul>
                </div>


                <div className="info-bottom-box">
                    <h3>Svenska Casinon faktura?</h3>
                    <p>I dagens moderna samhälle och med mer teknisk kunskap så utvecklas insättningsmetoder och hela användarupplevelsen.
                    Att spela casino på svenska casinon med faktura är alltså inga problem. Tänk på att aldrig försöka vinna tillbaka eventuella förluster!
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

            </div>
        </Container>
    );
}


export default Bottominfo;
