import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './Home'
import Contacts from './Contacts'



render(
  (
    <Router history={hashHistory}>
        <Route path="/" component={ Home } /> 
        <Route path="/:name/:email/:phone/:location" component={ Contacts } />
    </Router>
  ),
  document.getElementById('app')
)
