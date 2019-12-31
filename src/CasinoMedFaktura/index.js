import React, { useState, useEffect } from "react";
import "./style.scss";
import { Container, Alert, Button } from "reactstrap";
import sweflag from "../images/sweflag.png";
import FakturaCasino from "./FakturaCasino";
import FakturaFilter from "../FakturaFilter";
import { Helmet } from "react-helmet";
import BottomInfoFaktura from "../AllBottomInfo/BottomInfoFaktura/index";

const CasinoMedFaktura = (props) => {
    const [casinoList, setCasinoList] = useState({ size: 9, casinon: [] })
    const [button, setButton] = useState({
        activezimp: false,
        activesiru: false,
        activesms: false,
        activeklarna: false
    })
    const [visible, setVisible] = useState(true)
    const [readmore, setReadMore] = useState(false)
    const [fade, setFade] = useState(false)


    useEffect(() => {
        let list = [...props.list.Casinon]
        const getAllCas = () => {

            let fakturaCasinon = [];
            for (let i of list) {
                if (i.faktura === true) {
                    fakturaCasinon.push(i);
                }
            }

            return setCasinoList({ ...casinoList, casinon: fakturaCasinon })

        }
        getAllCas()

        // return () => {
        //   setCasinoList({ ...casinoList, Casino: [...props.start.Casinon] })
        // };

    }, []);

    const zimplerbutton = () => {
        resetlist();
        let list = [...props.list.Casinon]
        let wagerarr = [];

        for (let i of list) {
            if (i.fakturatype.includes("Zimpler")) {
                wagerarr.push(i);
            }
        }


        setCasinoList({ size: 9, casinon: wagerarr })

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

        setCasinoList({ size: 9, casinon: wagerarr })

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

        setCasinoList({ size: 9, casinon: wagerarr })
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
        for (let i of list) {
            if (i.faktura === true) {
                fakturaCasinon.push(i);
            }
        }
        setButton({
            activezimp: false,
            activesiru: false,
            activesms: false
        })
        setFade(true)
        setTimeout(() => {
            setFade(false)
        }, 500);
        return setCasinoList({ size: 9, casinon: fakturaCasinon })


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

    const onDismiss = () => {
        setVisible(false);
    }

    const readMore = () => {
        setReadMore(!readmore);
    };

    const loadMore = () => {
        return setCasinoList({ ...casinoList, size: casinoList.casinon.length })

    }

    return (
        <Container className="wrapit">
            <div>
                <Helmet>
                    <title>❶Faktura Casino - Spela på faktura | Casinoniz</title>
                    <link rel="canonical" href="https://www.casinoniz.se/faktura-casino" />
                    <meta
                        name="description"
                        content="[Uppdaterad✅]Spela casino på faktura. Vi listar Svenska casino med faktura som insättningsmetod. Hitta ditt casino här."
                    />
                    <meta
                        name="keywords"
                        content="Casino, Casinobonusar, välkomstbonus, 2019,bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, spela på faktura , zimpler, smsvoucher,klarna,spela casino faktura, casino med faktura, casino zimpler lista,casino lista faktura"
                    />
                    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
          "@type": "Question",
          "name": "💰Kan man göra ett uttag när man spelar på faktura?",
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
         "name": "❓Är det svårt och göra insättningar på faktura?",
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
         "name": "✨Betalar jag skatt när jag spelar med faktura?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Om ett casino har svensk spellicens innebär det helt skattefria vinster för alla spelare. Även när man spelar på faktura. Spelar man på diverse casinon utan svensk spellicens på faktura så får man vara beredd på att skatta på sina vinster oavsett hur det såg ut innan den svenska spellicensen."
          }
        }]
      }
      }`}</script>
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

                <div className="faktura-wrap">

                    <div className="welcome-box-faktura">
                        <h1 className="welcome-title-faktura">Casino faktura</h1>

                        <div className="welcome-text-faktura">
                            <h3>Här listar vi endast casinon som erbjuder insättning med faktura</h3>
                            <p>
                                Att spela casino på faktura är ganska självklart 2019. Vi handlar
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
                        {casinoList.casinon.slice(0, casinoList.size).map(casino => (
                            <FakturaCasino
                                notfree={false}
                                key={casino.title}
                                casino={casino}
                            />
                        ))}
                    </div>
                    {casinoList.size !== casinoList.casinon.length ? (
                        <div className="morebonus-box">
                            <Button
                                className="button-recension blink"
                                onClick={loadMore}
                            >
                                Hämta fler casinon{" "}
                            </Button>
                        </div>
                    ) : (
                            <p className="no-more-bonuses">
                                Inga fler casinon att visa just nu!
            </p>
                        )}
                    <BottomInfoFaktura />
                </div>

            </div>
            <p className="update-text">Senast uppdaterad: 24 December 2019</p>
        </Container>
    );
}


export default CasinoMedFaktura;