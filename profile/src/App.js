import React, { Component } from 'react'; 
//import is ES6 equivalent to require

import Navbar from './Navbar';
import Profile from './Profile';
import Comments from './Comments';
import UserListings from './UserListings';

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
          <Profile />
          <UserListings />
          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
