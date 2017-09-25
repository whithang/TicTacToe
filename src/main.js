console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(GameBoard), document.getElementById('app')
  );
});
