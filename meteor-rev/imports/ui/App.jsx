import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Listing from './listing.jsx';
import {Listings} from '../api/listings.js'

class App extends Component {
    renderListing() {
        return this.props.listings((listing) => (<Listing key={listing._id} listing={listing}/>));
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Testing Field</h1>
                </header>
                <ul>
                    {this.renderListing()}
                </ul>
            </div>
        )
    }

}

App.propTypes = {
    listings: PropTypes.array.isRequired,
}

export default createContainer(() => {
    return {
        listings: Listings.find({}).fetch()
    }
}, App)
