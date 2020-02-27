import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Container } from "reactstrap"

import { Helmet } from "react-helmet";
import BottomInfoNyaSlots from "../../AllBottomInfo/BottomInfoNyaSlots"
import Slotlist from "./nyaslots.json"
import NewSlotComp from "./NewSlotComp"


const NyaSlots = (props) => {

    const [slotLists, setSlotLists] = useState({ coming: [], outnow: [] })


    useEffect(() => {
        let slots = [...Slotlist.Slots]
        let list = []
        let coming = []
        slots.filter(i => {
            if (!i.coming) {
                list.push(i)
            } else {
                coming.push(i)
            }
        })

        return setSlotLists({ coming: coming, outnow: list })
    }, [Slotlist.Slots]);

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

    const StyledKommande = styled.div`
display:flex;
flex-direction:column;
border-bottom:3px solid lightgray;
border-top:3px solid lightgray;
border-radius:9px;
padding:10px 0 ;
margin:10px 0 ;
text-align:center;
h2{
    text-align:center;
    font-size:18px;
}

ul{
    list-style:none;
}


`



    return (<StyledWrapper>
        <Helmet>
            <title>Nya Slots 2020 » Prova Årets Hetaste Slots🔥 | Casinoniz</title>
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
        <small> Uppdaterad: 27 Februari 2020</small>

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
            {slotLists.coming.length === 0 ?
                <h3>Inga kommande slots</h3> :
                slotLists.coming.slice(0).reverse().map((slot, e) =>
                    < NewSlotComp
                        key={slot.id}
                        slot={slot}
                        casino={props.list.Casinon}
                    />
                )
            }
        </StyledKommande>


        {slotLists.outnow.slice(0).reverse().map((slot, e) =>
            < NewSlotComp
                key={slot.id}
                slot={slot}
                casino={props.list.Casinon}
            />
        )}






        <BottomInfoNyaSlots />
    </StyledWrapper >)
}

export default NyaSlots