import React from 'react';
import CommentList from './comment-list.jsx';
import CommentForm from './comment-form.jsx';

export default class CommentBox extends React.Component {

    render() {
        return <div className="commentBox">
            <h1>Comments</h1>
            <CommentList />
            <CommentForm />
        </div>
    }
}