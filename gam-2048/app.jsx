import React from 'react';
import ReactDOM from 'react-dom';
import BoardView from './board-view.jsx';


ReactDOM.render(<BoardView url="./data.json"/>, document.querySelector('.root'));