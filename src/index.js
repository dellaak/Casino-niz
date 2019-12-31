import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App/index";
import 'bootstrap/dist/css/bootstrap.css';
import "typeface-exo-2"
import "typeface-open-sans"
import "typeface-righteous"
import "@openfonts/manjari_malayalam"


import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
    onUpdate: registration => {
        const waitingServiceWorker = registration.waiting

        if (waitingServiceWorker) {
            waitingServiceWorker.addEventListener("statechange", event => {
                if (event.target.state === "activated") {
                    window.location.reload()
                }
            });
            waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        }
    }
});
