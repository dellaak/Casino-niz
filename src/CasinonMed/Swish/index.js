import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import Casinon from "../../Casinon"
import styled from "styled-components"
import { Helmet } from "react-helmet";
import FilterCasinoMed from "../../FilterCasinoMed";
import SportCasino from "../../Sports/SportCasino"
import BottomInfoSwish from "../../AllBottomInfo/BottomInfoSwish"
import LatestUpdate from "../../LastUpdated"

const StyledH3 = styled.h3`
text-align:center;
padding:10px;
font-size:28px;
`

const StyledSecondFilter = styled.div`
border-radius:9px;
margin:0 auto;
border: 3px solid lightgrey;
padding: 20px;
    max-width: 500px;
display:flex;
justify-content:center;
margin-bottom:10px;
flex-wrap:wrap;
align-items:center;
span{
    font-weight:600;
    margin-right:5px;
    font-size:18px;
    font-family:"Robot",sans-serif;
}
`


const StyledH3Sports = styled.h3`
text-align:center;
padding:10px;
font-size:28px;
color:#fed100;
background:#204467;
border-radius:9px;
`

const SwishCasino = (props) => {

    const [casinon, setCasinon] = useState([])
    const [swishList, setSwishList] = useState([])

    const [buttons, setButtons] = useState({ activebuttonfree: false, activebuttondep: false, activebuttonwager: false })
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)
    const [sports, setSports] = useState(false)





    useEffect(() => {

        let list = [...props.list.Casinon]
        let swishCasino = []
        let newTop = []

        list.filter(i => {
            if (i.recension[0].swish === true) {
                swishCasino.push(i)
            }
            return list;
        })

        swishCasino.forEach(i => {
            if (i.recension[0].gamebar === 100 && i.recension[0].experience === 100 && i.recension[0].support === 100) {
                newTop.push(i)
            }
        })


        swishCasino.filter(item => !newTop.includes(item))
        newTop.concat(swishCasino)

        swishCasino.sort((a, b) => {
            return (b.recension[0].gamebar + b.recension[0].experience + b.recension[0].support) - (a.recension[0].gamebar + a.recension[0].experience + a.recension[0].support)
        });

        setCasinon(swishCasino)

        const filterSports = () => {

            let orlist = [...swishList]

            let wagerarr = [];
            if (sports) {
                for (let i of orlist) {
                    if (i.sports === true) {
                        wagerarr.push(i);
                    }
                }
            } else {
                wagerarr = [...swishList]
            }

            setCasinon(wagerarr)
            setSize(9)
            setButtons({ activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
            setFade(true)

            setTimeout(() => {
                setFade(false);
            }, 1000);
        }
        if (sports) { filterSports() }


        return setSwishList(swishCasino)
        // eslint-disable-next-line
    }, [sports, props.list.Casinon])


    const wagerbutton = () => {
        let orlist = [...swishList]
        let delItems = [];
        let wagerarr = [];
        if (sports) {
            for (let i of casinon) {

                if (i.sports && i.wager === "x") {
                    delItems.push(i);
                } else {
                    wagerarr.push(i);
                }
            }
        } else {
            for (let i of orlist) {
                if (i.wager === "x") {
                    delItems.push(i);
                } else {
                    wagerarr.push(i);
                }
            }
        }

        if (sports) {
            wagerarr.sort(function (a, b) {
                return a.sportswager - b.sportswager;
            });
        } else {
            wagerarr.sort(function (a, b) {
                return a.wager - b.wager;
            });
        }

        wagerarr.concat(delItems)
        setCasinon(wagerarr)
        setSize(9)

        setButtons({ activebuttondep: false, activebuttonwager: true, activebuttonfree: false })


        setFade(true)


        setTimeout(() => {
            setFade(false);
        }, 1000);


    }

    const depositbutton = () => {
        let orlist = [...swishList]

        let wagerarr = [];
        let depositdelete = [];
        if (sports) {
            for (let i of casinon) {
                if (i.sports && i.depositpercent === "x") {
                    depositdelete.push(i);
                } else {
                    wagerarr.push(i);
                }
            }
        } else {
            for (let i of orlist) {
                if (i.depositpercent === "x") {
                    depositdelete.push(i);
                } else {
                    wagerarr.push(i);
                }
            }
        }

        if (sports) {
            wagerarr.sort(function (a, b) {
                return b.depositpercentsports - a.depositpercentsports;
            });
        } else {
            wagerarr.sort(function (a, b) {
                return b.depositpercent - a.depositpercent;
            });
        }

        wagerarr.concat(depositdelete)
        setCasinon(wagerarr)
        setSize(9)

        setButtons({ activebuttondep: true, activebuttonwager: false, activebuttonfree: false })



        setFade(true)

        setTimeout(() => {
            setFade(false);
        }, 1000);
    }


    const freewagerbutton = () => {

        let orlist = [...swishList]

        let wagerarr = [];
        if (sports) {
            for (let i of casinon) {
                if (i.sports && i.freefromwager === true && i.freespins > 2) {
                    wagerarr.push(i);

                }
            }
        } else {
            for (let i of orlist) {
                if (i.freefromwager === true && i.freespins > 2) {
                    wagerarr.push(i);

                }
            }
        }

        setCasinon(wagerarr)
        setSize(9)

        setButtons({ activebuttondep: false, activebuttonwager: false, activebuttonfree: true })


        setFade(true)

        setTimeout(() => {
            setFade(false);
        }, 1000);



    }

    const resetList = () => {

        setCasinon(swishList)
        setSports(false)
        setButtons({ activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
        setFade(true)
        setSize(9)
        setTimeout(() => {
            setFade(false);
        }, 1000);

    }



    const loadMore = () => {
        return setSize(prevState => prevState + 8)

    }

    const loadLess = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return setSize(9)

    }

    const StyledButton = styled(Button)`
    min-width: 120px;
     min-height: 50px;
     letter-spacing: 0.05em;
     text-transform: uppercase;
     font-style: normal;
     padding: 0.5em;
     text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
     font-size: 12px !important;
     height: auto;
   background-color: ${props => props.isactivebutton ? ' #e0b438 ' : 'rgba(8, 91, 169, 1)'}!important;
     -moz-border-radius: 5px;
     -webkit-border-radius: 5px;
     border-radius: 5px;
     border: 1px solid #337bc4;
     display: inline-block;
     cursor: pointer;
     color: ${props => props.isactivebutton ? 'black' : 'white'} !important;
     font-family: "Robot", sans-serif;
     text-decoration: none;
   
     cursor: pointer !important;
   `

    return (
        <Container className="wrapit ">
            <Helmet>
                <title>Casino Swish📱 | Lista På Swish Casino | Casinoniz</title>
                <link rel="canonical" href="https://www.casinoniz.se/casino-swish" />

                <meta
                    name="description"
                    content=" Casino med Swish ✅ ➼ Letar du efter casinon med Swish, då har du hittat rätt. Vi listar enbart svenska casinon med swish här. Filtrera bonusar genom en grym filter funktion. "
                />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar, 2019,2020,swish, insättning, med, swish, casino swish, nya, casinon, odds,filter, filterfunktion casino ,sport, esportbetting."
                />
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
            "@type": "Question",
            "name": "📱 Vad är Swish?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Swish är resultatet av ett samarbete mellan sex av dem största bankerna i Sverige. Det är en mobilapplikation där man på några få sekunder gör en betalning online eller skickar pengar mellan personer. Just nu är det över 7 miljoner svenskar som är anslutna till Swish."
            }
          },{
            "@type": "Question",
            "name": "⭐ Hur använder man Swish på casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "För att använda Swish på ett online casino så väljer du Swish som betalningsmetod. Du skriver in casinots nummer i Swish appen eller scannar QR-koden. Sedan skriver du in beloppet du vill sätta in. Du godkänner överföring med ditt bankid och så är det klart!"
            }
          },{
          "@type": "Question",
          "name": "✨ Krävs det bankid för att använda Swish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, det krävs ett mobilt bankid för att göra insättningar med Swish. Det krävs dock inte ett bankid om du endast vill ta emot pengar via Swish."
          }
        }, {
          "@type": "Question",
           "name": "⭐ Är det säkert att använda Swish för spel i casino?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Ja, Swish är ett av dem säkraste insättningsmetoderna du kan använda på ett casino. För att kunna verifiera en betalning måste man mata in sin privata kod hos bankid som endast du har tillgång till."
          }
        },  {
          "@type": "Question",
          "name": "✅ Insättningar och uttag med Swish?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insättningarna går oftast väldigt snabbt med Swish på casino. Oftast inom någon minut! Att göra ett uttag med hjälp av Swish går dock inte men du kan ta ut vinsten via Trustly."
          }
        }, {
          "@type": "Question",
         "name": "⭐ Hur ansluter jag till Swish?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "För att ansluta dig till Swish måste du logga in på din bank. Navigera dig fram till mobila tjänser (Swish) och skriv in ditt mobilnummer. Ladda sedan ner Swish appen. Klart!"
          
         }
       }]
      }
      `}</script>
            </Helmet>


            <h1 className="banners">
                Casino Swish
            </h1>

            <div className="welcome-text-sports">
                <h2 className="second-welcome-title">Casinon med Swish </h2>
                <p>
                    Casino med Swish är så himla smidigt och säkert att använda. Med swish i vardagen så är det en självklarhet att alla casinon ska implementera Swish på sin sida. Alla svenska casinon har dock inte swish just men några få har det. Du kan i nuläget inte få en utbetalning i Swish.
              </p>

                <p>Här har vi valt att filtrera alla casinon som har Swish som en insättningsmetod. För att använda Swish på ett casino så måste man ha tillgång till ett personligt bankid och en mobiltelefon.</p>


            </div>



            <StyledH3>Alla casinon med Swish</StyledH3>
            <StyledSecondFilter>
                <span>Visa endast casinon som har:  </span><StyledButton onClick={() => { setSports(!sports) }} isactivebutton={sports ? 1 : undefined}>Sportsbetting</StyledButton>

            </StyledSecondFilter>
            <FilterCasinoMed
                id="filterid"
                wager={wagerbutton}
                free={freewagerbutton}
                deposit={depositbutton}
                activebuttonwager={buttons.activebuttonwager}
                activebuttonfree={buttons.activebuttonfree}
                activebuttondep={buttons.activebuttondep}
                reset={resetList}
            />
            <StyledH3Sports className={fade ? "fade-in" : "showsports"}>{sports ? 'Visar endast casinon med Swish & Sportsbetting' : 'Visar alla casinon med Swish'}</StyledH3Sports>
            <div className={fade ? "fade-in" : "casino-wrap"}>
                {sports ?
                    casinon.slice(0, size).map(casino => (
                        <SportCasino
                            key={casino.id + casino.title}
                            casinon={casino}
                            isBlocked={props.isBlocked}
                        />
                    )) : casinon.slice(0, size).map(casino => (
                        <Casinon
                            key={casino.id + casino.title}
                            casino={casino}
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
                        Hämta fler Swish Casinon{" "}
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

            <BottomInfoSwish />

            <LatestUpdate />


        </Container>
    );
}


export default SwishCasino;
