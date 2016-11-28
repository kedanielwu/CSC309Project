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
      items: {
        1: {
          id: 1,
          name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
          price: 57.71,
          quantity: 1,
        },
        2: {
          id: 2,
          name: 'React: Up & Running: Building Web Applications',
          price: 42.81,
          quantity: 1,
        },
      },
    };

    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(id, newQuantity) {
    const newItem = Object.assign({}, this.state.items[id], {
      quantity: newQuantity,
    });

    this.setState({
      items: Object.assign({}, this.state.items, {
        [id]: newItem,
      }),
    });
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
