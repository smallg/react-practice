import React from 'react';
import CommentList from './comment-list.jsx';
import CommentForm from './comment-form.jsx';
import $ from 'jquery';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        })
    }

    handleCommentSubmit(comment) {
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function (data) {
                this.setState({data: newComments});
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({data: comments});
            }.bind(this)
        });
    }

    render() {
        return <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        </div>
    }
}