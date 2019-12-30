import React from 'react';
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


const App = () => {

    let w = window.innerWidth
    let d = 2200

    return (
        <Router>

            <div className="App">
                <NavBarApp />
                <Container fluid={w < d ? true : false}>
                    <main>
                        <Switch>
                            <Route exact path="/" render={(props) => (<Startpage start={Casinolist}  {...props} />)} />
                            <Route path="/Recension" render={(props) => (<Recension list={Casinolist}  {...props} />)} />
                            <Route path="/Esportbetting" render={(props) => (<Esport list={Casinolist}  {...props} />)} />
                            <Route path="/faktura-casino" render={(props) => (<CasinoMedFaktura list={Casinolist}  {...props} />)} />
                            <Route path="/Redirect/:casinotitle" render={(props) => (<RedirectComp list={Casinolist}  {...props} />)} />
                            <Route path="/odds" render={(props) => (<Sports list={Casinolist}  {...props} />)} />
                            <Route path="/Terms" component={Terms} />
                            <Route path="/Policy" component={Policy} />
                            {/* <Route path="/Esportbetting" component={Esport} />
                
                <Route path="/odds" component={Sports} />
                <Route path="/Terms" component={Terms} />
                <Route path="/Policy" component={Policy} />
               
                <Route exact path="/Redirect/:casinotitle" component={RedirectComp} />
                <Route path="/RedirectEsport" component={RedirectEsport} />
                <Route exact path="/RedirectEsport/:casinotitle" component={RedirectEsport} />
                <Route path="/Recension" component={Recension} />
                <Route exact path="/Recension/:casinotitle" component={Recension} />
                <Route path="*" component={NotFoundPage} /> */}
                        </Switch>

                    </main>
                </Container>
                <Footer />

            </div>

        </Router>
    );
}


export default App