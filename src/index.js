import React from 'react';
import Router from 'react-router';

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body)
});
