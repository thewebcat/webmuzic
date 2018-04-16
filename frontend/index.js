import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/base.scss'
import App from "./containers/App/App";


render((
    <Router>
        <App/>
    </Router>
), document.getElementById("app"));