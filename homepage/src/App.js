import React, { Component } from 'react'; 
//import is ES6 equivalent to require

import Navbar from './Navbar';
import LoginSignup from './LoginSignup';
import RecentListings from './RecentListings';

require('./App.css');

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
      
        <div>
          <Navbar />
          <LoginSignup />
          <RecentListings />
        </div>
      </div>
    );
  }
}

export default App;
