import React, { Component } from 'react';
import './assets/scss/include.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class App extends Component {
  state = {
    modalIsOpen: false,
  }

  render () {
    return (
      <div className="blueBackgroundColor">
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}

export default App;
