import React from 'react';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import login from './frontend/login';
import signup from './frontend/signup';
import HomePage from './frontend/HomePage.js';
import MyCard from './frontend/MyCard.js';
import About from './frontend/About.js';


function App() {
 
  return (
    <Router>
      <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={signup} />
          <Route path="/card" component={MyCard} />
          <Route path="/" component={login}/>          
      </Switch>
    </Router>
  );
}

export default App;


 // function handle(){
  //   axios.get("/card").then(res=>{console.log(res.data[0].name)})
  // }