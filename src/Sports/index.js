import React, { useState, useEffect } from "react";
import SportsFilter from "../SportsFilter/index";
import { Container, Button } from "reactstrap";
import SportCasino from "./SportCasino"
import BottomInfoSports from "../AllBottomInfo/BottomInfoSports/index"
import { Helmet } from "react-helmet";
import "./style.scss"
import LatestUpdate from "../LastUpdated"


const Sports = (props) => {

    const [casinon, setCasinon] = useState([])
    const [myactiveButton, setActiveButton] = useState({ wager: false, deposit: false })
    const [readmore, setReadMore] = useState(false);
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)






    useEffect(() => {
        let list = [...props.list.Casinon]
        let top = []
        let sportCasinon = []
        list.forEach((cas) => {
            if (cas.sports) {
                sportCasinon.push(cas)
            }

        });

        top = sportCasinon.filter(function (i) {
            if (i.recension && i.sports) {
                return (
                    i.recension[0].gamebar === 100 &&
                    i.recension[0].experience === 100 &&
                    i.recension[0].support === 100
                );
            }
            return top;
        });

        sportCasinon = sportCasinon.filter(item => !top.includes(item));
        sportCasinon = top.concat(sportCasinon);


        return setCasinon(sportCasinon)
    }, [props.list.Casinon])



    const depositbutton = () => {
        let list = [...casinon]
        let wagerarr = [];
        let delItems = []
        for (let i of list) {
            if (Number.isInteger(i.depositpercentsports)) {
                wagerarr.push(i);
            } else {
                delItems.push(i)
            }

        }

        wagerarr.sort((a, b) => {
            return b.depositpercentsports - a.depositpercentsports;
        });

        setCasinon(wagerarr.concat(delItems))
        setSize(9)
        setActiveButton({ wager: false, deposit: true })
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    const wagerbutton = () => {
        let list = [...casinon]
        let wagerarr = [];
        let delItems = []
        for (let i of list) {
            if (Number.isInteger(i.sportswager)) {
                wagerarr.push(i);
            } else {
                delItems.push(i)
            }

        }

        wagerarr.sort((a, b) => {
            return a.sportswager - b.sportswager;
        });

        setCasinon(wagerarr.concat(delItems))
        setSize(9)
        setActiveButton({ deposit: false, wager: true })
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }


    const resetList = () => {
        let list = [...props.list.Casinon]
        let top = []
        let sportCasinon = []
        list.forEach((cas) => {
            if (cas.sports) {
                sportCasinon.push(cas)
            }

        });

        top = sportCasinon.filter(function (i) {
            if (i.recension && i.sports) {
                return (
                    i.recension[0].gamebar === 100 &&
                    i.recension[0].experience === 100 &&
                    i.recension[0].support === 100
                );
            }
            return top;
        });

        sportCasinon = sportCasinon.filter(item => !top.includes(item));
        sportCasinon = top.concat(sportCasinon);


        setCasinon(sportCasinon)
        setActiveButton({ deposit: false, wager: false })
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }





    const readMore = () => {
        setReadMore(!readmore)
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
        <Container className="wrapit ">
            <Helmet>
                <title>Odds & Sports Betting 2020 ⭐ | Casinoniz</title>
                <link rel="canonical" href="https://www.casinoniz.se/odds" />

                <meta
                    name="description"
                    content="[Uppdaterad✅] Odds, livebetting även esport betting ➼ Vi listar casinon som har sports betting med höga odds och live betting. Självklart med välkomstbonus vid registrering"
                />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar, 2019,2020,bonus, oddsbonus, sportsbonus, spela, odds, livebetting, livebets , esportbetting, esport betting, insättningsbonus, välkomnsbonus, välkomstbonus, free spins, esports,betting, csgo betting, starcraft2, lol, leauge of legends, overwatch, dota2, the international betting"
                />
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
          "@type": "Question",
          "name": "Hur fungerar en sports bonus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sportbonus även oddsbonus får man när ett casino ger spelaren ett erbjudande. Oftast när man registrerar sig på ett nytt casino. Då kan man få en insättningsbonus på X antal procent eller så kan man få en vinstboost."
          }
        }, {
          "@type": "Question",
           "name": "Vad är vinstboost?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Vinstboost är när spelbolaget ger dig chansen att vinna lite extra på dina eventuella vinster. Vinstboosten brukar vara X antal procent. Oftast är det kombinationsspel som vinstboosten erbjuds på eller på utvalda ligor. Beroende på spelbolagets villkor så kan vinstboosten vara omsättningsfri eller omfattas av ett omsättningskrav."
          }
        }, {
          "@type": "Question",
          "name": "Vad är ett kombinationsspel inom odds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kombinationsspel är när spelaren satsar på två eller flera events samtidigt på en kupong. Alla individuella odds multipliceras och ger dig ett total odds på din kupong. Man måste vinna på alla individuella events för att vinna. Förlorar du på ett event så förlorar du hela din kupong."
          }
        }, {
          "@type": "Question",
          "name": "Vad är ett omsättningskrav på odds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Har du mottagit en bonus med omsättningskrav så måste du omsätta X antal kronor innan du kan ta ut dina pengar. Exempel: Insättningsbonus 100% och 6x i omsättningskrav på bonusen. Du sätter in 100kr och får 200kr att spela för. 100kr är dina egna pengar och 100kr är bonusen.Då måste du omsätta 6 * 100  = 600. Så för att kunna ta ut vinsten så måste du spela för(omsätta) minst 600kr!"
          }
        }, {
          "@type": "Question",
         "name": "Vad är ett odds?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Odds är sannolikheten på att något specifikt ska inträffa. Om vi tar fotboll som exempel. Du tror att det blir över 5 hörnor under första  halvleken, du spelar för 100 kr och du får 1.44 i odds. Blir det över 5 hörnor under första halvleken så vinner du 1.44 + 100 = 144 kr."
         }
       }, {
           "@type": "Question",
          "name": "Vad kan man oddsa på?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Beroende på spelbolag så kan nästan odds på i princip allt. Vem som blir nästa president, vem som vinner melodifestivalen, flera typer av sport events, esport och mycket mer!"
          }
        }]}`}</script>
            </Helmet>



            <h1 className="banners">
                Odds och sportsbetting
            </h1>

            <div className="welcome-text-sports">
                <h3 className="second-welcome-title">Sports betting - Här listar vi bolag med Live odds, Odds bonus och spel på sport  </h3>
                <p>
                    Odds och livebetting - Vill man spela på odds eller livebetting så kan man det också.
                    Vi lisar endast Licensierade bettingsidor som erbjuder odds, livebetting, sportbetting och esport betting. För att göra det så enkelt som möjligt för dig att hitta ditt
                    casino, så har vi lagt till en filterfunktion som kan hjälpa dig
                    att hitta din sida som du vill spela på och bästa välkomstbonusen.
              </p>

                {readmore ? (
                    <div>
                        <p>
                            Casinoniz har samlat de senaste odds och sport betting välkomst bonusar från
                            svenska casinon. Vi väljer att endast lista bettingsidor med
                            svensk spellicens eftersom det ger dig som spelare ett säkrare
                            casino att spela på.
              </p>
                        <p>
                            Vi rekommenderar att man är intresserad av sport eller har någon koll på de olika
                            lagen innan man satsar pengar på det. Då minskar du
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


            <SportsFilter
                id="filterid"
                wager={wagerbutton}
                deposit={depositbutton}
                activebuttonwager={myactiveButton.wager}
                activebuttondep={myactiveButton.deposit}
                reset={resetList}
            />
            <div className={fade ? "fade-in" : "casino-wrap"}>
                {casinon.slice(0, size).map(casino => (
                    <SportCasino
                        key={casino.id + casino.title}
                        casinon={casino}
                        isBlocked={props.isBlocked}
                    />
                ))}
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
            <BottomInfoSports />

            <LatestUpdate />


        </Container>
    );
}


export default Sports;
