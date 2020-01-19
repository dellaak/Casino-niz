import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import { Container, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import Casinon from "../Casinon/index"
import Filter from "../Filter/index"
import AnimatedCount from "../AnimatedCount"
import Bottominfo from "../AllBottomInfo/Bottominfo/index"
import OurRec from "../OurRec/index";
import Recommended from "../Recommended/index";
import NewCasinos from "../NewCasinos";
import star from "../images/fullstar.svg";
import LatestUpdate from "../LastUpdated"
import "./style.scss"
import MonthCasino from "../MonthCasino"







const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const StartPage = (props) => {
  const [casinoList, setCasinoList] = useState({ Casino: props.start.Casinon, showOrder: false });
  const [size, setSize] = useState(9)
  const [readmore, setReadMore] = useState(false);
  const [showmedalj, setShowMedalj] = useState(true);
  const [fade, setFade] = useState(false);
  const [buttons, setButtons] = useState({ activebuttonfree: false, activebuttondep: false, activebuttonwager: false })
  const myRef = useRef(null)


  useEffect(() => {

    let list = [...props.start.Casinon]
    let newTop = []
    const getAllCas = () => {
      list.forEach((i) => {
        if (i.recension[0].gamebar === 100 && i.recension[0].experience === 100 && i.recension[0].support === 100) {
          newTop.push(i)
        }

      });



      list.filter(item => !newTop.includes(item))
      newTop.concat(list)

      list.sort((a, b) => {
        return (b.recension[0].gamebar + b.recension[0].experience + b.recension[0].support) - (a.recension[0].gamebar + a.recension[0].experience + a.recension[0].support)
      });

      return setCasinoList({ ...casinoList, Casino: list })

    }
    getAllCas()



    return () => {
      setCasinoList({ ...casinoList, Casino: [...props.start.Casinon] })
    };


    // eslint-disable-next-line
  }, [props.start.Casinon]);



  const wagerbutton = () => {

    resetList()
    let orlist = [...props.start.Casinon]
    let delItems = [];
    let wagerarr = [];
    for (let i of orlist) {
      if (i.wager === "x") {
        delItems.push(i);
      } else {
        wagerarr.push(i);
      }
    }

    wagerarr.sort(function (a, b) {
      return a.wager - b.wager;
    });

    setShowMedalj(false)
    setCasinoList({ ...casinoList, Casino: wagerarr.concat(delItems), showOrder: false })
    setSize(9)
    setButtons({ activebuttondep: false, activebuttonwager: true, activebuttonfree: false })
    setFade(true)


    setTimeout(() => {
      setFade(false);
    }, 1000);


  }

  const depositbutton = () => {

    resetList()
    let orlist = [...props.start.Casinon]

    let wagerarr = [];
    let depositdelete = [];
    for (let i of orlist) {
      if (i.depositpercent === "x") {
        depositdelete.push(i);
      } else {
        wagerarr.push(i);
      }
    }

    wagerarr.sort(function (a, b) {
      return b.depositpercent - a.depositpercent;
    });

    setShowMedalj(false)
    setCasinoList({ ...casinoList, Casino: wagerarr.concat(depositdelete), showOrder: false })
    setSize(9)
    setButtons({ activebuttonwager: false, activebuttondep: true, activebuttonfree: false })
    setFade(true)

    setTimeout(() => {
      setFade(false);
    }, 1000);
  }





  const readMore = () => {
    setReadMore(!readmore);
  }

  const resetList = () => {
    let orlist = [...props.start.Casinon]
    let newTop = orlist.filter(function (i) {
      if (i.recension) {
        return i.recension[0].gamebar === 100 && i.recension[0].experience === 100 && i.recension[0].support === 100
      }
      return newTop
    })

    orlist.filter(item => !newTop.includes(item))
    newTop.concat(orlist)
    orlist.sort(function (a, b) {
      return (b.recension[0].gamebar + b.recension[0].experience + b.recension[0].support) - (a.recension[0].gamebar + a.recension[0].experience + a.recension[0].support)
    });
    setButtons({ activebuttonwager: false, activebuttondep: false, activebuttonfree: false })
    setSize(9)
    return setCasinoList({ Casino: orlist, showOrder: true })
  }


  const freewagerbutton = () => {
    resetList()
    let orlist = [...props.start.Casinon]

    let wagerarr = [];
    for (let i of orlist) {
      if (i.freefromwager === true && i.freespins > 2) {
        wagerarr.push(i);

      }
    }

    setShowMedalj(false)
    setCasinoList({ ...casinoList, Casino: wagerarr, showOrder: false })
    setSize(9)
    setButtons({ activebuttonwager: false, activebuttondep: false, activebuttonfree: true })
    setFade(true)

    setTimeout(() => {
      setFade(false);
    }, 1000);



  }


  const loadMore = () => {

    return setSize(prevState => prevState + 8)

  }


  const loadLess = () => {
    scrollToRef(myRef)

    return setSize(9)

  }

  const showAll = () => {

    return setSize(casinoList.Casino.length)

  }


  return (<React.Fragment>
    <section >
      <Helmet>
        <title>Svenska Casino 2020 - Jämför casinobonusar | Casinoniz</title>
        <link rel="canonical" href="https://www.casinoniz.se/" />
        <meta
          name="description"
          content="[Uppdaterad✅]Svenska casinon och casino på faktura. Filtrera casinon efter önskemål och hitta välkomstbonus samt casinobonus som passar just dig."
        />
        <meta
          name="keywords"
          content="Casino,faktura casino,välkomstbonus, julbonusar, casinobonusar jul, jul casino,välkomnstbonus, insättningsbonus, casino faktura, svensk casino , svenska casinon, Casinobonusar,2020,omsättningsfritt, recension, review, recension casinon, 2019,bonus, spela, insättningsbonus, free spins, esports,betting,omsättningsfria bonusar"
        />
        <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
          "@type": "Question",
          "name": "☘ Vad är en casinobonus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Casinobonus även kallade välkomstbonusar är ett erbjudande casinot erbjuder spelaren. Den vanligaste casinobonusen är att man får ett visst antal procent i insättningsbonus. Casinoniz listar aktuella casinobonusar från svenska licensierade casinon. Tänk på att läsa villkoren och kolla upp eventuella omsättningskrav på bonusar."
          }
        }, {
          "@type": "Question",
           "name": "🎮 Bettingsidor för esportbetting CSGO?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Casinoniz listar även bettingsidor för esportsbetting, där du kan spela på spel som CSGO, Dota2, OverWatch, LoL(Leauge of Legends) och fler! Navigera dig in på vår esportsektion för att se casinon som erbjuder esportbetting."
          }
        }, {
          "@type": "Question",
          "name": "❓Betalar man skatt på svenska casinon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nej, Om ett casino har svensk spellicens innebär det helt skattefria vinster för alla spelare. Spelar man på diverse casinon utan svensk spellicens så får man vara beredd på att skatta på sina vinster oavsett hur det såg ut innan den svenska spellicensen."
          }
        }, {
          "@type": "Question",
          "name": "✅ Svenska casinon med licens?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lagen trädde i kraft den 1/1 2019.
            Att spela på ett casino med svensk spellicens ger dig som spelare ett större konsumentskydd. Med konsumentskydd handlar det om säkrare transaktioner,lättare att införa spelgränser, smidigare att stänga av sig från all spel, casinot måste förhålla sig till lagar och regler, personuppgifter hanteras korrekt, skattefria vinster. Vi listar endast casinon med svensk spellicens."
          }
        }, {
          "@type": "Question",
         "name": "✨ Minsta insättningen hos ett casino?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Det varierar beroende på casino. Hos vissa bolag som Snabbare, Hajper och SpeedyCasino så är minsta insättningen 50 SEK. Vanligtvis brukar standarden vara minst 100 SEK för en insättning. Finns även casinon som Storspelare där minsta insättningen är 25 SEK. I vår sektion minsta insättning casino listar vi alla casinon som har minsta insättning under 100kr."
         }
       }, {
           "@type": "Question",
          "name": "⭐ Vilket casino är det bästa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vi listar flera casinon som är bland de bästa i branschen. Varje casino har sin egna design och du kan gärna läsa våra recensioner. Det finns ett flertal casinon att välja mellan. Beroende på personlig smak så ska det nog finnas något för varje spelare."
          }
        }, {
          "@type": "Question",
         "name": "↻ Omsättningsfria bonusar hos casinon?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Omsättningsfria bonusar är när casinon är generösa. Du får ett bonuserbjudande av ett casino, det kan vara insättningsbonus eller freespins. Allt som
           du vinner under bonusen får du behålla och behöver inte omsätta
           något alls. Det vill säga att om du vinner 2000kr så kan du ta ut
         vinsten utan att behöva spela mer."
         }
       }, {
           "@type": "Question",
          "name": "💰Spela casino på faktura?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Att spela casino på faktura är väldigt smidigt och enkelt. Med dagens moderna teknik så går det väldigt snabbt och enkelt. Med några  få knapptryck så har du fått in pengar på ditt spelkonto. Tänk på att aldrig spela för mer än vad du har råd med. Navigera dig runt till vår faktura sektion för att hitta casinon som erbjuder insättning med faktura."
          }
        }]
      }
      `}</script>

      </Helmet>




      <h1 className="welcome-title">Svenska Casinon 2020</h1>
      <div className="top-casinos-rec">

        <OurRec />
        <MonthCasino list={props.start.Casinon} />
        <AnimatedCount list={props.start.Casinon} />


      </div>

      <section className="welcome-box">
        <section className="welcome-text">
          <Recommended list={[...props.start.Casinon]} isBlocked={props.isBlocked}></Recommended>

          <p>
            Svenska casino som erbjuder välkomstbonus även känt som casinobonusar är något som har gynnat spelare i den svenska spelmarknaden.
            Efter den nya lagändringen så vill man som spelare helst spela på svenska casinon med svensk spellicens.
            Casinobonusar även kallat välkomstbonus är en bonus där man som spelare kan få lite extra
            pengar att spela med. Vi listar casinon som erbjuder spel på faktura och esport betting.
            Den vanligaste casinobonusen som brukar
            erbjudas är en insättningsbonus. Vi listar dem senaste Casino bonusar och alla från casinon med svensk spellicens!
            Välkommen!
            </p>
          <p>
            Betta på E-sport ? Vi har även en esport sektion där vi listar
              casinon med esport betting.{" "}
            <NavLink
              className="link-start"
              to="/Esportbetting"
              activeClassName="active"
            >
              Klicka här för att komma till esport betting.
              </NavLink>{" "}
          </p>
          {readmore ? (
            <div>
              <p>Man kan även få så kallade
            Freespins, som ger spelaren gratissnurr på utvalda slotmaskiner.
            Vissa casinon erbjuder även en kombo av freespins och en
            insättningsbonus.
                På Casinoniz har vi samlat de senaste casinobonusar från
                svenska casinon. Vi väljer att endast lista casinon med svensk
                spellicens eftersom det ger dig som spelare ett säkrare casino
                att spela på. På både epsort betting och casino faktura sektionen kan du filtrera casinon efter just dina önskemål.
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

        </section>


        <NewCasinos {...props} isBlocked={props.isBlocked} />
      </section>

      <Container className="wrapit">
        <div ref={myRef} className="top-box" />
        <Filter
          id="filterid"
          wager={wagerbutton}
          free={freewagerbutton}
          deposit={depositbutton}
          activebuttonwager={buttons.activebuttonwager}
          activebuttonfree={buttons.activebuttonfree}
          activebuttondep={buttons.activebuttondep}
          reset={resetList}
        />
        {showmedalj ? (<section className="medalj-box">
          <p><i>Ordningen på listan är just nu är baserad på vår recension. Ju högre poäng desto högre upp på listan är casinot.</i></p>
          <small className="medalj-text"><img src={star} className="top-star" alt="star" /><i>Medaljen visar casinon som har fått fulla poäng av oss i våran casino recension.</i></small>
        </section>) : null}

        <div className={fade ? "fade-in" : "casino-wrap"}>
          {casinoList.Casino.slice(0, size).map((casino, e) =>
            < Casinon
              key={casino.id + casino.title}
              casino={casino}
              reset={resetList}
              isBlocked={props.isBlocked}
            />
          )}
        </div>
        {size >= casinoList.Casino.length ? (
          <div className="no-more-bonuses">
            <Button
              className="show-less-btn"
              onClick={loadLess}
            >
              Finns inte fler casinon att visa - Stäng{" "}
            </Button>
          </div>
        ) : (

            <div className="morebonus-box">
              <Button
                className="button-recension blink"
                onClick={loadMore}
              >
                Hämta fler bonusar{" "}
              </Button>

              <span onClick={showAll}>Visa alla casinon</span>
            </div>
          )}
        <Bottominfo />
        <LatestUpdate />

      </Container>

    </section>
  </React.Fragment>)
}



export default StartPage;