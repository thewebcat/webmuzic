import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'

import AlbumsPage from './AlbumsPage'
import ArtistsPage from './ArtistsPage'
import Contacts from '../components/Contacts'


const Main = () => (
    <main role="main" className="pt-5">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/artists' component={ArtistsPage}/>
            <Route path='/albums' component={AlbumsPage}/>
            <Route path='/contact' component={Contacts}/>
        </Switch>
    </main>
);

export default Main