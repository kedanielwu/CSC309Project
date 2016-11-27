import React, { Component, PropTypes } from 'react';
export default class Listing extends Component {
  render() {
    return (
      <li>{this.props.listing.text}</li>
    );
  }
}

Listing.propTypes = {
  listing: PropTypes.object.isRequired,
};

