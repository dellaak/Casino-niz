import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index";
import 'bootstrap/dist/css/bootstrap.css';
import "typeface-exo-2"
import "typeface-open-sans"
import "typeface-righteous"
import "@openfonts/manjari_malayalam"


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
