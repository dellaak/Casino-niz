import React, { useState } from "react";
import {
  Container,
  Col,
  Button,
  Card,
  CardBody,
  Row,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import spinnericon from "../../images/spinnericon.svg";
import minislot from "../../images/minislot.svg";

const StyledimgSpan = styled.span`
  display: flex;
  align-items: center;
  margin: 20px 0;
  img {
    margin-right: 10px;
    height: 30px;
  }
`;

const BottomInfoNyaCasino = (props) => {
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
    position: absolute;
    right: 0;
    transition: all 0.3s ease-out;
    transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
    svg {
      display: block;
      height: 100%;
      width: 100%;
    }
  `;

  return (
    <Container fluid={false}>
      <div className="bottom-container">
        <div className="question-wrap">
          <div className="head-q">
            <h2>Nya Casinon 2020 - Frågor och svar </h2>
            <p>
              Här har vi har samlat några av svaren på några frågorna gällande{" "}
              <b>Nya Casinon 2020</b>. Har du fler frågar kan du alltid kontakta
              oss. Casinoniz listar casinon som erbjuder esportsbetting, casino
              med faktura och odds. Alla casinon som vi listar har svensk
              spellicens!{" "}
            </p>
          </div>
          <Row className="q-box">
            <Col xs="12" m="12" lg="6" sm="12">
              <Col className="single-q">
                <div>
                  <Button
                    onClick={() => {
                      setQ1(!q1);
                    }}
                    xs="6"
                    className="question-head col-sm"
                    style={{ marginBottom: "1rem", textAlign: "left" }}
                  >
                    <span className="q1logo" role="img" aria-hidden="true">
                      ❓
                    </span>{" "}
                    <span>Tänka på när man väljer nytt casino 2020?</span>{" "}
                    <StyledSpan rotate={q1 ? 1 : undefined}>
                      <svg
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </StyledSpan>
                  </Button>

                  <Collapse isOpen={q1}>
                    <Card>
                      <CardBody>
                        <div className="msg" xs="6">
                          <div>
                            <p>
                              Det släpps nya casinon till och från. Det
                              viktigaste man ska tänka på när man väljer ett
                              nytt casino är att casinot har svensk spellicens.
                              Det ger dig som spelare en säkrare spelupplevelse
                              och ett bättre skydd. Alla eventuella vinster är
                              även skattefria.
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>

              <Col className="single-q">
                <div>
                  <Button
                    onClick={() => {
                      setQ2(!q2);
                    }}
                    xs="6"
                    className="question-head col-sm"
                    style={{ marginBottom: "1rem", textAlign: "left" }}
                  >
                    <span className="q1logo" role="img" aria-hidden="true">
                      ✨
                    </span>
                    <span>Listar Casinoniz alla nya casinon 2020?</span>
                    <StyledSpan rotate={q2 ? 1 : undefined}>
                      <svg
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </StyledSpan>
                  </Button>

                  <Collapse isOpen={q2}>
                    <Card>
                      <CardBody>
                        <div className="msg" xs="6">
                          <div>
                            <p>
                              Ja,Casinoniz.se kommer endast lista alla nya
                              casinon som lanseras eller registreras under 2020
                              med svensk spellicens.{" "}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>
            </Col>

            <Col xs="12" m="12" lg="6" sm="12">
              <Col className="single-q">
                <div>
                  <Button
                    onClick={() => {
                      setQ3(!q3);
                    }}
                    xs="6"
                    className="question-head col-sm"
                    style={{ marginBottom: "1rem", textAlign: "left" }}
                  >
                    <span className="q1logo" role="img" aria-hidden="true">
                      💰
                    </span>
                    <span>
                      Nyttja casino bonus som erbjuds av det nya casinot?
                    </span>{" "}
                    <StyledSpan rotate={q3 ? 1 : undefined}>
                      <svg
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </StyledSpan>
                  </Button>

                  <Collapse isOpen={q3}>
                    <Card>
                      <CardBody>
                        <div className="msg" xs="6">
                          <div>
                            <p>
                              Om du inte har nyttjat ett erbjudande från ett
                              onlinecasino med samma spellicens. Då kan du ta
                              emot eventuell välkomstbonus från det nya casinot.{" "}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>

              <Col className="single-q">
                <div>
                  <Button
                    onClick={() => {
                      setQ4(!q4);
                    }}
                    xs="6"
                    className="question-head col-sm"
                    style={{ marginBottom: "1rem", textAlign: "left" }}
                  >
                    <span className="q1logo" role="img" aria-hidden="true">
                      ⭐
                    </span>
                    <span>Vad förväntas man av dem nya casinon 2020?</span>
                    <StyledSpan rotate={q4 ? 1 : undefined}>
                      <svg
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                      </svg>
                    </StyledSpan>
                  </Button>

                  <Collapse isOpen={q4}>
                    <Card>
                      <CardBody>
                        <div className="msg" xs="6">
                          <div>
                            Eftersom konkurrensen är så tuff inom
                            casinobranschen så förväntas dem nya casinon ha ett
                            väldigt snyggt tema, bra säkerhet, grym support med
                            livechatt, snabba insättningar samt uttag och ett
                            bra spelutbud. Har casinot även ett grymt
                            välkomsterbjudanden är det ännu bättre.
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>
            </Col>
          </Row>
        </div>

        <div className="info-bottom-box-img">
          <h2>Nya Casinon 2020 </h2>
          <div>
            <p>
              Här har vi har samlat lite allmän information om{" "}
              <b>Nya Casinon</b> och lite blandade frågor. Har du fler frågar
              kan du alltid kontakta oss. Casinoniz listar casinon som erbjuder
              esportsbetting, svenska casino med faktura och odds. Alla casinon
              som vi listar har svensk spellicens!{" "}
            </p>
            <img src={spinnericon} alt="freespinsicon" />
          </div>
        </div>

        <div className="info-bottom-box">
          <h3>Casino bonus hos nya casinon 2020 </h3>
          <p>
            När man väljer att nyttja en casino bonus hos ett nytt casino 2020,
            måste man vara säker på att man inte har nyttjat en casino bonus
            från andra onlinecasinon under samma spellicens. Har man det så kan
            eventuella vinster från casinobonusen ej vara tillgängliga för
            uttag. Vinsten kan även komma att makuleras. Man måste alltid för
            ens egen säkerhet läsa regler och villkor för vad som gäller för
            varje casino bonus och casino.
          </p>
        </div>

        <div className="info-bottom-box">
          <h3>Vad gör ett nytt casino bra?</h3>

          <p>Det som gör ett casino bra är enligt Casinoniz.se:</p>
          <StyledimgSpan>
            <img src={minislot} alt="nyaslots2020icon" />
            Svensk spellicens vilket alltid innebär skattefria vinster.
          </StyledimgSpan>

          <StyledimgSpan>
            <img src={minislot} alt="nyaslots2020icon" />
            En snygg och välutvecklad hemsida med snygg design.
          </StyledimgSpan>
          <StyledimgSpan>
            <img src={minislot} alt="nyaslots2020icon" />
            Ska vara enkelt att navigera sig runt på sidan.
          </StyledimgSpan>
          <StyledimgSpan>
            <img src={minislot} alt="nyaslots2020icon" />
            En grym väkomstbonus med väldigt bra villkor och lågt
            omsättningskrav.
          </StyledimgSpan>
          <StyledimgSpan>
            <img src={minislot} alt="nyaslots2020icon" />
            Ett bra utbud av slots samt en filterfunktion för olika videoslots.
          </StyledimgSpan>
          <StyledimgSpan>
            <img src={minislot} alt="nyaslots2020icon" />
            Ett spelutbud med Casino, Live Casino, Sportsbetting inklusive
            esportbetting och Borddspel.
          </StyledimgSpan>
        </div>

        <div className="info-bottom-box">
          <h3>Bästa nya casinot 2021?</h3>

          <p>
            Det är lite svårt och välja det bästa casinot detta året redan nu,
            eftersom det har släppts väldigt få casinon under året.{" "}
          </p>

          <p>
            Att hitta det bästa casinot är svårt eftersom alla spelare tycker om
            olika. Varje casinon har sitt egna tema och spelutbud. Vi kan i
            slutet på året ge er det bästa casinot 2020 enligt Casinoniz.se.
          </p>
        </div>

        <div className="info-bottom-box">
          <h3>Slots hos nya casinon?</h3>

          <p>
            Beroende på vilka spelleverantörer onlinecasinot väljer att använda
            på sin sida. Alla videoslots kommer oftast från en tredje part, med
            undantag ifall casinot själva har utvecklat en egen slot. Du hittar
            alla nya slots som vi tycker är värda att dela på{" "}
            <Link to="/nya-slots-2020">vår nya slots sida</Link>.{" "}
          </p>

          <p>
            Att casinot är nytt innebär inte per automatik att dem har alla
            senaste och nya slots. Allt beror på vilka spelleverantörer casinot
            väljer att använda och hur ofta spelleverantörerna släpper nya
            slots.
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
            några länkar som erbjuder hjälp.{" "}
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

export default BottomInfoNyaCasino;
