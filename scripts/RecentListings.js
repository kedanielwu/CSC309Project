import React, { Component } from 'react';
var $ = require("jquery");

class RecentListings extends Component {
  render() {
    return (
      <div id="recent">
        <h2>Recent Listings</h2>
          <ul>
            <li>
              <div id="listing-box">
                <div id="listing-info">
                  <p>Listing Title</p>
                  <p id="date"> Created on 2016-11-27 by annetran </p>
                </div>

                <div id="listing-image">
                   <img src="http://tinyurl.com/hgq23rc" alt="used books"/>
                </div>

                <div id="listing-descr">
                  <p>Description: </p>
                  <p id="descr">Used textbooks</p>
                  <p> Price: $50</p>
                </div>
              </div>
            </li>
            <li>
              <div id="listing-box">
                <div id="listing-info">
                  <p>Listing Title</p>
                  <p id="date"> Created on 2016-11-27 by annetran </p>
                </div>

                <div id="listing-image">
                   <img src="http://tinyurl.com/hgq23rc" alt="used books"/>
                </div>

                <div id="listing-descr">
                  <p>Description: </p>
                  <p id="descr">Used textbooks</p>
                  <p> Price: $50</p>
                </div>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

export default RecentListings;
