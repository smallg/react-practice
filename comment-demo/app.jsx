import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment-box.jsx';


ReactDOM.render(<CommentBox url="./comments.json"/>, document.querySelector('.root'));