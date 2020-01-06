import React, { useState } from "react";
import sweflag from "../images/sweflag.png"
import { Container, Alert } from "reactstrap"
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.scss"

const Top5 = (props) => {
    const [visible, setVisible] = useState(true)


    const onDismiss = () => {
        setVisible(false)
    }

    const Kampanj = (props) => {
        let { text, bild, publicerad, link } = props
        return (<div className="kampanj-div-wrap">
            <img src={bild} />
            <p>{text}...</p>
            <NavLink to={link}>Läs mer</NavLink>

            <small>{publicerad}</small>
        </div>)
    }


    return (<Container>
        <Helmet>
            <title>Bästa Casinobonusar 2020 | Casinokampanjer Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/Kampanjer-casino-2020" />
            <meta
                name="description"
                content="Kampanjer för casino 2020. Här lägger vi på Casinoniz ut våra kampanjer om casinon och de bästa casino bonusar för esport, sport/odds och casino!."
            />
            <meta
                name="keywords"
                content="Casino, Casinobonusar, kasino, kasinobonusar,välkomstbonus, 2019,2020, bonus, spela, insättningsbonus, free spins, faktura casino, casino faktura, bästa casinon, bästa casinon 2020, top5 , top10 casino"
            />

        </Helmet>


        <section className="blogg">
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
            <h1 className="banners">Kampanjer casino 2020 </h1>
            <p>Välkomna till Casinoniz kampanjer/casinoblogg. Här skriver vi ut allt som har med casinobonusar, betting, sports,esport, slots och massa annat. Typ allt som har med spel att göra. </p>

            <p>
                Hoppas att det vi skriver ut här får dig som läsare att finna det intressant :)
            </p>

            <section className="blogg-wrap">

                <h2>Våra kampanjer 2020</h2>

                <Kampanj text='Casinon vi listar här är några casinon som vi tycker sticker ut lite extra. Det vi har tänkt på när vi valde ut fem casinon är layouten, spelutbudet på slots, supporten och även' bild="/images/top5.png" publicerad="3 Januari 2020" link="5-basta-casinon-2020" />



            </section>


        </section>
    </Container>
    )
}

export default Top5