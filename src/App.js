import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Citations from './pages/Citations';

function App() {

  

return (
<Router>
  <NavBar />
  <Switch>

    <Route path='/' exact component={ Home } />
    <Route path='/about' exact component={ About } />
    <Route path='/citations' exact component={ Citations } />
  
  
  </Switch>
  </Router>
  );
}

export default App;
