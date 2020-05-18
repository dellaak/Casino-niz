import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const BottomInfoSwish = props => {
  return (
    <Container fluid={false}>
      <div className="bottom-container">
        <div className="info-bottom-box">
          <h2>Kan man få en casinobonus med liten insättning?</h2>
          <p>
            {' '}
            Ibland, Oftast brukar det vara minsta 100-200 kr i minsta insättning
            när man ska få en bonus. Det brukar variera från casino till casino.
            Så läs villkoren för respektive casino innan du tar emot en bonus.{' '}
          </p>

          <p>
            Hittar man ett casino som har väldigt generös välkomstbonus och
            tillåter minsta insättning för att ta del av välkomstbonusen så är
            det väldigt bra. Då kan du sätta in 50 kr och få bonusen på ditt
            konto. Det finns casinon som erbjuder insättningsbonus från 100
            procent upp till 500 procent i insättningsbonus.
          </p>
        </div>

        <div className="info-bottom-box">
          <h2>Minsta insättning casino?</h2>
          <p>
            {' '}
            Det minsta insättningsbeloppet brukar variera mellan 25-100 kr..{' '}
          </p>

          <p>
            Vilken betalmetod som har minst insättningsgräns är från casino till
            casino. Oftast så brukar det vara{' '}
            <Link to="/faktura-casino">casinon med faktura</Link> som erbjuder
            låga insättningsgränser. Eller så är det{' '}
            <Link to="/casino-swish">casinon med Swish</Link> eller{' '}
            <Link to="/casino-trustly">casinon med Trustly</Link>. Har man tur
            så kan man få in en fin liten vinst på sin insättning under 100 kr.
          </p>
        </div>

        <div className="info-bottom-box">
          <h3>Fördelen med en liten insättning på ett casino?</h3>
          <p>
            Har man spelat på ett ställe i flera månader eller år så kanske man
            vill prova på något nytt casino. Då är det perfekt att prova på nya
            casino med en insättning på under 100kr.{' '}
          </p>

          <p>
            Skulle man nu vinna något med sin minsta insättningen hos casinot,
            så är det ett perfekt tillfälle och se hur casinot fungerar med
            utbetalningar.
          </p>
        </div>

        <div className="info-bottom-box">
          <h3>18+ på spel</h3>
          <p>
            Är du under 18 år? För att få spela på onlinecasinon i Sverige så
            måste man vara över 18 år gammal. Är du under 18 år så måste vi
            tyvärr be dig att lämna vår hemsida nu!
          </p>
        </div>

        <div className="info-bottom-box">
          <h3>Spelproblem - Har jag det?</h3>
          <p>
            Ibland så kan man känna att man spelar lite för mycket och förlorar
            mer än vad man har råd med. Vi rekommenderar att så fort man inte
            kan kontrollera sitt spelande så ska man söka hjälp. Här får du
            några länkar som erbjuder hjälp.{' '}
          </p>
          <ul>
            <li>
              <a href="https://www.stodlinjen.se/#!/">Stödlinjen</a>
            </li>
            <li>
              <a href="https://spelberoende.se/">Spelberoendes Riksförbund</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default BottomInfoSwish;
