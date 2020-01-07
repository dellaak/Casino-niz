import React, { useEffect, useRef } from 'react';
import Casinolist from "../data/casinoList.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "../StartPage/index";
import NavBarApp from "../Navbar/index";
import Recension from "../Recension/index"
import Footer from "../Footer/index"
import Esport from "../Esport/index"
import { Container } from "reactstrap"
import CasinoMedFaktura from "../CasinoMedFaktura/index"
import RedirectComp from '../RedirectComp/index';
import Sports from "../Sports/index"
import Terms from "../Terms/index"
import Policy from "../Policy/index"
import NotFoundPage from "../NotFoundPage/index"
import Top5 from "../Blogg/Top5"
import TopButton from "../TopButton/index"
import "./style.scss"
import Blogg from "../Blogg/index"

const App = () => {
    let adBlockEnabled = useRef(false);


    let testAd = document.createElement('div');
    testAd.innerHTML = '&nbsp;';
    testAd.className = 'adsbox';
    document.body.appendChild(testAd);

    if (testAd.offsetHeight === 0) {
        adBlockEnabled.current = true;
    }
    testAd.remove();


    let w = window.innerWidth
    let d = 2200

    return (
        <Router>

            <div className="App">
                <TopButton />
                {window.location.pathname.includes('/redirect') ? '' : <NavBarApp />}
                <div className="myMain">


                    <Container fluid={w < d ? true : false}>
                        <main>
                            {adBlockEnabled.current ? <span className="blocker">OBS! Du har en Adblocker aktiverad. Sidan kan bete sig lite annorlunda än vanligt. </span> : ''}
                            <Switch>
                                <Route exact path="/" render={(props) => (<Startpage start={Casinolist} isBlocked={adBlockEnabled.current} {...props} />)} />
                                <Route exact path="/Recension/:casinotitle" render={(props) => (<Recension list={Casinolist} isBlocked={adBlockEnabled.current} {...props} />)} />
                                <Route path="/Esportbetting" render={(props) => (<Esport list={Casinolist} isBlocked={adBlockEnabled.current} {...props} />)} />
                                <Route path="/faktura-casino" render={(props) => (<CasinoMedFaktura list={Casinolist} isBlocked={adBlockEnabled.current}  {...props} />)} />
                                <Route path="/Redirect/:casinotitle" render={(props) => (<RedirectComp list={Casinolist}  {...props} />)} />
                                <Route path="/odds" render={(props) => (<Sports list={Casinolist} isBlocked={adBlockEnabled.current} {...props} />)} />
                                <Route path="/Kampanjer-casino-2020" component={Blogg} />
                                <Route path="/Terms" component={Terms} />
                                <Route path="/Policy" component={Policy} />
                                <Route path="/5-basta-casinon-2020" render={(props) => (<Top5 list={Casinolist} isBlocked={adBlockEnabled.current} {...props} />)} />
                                <Route path="*" component={NotFoundPage} />


                            </Switch>

                        </main>
                    </Container>
                    <Footer />
                </div>
            </div>

        </Router>
    );
}


export default App