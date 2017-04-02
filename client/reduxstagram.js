import React from 'react';
import {render} from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import Main from './components/main.js';
import SinglePhoto from './components/singlePhoto.js';
import PhotoGrid from './components/photoGrid';

//import React router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view:postId" component={SinglePhoto}></Route>
    </Route>
  </Router>
);

// Main render method for React component
render(
  router,
  document.getElementById('root')
);