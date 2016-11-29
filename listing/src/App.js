import React, { Component } from 'react'; 
//import is ES6 equivalent to require

import Navbar from './Navbar';
import Listing from './Listing';
import Comments from './Comments';

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
          <Listing />
          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
