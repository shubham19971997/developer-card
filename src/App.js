import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from 'react-router-dom'
import login from './frontend/login'
import signup from './frontend/signup'
import HomePage from './frontend/HomePage.js'
import MyCard from './frontend/MyCard.js'
import About from './frontend/About.js'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

function App() {
  // const location = useLocation()
  // console.log(location)
  return (
    <Router>
      {/* <TransitionGroup>
        <CSSTransition timeout={250} classNames='fade' key={location.key}> */}
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={signup} />
            <Route path='/card' component={MyCard} />
            <Route path='/' component={login} />
          </Switch>
        {/* </CSSTransition>
      </TransitionGroup> */}
    </Router>
  )
}

export default App

// function handle(){
//   axios.get("/card").then(res=>{console.log(res.data[0].name)})
// }
