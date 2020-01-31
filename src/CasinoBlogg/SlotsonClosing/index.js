import React from "react";
import { Container } from "reactstrap"
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom"
import '../style.scss'
require('typeface-muli')


const SlotsonClosing= () => {


    return (<Container className="wrapper-ninja">
        <Helmet>
            <title>Slotsons lägger ner sin verksamhet » Läs Casino Nyheter | Casinoniz</title>
            <link rel="canonical" href="https://www.casinoniz.se/slotsons-laggerner" />
            <meta
                name="description"
                content="Slotsons stänger ner sin verksamhet. Viral Interactive Limited har beslutat att stänga ner onlinecasinot Slotsons.com. Från och med 1 februari 2020 så stänger man registreringar hos casinot. "
            />
            <meta
                name="keywords"
                content="Slotsons, stänger, läggerner, avslutar,verksamhet,casino,onlinecasino,2020, stängs, avslut, nere, slutar"
            />
            <meta property="og:title" content="Slotsons stänger ner sin verksamhet!" />
            <meta property="og:description" content="Viral Interactive Limited har beslutat att stänga ner onlinecasinot Slotsons.com. Från och med 1 februari 2020 så stänger man registreringar hos casinot." />
            <meta property="og:image" content="https://www.casinoniz.se/images/slotson.png" />
            <meta property="og:url" content="https://www.casinoniz.se/slotsons-laggerner" />

            <meta name="twitter:title" content="Slotsons stänger ner sin verksamhet!" />
            <meta name="twitter:description" content="Viral Interactive Limited har beslutat att stänga ner onlinecasinot Slotsons.com. Från och med 1 februari ...." />
            <meta name="twitter:image" content="https://www.casinoniz.se/images/slotson.png" />

        </Helmet>



  
        <h1 >Slotsons.com stänger ner sin verksamhet! </h1>
        <img srcSet="/images/slotson.png 300w,
             /images/slotson.png 600w"
     sizes="(max-width: 500px) 300px,800px"
     src="/images/slotson.png"  alt="slotsonsclosing" />
        <small> Publicerad: 31 Januari 2020</small>
        <section className="news-section">
            <h2>Slotsons lägger ner sin verksamhet från den 1 februari.</h2>
            <p>Viral Interactive Limited har beslutat att stänga ner onlinecasinot Slotsons.com. Från och med 1 februari 2020 så stänger man registreringar hos casinot. Alla spelare som har ett aktivt konto kommer sedan att tillåtas ta ut sitt kvarvarande saldo.</p>
            <p> Varför Viral Interactive Limited lägger ner verksamheten vet vi inte helt säkert. Enligt källor så är det ett "styrelsebeslut att inte fortsätta verksamheten". Vi vet inte om det har något med den nya spellagen att göra. </p>

            <p>Slotsons.com har grundades 2018 och har sedan dess varit aktivt i två år. Casinot erbjöd spel på Slots, Live Casino och Bordsspel. Viral Interactive Limited har forfarande aktiva casinon som går väldigt bra som t.ex. <Link to="/recension/snabbis">Snabbis Casino</Link>.</p>

            <p>Alla frågor gällande Slotsons.com som uttag eller liknande hänvisar vi till Slotsons kundservice!</p>

        

        </section>



        <p className="kalla">Källor: Email konversation från Slotsons medarbetare. 
        </p>
        <p>"We regret to inform you that it has been decided to close down Slotsons.com.

As of 1st February 2020, Viral Interactive Limited will no longer accept registrations on Slotsons.com and existing players will be asked to login and withdraw their balances."</p>
<p>Ett screenshot från Slotsons medarbetare under (med texten som står ovan).</p>
        <img srcSet="/images/mailslots.png 300w,
             /images/mailslots.png 600w"
     sizes="(max-width: 500px) 300px,800px"
     src="/images/mailslots.png"  alt="slotsonsclosingmail" />
    </Container>)
}

export default SlotsonClosing