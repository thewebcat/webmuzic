import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Artists from '../containers/Artists'
import ArtistAlbums from '../containers/ArtistAlbums'

const ArtistsPage = () => (
  <Switch>
    <Route exact path='/artists' component={Artists}/>
    <Route path='/artists/:number' component={ArtistAlbums}/>
  </Switch>
);

export default ArtistsPage