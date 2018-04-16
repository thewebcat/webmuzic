import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import './scss/base.scss'
import App from "./containers/App/App";


render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById("app"));