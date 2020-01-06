import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { Container } from "reactstrap"
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.scss"

const Top5 = (props) => {


    useEffect(() => {


    }, [])



    return (<div>
        <Helmet>
            <title>Bästa Casinobonusar 2020 | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/Kampanjer-casino-2020" />
            <meta
                name="description"
                content="Kampanjer för casino 2020. Här lägger vi på Casinoniz ut våra kampanjer om casinon och de bästa casino bonusar för esport, sport och casino!."
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, kasino, kasinobonusar,välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, bästa casinon, bästa casinon 2020, top5 , top10 casino"
            />

        </Helmet>

        <Container>
            <section className="blogg">

                <h1 className="banners">Kampanjer casino 2020 </h1>
                <p>Nu är vi inne på ett nytt år och med det kommer det flera saker. Vi på Casinoniz önskar er en riktigt god fortsättning och därför har vi listat de fem bästa casinon för januari 2020.</p>

                <section className="blogg-wrap">

                    <h2>Våra kampanjer 2020</h2>





                </section>


            </section>
        </Container>
    </div>)
}

export default Top5