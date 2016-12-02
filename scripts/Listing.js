import React, { Component } from 'react'; 
//import is ES6 equivalent to 
var $ = require("jquery");

import Navbar from './Navbar';

require('./App.css');

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
