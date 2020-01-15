import React, { useState, useEffect } from "react";
import { Container, Alert, Button } from "reactstrap";
import sweflag from "../../images/sweflag.png";
import FilterCasinoMed from "../../FilterCasinoMed"
import Casinon from "../../Casinon"
import styled from "styled-components"
import { Helmet } from "react-helmet";
import SportCasino from "../../Sports/SportCasino";
import "../style.scss"


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
  background-color: rgba(8, 91, 169, 1) !important;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #337bc4;
  display: inline-block;
  cursor: pointer;
  color: white;
  font-family: "Robot", sans-serif;
  text-decoration: none;

  cursor: pointer !important;
`


const TrustlyCasino = (props) => {

    const [casinon, setCasinon] = useState([])
    const [trustlyList, setTrustlyList] = useState([])
    const [visible, setVisible] = useState(true)
    const [buttons, setButtons] = useState({ activebuttonfree: false, activebuttondep: false, activebuttonwager: false })
    const [fade, setFade] = useState(false)
    const [size, setSize] = useState(9)
    const [sports, setSports] = useState(false)







    useEffect(() => {
        let list = [...props.list.Casinon]
        let trustlyCasino = []
        let newTop = []

        list.filter(i => {
            if (i.recension[0].deposittypes.includes("Trustly")) {
                trustlyCasino.push(i)
            }
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




    const onDismiss = () => {
        setVisible(false);
    }


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
                <title>Casino Trustly - Lista På Trustly Casino | Casinoniz</title>
                <link rel="canonical" href="https://www.casinoniz.se/Casino-trustly" />

                <meta
                    name="description"
                    content="Trustly Casino. Letar du efter Trustly Casino? Vi har listan med alla casinon med Trustly samt svensk Spellicens. Med en grym filterfunktion också! "
                />
                <meta
                    name="keywords"
                    content="Casino, Casinobonusar,filter,filterfunktion 2019,2020 ,esport betting, insättningsbonus, välkomnsbonus, välkomstbonus, trustly, casino trustly, casinon med trustly, svensk , licens"
                />

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





            <h1 className="banners">
                Casino Trustly
            </h1>

            <div className="welcome-text-sports">
                <h2 className="second-welcome-title">Casinon med Trustly </h2>
                <p>
                    Casinon Trustly är något som varje casino borde använda. Eftersom casinon med Trustly har extremt snabba inbetalning och utbetalningar. Med trustly så går ett uttag på max 15 minuter!.
              </p>

                <p>Här har vi valt att filtrera alla casinon som har Trustly. För att använda Trustly på ett casino så måste man ha tillgång till ett personligt bankid. Bankid brukar oftast vara installerad på datorn eller i mobilen.</p>


            </div>



            <StyledH3>Alla casinon med Trustly</StyledH3>
            <StyledSecondFilter>
                <span>Visa endast casinon som har:  </span><StyledButton onClick={() => { setSports(!sports) }} className={sports ? "activesecond" : ''}>Sportsbetting</StyledButton>

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

            <StyledH3Sports className={fade ? "fade-in" : "showsports"}>{sports ? 'Visar endast casinon med Trustly & Sportsbetting' : 'Visar alla casinon med Trustly'}</StyledH3Sports>
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
                            Hämta fler casinon{" "}
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


            <p className="update-text">Senast uppdaterad: 15 Januari 2020</p>


        </Container >
    );
}


export default TrustlyCasino;
