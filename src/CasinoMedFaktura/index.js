import React, { useState, useEffect } from "react";
import "./style.scss";
import { Container, Button } from "reactstrap";
import FakturaCasino from "./FakturaCasino";
import FakturaFilter from "../FakturaFilter";
import { Helmet } from "react-helmet";
import BottomInfoFaktura from "../AllBottomInfo/BottomInfoFaktura/index";
import LatestUpdate from "../LastUpdated"


const CasinoMedFaktura = (props) => {
    const [casinoList, setCasinoList] = useState([])
    const [button, setButton] = useState({
        activezimp: false,
        activesiru: false,
        activesms: false,
        activeklarna: false
    })

    const [readmore, setReadMore] = useState(false)
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)


    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let list = [...props.list.Casinon]
        const getAllCas = () => {

            let fakturaCasinon = [];
            let top;
            for (let i of list) {
                if (i.faktura === true) {
                    fakturaCasinon.push(i);
                }
            }

            top = fakturaCasinon.filter(function (i) {
                if (i.recension && i.esportinfo) {
                    return (
                        i.recension[0].gamebar === 100 &&
                        i.recension[0].experience === 100 &&
                        i.recension[0].support === 100
                    );
                }
                return top;
            });

            fakturaCasinon = fakturaCasinon.filter(item => !top.includes(item));
            fakturaCasinon = top.concat(fakturaCasinon);

            return setCasinoList(fakturaCasinon)

        }
        getAllCas()


    }, [props.list.Casinon]);

    const zimplerbutton = () => {
        resetlist();
        let list = [...props.list.Casinon]
        let wagerarr = [];

        for (let i of list) {
            if (i.fakturatype.includes("Zimpler")) {
                wagerarr.push(i);
            }
        }


        setCasinoList(wagerarr)
        setSize(9)

        setButton({
            activezimp: true,
            activesiru: false,
            activesms: false
        })
        setFade(true)
        setTimeout(() => {
            setFade(false)
        }, 500);
    }



    const smsvoucherbutton = () => {
        resetlist();
        let wagerarr = [];
        let list = [...props.list.Casinon]
        for (let i of list) {
            if (i.fakturatype.includes("SMS-voucher")) {
                wagerarr.push(i);
            }
        }

        setCasinoList(wagerarr)
        setSize(9)

        setButton({
            activezimp: false,
            activesiru: false,
            activesms: true
        })
        setFade(true)
        setTimeout(() => {
            setFade(false)
        }, 500);

    }

    const sirubutton = () => {
        resetlist();
        let wagerarr = [];
        let list = [...props.list.Casinon]
        for (let i of list) {
            if (i.fakturatype.includes("Siru")) {
                wagerarr.push(i);
            }
        }

        setCasinoList(wagerarr)
        setSize(9)

        setButton({
            activezimp: false,
            activesiru: true,
            activesms: false
        })
        setFade(true)
        setTimeout(() => {
            setFade(false)
        }, 500);
    }

    const resetlist = () => {
        let list = [...props.list.Casinon]

        let fakturaCasinon = [];
        let top;
        for (let i of list) {
            if (i.faktura === true) {
                fakturaCasinon.push(i);
            }
        }

        top = fakturaCasinon.filter(function (i) {
            if (i.recension && i.esportinfo) {
                return (
                    i.recension[0].gamebar === 100 &&
                    i.recension[0].experience === 100 &&
                    i.recension[0].support === 100
                );
            }
            return top;
        });

        fakturaCasinon = fakturaCasinon.filter(item => !top.includes(item));
        fakturaCasinon = top.concat(fakturaCasinon);


        setButton({
            activezimp: false,
            activesiru: false,
            activesms: false
        })
        setFade(true)
        setTimeout(() => {
            setFade(false)
        }, 500);
        setSize(9)

        return setCasinoList(fakturaCasinon)


    }

    //     await this.setState({
    //       casinon: fakturaCasinon,
    //       fade: true,
    //       activeklarna: false,
    //       activesiru: false,
    //       activesms: false,
    //       activezimp: false
    //     });

    //     setTimeout(() => {
    //       this.setState(prevState => ({
    //         fade: false
    //       }));
    //     }, 1000);
    //   }



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
            <div>
                <Helmet>
                    <title>Faktura Casino ⭐  | Spela på faktura | Casinoniz</title>
                    <link rel="canonical" href="https://www.casinoniz.se/faktura-casino" />
                    <meta
                        name="description"
                        content="[Uppdaterad✅]Spela casino på faktura. Vi listar Svenska casino med faktura som insättningsmetod. Hitta ditt faktura casino här."
                    />
                    <meta
                        name="keywords"
                        content="Casino, Casinobonusar, välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, spela på faktura , zimpler, smsvoucher,klarna,spela casino faktura, casino med faktura, casino zimpler lista,casino lista faktura"
                    />
                    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
          "@type": "Question",
          "name": "💰Uttag när man spelar på casino faktura?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "När man spelar hos ett casino på faktura så är det inga problem att ta ut uttagen när man vill det. Läs igenom villkoren för respektive tjänst du väljer att använda. Tänk på att aldrig spela för mer än du har råd med!."
          }
        }, {
          "@type": "Question",
           "name": "❓Hur gör jag en insättning med fakturametoden Zimpler?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": " Zimpler är ett svensk bolag som grundades 2012. Sedan dess har dem vuxit explosionsartat. I skrivandets stund så har Zimpler över 112 000 användare. Zimpler är väldigt enkelt att använda. För att använda Zimpler så gör du följande: 1.Välj Zimpler som betalmetod, 2.Skriv in ditt telefonnummer, 3.Zimpler skickar tillbaka en unik kod. Färdigt!"
          }
        }, {
          "@type": "Question",
          "name": "⭐Hur många fakturatjänser finns det?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Just nu finns det tre stycken tjänster som casinon kan välja mellan. Oftast brukar det vara Zimpler dem använder för faktura. Kommer det fler tjänser så kommer Casinoniz att lista dem också!. De tre tjänsterna som erbjuds just nu är Zimpler, Siru Mobile och SMS-Voucher."
          }
        }, {
          "@type": "Question",
         "name": "❓Är det svårt och göra insättningar på casino med faktura?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Att spela casino på faktura är väldigt smidigt och enkelt. Med några få knapptryck så har du fått in pengar på ditt spelkonto. Du måste ha tillgång till en mobiltelefon. Tänk på att aldrig spela för mer än vad du har råd med."
         }
       }, {
           "@type": "Question",
          "name": "✅Kan jag spela på casino med fakturatjänsten Klarna?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Klarna är ett svenskt bolag som grundades 2005 och är nog Sveriges bästa och mest kända betalmetod. När man ser att man kan använda Klarna på ett casino så känner man sig väldigt trygg med det. Klarna erbjuder just nu insättningar på casinon men inte faktura. Börjar klarna erbjuda faktura på casino så kommer vi att uppdatera er med det."
          }
        }, {
          "@type": "Question",
         "name": "✨Betalar jag skatt när jag spelar casino på faktura?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Om ett casino har svensk spellicens innebär det helt skattefria vinster för alla spelare. Även när man spelar på faktura. Spelar man på diverse casinon utan svensk spellicens på faktura så får man vara beredd på att skatta på sina vinster oavsett hur det såg ut innan den svenska spellicensen."
          }
        }]
      }
      `}</script>
                </Helmet>




                <div className="faktura-wrap">

                    <div className="welcome-box-faktura">
                        <h1 className="banners">Casino faktura</h1>

                        <div className="welcome-text-faktura">
                            <h3 className="second-welcome-title">Casino faktura - Här listar vi endast casinon som erbjuder insättning med faktura</h3>
                            <p>
                                Att spela casino på faktura är ganska självklart år 2020. Vi handlar
                                allt mer på faktura så varför inte spela på faktura också.
                                Flera av casinon erbjuder just nu faktura som ett alternativ
                                till de traditionella insättningsmetoderna.
                </p>
                            <p>
                                De vanligaste insättningsmetoderna med faktura är Zimpler och
                                Siru. Det krävs ofta verifiering via mobiltelefon när du
                                spelar casino med faktura. Självklart har alla casinon vi listar
                                svensk spel licens.
                </p>

                            {readmore ? (
                                <div>
                                    <p>
                                        Casinoniz rekommenderar att man inte spelar för mer pengar
                                        än man har råd att förlora. Ska man spela casino med
                                        faktura så måste man se till att betala fakturorna.
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

                    <FakturaFilter
                        zimpler={zimplerbutton}
                        siru={sirubutton}
                        smsvoucher={smsvoucherbutton}
                        // klarna={this.klarnabutton.bind(this)}
                        activezimp={button.activezimp}
                        activesiru={button.activesiru}
                        activesms={button.activesms}
                        // activeklarna={this.state.activeklarna}
                        reset={resetlist}
                    />
                    <div className={fade ? "fade-in" : "casino-wrap"}>
                        {casinoList.slice(0, size).map(casino => (
                            <FakturaCasino
                                notfree={false}
                                key={casino.title}
                                casino={casino}
                                isBlocked={props.isBlocked}
                            />
                        ))}
                    </div>
                    {size <= casinoList.length ? (
                        <div className="morebonus-box">
                            <Button
                                className="button-recension blink"
                                onClick={loadMore}
                            >
                                Hämta fler casino med faktura{" "}
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
                    <BottomInfoFaktura />
                </div>

            </div>
            <LatestUpdate />
        </Container>
    );
}


export default CasinoMedFaktura;
