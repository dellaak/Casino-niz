import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import FilterCasinoMed from "../../FilterCasinoMed"
import Casinon from "../../Casinon"
import styled from "styled-components"
import { Helmet } from "react-helmet";
import SportCasino from "../../Sports/SportCasino";
import LatestUpdate from "../../LastUpdated"
import BottomInfoCasinobonus from "../../AllBottomInfo/BottominfoCasinoBonus"
import present from "../../images/bonusicon.svg"
import CalcSearch from "../../SearchComp/calcSearch";

const StyledH3 = styled.h3`
text-align:center;
padding:10px;
font-size:28px;
`

const StyledH3Sports = styled.h3`
text-align:center;
padding:10px;
font-size:28px;
color:#fed100;
background:#204467;
border-radius:9px;
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


const StyledSection = styled.section`
display:flex;

div{
    flex-direction:column;
    overflow-wrap: break-word;
}
.presicon{
    width:400px;
    @media (max-width: 830px) {
        display: none;
      }
}
`

const Casinobonuscomp = (props) => {

    const [casinon, setCasinon] = useState([])
    const [activebonusList, setactiveList] = useState([])

    const [buttons, setButtons] = useState({ activebuttonodds: false ,activebuttonfree: false, activebuttondep: false, activebuttonwager: false })
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)
    const [sports, setSports] = useState(false)
    const [searchNr, setSearchNr] = useState('');
    const [calculate, setCalculate] = useState(false);





    useEffect(() => {

        let list = [...props.list.Casinon]
        let activeCasino = []
        let newTop = []

        list.filter(i => {
            if (i.activebonus === true) {

                activeCasino.push(i)
            }
            return list;
        })



        activeCasino.forEach(i => {
            if (i.recension[0].gamebar === 100 && i.recension[0].experience === 100 && i.recension[0].support === 100) {
                newTop.push(i)
            }
        })


        activeCasino.filter(item => !newTop.includes(item))
        newTop.concat(activeCasino)

        activeCasino.sort((a, b) => {
            return (b.recension[0].gamebar + b.recension[0].experience + b.recension[0].support) - (a.recension[0].gamebar + a.recension[0].experience + a.recension[0].support)
        });
        setCasinon(activeCasino)



        const filterSports = () => {

            let orlist = [...activebonusList]
            let wagerarr = [];
            if (sports) {
                for (let i of orlist) {
                    if (i.sports === true && i.activebonus === true) {
                        wagerarr.push(i);
                    }
                }
            } else {
                wagerarr = [...activebonusList]
            }

            setCasinon(wagerarr)

            setSize(9)
            setButtons({activebuttonodds: false , activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
            setFade(true)

            setTimeout(() => {
                setFade(false);
            }, 1000);
        }

        if (sports) { filterSports() }


        return setactiveList(activeCasino)
        // eslint-disable-next-line
    }, [sports, props.list.Casinon])


    const wagerbutton = () => {
        let orlist = [...activebonusList]
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


        setCasinon(wagerarr.concat(delItems))
        setSize(9)
        setButtons({activebuttonodds: false , activebuttondep: false, activebuttonwager: true, activebuttonfree: false })
        setFade(true)


        setTimeout(() => {
            setFade(false);
        }, 1000);


    }

    const depositbutton = () => {
        let orlist = [...activebonusList]

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


        setCasinon(wagerarr.concat(depositdelete))
        setSize(9)
        setButtons({activebuttonodds: false , activebuttondep: true, activebuttonwager: false, activebuttonfree: false })

        setFade(true)

        setTimeout(() => {
            setFade(false);
        }, 1000);
    }


    const freewagerbutton = () => {
        let orlist = [...activebonusList]

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
        setButtons({ activebuttonodds: false ,activebuttondep: false, activebuttonwager: false, activebuttonfree: true })

        setFade(true)

        setTimeout(() => {
            setFade(false);
        }, 1000);

    }

    const oddsbutton = () => {
        let list = [...activebonusList]
        let wagerarr = [];
        let delItems = []
        for (let i of list) {
            if (i.minodds > 0) {
                wagerarr.push(i);
            } else {
                delItems.push(i)
            }

        }

        wagerarr.sort((a, b) => {
            return a.minodds - b.minodds;
        });

        setCasinon(wagerarr.concat(delItems))
        setSize(9)
        setButtons({ activebuttonodds: true, activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);
    }

    const resetList = () => {
        setCasinon(activebonusList)
        setSports(false)
        setCalculate(false)
        setSearchNr('')
        setButtons({activebuttonodds: false , activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
        setSize(9)
        setFade(true)
        setTimeout(() => {
            setFade(false);
        }, 1000);

    }


    const calculateBonus = event => {
        if (event.target.value.length === 0) {
            setCalculate(false)
            return setSearchNr('')
        }
        let regex = /^\d+$/;
        if (!event.target.value.match(regex)) {
            return
        }
        if (event.target.value.length > 5) {
            return;
        }

        let orlist = [...casinon]
        if (event.target.value.length > 0) {
            for (let i of orlist) {
                if (i.depositpercentsports > 0) {

                    setCalculate(true)
                    setSize(9)
                }

            }

        } else {
            return resetList()
        }

        setSearchNr(event.target.value);
    };





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
                <title>Casino Bonus 2020⭐ » Bonus Från Svenska Casinon | Casinoniz</title>
                <link rel="canonical" href="https://www.casinoniz.se/casino-bonus" />

                <meta
                    name="description"
                    content="Casino bonusar 2020 ✅ ➼ Lista på alla svenska casinon som erbjuder en casino bonus just nu! 
                    Hitta din välkomstbonus. Vi erbjuder en kanske Sverige bästa filterfunktion som hjälper dig att hitta bästa casino bonusen 2020."
                />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar,filter,2019,2020 ,esport casinobonus, casino , bonus, filterfunktion, filter, filtrera, bonus trustly, bästa casinobonus, casno, casin, bonos"
                />
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
            "@type": "Question",
            "name": "⭐ Vad är en casino bonus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Casino bonus även känt som välkomstbonus är ett erbjudande från casinon till spelaren. Casinon väljer att ge spelaren lite extra kronor att spela för. Tänk på att casinots regler och villkor gäller för bonusen. Casino bonusen brukar oftast bestå av en insättningsbonus mellan 100% - 500%. Vissa även casinon som erbjuder freespins som en välkomst bonus. Du hittar alla casino bonusar på vår sida. "
            }
          },{
            "@type": "Question",
            "name": "❓ Måste man ta emot en casino bonus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nej det måste man inte. Att ta emot en casino bonus är frivilligt. Tänk på att du endast kan ta emot en bonus hos ett enskilt casino bolag. Läs igenom regler och villkor för varje bonus."
            }
          },{
          "@type": "Question",
          "name": "✨ Casino bonus och omsättningskrav?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oftast när man tar emot en casino bonus så brukar ett omsättningskrav gälla. Storleken på omsättningskravet varierar från casino. Omsättningskrav är ett krav där du som spelare måste spela för en viss summa innan du kan ta ut dina eventuella vinster. Du kan filtrera på omsättningskrav med vår filterfunktion."
          }
        }, {
          "@type": "Question",
           "name": "⭐ Skillnaden på cash spins och free spins?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Cash spins brukar vara omsättningsfria spins på videoslots. Freespins brukar oftast ha ett omsättningskrav. Läs igenom villkoren för cash spins eventuellt freespins hos casinot du väljer ta emot bonusen från. Där står det vad som gäller."
          }
        },  {
          "@type": "Question",
          "name": "🚫 Casino bonusar och ogilitiga insättningsmetoder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "När man vill ta emot en casino bonus så får man tänka på vilken insättningsmetod man använder. Oftast så gäller inte PaysafeCard, Skrill eller Neteller som en insättningsmetod för att ta emot en casino bonus. Det står i villkoren för varje bonus vilka metoder som inte gäller. "
          }
        }, {
          "@type": "Question",
         "name": "✅ Kan jag avbryta en aktiv casino bonus?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Hos dem flesta casinon kan du avbryta en pågående casino bonus. Kontakta supporten på casinot för att få hjälp med att avbryta casino bonusen. Ta även reda på vad som gäller när du avbryter bonusen."
          
         }
       }]
      }
      `}</script>
            </Helmet>





            <h1 className="banners">
                Casino Bonus
            </h1>
            <h2 className="second-welcome-title">Casinon med bonusar </h2>
            <StyledSection>
             <div>
                <p>
                    En bra casino bonus ger dig extra kronor att spela för. Beroende på casino bonus så kan du även få freespins, ibland <b>omsättningsfria freespins</b>. Den bästa casino bonusen som kan erbjudas från ett casino är <b>omsättningsfria casino bonusar</b>. Det är väldigt få casinon som erbjuder omsättningsfria casino bonusar men det finns! Efter att den nya spellagen trädde i kraft den <i>1 januari 2019</i> så kan varje casino endast erbjuda 1(en) välkomstbonus till spelaren.
                </p>

                <p>Vi har listat alla casinon som har en aktiv casino bonus på denna sidan. Du kan filtrera casino bonusar och jämföra casino bonusar för att hitta en bonus som passar just dig. För att endast filtera casinon som erbjuder sport bonus så klickar du in knappen <b>Sportbonus</b> nedanför. Annars listas alla casinon som har en aktiv bonus. Hoppas du hittar en casino bonus som ger dig chansen till en grym casino upplevelse! </p>

                </div>
                <img className="presicon" src={present} alt="piggy" />

                </StyledSection>



            <StyledH3>Alla casinon med bonusar</StyledH3>
            <CalcSearch calculateBonus={calculateBonus} value={searchNr} />
            <StyledSecondFilter>
                <span>Visa endast casinon som har:  </span><StyledButton onClick={() => { setSports(!sports) }} isactivebutton={sports ? 1 : undefined}>Sportsbonus</StyledButton>

            </StyledSecondFilter>
            <FilterCasinoMed
            issport={sports}
                id="filterid"
                odds={oddsbutton}
                wager={wagerbutton}
                free={freewagerbutton}
                deposit={depositbutton}
                activebuttonodds={buttons.activebuttonodds}
                activebuttonwager={buttons.activebuttonwager}
                activebuttonfree={buttons.activebuttonfree}
                activebuttondep={buttons.activebuttondep}
                reset={resetList}
            />

            <StyledH3Sports className={fade ? "fade-in" : "showsports"}>{sports ? 'Visar endast casinon med bonusar & Sportsbetting' : 'Visar alla casinon med bonusar'}</StyledH3Sports>
            <div className={fade ? "fade-in" : "casino-wrap"}>

                {sports ?
                    casinon.slice(0, size).map(casino => (
                        <SportCasino
                            key={casino.id + casino.title}
                            casinon={casino}
                            isBlocked={props.isBlocked}
                            calc={calculate}
                        calcVal={searchNr}
                        />
                    )) : casinon.slice(0, size).map(casino => (
                        <Casinon
                            key={casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                            calc={calculate}
                        calcVal={searchNr}
                        />
                    ))}
            </div>
            {
                size <= casinon.length ? (
                    <div className="morebonus-box">
                        <Button
                            className="button-recension blink"
                            onClick={loadMore}
                        >
                            Hämta fler casino bonusar{" "}
                        </Button>
                    </div>
                ) : (
                        <div className="no-more-bonuses">
                            <Button
                                className="show-less-btn"
                                onClick={loadLess}
                            >
                                Finns inte fler casino bonusar att visa - Stäng{" "}
                            </Button>
                        </div>
                    )
            }





            <BottomInfoCasinobonus />
            <LatestUpdate />
        </Container >
    );
}


export default Casinobonuscomp;
