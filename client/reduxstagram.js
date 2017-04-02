import React from 'react';
import {render} from 'react-dom';

// import css
import css from './styles/style.styl';
import Main from './components/main.js';

// Main render method for React component
render(
  <Main />,
  document.getElementById('root')
);