import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import FilterCasinoMed from "../../FilterCasinoMed"
import Casinon from "../../Casinon"
import styled from "styled-components"
import { Helmet } from "react-helmet";
import SportCasino from "../../Sports/SportCasino";
import LatestUpdate from "../../LastUpdated"
import BottomInfoPaysafe from "../../AllBottomInfo/Bottominfopaysafe";


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




const PaysafeCasino = (props) => {

    const [casinon, setCasinon] = useState([])
    const [trustlyList, setTrustlyList] = useState([])

    const [buttons, setButtons] = useState({ activebuttonfree: false, activebuttondep: false, activebuttonwager: false })
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)
    const [sports, setSports] = useState(false)







    useEffect(() => {

        let list = [...props.list.Casinon]
        let trustlyCasino = []
        let newTop = []

        list.filter(i => {
            if (i.recension[0].deposittypes.includes("Paysafe")) {
                trustlyCasino.push(i)
            }
            return list;
        })

        trustlyCasino.forEach(i => {
            if (i.recension[0].gamebar === 100 && i.recension[0].experience === 100 && i.recension[0].support === 100) {
                newTop.push(i)
            }
        })


        trustlyCasino.filter(item => !newTop.includes(item))
        newTop.concat(trustlyCasino)

        trustlyCasino.sort((a, b) => {
            return (b.recension[0].gamebar + b.recension[0].experience + b.recension[0].support) - (a.recension[0].gamebar + a.recension[0].experience + a.recension[0].support)
        });
        setCasinon(trustlyCasino)



        const filterSports = () => {

            let orlist = [...trustlyList]
            let wagerarr = [];
            if (sports) {
                for (let i of orlist) {
                    if (i.sports === true) {
                        wagerarr.push(i);
                    }
                }
            } else {
                wagerarr = [...trustlyList]
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


        return setTrustlyList(trustlyCasino)
        // eslint-disable-next-line
    }, [sports, props.list.Casinon])


    const wagerbutton = () => {
        let orlist = [...trustlyList]
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
        setButtons({ activebuttondep: false, activebuttonwager: true, activebuttonfree: false })
        setFade(true)


        setTimeout(() => {
            setFade(false);
        }, 1000);


    }

    const depositbutton = () => {
        let orlist = [...trustlyList]

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
        setButtons({ activebuttondep: true, activebuttonwager: false, activebuttonfree: false })

        setFade(true)

        setTimeout(() => {
            setFade(false);
        }, 1000);
    }


    const freewagerbutton = () => {
        let orlist = [...trustlyList]

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
        setCasinon(trustlyList)
        setSports(false)
        setButtons({ activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
        setSize(9)
        setFade(true)
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
                <title>Casino PaysafeCard - Lista På Svenska Casino Med PaysafeCard | Casinoniz</title>
                <link rel="canonical" href="https://www.casinoniz.se/casino-paysafecard" />

                <meta
                    name="description"
                    content="Casino med PaysafeCard. Letar du efter Casinon med Paysafecard? Vi har listan med alla casinon med Paysafecard samt svensk Spellicens. Med en grym filterfunktion också! "
                />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar,filter,filterfunktion 2019,2020 ,esport betting, paysafe, paysafecard, paysafevoucher, code, depsot, insättning, insättningsbonus, välkomnsbonus, välkomstbonus, trustly, casino trustly, casinon med trustly, svensk , licens"
                />

            </Helmet>





            <h1 className="banners">
                Casino PaysafeCard
            </h1>

            <div className="welcome-text-sports">
                <h2 className="second-welcome-title">Casinon med PaysafeCard </h2>
                <p>
                    PaysafeCard är ett säkert och smidigt sätt att göra en insättning på casino med. PaysafeCard är en betallösning som inte kräver något bankkort. Du hittar ditt paysafecard hos någon av 500 000 återförsäljare i landet. Hela listan på återförsäljare hittar du på bolagets hemsida. Är du extra försiktig online så är denna insättningsmetod bäst för att skydda din personliga integritet. Du hittar PaysafeCard i många bensinmackar och t.ex. Pressbyrån runt om i landet.
              </p>

                <p>PaysafeCard säljs i flera butiker.För att göra en insättning på ett casino med PaysafeCard, måste du köpa ett kort med en 16-siffrig pinkod. Kortet kan vara värt 100, 250, 500, och 1 000 kronor. För att göra en insättning med ditt PaysafeCard så klickar du dig fram till insättningar på ditt casino. Sedan skrapar du fram din 16-siffriga kod och matar in koden på casinot. Svåraren så är det inte. Ett väldigt smidigt och säkert sätt att göra en betalning på ett casino. </p>




            </div>



            <StyledH3>Alla casinon med PaysafeCard</StyledH3>
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

            <StyledH3Sports className={fade ? "fade-in" : "showsports"}>{sports ? 'Visar endast casinon med PaysafeCard & Sportsbetting' : 'Visar alla casinon med PaysafeCard'}</StyledH3Sports>
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
            {
                size <= casinon.length ? (
                    <div className="morebonus-box">
                        <Button
                            className="button-recension blink"
                            onClick={loadMore}
                        >
                            Hämta fler Casinon med PaysafeCard{" "}
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
                    )
            }




            <BottomInfoPaysafe />

            <LatestUpdate />
        </Container >
    );
}


export default PaysafeCasino;
