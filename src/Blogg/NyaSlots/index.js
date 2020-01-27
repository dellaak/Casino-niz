import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Container, Button, Collapse } from "reactstrap"
import Casinon from "../../Casinon/index"
import { Helmet } from "react-helmet";
import BottomInfoNyaSlots from "../../AllBottomInfo/BottomInfoNyaSlots"


const NyaSlots = (props) => {

    const [slotCasinon] = useState({
        monte: ['mrgreen', 'gate777', 'snabbis', 'betsafe', 'leovegas', 'prankcasino', 'noaccountcasino'],
        exo2: ['casumo', 'vera&john', 'prankcasino', 'noaccountcasino', 'snabbis'],
        pros: ['leovegas'],
        forran: ['dreamz', 'comeon', 'snabbare', 'unibet', 'noaccountcasino', 'hajper', 'vera&john'],
        monmeg: ['casimba', 'playojo', 'videoslots', 'karlcasino', 'snabbis', 'mrgreen', 'leovegas'],
        pigmeg: ['leovegas', 'unibet', 'dreamz', 'comeon', 'hajper', 'snabbare']
    })
    const [casinoSize, setCasinoSize] = useState({ monte: 2, monmeg: 2, exo2: 2, pigmeg: 2, forran: 2 })
    const [topCasinon, setTopList] = useState({ monte: [], exo2: [], pros: [], monmeg: [], pigmeg: [], forran: [] })
    const [isOpen, setIsOpen] = useState({ monte: false, exo2: false, pros: false, monmeg: false, pigmeg: false, forran: false })

    useEffect(() => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let list = [...props.list.Casinon]
        let monte = []
        let exo2 = []
        let pros = []
        let monmeg = []
        let pigmeg = []
        let forran = []


        list.filter(i => {
            i.title = i.title.toLowerCase()
            if (slotCasinon.monte.includes(i.title)) {
                monte.push(i)
            }
            if (slotCasinon.exo2.includes(i.title)) {
                exo2.push(i)
            }
            if (slotCasinon.pros.includes(i.title)) {
                pros.push(i)
            }
            if (slotCasinon.monmeg.includes(i.title)) {
                monmeg.push(i)
            }
            if (slotCasinon.pigmeg.includes(i.title)) {
                pigmeg.push(i)
            }
            if (slotCasinon.forran.includes(i.title)) {
                forran.push(i)
            }
            return list
        })




        return setTopList({ monte: monte, exo2: exo2, pros: pros, monmeg: monmeg, pigmeg: pigmeg, forran: forran })

    }, [props.list.Casinon, slotCasinon])


    const StyledWrapper = styled(Container)`
    display:flex;
    background-color:white;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin:0 auto;
    font-family: "Roboto", sans-serif;

    .welcome-box-newslots{
        display:flex;
        align-items:center;
      
    }
    .piggy{
            width:200px;
            @media (max-width: 750px) {
    display:none;
  }
        }
    .btn-title{
        text-align:center;
    }
    `

    const StyledDiv = styled.div`
    border-bottom:5px solid lightgrey;
    display:flex;
    border-radius:9px;
    flex-direction: column;
    margin-bottom: 40px ;
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h2 {
    margin-top: 30px;
    }



    .slot-img{    
        max-width:100%;
        width:600px;
        height:auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin:0 auto;
    }

   .slot-review{
        padding:10px;
        border-top:1px solid lightgrey;
        p{
            font-size:16px;
        }

        h6{
            font-size:22px;
            text-align:center;
        }
    }

    ul{padding-top:10px;}
    `

    const StyledSlotButton = styled(Button)`
height: auto;
min-height:50px;
background-color: #fed100 !important;
 padding:10px;
  text-align: center;
  font-size: 20px;
  margin-bottom:20px !important;
  width: 100% ;
  max-width: 1000px;
  color: black !important;
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
`

    const StyledCloseButton = styled(Button)`
height: auto;
min-height:30px;
background-color: #ffc10736 !important;
 padding:10px;
  text-align: center;
  font-size: 20px;
  margin:20px !important;
  width: 100% ;
  max-width: 1000px;
  color: black !important;
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
`

    const StyledButton = styled(Button)`
  height: 50px;
  background: #fed100;
  text-align: center;
  background-color: #fed100;
  font-size: 20px;
  width: 100%;
  max-width: 500px;
  color: black !important;
  margin: 0 auto;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  border: 1px solid black;
`

    const StyledKommande = styled.div`
display:flex;
flex-direction:column;
border-bottom:3px solid lightgray;
border-top:3px solid lightgray;
border-radius:9px;
padding:10px 0 ;
margin:10px 0 ;
h2{
    text-align:center;
    font-size:18px;
}

ul{
    list-style:none;
}

.kommande-btn{
    background-color:lightblue !important;
    width:50%;
    margin:0 auto;
}
`



    const getUp = () => {
        document.body.scrollTop = 150;
        document.documentElement.scrollTop = 150;
    }

    return (<StyledWrapper>
        <Helmet>
            <title>Nya Slots 2020 | Prova Årets Hetaste Slots🔥 | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/nya-slots-2020" />
            <meta
                name="description"
                content="Nya Slots 2020 ✅ ➼ Prova årets nyaste och hetaste videoslots. Vi listar svenska casinon som släpper nya och grymma slots. Vi kommer att uppdatera listan löpande. Så håll utkik!  "
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, välkomstbonus, 2019,2020, bonus, spela, insättningsbonus,videoslots,nytt free spins, faktura casino, casino faktura, bästa casinon,nya,publicerade,licenserade,svenska,casinon, bästa casinon 2020, nya slots 2020, videospel,"
            />
            <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [{
            "@type": "Question",
            "name": "❓Vad är en bonusrunda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bonusrundan är ett läge i spelet som aktiveras på olika sätt. Oftast så brukar det vara minst tre unika symboler, även kända som scatters som aktiverar bonusläget under en spelrunda. Oftast får man x antal gratisspins och någon sorts av extra funktion som t.ex. multiplikator eller låsta wilds."
            }
          },{
            "@type": "Question",
            "name": "✨Vad är RTP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RTP (Revenue to player) förenklat på svenska vinstutdelning till spelaren. Det är hur mycket av insatsen spelaren är beräknad på att få tillbaka på videoslotten. En RTP på exempelvis 94% betyder att videoslotten ger tillbaka 94kr per satsad hundralapp. RTP är dock beräknat på flera tusen spins så man ska inte stirra sig blind på det."
            }
          },{
            "@type": "Question",
            "name": "💰Är RTP viktigt när man väljer slot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Det ger spelaren en överblick på hur mycket videoslotten ger tillbaka. Men vi på Casinoniz tycker inte RTP är super viktigt eftersom det baseras på flera tusen spins. RTP ger däremot en insikt i att slotar är skapade för husets fördel."
            }
          },{
          "@type": "Question",
           "name": "⭐Tips för att hitta en bra slot?",
           "acceptedAnswer": {
             "@type": "Answer",
            "text": "Vi tycker att man borde välja en slot som har bonusrundor. Bonusrundorna ska ha en multiplikator utan maxtak, retriggers och låsta wilds. Har en slot det så tycker vi att den är bra! Det är dock upp till varje person att hitta en slot som passar. Alla videoslots har egna teman och bonusfunktioner."
          }
        }]
      }
      `}</script>
        </Helmet>



        <h1 className="banners">Nya Slots 2020 </h1>
        <small> Uppdaterad: 28 Januari 2020</small>

        <h2>Nya Slots 2020 - Lista på nya grymma videoslots för 2020</h2>
        <section className="welcome-box-newslots">
            <div>
                <p>Nya slots 2020 som är värda att nämna. Denna sektionen kommer uppdateras kontinuerligt så håll koll på denna sidan. Vi på Casinoniz.se tror att detta året kommer bjuda på många nya videoslots med väldigt spännande och grymma upplevelser. </p>

                <p>Här kommer vi lista nya slots från detta året. Listan kommer att uppdateras med slots som vi på Casinoniz tycker är värda att nämna. Klicka på namnet på önskad slot för läsa mer om spelet!</p>
            </div>
            <img className="piggy" src="/images/pig.svg" alt="piggy" />
        </section>
        <h2 className="btn-title">Klicka på knapparna för mer information om enskild slot</h2>

        <StyledKommande>
            <h2>Kommande slots 2020</h2>
            <StyledSlotButton className="kommande-btn" onClick={() => { setIsOpen({ ...isOpen, forran: !isOpen.forran }) }} > Fortune Rangers - 30 Januari

</StyledSlotButton>
            <Collapse isOpen={isOpen.forran} >
                <StyledDiv >
                    <h2>Fortune Rangers - 30 Januari</h2>
                    <img className="slot-img" src="/images/fortune-rangers.png" alt="fortune-rangers" />
                    <ul>
                        <li>RTP: <b>96.90%</b></li>
                        <li>Max-vinst(mynt): <b>160 000</b></li>
                        <li>Vinstlinjer:<b>76</b></li>
                    </ul>
                    <div className="slot-review"><p>Fortune Ranger är en ny slot från 2020. Spelet har ett asiatiskt tema med ninja symboler. Layouten på slotten är asymmetrisk. Första hjuler har 3 rader och går sedan uppåt mot fem. Layouten är 3-3-4-4-5 rader med 76 vinstlinjer.</p>


                        <p>Med asiatiska symboler så är detta ett väldigt underhållande spel. Det finns även en symbol som är en guldig drake som agerar som wild. Spelet är väldigt likt ett lite äldre spel från NetEnt som heter <b>Dazzle Me</b>. </p>

                        <h4>Forunte Rangers Bonus</h4>
                        <p>Spelet innehåller så kallade scatters. Skulle du få 3 eller fler scatters vart som helst på spelet under en runda så triggas bonusen igång.För 3 scatters får du 8 freespins, 4 scatters ger 12 freespins och 5 scatters ger 16 freespins. Får du fler scatters under bonusen så får du fler freespins. Under bonusrundan så kan 2 hjul länka till varandra och visa samma symboler. Finns även slumpmässiga wilds som täcker hela hjul, med chans på wilds upp till alla 5 hjul samtidigt. </p>


                        <h6>Några svenska casinon där du kommer kunna spela Fortune Rangers</h6></div>
                    <div className="casino-wrap">
                        {topCasinon.forran.slice(0, casinoSize.forran).map((casino) =>
                            < Casinon
                                key={'monte' + casino.id + casino.title}
                                casino={casino}
                                isBlocked={props.isBlocked}
                            />)}
                    </div>

                    {casinoSize.forran >= topCasinon.forran.length ? (
                        <div className="no-more-bonuses">
                            <StyledButton
                                className="show-less-btn"
                                onClick={() => { setCasinoSize({ ...casinoSize, forran: 2 }); getUp() }}
                            >
                                Finns inte fler casinon att visa  {" "}
                            </StyledButton>
                        </div>
                    ) : (

                            <div className="morebonus-box">
                                <StyledButton
                                    className="button-recension blink"
                                    onClick={() => { setCasinoSize({ ...casinoSize, forran: (casinoSize.forran) + 5 }) }}
                                >
                                    Ladda fler casinon{" "}
                                </StyledButton>
                            </div>
                        )}

                    <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, forran: !isOpen.forran }); getUp() }} > Stäng Forunte Rangers

</StyledCloseButton>
                </StyledDiv>
            </Collapse>

        </StyledKommande>

        <StyledSlotButton onClick={() => { setIsOpen({ ...isOpen, pigmeg: !isOpen.pigmeg }) }} > Piggy Riches MEGAWAYS- Med Mega Wilds!

</StyledSlotButton>
        <Collapse isOpen={isOpen.pigmeg} >
            <StyledDiv >
                <h2>Piggy Riches MEGAWAYS- Med Mega Wilds!</h2>
                <img className="slot-img" src="/images/piggyslot.png" alt="piggyrichesmegawaysslot2020" />
                <ul>
                    <li>RTP: <b>95.71%</b></li>
                    <li>Max-vinst(mynt): <b>104 740</b></li>
                    <li>Vinstlinjer:<b>117 649</b></li>
                </ul>
                <div className="slot-review"><p>Piggy Riches Megaways är en ny slot 2020. Inspirerad från NetEnt klassiker Piggy Riches. Det är leverantöreren Red Tiger som ligger bakom Piggy Riches Megaways. Spelet är anpassat både för dator och mobil. Detta är en väldigt underhållande slot med chans till en väldigt hög multiplikator.</p>


                    <p>Spelet består utav 6 huvud hjul. Antalet vinstlinjer är 117 649. Spelet innehåller så kallade <b>Mega Wilds</b> som är en wild som täcker ett helt hjul med en multiplikator upp till 7x. Efter varje vinst så exploderar symbolerna och nya faller ner under rundan. Skulle det bli en förlust så slutar symbolerna explodera och en ny runda startar.</p>

                    <h4>Piggy Riches Megaways Bonus</h4>
                    <p>Spelet innehåller så kallade scatters. Skulle du få 3 eller fler scatters vart som helst på spelet under en runda så triggas bonusen igång. Bonusen startar med ett hjul som börjar snurra. Hjulet stannar på antal freespins och hur hög multiplikator du får från första freespins rundan. Efter varje vinst under bonusrundan så ökar multiplikatorn med 1(ett). Får du 1 scatter <i>så ökar dina freespins med ett</i>.</p>


                    <h6>Några svenska casinon där du kan spela Piggy Riches Megaways</h6></div>
                <div className="casino-wrap">
                    {topCasinon.pigmeg.slice(0, casinoSize.pigmeg).map((casino) =>
                        < Casinon
                            key={'monte' + casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                        />)}
                </div>

                {casinoSize.pigmeg >= topCasinon.pigmeg.length ? (
                    <div className="no-more-bonuses">
                        <StyledButton
                            className="show-less-btn"
                            onClick={() => { setCasinoSize({ ...casinoSize, pigmeg: 2 }); getUp() }}
                        >
                            Finns inte fler casinon att visa  {" "}
                        </StyledButton>
                    </div>
                ) : (

                        <div className="morebonus-box">
                            <StyledButton
                                className="button-recension blink"
                                onClick={() => { setCasinoSize({ ...casinoSize, pigmeg: (casinoSize.pigmeg) + 5 }) }}
                            >
                                Ladda fler casinon{" "}
                            </StyledButton>
                        </div>
                    )}

                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, pigmeg: !isOpen.pigmeg }); getUp() }} > Stäng Piggy Riches MegaWays

</StyledCloseButton>
            </StyledDiv>
        </Collapse>


        <StyledSlotButton onClick={() => { setIsOpen({ ...isOpen, monte: !isOpen.monte }) }} > Montezuma MegaWays - Nu med ännu fler vinstlinjer!

    </StyledSlotButton>
        <Collapse isOpen={isOpen.monte} >
            <StyledDiv >
                <h2>Montezuma Megaways - Nu med ännu fler vinstlinjer!</h2>
                <img className="slot-img" src="/images/montezumaslot.png" alt="montezumamegaway nyslot2020" />
                <ul>
                    <li>RTP: <b>96.17%</b></li>
                    <li>Max-vinst(mynt): <b>250 000</b></li>
                    <li>Vinstlinjer:<b>117 649</b></li>
                </ul>
                <div className="slot-review"><p> Det är WMS som står bakom spelet. Klassiska Montezuma blev otroligt populärt med sitt bonusspel. Nu släpper SG Interactive en uppdatering av sloten. På varje spin så har du chans på upp till 117,649 sätt att vinna.</p>


                    <p>Spelet består utav 6 huvud rader. Rad 1 och 6 kan ha mellan 2-7 symboler per spin. Rad 2,3,4,5 visar mellan 2-6 symboler på varje enskild rad. Utöver 6 huvudrader så finns det även ett top-hjul, som är som en extra rad för hjul 2 till 5. När man får in en eller flera kombinationer så exploderar symbolerna och nya faller ner.</p>

                    <h4>Montezuma Megaways Bonus</h4>
                    <p>Spelet innehåller så kallade scatters. Skulle du få 3 eller fler scatters vart som helst på spelet så triggas bonusen igång. När du kommer in på bonusen så snurrar det ett hjul som visar hur många freespins du får. Varje gång du får in minst 1 kombination under freespins så ökar multipliceringen på vinsten. Skulle du få två stycken scatters under freespins så aktiveras multipliceringshjulet. Hjulet snurrar och du kan få upp till 20x i multiplicering på varje vinst. Varje bonusrunda garanterar minst 30x. </p>


                    <h6>Några svenska casinon där du kan spela Montezuma Megaway</h6></div>
                <div className="casino-wrap">
                    {topCasinon.monte.slice(0, casinoSize.monte).map((casino) =>
                        < Casinon
                            key={'monte' + casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                        />)}
                </div>

                {casinoSize.monte >= topCasinon.monte.length ? (
                    <div className="no-more-bonuses">
                        <StyledButton
                            className="show-less-btn"
                            onClick={() => { setCasinoSize({ ...casinoSize, monte: 2 }); getUp() }}
                        >
                            Finns inte fler casinon att visa  {" "}
                        </StyledButton>
                    </div>
                ) : (

                        <div className="morebonus-box">
                            <StyledButton
                                className="button-recension blink"
                                onClick={() => { setCasinoSize({ ...casinoSize, monte: topCasinon.monte.length }) }}
                            >
                                Visa alla casinon{" "}
                            </StyledButton>
                        </div>
                    )}

                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, monte: !isOpen.monte }); getUp() }} > Stäng Montezuma MegaWays

</StyledCloseButton>
            </StyledDiv>
        </Collapse>


        <StyledSlotButton onClick={() => { setIsOpen({ ...isOpen, monmeg: !isOpen.monmeg }) }} > Monopoly MegaWays - 117 649 vinstlinjer!
</StyledSlotButton>
        <Collapse isOpen={isOpen.monmeg} >
            <StyledDiv>
                <h2>Monopoly MegaWays - 117 649 vinstlinjer!</h2>
                <img className="slot-img" src="/images/molopolyslot.png" alt="Monopoly MegaWays img" />
                <ul>
                    <li>RTP: <b>96.39%</b></li>
                    <li>Max-vinst(mynt): <b>250 000</b></li>
                    <li>Vinstlinjer:<b>117 649</b></li>
                </ul>
                <div className="slot-review"><p>Ny favoritslot som är uppgraderad! Monopoly MegaWays har 117649 vinstlinjer. För varje vinst så tar Mr Monopoly några steg på brädan.  Spelet har otroligt många funktioner</p>
                    <p>Här är några av dem:</p>
                    <ul>
                        <li><b>Fastigheter</b>- Landar du på en fastighet på din tredje respons(vinst) så läggs ett hus där. Varje extra vinst tilldelar ett hus.</li>
                        <li><b>Tågstationer</b>-Första gången du landar på en tågstation äger du den</li>
                        <li><b>Statligt verk</b>- Första gången du landar på ett statligt verk äger du det</li>
                        <li><b>Go</b>-Varje gång du landar på GO sker en dragning på MAX MEGAWAYS med 117649 sätt att vinna. </li>
                        <li><b>Community Chest</b>-Landar du på kistan så kommer du via ett kort till en slumpmässig fastighet. Upp till 4 hus kan läggas till.</li>
                        <li><b>Chance</b>- Ger dig en slumpmässig dragning på antigen Freespins, MAX MEGAWAY eller till en slumpmässig fastighet</li>
                    </ul>



                    <h4>Monopoly MegaWays Bonus</h4>
                    <p>När du spelar freespins så gäller följande:</p>
                    <ul>
                        <li><b>Femte hus</b>- Varje gång ett femte hus läggs till får du 8 free spins</li>
                        <li><b>Funktioner</b>-Varje funktion, utöver den övre utlöser 3 freespins</li>
                        <li><b>1 Freespin</b>- Varje extra hus över fem ger dig 1 freespin</li>
                        <li><b>Tågstationen</b>-Ger dig 1 freespin. </li>
                        <li><b> Obegränsad Vinstmultiplikator</b>-För varje statligt verk så ökar multiplikatorn med 1. För varje hus på varje fastighet får ökar multiplikatorn med 1. </li>
                        <li><b>Efter freespins</b>-Tappar äganderätt på statliga verk och tågstationer. Alla fastigheter som ej besökts är kvar.</li>
                    </ul>

                    <p>Ett extremt roligt slotspel med väldigt många extra triggers och funktioner direkt hämtade från det klassiska brädspelet Monopol. Tror du att du kan äga flera fastigeter? In och prova.</p>

                    <h6>Några svenska casinon där du kan spela Monopoly MegaWays</h6></div>
                <div className="casino-wrap">
                    {topCasinon.monmeg.slice(0, casinoSize.monmeg).map((casino) =>
                        < Casinon
                            key={'exo' + casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                        />)}
                </div>

                {casinoSize.monmeg >= topCasinon.monmeg.length ? (
                    <div className="no-more-bonuses">
                        <StyledButton
                            className="show-less-btn"
                            onClick={() => { setCasinoSize({ ...casinoSize, monmeg: 2 }); getUp() }}
                        >
                            Finns inte fler casinon att visa{" "}
                        </StyledButton>
                    </div>
                ) : (

                        <div className="morebonus-box">
                            <StyledButton
                                className="button-recension blink"
                                onClick={() => { setCasinoSize({ ...casinoSize, monmeg: (casinoSize.monmeg + 5) }) }}
                            >
                                Ladda fler casinon{" "}
                            </StyledButton>
                        </div>
                    )}
                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, monmeg: !isOpen.monmeg }); getUp() }} > Stäng Monopoly MegaWays
</StyledCloseButton>
            </StyledDiv>
        </Collapse>


        <StyledSlotButton onClick={() => { setIsOpen({ ...isOpen, exo2: !isOpen.exo2 }) }} > Esqueleto Explosivo 2 - Upp till 64x!
</StyledSlotButton>
        <Collapse isOpen={isOpen.exo2} >
            <StyledDiv>
                <h2>Esqueleto Explosivo 2 - Upp till 64x!</h2>
                <img className="slot-img" src="/images/esqueleto2.png" alt="esqueleto Explosivo 2 img" />
                <ul>
                    <li>RTP: <b>96.13%</b></li>
                    <li>Max-vinst(mynt): <b>500 000</b></li>
                    <li>Vinstlinjer:<b>99</b></li>
                </ul>
                <div className="slot-review"><p>Esqueleto Explosivo 2 är ett spel med dödskallar. Spelet har 5 hjul och 99 möjligt vinslinjer. Varje omgång börjar med all dödskallarna faller ner. Får du in en vinstlinje så exploderar dödskallarna och nya faller ner, samtidigt som nivån på multiplikatorn ökar. Du kan se längst ner på spelet vilken nivå du ligger på. Multiplikatorn återställs till 1x så fårt du spelar en runda där du inte vinner på någon av linjerna.</p>

                    <p>Explosiva Wild är en wild som spränger alla omgivande symboler runt. Beroende på positionen av symbolen så är det minst 3 och max 8 symboler som den spränger. Den spränger dock ej högvinstsymboler och scatters. Skulle du få minst 3 scatters så utlöses bonusen. </p>



                    <h4>Esqueleto Explosivo 2 Bonus</h4>
                    <p>Väl inne i bonusen så belönas du med extre freespins ifall du skulle få minst 2 scatters. Var tredje wild som du får i bonusen , tilldelas 1 freespin samtidigt som lägsta multiplikatorn tas bort och nästa öppnas upp. I bonusen så öppnas det upp en ny högsta basmultiplikator, den ligger på 64x! För att nå den måste du får 32x som din basmultiplikator. Maximal vinst för bonusrundan är 5000x.</p>

                    <h6>Några svenska casinon där du kan spela Esqueleto Explosivo 2</h6></div>
                <div className="casino-wrap">
                    {topCasinon.exo2.slice(0, casinoSize.exo2).map((casino) =>
                        < Casinon
                            key={'exo' + casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                        />)}
                </div>

                {casinoSize.exo2 >= topCasinon.exo2.length ? (
                    <div className="no-more-bonuses">
                        <StyledButton
                            className="show-less-btn"
                            onClick={() => { setCasinoSize({ ...casinoSize, exo2: 2 }); getUp() }}
                        >
                            Finns inte fler casinon att visa  {" "}
                        </StyledButton>
                    </div>
                ) : (

                        <div className="morebonus-box">
                            <StyledButton
                                className="button-recension blink"
                                onClick={() => { setCasinoSize({ ...casinoSize, exo2: topCasinon.monte.length }) }}
                            >
                                Visa alla casinon{" "}
                            </StyledButton>
                        </div>
                    )}

                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, exo2: !isOpen.exo2 }); getUp() }} > Stäng Esqueleto Explosivo 2
</StyledCloseButton>
            </StyledDiv>
        </Collapse>




        <StyledSlotButton onClick={() => { setIsOpen({ ...isOpen, pros: !isOpen.pros }) }} > Prosperity Ox
</StyledSlotButton>
        <Collapse isOpen={isOpen.pros} >
            <StyledDiv>
                <h2>Prosperity Ox - 4096 Vinstlinjer</h2>
                <img className="slot-img" src="/images/ProsperityOx.png" alt="PRosperityOXslot" />
                <ul>
                    <li>RTP: <b>95.94%</b></li>
                    <li>Max-vinst(mynt): <b>96 640</b></li>
                    <li>Vinstlinjer:<b>4096</b></li>
                </ul>
                <div className="slot-review"><p>Prosperity Ox är ett spel från iSoftBet. Spelet har ett kinesiskt tema med väldigt snygg grafik. När du spelar på sloten så kan du få wilds, men endast i dem fyra raderna i mitten. För att få freespins så krävs det minst tre stycken Ox scatters</p>





                    <h4>Prosperity Ox Bonus</h4>
                    <p>Bonusrundan är freespins med extra multiplikation. Varje wild kan multipliceras med 2x eller 3x. För att få ytterligare freespins under bonusrundan så måste du få minst 3 st scatters. Du kan endast få 100 freespins extra under bonusrunda.</p>

                    <h6>Några svenska casinon där du kan spela Prosperity Ox</h6></div>
                <div className="casino-wrap">
                    {topCasinon.pros.map((casino) =>
                        < Casinon
                            key={'ox' + casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                        />)}
                </div>


                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, pros: !isOpen.pros }); getUp() }} > Stäng Prosperity Ox
</StyledCloseButton>
            </StyledDiv>
        </Collapse>


        <BottomInfoNyaSlots />
    </StyledWrapper >)
}

export default NyaSlots