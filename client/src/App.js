// IMPORTS
import React from "react";
import Flavors from "./components/Flavors";
import FlavorForm from './components/FlavorForm';
import Home from './components/Home'
import Navbar from './components/Navbar';
import FlavorView from './components/FlavorView'

import { Route, Switch } from 'react-router-dom';

// IMPORTS

class App extends React.Component {
  // STATE
  
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/flavors' component={Flavors}/>
          <Route exact path='/flavors/:id' component={FlavorView}/>
        </Switch>
      </>
    )
  }
}

// EXPORT
export default App;
// CAN PUT MORE UNDER HERE ----> IF IT PERTAINS TO THIS COMPONENT.
