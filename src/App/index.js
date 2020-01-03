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
import NotFoundPage from "../NotFoundPage/index"
import Top5 from "../Blogg/Top5"
import TopButton from "../TopButton/index"

const App = () => {

    let w = window.innerWidth
    let d = 2200

    return (
        <Router>

            <div className="App">
                <TopButton />
                <NavBarApp />
                <Container fluid={w < d ? true : false}>
                    <main>
                        <Switch>
                            <Route exact path="/" render={(props) => (<Startpage start={Casinolist}  {...props} />)} />
                            <Route exact path="/Recension/:casinotitle" render={(props) => (<Recension list={Casinolist}  {...props} />)} />
                            <Route path="/Esportbetting" render={(props) => (<Esport list={Casinolist}  {...props} />)} />
                            <Route path="/faktura-casino" render={(props) => (<CasinoMedFaktura list={Casinolist}  {...props} />)} />
                            <Route path="/Redirect/:casinotitle" render={(props) => (<RedirectComp list={Casinolist}  {...props} />)} />
                            <Route path="/odds" render={(props) => (<Sports list={Casinolist}  {...props} />)} />
                            <Route path="/Terms" component={Terms} />
                            <Route path="/Policy" component={Policy} />
                            <Route path="/5-bästa-casinon-2020" render={(props) => (<Top5 list={Casinolist}  {...props} />)} />
                            <Route path="*" component={NotFoundPage} />


                        </Switch>

                    </main>
                </Container>
                <Footer />

            </div>

        </Router>
    );
}


export default App