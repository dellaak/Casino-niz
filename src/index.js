import React from "react";
import { render } from 'react-snapshot';
import App from "./App/index";
import "./index.scss"
import 'bootstrap/dist/css/bootstrap.css';
import "typeface-exo-2"
import "typeface-open-sans"
import "typeface-righteous"
import "@openfonts/manjari_malayalam"
import TagManager from 'react-gtm-module'
import * as serviceWorker from './serviceWorker';



const tagManagerArgs = {
    gtmId: 'GTM-5QQXVLN'
}

TagManager.initialize(tagManagerArgs)



render(
    <App />,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister({
    // onUpdate: registration => {
    //     const waitingServiceWorker = registration.waiting

    //     if (waitingServiceWorker) {
    //         waitingServiceWorker.addEventListener("statechange", event => {
    //             if (event.target.state === "activated") {
    //                 window.location.reload()
    //             }
    //         });
    //         waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    //     }
    // }
});
