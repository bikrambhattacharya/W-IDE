import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
//Relative Imports

import Dashboard from './routes/dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Dashboard}/>
      </Router>
    );
  }
}

export default App;
