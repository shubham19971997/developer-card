import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import login from './frontend/login'
import signup from './frontend/signup'
import HomePage from './frontend/HomePage.js'
import MyCard from './frontend/MyCard.js'
import About from './frontend/About.js'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

function App() {
  return (
    <Router>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={signup} />
            <Route path='/card' component={MyCard} />
            <Route path='/' component={login} />
          </Switch>
    </Router>
  )
}

export default App
