import React from "react";
import { Container } from "reactstrap"
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components"



const BloggSection = styled.section`
display: flex;
 justify-content:space-evenly;
 flex-wrap:wrap;
`

const StyledKampanj = styled.section`
justify-content:space-between;
display: flex;
  max-width: 320px;
  flex-direction: column;
  margin: 50px 0;
  -webkit-box-shadow: 3px 0px 13px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 0px 13px 0px rgba(0, 0, 0, 0.51);
  box-shadow: 3px 0px 13px 0px rgba(0, 0, 0, 0.51);
  border: 1px solid grey;
  padding: 10px;

  img {
    max-width: 320px !important;
    width: 100%;
    max-height: 180px !important;
  }

  a {
    text-align: center;
    color: white;

    font-size:16px;
    background-color:#214467;
  }
.readmore-blogg{
    margin-bottom:5px;
    border-radius:9px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:30px;
}
  small {
    padding: 10px;
    border-top: 1px solid lightgrey;
  }
`

const NewsSection = (props) => {





  const Kampanj = (props) => {
    let { text, bild, publicerad, link } = props
    return (<StyledKampanj>
      <NavLink to={link}><img src={bild} alt="blogg-img" /></NavLink>
      <p>{text}...</p>
      <NavLink className="readmore-blogg" to={link}>Läs mer</NavLink>

      <small>{publicerad}</small>
    </StyledKampanj>)
  }


  return (<Container>
    <Helmet>
      <title>Casino Nyheter 2020 » Nyheter Inom Svenska Casinobranschen | Casinoniz</title>
      <link rel="canonical" href="https://www.casinoniz.se/casino-nyheter" />
      <meta
        name="description"
        content="Senaste svenska casino nyheter 2020 ➼ Här lägger vi på Casinoniz ut några nyheter om vad som sker inom casinobranschen. Vill du hålla dig uppdaterad om vilka casinon som t.ex. blir av med sin svenska spellicens eller liknande så hittar du det här."
      />
      <meta
        name="keywords"
        content="Casino, Casinobonusar, kasino, kasinobonusar,välkomstbonus, 2019,2020, casinonyheter,nyheter om casino, casinoblogg, kasinonyheter,casinonews"
      />

    </Helmet>


    <section className="blogg">

      <h1 className="banners">Casino nyheter 2020 </h1>
      <p>Vill du hålla dig uppdaterad om nyheter inom casinobranschen ? Här har vi en liten nyhetssida där vi släpper intressanta nyheter om vad som händer inom casinobranschen.  Hoppas att det vi skriver ut här får dig som läsare att finna det intressant :) </p>


      <h2>Casino Nyheter 2020</h2>
      <BloggSection>


        <Kampanj text='Det kanske har märkts att det varit ganska tyst från det populära onlinecasinot Ninjacasino.se. Casinot blev av med sin svenska spellicens den 17 juni 2019 sedan spelinspektionen upptäckt allvarliga brister gällande arbetet mot penningtvätt och spelansvar' bild="/images/mininja.png" publicerad="29 Januari 2020" link="/ninjacasino-aterkomst" />







      </BloggSection>


    </section>
  </Container>
  )
}

export default NewsSection