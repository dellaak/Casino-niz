import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Container, Alert } from "reactstrap"
import { NavLink } from "react-router-dom";
import Casinon from "../../Casinon/index"
import { Helmet } from "react-helmet";
import sweflag from "../../images/sweflag.png"
import "./style.scss"

const Top5 = (props) => {

    const [topArr] = useState(['casumo', 'snabbis', 'leovegas', 'storspelare', 'noaccountcasino'])
    const [topCasinon, setTopList] = useState([])
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        let list = [...props.list.Casinon]
        let top = []


        list.filter(i => {
            i.title = i.title.toLowerCase()
            if (topArr.includes(i.title)) {
                top.push(i)
            }
        })

        top.sort(function (a, b) {

            return topArr.indexOf(a.title) - topArr.indexOf(b.title);
        });

        return setTopList(top)

    }, [])

    const onDismiss = () => {
        setVisible(false)
    }


    const StyledDiv = styled.div`
    padding: 0 20px;
    border: 2px solid #fed100;
    border-radius:9px;
    flex-direction: column;
    margin: 40px 0;
    margin-bottom:0px ;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h2 {
    margin-top: 30px;
    }
    `


    const StyledCircle = styled.span`
height:50px;
width:50px;
border-radius:50%;
background-color:#214467;
position:absolute;
top:-25px;
left:-25px;
margin-bottom:5px;
color:#fed100;
text-align: center;
display: table-cell;
overflow: hidden;
vertical-align:middle;
font-size: 30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

    return (<div>
        <Helmet>
            <title>Bästa Casinobonusar 2020 | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/5-basta-casinon-2020" />
            <meta
                name="description"
                content="Vi listar de bästa casinon för 2020. Top 5 casinon som sticker ut 2020 i Januari. Med de bästa casinobonusar och casinon."
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, bästa casinon, bästa casinon 2020, top5 , top10 casino"
            />

        </Helmet>

        <Container>
            <div className="wrap-top5">
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
                <h1 className="banners">Fem bästa casinon 2020 </h1>
                <small> Publicerad: 3 Januari 2020</small>
                <p>Nu är vi inne på ett nytt år och med det kommer det flera saker. Vi på Casinoniz önskar er en riktigt god fortsättning och därför har vi listat de fem bästa casinon för januari 2020.</p>
                <p>Casinon vi listar här är några casinon som vi tycker sticker ut lite extra. Det vi har tänkt på när vi valde ut fem casinon är layouten, spelutbudet på slots, supporten och även bonusen. Kom ihåg att spela lugnt och att spel ska vara kul. Spela aldrig för mer än du har råd med!</p>
                <StyledDiv>
                    <StyledCircle >1</StyledCircle>
                    <h2>Casumo - Forfarande på toppen</h2>
                    {topCasinon.length > 1 ? <div><p>Casumo grundades 2012 på Malta av fem svenska killar. Sedan dess har de fått ta emot ett antal utmärkelser som t.ex. <i>Bästa mobilcasino</i>,<i>Online Casino Operator 2019</i>. Casinot har nyligen öppnat upp för spel på odds. Sidan är väldigt snygg och har en grym lekful design.Insättningar går på direkt via Trustly och uttagen tar några minuter. </p><p> Erbjuder just nu ett av marknadens bästa casino erbjudanden. En insättningsbonus på 100% upp till 20 000 SEK!. Erbjuder ett flertal insättningsmetoder samt även insättning via faktura. Har ett väldigt brett urval av slots.</p></div> : ''}
                    <div className="casino-wrap">
                        {topCasinon.slice(0, 1).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                            />)}
                    </div>
                </StyledDiv>



                <StyledDiv>
                    <StyledCircle >2</StyledCircle>
                    <h2>Snabbis - En riktigt utmanare 2020</h2>
                    {topCasinon.length > 1 ? <div><p>Snabbis är ett nytt casino som lanserade 2019 av Viral Interactive Ltd. Casinot har en väldigt snygg design och ett väldigt bra utbud av slots. Erbjuder endast insättningar via Trustly. Skulle man ha turen på sin sida så går det vädligt snabbt att du ut eventuella vinster. Går endast på några minuter och så har du vinsten på ditt bankkonto.</p><p> Casinot har ett grymt välkomsterbjudande på 100% upp till 1000kr + 150 freespins favoritspelen Gonzo Quest, Dead or Alive 2.Skulle man vilja spela på något annat än slots så erbjuder Snabbis även livecasino, blackjack, roulette, baccarat och poker. Odds är inte tillgänligt för Sverige just nu men vi tror att inom en snar framtid så har de även det.</p></div> : ''}
                    <div className="casino-wrap">
                        {topCasinon.slice(1, 2).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                            />)}
                    </div>
                </StyledDiv>


                <StyledDiv>
                    <StyledCircle >3</StyledCircle>
                    <h2>LeoVegas- Ultimata mobilcasinot</h2>
                    {topCasinon.length > 1 ? <div><p>LeoVegas grundades 2011 av två killar som ville göra det ultimata mobilcasinot. De lyckades. Dem tilldelades flera utmärkelser över åren. LeoVegas erbjuder ett grymt utbut av videoautomater med flertal jackpots. Skulle man vilja spela på något annat än slots så finns det även Roulette, Blackjack, Baccarat, Live Odds och Sports.</p><p>Just nu har LeoVegas ett väldigt generöst välkomsterbjudande. Dem erbjuder en insättningsbonus på 200% upp till 2000SEK och upp till 30 omsättningsfria Freespins! Du får själv välja mellan 5 slots på vilket spel du vill ha dina freespins på.</p></div> : ''}
                    <div className="casino-wrap">
                        {topCasinon.slice(2, 3).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                            />)}
                    </div>
                </StyledDiv>


                <StyledDiv>
                    <StyledCircle >4</StyledCircle>
                    <h2>Storspelare - För den erfarna spelaren</h2>
                    {topCasinon.length > 1 ? <div><p>Storspelare är en sida för de erfarna spelare. Casinot grundades 2017 och erbjuder spel på Slots, Hexapro Poker, bordsspel och live casino. Storspelare  drivs av Spooniker Ltd, samma bolag som driver t.ex. Unibet, Maria Casino m.fl.</p><p>Casinot erbjuder just nu en väldigt generös välkomstbonus. Insättningsbonus på 100 % upp till 500 kronor helt utan omsättningskrav på bonusen! </p></div> : ''}
                    <div className="casino-wrap">
                        {topCasinon.slice(3, 4).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                            />)}
                    </div>
                </StyledDiv>

                <StyledDiv>
                    <StyledCircle >5</StyledCircle>
                    <h2>NoAccountCasino - Grymma bonusar!</h2>
                    {topCasinon.length > 1 ? <div><p>NoAccountCasino är ett casino för den som vill spela smidigt och snabbt. Med väldigt snabba insättningar och uttag via betaltjänsten Trustly. NoAccountCasino lanserades 2015 och drivs av Mandalorian Technologies Ltd. Har ett väldigt brett utbud av slots och erbjuder även spel på Live Casino och Bordspel. Vill man spela på sport så kan man göra det på <NavLink to={{ pathname: `/Recension/NoAccountBet`, match: `NoAccountBet` }} >NoAccountBet</NavLink>.</p><p>Med en väldigt generös välkomstbonus. Sätt in 200 KR och få 400kr att spela för! Vinster är helt utan omsättningskrav!  </p></div> : ''}
                    <div className="casino-wrap">
                        {topCasinon.slice(4, 5).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                            />)}
                    </div>
                </StyledDiv>

            </div>

        </Container>
    </div>)
}

export default Top5