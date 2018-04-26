import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/base.scss'
import Index from "./containers/App";


render((
    <Router>
        <Index/>
    </Router>
), document.getElementById("app"));