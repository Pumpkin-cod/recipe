import React from 'react';
import CakesicleList from './components/CakesicleList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
    <Switch>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </Switch>
      <CakesicleList />
    </div>
  )
}

export default App

