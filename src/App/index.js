import React, { useEffect, useState } from 'react';
import Casinolist from "../data/casinoList.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "../StartPage/index";
import NavBarApp from "../Navbar/index";
import Recension from "../Recension/index"
import Footer from "../Footer/index"
import Esport from "../Esport/index"
import { Container, Alert } from "reactstrap"
import CasinoMedFaktura from "../CasinoMedFaktura/index"
import RedirectComp from '../RedirectComp/index';
import Sports from "../Sports/index"
import Terms from "../Terms/index"
import Policy from "../Policy/index"
import NotFoundPage from "../NotFoundPage/index"
import Top5 from "../Blogg/Top5"
import TopButton from "../TopButton/index"
import Blogg from "../Blogg/index"
import MinstaInsCasino from "../Blogg/MinstaInsCasino/index"
import NyaCasino from "../Blogg/NyaCasinon/index"
import NyaSlots from "../Blogg/NyaSlots/index"
import TrustlyCasino from "../CasinonMed/Trustly"
import SwishCasino from "../CasinonMed/Swish"
import PaysafeCasino from "../CasinonMed/Paysafe"
import "./style.scss"
import sweflag from "../images/sweflag.png"
import Casinobonuscomp from '../CasinonMed/Casinobonusar/index.js';
import News from "../CasinoBlogg/News"
import NewsSection from '../CasinoBlogg/index.js';





const App = () => {

    const [adBlockEnabled, setAdBlock] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let testAd2 = document.createElement('div');
        testAd2.innerHTML = '&nbsp;'
        testAd2.className = 'adsBanner ad ads doubleclick';

        let testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        document.body.appendChild(testAd2);
        if (testAd.offsetHeight === 0 || testAd2.clientHeight === 0) {
            setAdBlock(true)
        }
        testAd.remove();
        testAd2.remove()


    }, [])

    const onDismiss = () => {
        setVisible(false)
    }


    const Go = () => {
        return <h6>Redirecting....</h6>
    }


    return (
        <Router>

            <div className="App">

                <TopButton />
                {window.location.pathname.includes('/redirect') ? '' : <NavBarApp />}



                <Container className="app-container">


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



                    {adBlockEnabled ? <span className="blocker">OBS! Du har en Adblocker aktiverad. Sidan kan bete sig lite annorlunda än vanligt. </span> : ''}
                    <Switch>
                        <Route exact path="/" render={(props) => (<Startpage start={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route exact path="/recension/:casinotitle" render={(props) => (<Recension list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/esportbetting" render={(props) => (<Esport list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/faktura-casino" render={(props) => (<CasinoMedFaktura list={Casinolist} isBlocked={adBlockEnabled}  {...props} />)} />
                        <Route path="/casino-trustly" render={(props) => (<TrustlyCasino list={Casinolist} isBlocked={adBlockEnabled}  {...props} />)} />
                        <Route path="/casino-bonus" render={(props) => (<Casinobonuscomp list={Casinolist} isBlocked={adBlockEnabled}  {...props} />)} />
                        <Route path="/casino-swish" render={(props) => (<SwishCasino list={Casinolist} isBlocked={adBlockEnabled}  {...props} />)} />
                        <Route path="/casino-paysafecard" render={(props) => (<PaysafeCasino list={Casinolist} isBlocked={adBlockEnabled}  {...props} />)} />
                        <Route path="/Redirect/:casinotitle" render={(props) => (<RedirectComp list={Casinolist}  {...props} />)} />
                        <Route path="/odds" render={(props) => (<Sports list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/kampanjer-casino-2020" component={Blogg} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/policy" component={Policy} />


                        {/* BLOGG */}
                        <Route path="/5-basta-casinon-2020" render={(props) => (<Top5 list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/minsta-insattning-casino" render={(props) => (<MinstaInsCasino list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/nya-casino-2020" render={(props) => (<NyaCasino list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/nya-slots-2020" render={(props) => (<NyaSlots list={Casinolist} isBlocked={adBlockEnabled} {...props} />)} />
                        <Route path="/casino-nyheter/" render={(props) => (<NewsSection  {...props} />)} />
                        <Route path="/nyheter/:news" render={(props) => (<News  {...props} />)} />
                        <Route path="/Go/:casinotitle" render={(props) => (<Go />)} />
                        <Route path="/*" component={NotFoundPage} />
                    </Switch>


                </Container>
                <Footer />
            </div>


        </Router>
    );
}


export default App