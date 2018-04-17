import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Artists from './Artists'
import Albums from './Albums'
import Contacts from './Contacts'


const Main = () => (
    <main role="main">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/artists' component={Artists}/>
            <Route path='/albums' component={Albums}/>
            <Route path='/contact' component={Contacts}/>
        </Switch>
    </main>
);

export default Main