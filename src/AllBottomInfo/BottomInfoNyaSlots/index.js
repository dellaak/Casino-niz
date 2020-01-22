import React from 'react';
import { Container } from 'reactstrap';
import spinnericon from "../../images/spinnericon.svg"
import styled from "styled-components"
import minislot from "../../images/minislot.svg"

const StyledSpan = styled.span`
display:flex;
align-items:center;
margin:20px 0 ;
img{
    margin-right:10px;
    height:30px;
}
`

const BottomInfoNyaSlots = (props) => {


    return (
        <Container fluid={false}>
            <div className="bottom-container">

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
                    <StyledSpan><img src={minislot} alt="nyaslots2020icon" />Bonusrundor som erbjuder retriggers på x antal freespins .</StyledSpan>

                    <StyledSpan><img src={minislot} alt="nyaslots2020icon" />Bonusrundor som har en multiplikator med ett obegränsat tak.</StyledSpan>
                    <StyledSpan><img src={minislot} alt="nyaslots2020icon" />Bonusrundor där man kan låsa upp funktioner.</StyledSpan>
                    <StyledSpan><img src={minislot} alt="nyaslots2020icon" />Bäst av allt är bonusrundor som har låsta wilds och en väldigt hög multiplikator.</StyledSpan>

                </div>


                <div className="info-bottom-box">

                    <h3>Bästa taktiken för att vinna på slots?</h3>

                    <p>Det finns ingen taktik när du spelar slots. Spel är en sort av underhållning och man ska alltid vara beredd på att förlora sin insats. När du spelar slots ska du spela för att du tycker det är kul och alla eventuella vinster är bara en bonus.  </p>


                </div>

                <div className="info-bottom-box">

                    <h3>Slots - Bästa videoslots 2020?</h3>

                    <p>Listan kommer att uppdateras med jämna mellanrum. Vi letar efter slots som vi tycker är underhållande. Att välja den bästa videoslotten för 2020 är lite svårt just nu. Vi kan nog göra en <b>Top 10 slots 2020</b> i slutet på året någongång. </p>

                    <p>Att hitta de bästa slotsen är svårt och alla spelare tycker om olika. Varje slot har sitt egna tema och bonusrundorna skiljer en hel del från slot till slot.</p>


                </div>

                <div className="info-bottom-box">

                    <h3>Vad är RTP?</h3>

                    <p><b>RTP</b> <i>(Revenue to player)</i> ,förenklat på svenska <i>vinstutdelning till spelaren</i>. Varje videoslot har en inställd RTP. Generellt så brukar den ligga på mellan <i>90-98%</i> på slots.</p>

                    <p>Om vi tar ett exempel där en slot har 95% i RTP, då ska spelaren få tillbaka 95% av insatserna satsade. Satsar du 100 kronor så ska du teoretiskt få tillbaka 95 kronor. Man ska inte stirra sig blind på höga RTP-slots eftersom RTP är beräknad på flera tusen spins.</p>

                    <p>Finns säkert någon spelare som känner igen sig. Ibland så finns det spelomgångar då automaterna ger väldigt mycket tillbaka och så finns det spelomgånger som inte ger något alls under en lång period. Då är det RTP som sänks och höjs under perioderna för att hålla sig inom procentramen. </p>




                </div>

                <div className="info-bottom-box">

                    <h3>Listar ni alla nya slots 2020?</h3>

                    <p>Tyvärr så gör vi inte det,men vårt mål är att lista så många bra slots som möjligt. Vi listar endast slots som vi själva har provat och tycker är underhållande. </p>


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
