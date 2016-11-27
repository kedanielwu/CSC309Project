import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import app from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('stage-1'));
});

