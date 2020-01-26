import React, { useState } from 'react';
import { Container, Col, Button, Card, CardBody, Row, Collapse } from 'reactstrap';
import styled from "styled-components"
import spinnericon from "../../images/spinnericon.svg"
import minislot from "../../images/minislot.svg"


const StyledimgSpan = styled.span`
display:flex;
align-items:center;
margin:20px 0 ;
img{
    margin-right:10px;
    height:30px;
}
`

const BottomInfoNyaSlots = (props) => {
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);


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

                        <h2>Nya slots 2020 - Frågor och svar </h2>
                        <p>Här har vi har samlat några av svaren på några frågorna gällande <b>Nya Slots</b>. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                    </div>
                    <Row className="q-box" >
                        <Col xs="12" m="12" lg="6" sm="12" >

                            <Col className="single-q" >
                                <div   >
                                    <Button onClick={() => { setQ1(!q1) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >❓</span> <span >Vad är en bonusrunda?</span> <StyledSpan rotate={q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

                                    <Collapse isOpen={q1}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Bonusrundan är ett läge i spelet som aktiveras på olika sätt. Oftast så brukar det vara minst tre unika symboler, även kända som scatters som aktiverar bonusläget under en spelrunda. Oftast får man x antal gratisspins och någon sorts av extra funktion som t.ex. multiplikator eller låsta wilds.</p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div   >
                                    <Button onClick={() => { setQ2(!q2) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >✨</span>
                                        <span >Vad är RTP?</span><StyledSpan rotate={q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q2}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>RTP (Revenue to player) förenklat på svenska vinstutdelning till spelaren. Det är hur mycket av insatsen spelaren är beräknad på att få tillbaka på videoslotten. En RTP på exempelvis 94% betyder att sloten ger tillbaka 94kr per satsad hundralapp. RTP är dock beräknat på flera tusen spins så man ska inte stirra sig blind på det. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>



                        </Col>

                        <Col xs="12" m="12" lg="6" sm="12"  >

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ3(!q3) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >💰</span>
                                        <span >Är RTP viktigt när man väljer slot?</span> <StyledSpan rotate={q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q3}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div ><p>Det ger spelaren en överblick på hur mycket videoslotten ger tillbaka. Men vi på Casinoniz tycker inte RTP är super viktigt eftersom det baseras på flera tusen spins. RTP ger däremot en insikt i att slotar är skapade för husets fördel. </p></div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>

                            <Col className="single-q">
                                <div  >
                                    <Button onClick={() => { setQ4(!q4) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" >⭐</span>
                                        <span >Tips för att hitta en bra slot?</span>
                                        <StyledSpan rotate={q4 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


                                    <Collapse isOpen={q4}>
                                        <Card>
                                            <CardBody ><div className="msg" xs="6"  ><div >Vi tycker att man borde välja en slot som har bonusrundor. Bonusrundorna ska ha en multiplikator utan maxtak, retriggers och låsta wilds. Har en slot det så tycker vi att den är bra! Det är dock upp till varje person att hitta en slot som passar. Alla videoslots har egna teman och bonusfunktioner.</div>
                                            </div></CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>


                        </Col>
                    </Row>
                </div>


                <div className="info-bottom-box-img">
                    <h2>Nya videoslots 2020  </h2>
                    <div>
                        <p>Här har vi har samlat lite allmän information om <b>Nya Slots</b> och lite blandade frågor. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, svenska casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>
                        <img src={spinnericon} alt="freespinsicon" />
                    </div>
                </div>

                <div className="info-bottom-box">
                    <h3>Freespins och bonusrundor på nya slots</h3>
                    <p>Under den senaste tiden så är det väldigt blandade bonusrundor på nya slots. Oftast när man får en bonusrunda på en slot så är det freespins med multiplikator som gäller. Det finns även bonusar där du öppnar upp olika nivåer och extra funktioner under bonusrundan.</p>

                    <p>Det vi tycker är väldigt underhållande under bonusrundorna är följande:</p>
                    <StyledimgSpan><img src={minislot} alt="nyaslots2020icon" />Bonusrundor som erbjuder retriggers på x antal freespins .</StyledimgSpan>

                    <StyledimgSpan><img src={minislot} alt="nyaslots2020icon" />Bonusrundor som har en multiplikator med ett obegränsat tak.</StyledimgSpan>
                    <StyledimgSpan><img src={minislot} alt="nyaslots2020icon" />Bonusrundor där man kan låsa upp funktioner.</StyledimgSpan>
                    <StyledimgSpan><img src={minislot} alt="nyaslots2020icon" />Bäst av allt är bonusrundor som har låsta wilds och en väldigt hög multiplikator.</StyledimgSpan>

                </div>


                <div className="info-bottom-box">

                    <h3>Bästa taktiken för att vinna på slots?</h3>

                    <p>Det finns ingen taktik när du spelar slots. Spel är en sort av underhållning och man ska alltid vara beredd på att förlora sin insats. När du spelar slots ska du spela för att du tycker det är kul och alla eventuella vinster är bara en bonus.  </p>


                </div>



                <div className="info-bottom-box">

                    <h3>Slots - Bästa videoslots 2020?</h3>

                    <p>Listan kommer att uppdateras med jämna mellanrum. Vi letar efter slots som vi tycker är underhållande. Att välja den bästa videoslotten för 2020 är lite svårt just nu. Vi kan nog göra en <b>Top 10 slots 2020</b> i slutet på året någongång. </p>

                    <h3>Megaways slot</h3>
                    <p>Den senaste tiden har vi sätt väldigt många slots som har så kallade Megaways linjer. Detta är när en videoslot har flera tusen vinstlinjer. Som t.ex. <b>Piggy Riches Megaways</b>, <b>Montezuma Megaways</b>, dessa slottar har 117 649 vinstlinjer. Med megaways har du större chans att vinna under en spelrunda jämfört med slots som har 10-vinstlinjer.</p>

                    <p>Att hitta de bästa slotsen är svårt och alla spelare tycker om olika. Varje slot har sitt egna tema och bonusrundorna skiljer en hel del från slot till slot.</p>


                </div>

                <div className="info-bottom-box">

                    <h3>Vad är RTP?</h3>

                    <p><b>RTP</b> <i>(Revenue to player)</i> ,förenklat på svenska <i>vinstutdelning till spelaren</i>. Varje videoslot har en inställd RTP. Generellt så brukar den ligga på mellan <i>90-98%</i> på slots.</p>

                    <p>Om vi tar ett exempel där en slot har 95% i RTP, då ska spelaren få tillbaka 95% av insatserna satsade. Satsar du 100 kronor så ska du teoretiskt få tillbaka 95 kronor. Man ska inte stirra sig blind på höga RTP-slots eftersom RTP är beräknad på flera tusen spins.</p>

                    <p>Finns säkert någon spelare som känner igen sig. Ibland så finns det spelomgångar då automaterna ger väldigt mycket tillbaka och så finns det spelomgånger som inte ger något alls under en lång period. Då är det RTP som sänks och höjs under perioderna för att hålla sig inom procentramen. </p>




                </div>

                <div className="info-bottom-box">

                    <h3>Bonusrundor</h3>

                    <p>När man spelar på slots så brukar det nästan alltid finnas ett extra läge i spelet, läget är känt som <b>Bonus</b>. Bonusen aktiverar ett annat läge i videoslotten oftast grafiskt och funktionellt. Det finns väldigt olika bonusfunktioner på alla tusentals slots som finns ute just nu.</p>
                    <h3>Hur aktiveras en bonus?</h3>
                    <p>Det är väldigt olika från slot till slot. Men oftast så har varje slot en symbol som kallas för scatter. Scatter är en unik symbol som är ganska svår att få. För att komma in i bonusläget på videosloten så måste man oftast få minst tre stycken scatters under en spelrunda. Då aktiveras bonusen och bonusrundan låses upp.</p>

                    <h3>Hur brukar en bonus se ut?</h3>
                    <p>I dem flesta bonusrundorna så brukar man få freespins. Det är gratis snurr utan kostnad. Hur många freespins du får beror på slot. Det brukar oftast snurra ett hjul eller liknande som slumpar ut hur många freespins du får. Det brukar även finnas någon sorts av extra funktion under freespins som t.ex. multiplikator, låsta wilds, liten gubbe som lägger ut wilds m.m. När bonusrundan är slut så får du vinsten på ditt spelkonto. </p>

                    <h3>Vad är en multiplikator?</h3>
                    <p>Det är en precis som det låter. En funktion som multiplicerar din vinst. Har du en en multiplikator på 5x och du vinner 120kr. 120*5 = 600kr. Då vinner du 600kr istället för 120kr.</p>

                </div>


                <div className="info-bottom-box">

                    <h3>Listar ni alla nya slots 2020?</h3>

                    <p>Tyvärr så gör vi inte det, men vårt mål är att lista så många bra slots som möjligt. Vi listar endast slots som vi själva har provat och tycker är underhållande.  </p>


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


export default BottomInfoNyaSlots;
