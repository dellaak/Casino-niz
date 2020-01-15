import React from 'react';
import { Container } from 'reactstrap';
import { Link } from "react-router-dom";


const BottomInfoSwish = (props) => {


    return (
        <Container fluid={false}>
            <div className="bottom-container">

                <div className="info-bottom-box">
                    <h2>Swish Casino - Frågor och svar </h2>
                    <p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande Casino Swish. Har du fler frågar kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder esportsbetting, casino med faktura och odds. Alla casinon som vi listar har svensk spellicens!  </p>


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
