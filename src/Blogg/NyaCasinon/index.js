import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Container } from "reactstrap"
import { Link } from "react-router-dom";
import Casinon from "../../Casinon/index"
import { Helmet } from "react-helmet";
// import "./style.scss"

const NyaCasino = (props) => {

    const [topArr] = useState(['luckyvegas'])
    const [topCasinon, setTopList] = useState([])


    useEffect(() => {

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let list = [...props.list.Casinon]
        let top = []


        list.filter(i => {
            i.title = i.title.toLowerCase()
            if (topArr.includes(i.title)) {
                top.push(i)
            }
            return list
        })

        top.sort(function (a, b) {

            return topArr.indexOf(a.title) - topArr.indexOf(b.title);
        });

        return setTopList(top)

    }, [props.list.Casinon, topArr])




    const StyledDiv = styled.div`
    padding: 0 20px;
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

    return (<div>
        <Helmet>
            <title>Nya Casino 2020 (På riktigt) - Alla med svensk licens | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/nya-casino-2020" />
            <meta
                name="description"
                content="Ny lista för nya casino 2020. Här hittar du nya lanserade casinon från 2020. Alla casinon är nya svenska casinon med licens. Vi kommer att uppdatera listan löpande. Så håll utkik!  "
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, bästa casinon,nya,publicerade,licenserade,svenska,casinon, bästa casinon 2020, top5 , top10 casino"
            />

        </Helmet>

        <Container>
            <div className="wrap-top5">

                <h1 className="banners">Nya Casino 2020 </h1>
                <small> Publicerad: 14 Januari 2020</small>
                <p>Nya casino 2020</p>
                <p>Vi listar nya casinon för detta året. Denna sektionen kommer uppdateras kontinuerligt så håll koll på denna sidan. Vi på Casinoniz.se tror att detta året kommer bjuda oss på nya spännande casinon med väldigt spännande teman. Senaste tiden så har casinon satsat väldigt hårt på sina teman. </p>

                <p>Det tycker vi är bra, vilket ger spelaren en helt ny spelupplevelse. Vi kommer endast lista nya casinon här.</p>
                <StyledDiv>

                    <h2>Nya casino - LuckyVegas</h2>
                    {topCasinon.length > 0 ? <div><p>LuckyVegas är först ut 2020. Bolaget som står bakom detta nya casinot är SkillOnNet som står bakom populära <Link to={{ pathname: `/Recension/PlayOjo`, match: `PlayOjo` }} >
                        PlayOJO</Link>. Casinot erbjuder en Las Vegas känsla på sin sida. LuckyVegas har svensk spellicens med det innebär det att alla vinster är skattefria.</p></div> : ''}
                    <div className="casino-wrap">
                        {topCasinon.slice(0, 1).map((casino) =>
                            < Casinon
                                key={casino.id + casino.title}
                                casino={casino}
                                isBlocked={props.isBlocked}
                            />)}
                    </div>
                </StyledDiv>



            </div>

        </Container>
    </div>)
}

export default NyaCasino