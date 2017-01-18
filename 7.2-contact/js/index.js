import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Welcome from './Welcome'
import Home from './Home'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Welcome } />
        <Route path="/home" component={ Home } />
        // <Route path="/post" component={ Post } />
        // <Route path="/projects" component={ Projects } />
        // <Route path="/resume" component={ Resume } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
