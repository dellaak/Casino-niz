import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Container, Button, Collapse } from "reactstrap"
import Casinon from "../../Casinon/index"
import { Helmet } from "react-helmet";
import BottomInfoNyaSlots from "../../AllBottomInfo/BottomInfoNyaSlots"


const NyaSlots = (props) => {

    const [slotCasinon] = useState({ monte: ['mrgreen', 'betsafe', 'leovegas', 'prankcasino', 'noaccountcasino'], exo2: ['casumo', 'vera&john', 'prankcasino', 'noaccountcasino'], pros: ['leovegas'], monmeg: ['casimba', 'videoslots', 'karlcasino', 'mrgreen', 'leovegas', 'sverigeautomaten', 'betsafe', 'betsson', 'vera&john', 'gogocasino', 'prankcasino', 'noaccountcasino', 'hyper', 'dreamz', 'voodoodreams'] })
    const [casinoSize, setCasinoSize] = useState({ monte: 2, monmeg: 2, exo2: 2 })
    const [topCasinon, setTopList] = useState({ monte: [], exo2: [], pros: [], monmeg: [] })
    const [isOpen, setIsOpen] = useState({ monte: false, exo2: false, pros: false, monmeg: false })

    useEffect(() => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let list = [...props.list.Casinon]
        let monte = []
        let exo2 = []
        let pros = []
        let monmeg = []



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
            return list
        })




        return setTopList({ monte: monte, exo2: exo2, pros: pros, monmeg: monmeg })

    }, [props.list.Casinon, slotCasinon])


    const StyledWrapper = styled(Container)`
    display:flex;
    background-color:white;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin:0 auto;
    font-family: "Roboto", sans-serif;
    .btn-title{
        text-align:center;
    }
    `

    const StyledDiv = styled.div`
    border-bottom:5px solid lightgrey;
    display:flex;
    padding: 10px 20px;
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
background-color: lightcoral !important;
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



    return (<StyledWrapper>
        <Helmet>
            <title>Nya Slots 2020 ➼ Prova Årets Hetaste Slots | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/nya-slots-2020" />
            <meta
                name="description"
                content="Nya Slots 2020 ➼ Prova årets nyaste och hetaste videoslots. Vi listar svenska casinon som släpper nya och grymma slots. Vi kommer att uppdatera listan löpande. Så håll utkik!  "
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, välkomstbonus, 2019,2020, bonus, spela, insättningsbonus,videoslots,nytt free spins, faktura casino, casino faktura, bästa casinon,nya,publicerade,licenserade,svenska,casinon, bästa casinon 2020, nya slots 2020, videospel,"
            />

        </Helmet>



        <h1 className="banners">Nya Slots 2020 </h1>
        <small> Publicerad: 22 Januari 2020</small>

        <h2>Nya Slots 2020 - Lista på nya grymma videoslots för 2020</h2>
        <p>Nya slots 2020 som är värda att nämna. Denna sektionen kommer uppdateras kontinuerligt så håll koll på denna sidan. Vi på Casinoniz.se tror att detta året kommer bjuda på många nya videoslots med väldigt spännande och grymma upplevelser. </p>

        <p>Här kommer vi lista nya slots från detta året. Listan kommer att uppdateras med slots som vi på Casinoniz tycker är värda att nämna. Klicka på namnet på önskad slot för läsa mer om spelet!</p>

        <h2 className="btn-title">Klicka på knapparna för mer information om enskild slot</h2>
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


                    <h6>Här är några casinon där du kan spela Montezuma Megaway</h6></div>
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
                            onClick={() => { setCasinoSize({ ...casinoSize, monte: 2 }) }}
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

                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, monte: !isOpen.monte }) }} > Stäng Montezuma MegaWays

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

                    <h6>Här är några casinon där du kan spela Monopoly MegaWays</h6></div>
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
                            onClick={() => { setCasinoSize({ ...casinoSize, monmeg: 2 }) }}
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
                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, monmeg: !isOpen.monmeg }) }} > Stäng Monopoly MegaWays
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

                    <h6>Här är några casinon där du kan spela Esqueleto Explosivo 2</h6></div>
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
                            onClick={() => { setCasinoSize({ ...casinoSize, exo2: 2 }) }}
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

                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, exo2: !isOpen.exo2 }) }} > Stäng Esqueleto Explosivo 2
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

                    <h6>Här är några casinon där du kan spela Prosperity Ox</h6></div>
                <div className="casino-wrap">
                    {topCasinon.pros.map((casino) =>
                        < Casinon
                            key={'ox' + casino.id + casino.title}
                            casino={casino}
                            isBlocked={props.isBlocked}
                        />)}
                </div>


                <StyledCloseButton onClick={() => { setIsOpen({ ...isOpen, pros: !isOpen.pros }) }} > Stäng Prosperity Ox
</StyledCloseButton>
            </StyledDiv>
        </Collapse>

        <p className="update-text">Senast uppdaterad: 22 Januari 2020</p>
        <BottomInfoNyaSlots />
    </StyledWrapper >)
}

export default NyaSlots