import React, { useState, useEffect } from "react";
import "./style.scss";
import EsportFilter from "../EsportFilter/index";
import BottomInfoEsport from "../AllBottomInfo/BottomInfoEsport/index"
import { Container, Alert, Button } from "reactstrap";
import sweflag from "../images/sweflag.png";
import EsportCasinoComp from "../EsportCasinoComp/index";
import { Helmet } from "react-helmet";


const Esport = (props) => {

    const [casinon, setCasinon] = useState([])
    const [selectedGame, setSelectedGame] = useState(false)
    const [visible, setVisible] = useState(true)
    const [readmore, setReadMore] = useState(false);
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)



    const getEsportCasino = () => {
        let list = [...props.list.Casinon]
        let esportCasinos = []
        let top;
        list.forEach((cas) => {
            if (cas.esportinfo) {
                esportCasinos.push(cas)
            }
        });

        top = esportCasinos.filter(function (i) {
            if (i.recension && i.esportinfo) {
                return (
                    i.recension[0].gamebar === 100 &&
                    i.recension[0].experience === 100 &&
                    i.recension[0].support === 100
                );
            }
            return top;
        });

        esportCasinos = esportCasinos.filter(item => !top.includes(item));
        esportCasinos = top.concat(esportCasinos);

        return setCasinon(esportCasinos)

    }

    useEffect(() => {
        getEsportCasino()
    }, [])

    const depositbutton = () => {
        let list = [...casinon]

        let wagerarr = [];
        let delItems = []
        if (selectedGame) {
            for (let i of list) {
                for (let [key, value] of Object.entries(i.esportinfo[0])) {
                    if (selectedGame === key && value === true) {
                        if (i.depositpercent > 0) {
                            wagerarr.push(i);
                        } else {

                            delItems.push(i)
                        }
                    }
                }
            }
        } else {
            for (let i of list) {
                if (i.depositpercent > 0) {
                    wagerarr.push(i);
                } else {

                    delItems.push(i)
                }
            }
        }

        wagerarr.sort((a, b) => {
            return b.depositpercent - a.depositpercent;
        });

        if (delItems.length > 1) {
            wagerarr.concat(delItems)
        }
        setCasinon(wagerarr)
        setSize(9)
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    const wagerbutton = () => {
        let list = [...casinon]
        let wagerarr = [];
        let delItems = []

        if (selectedGame) {
            for (let i of list) {
                for (let [key, value] of Object.entries(i.esportinfo[0])) {
                    if (selectedGame === key && value === true) {
                        if (i.sportswager === "x") {
                            delItems.push(i);
                        } else {
                            wagerarr.push(i);
                        }
                    }
                }
            }
        } else {
            for (let i of list) {
                if (i.sportswager === "x") {
                    delItems.push(i);
                } else {
                    wagerarr.push(i);
                }
            }
        }

        wagerarr.sort(function (a, b) {
            return a.sportswager - b.sportswager;
        });



        setCasinon(wagerarr.concat(delItems))
        setSize(9)
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }





    const hardReset = () => {

        let list = [...props.list.Casinon]
        let esportCasinos = []
        let top;
        list.forEach((cas) => {
            if (cas.esportinfo) {
                esportCasinos.push(cas)
            }
        });

        top = esportCasinos.filter(function (i) {
            if (i.recension && i.esportinfo) {
                return (
                    i.recension[0].gamebar === 100 &&
                    i.recension[0].experience === 100 &&
                    i.recension[0].support === 100
                );
            }
            return top;
        });

        esportCasinos = esportCasinos.filter(item => !top.includes(item));
        esportCasinos = top.concat(esportCasinos);

        setCasinon(esportCasinos)
        setSize(9)
        setFade(true)
        setTimeout(() => {
            setFade(false)
        }, 1000);
    }



    const sortFunc = async (val) => {
        let list = [...props.list.Casinon]
        let esportCasinos = []
        let casinoarr = []
        list.forEach((cas) => {
            if (cas.esportinfo) {
                esportCasinos.push(cas)
            }

        });


        for (let i of esportCasinos) {

            for (let [key, value] of Object.entries(i.esportinfo[0])) {

                if (val === key && value === true) {
                    casinoarr.push(i);
                }
            }
        }

        setCasinon(casinoarr)
        setSize(9)
        setFade(true)
        setSelectedGame(val)
        setTimeout(() => {
            setFade(false)
        }, 1000);
    }

    const onDismiss = () => {
        setVisible(false);
    }

    const readMore = () => {
        setReadMore(!readmore);
    };



    const loadMore = () => {
        return setSize(prevState => prevState + 8)

    }

    const loadLess = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return setSize(9)

    }

    return (
        <Container className="wrapit">
            <Helmet>
                <title>🎮CSGO Betting & Esport betting | Casinoniz</title>
                <link rel="canonical" href="https://www.casinoniz.se/esportbetting" />
                <meta
                    name="description"
                    content="[Uppdaterad✅]CSGO Betting och Esportbetting med flera spel! Vi listar casinon som har esport betting. Självklart med välkomstbonus vid registrering"
                />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar, bettingsidor csgo, välkomstbonus esport, välkomnstbonus, 2019,2020, bonus,bettingsidor esport, spela, esportbetting, esport betting,fornite betting, fortnite,  insättningsbonus, free spins, esports,betting, csgo betting, starcraft2, lol, leauge of legends, overwatch, dota2, the international betting"
                />
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
          "@type": "Question",
          "name": "🎮 Har ni CSGO Betting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, Casinoniz listar bettingsidor där man kan betta på csgo. Vi. Csgo är ett av världens största och kändaste spel. Counter-strike har funnits i många olika versioner men det är Counter-Strike Global Offensive som har tagit esport världen med storm."
          }
        }, {
          "@type": "Question",
           "name": "🎮 Esportbetting - vilka spel kan jag oddsa på?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Vi listar casinon som erbjuder dessa spel. Tänk på att det kan variera på varje casino. CSGO Betting,DOTA2 Betting,League of Legends Betting,Overwatch Betting,Starcraft 2 Betting och även andra spel som t.ex. heartstone."
          }
        }, {
          "@type": "Question",
          "name": "⭐ Kan man använda en bonus på esportbetting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja det kan man. Sportbonus erbjuds av vissa casinon. Casinoniz listar bonusar för sports och det är den bonusen som gäller även för esportbetting. Läs villkoren och kom ihåg att aldrig spela för mer än du har råd för!"
          }
        }, {
          "@type": "Question",
          "name": "❓ Hur gammal måsta jag vara för att spela på esport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Du måste enligt svensk lag vara minst 18 år gammal för att spela på ett onlinecasino samt sportsbetting online. Är du inte det så kan du inte spela på esportbetting eller onlinecasino."
          }
        }, {
          "@type": "Question",
         "name": "❓Vilket esportspel är det enklast att betta på?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Vi rekommenderar att om man ska spela på esportbetting,
           borde man va något insatt i spelets regler samt vilket esportslag som gäller.Esportsbetting är precis som sportsbetting."
         }
       }, {
           "@type": "Question",
          "name": "❓Spelet jag vill betta på finns inte?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Casinoniz listar esport spel där casinon har erbjudit esportbetting på diverse spel. Finns inte spelet som du vill spela på kan man fråga casinot ifall dem kan börja sätta odds på spelet som du önskar. Casinoniz tillhandahåller endast en jämförelsetjänst och sätter inga bonusar eller liknande."
          }
        }, {
          "@type": "Question",
         "name": "✨ Esportbetting i mobilen eller paddan?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Dagens casinon är mobilanpassade, så att betta på esport i mobilen eller ipad är alltså inga problem."
         }
       }, {
           "@type": "Question",
          "name": "💰Esportbetting på faktura ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Esportbetting med faktura är möjligt via vissa casinon. Med några knapptryck så har du fått in pengar på ditt spelkonto. Tänk på att aldrig spela för mer än vad du har råd med. Navigera dig runt på vår sida för att hitta casinon som har insättning med faktura."
          }
        }]
      }
      `}</script>
            </Helmet>
            <Alert
                color="success"
                isOpen={visible}
                toggle={onDismiss}
            >
                <div className="swe-license">
                    <p className="swe-lic-text">
                        Vi listar endast casinon med svensk spellicens!
            </p>
                    <img alt="swe-flag" className="swe-flag" src={sweflag} />
                </div>
            </Alert>
            <div className="spela-lagom">
                <span>
                    18+ &#8226; Spela Ansvarfullt &#8226;{" "}
                    <a href="https://www.stodlinjen.se">www.stodlinjen.se</a>{" "}
                </span>
            </div>

            <h1 className="banners">
                Csgo Betting och Esport betting
            </h1>

            <div className="welcome-box-esport">
                <h3 className="second-welcome-title"> Esport Betting - Här listar vi endast casinon som har esport betting t.ex. CSGO Betting</h3>
                <div className="welcome-text-esport">
                    <p>
                        Senaste inom esport betting. CSGO, Dota2, League of Legends(LoL) och fler esport spel. Vi listar de bästa betting sidorna för esport betting. Vi på Casinoniz älskar E-sport.
                        Därför har vi valt att endast
                         lista licenserade esport bettingsidor som erbjuder esport betting. För
                         att göra det så enkelt som möjligt för dig att hitta ditt
                         casino, så har vi lagt till en filterfunktion som kan hjälpa dig
                         att hitta din sida som du vill spela på.
              </p>
                    <p>
                        Casinoniz har samlat de senaste Esport bettingbonusar från
                        svenska casinon. Vi väljer att endast lista bettingsidor med
                        svensk spellicens eftersom det ger dig som spelare ett säkrare
                        casino att spela på.
              </p>
                    {readmore ? (
                        <div>
                            <p>
                                Längst ner på sidan så berättar vi mer om de olika spelen
                                och de kändaste lagen inom esports världen. Vi rekommenderar
                                att man är intresserad av esports eller har koll på de olika
                                esports lagen innan man satsar pengar på det. Då minskar du
                                risken att förlora pengar.
                  </p>
                        </div>
                    ) : (
                            ""
                        )}

                    {readmore ? (
                        <div>
                            <p onClick={readMore} className="readmorebutton">
                                Läs mindre
                  </p>
                        </div>
                    ) : (
                            <div>
                                <p onClick={readMore} className="readmorebutton">
                                    Läs mer
                  </p>
                            </div>
                        )}
                </div>
            </div>


            <EsportFilter
                id="esportsfilterid"
                csgo={sortFunc}
                dota={sortFunc}
                lol={sortFunc}
                overwatch={sortFunc}
                starcraft={sortFunc}
                other={sortFunc}
                reset={hardReset}
                ewager={wagerbutton}
                edeposit={depositbutton}
            />
            <div className={fade ? "fade-in" : "casino-wrap"}>
                {casinon.length > 1 ? casinon.slice(0, size).map(casino => (

                    < EsportCasinoComp
                        key={casino.title}
                        casino={casino}
                        isBlocked={props.isBlocked}
                    />
                )) : ''}
            </div>
            {size <= casinon.length ? (
                <div className="morebonus-box">
                    <Button
                        className="button-recension blink"
                        onClick={loadMore}
                    >
                        Hämta fler bonusar{" "}
                    </Button>
                </div>
            ) : (
                    <div className="no-more-bonuses">
                        <Button
                            className="show-less-btn"
                            onClick={loadLess}
                        >
                            Finns inte fler casinon att visa - Stäng{" "}
                        </Button>
                    </div>
                )}


            <BottomInfoEsport />
            <p className="update-text">Senast uppdaterad: 12 Januari 2020</p>

        </Container>
    );
}


export default Esport;
