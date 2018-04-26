import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Albums from '../containers/Albums'
import AlbumDetails from '../containers/AlbumDetails'

const AlbumsPage = () => (
  <Switch>
    <Route exact path='/albums' component={Albums}/>
    <Route path='/albums/:number' component={AlbumDetails}/>
  </Switch>
);

export default AlbumsPage