import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './containers/Landing';
import Survey from './containers/Survey';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/" component={Landing}/> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
